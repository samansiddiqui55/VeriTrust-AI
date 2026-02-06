from fastapi import FastAPI, APIRouter, HTTPException
from fastapi.responses import Response
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import base64
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class ImageGenerationRequest(BaseModel):
    prompt: str
    style: Optional[str] = "realistic"

class ImageGenerationResponse(BaseModel):
    image_base64: str
    prompt: str

class GeneratedAsset(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    asset_type: str
    prompt: str
    image_base64: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "VeriTrust AI Backend API"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

@api_router.post("/generate-image", response_model=ImageGenerationResponse)
async def generate_ai_image(request: ImageGenerationRequest):
    """Generate AI image using OpenAI GPT Image 1"""
    try:
        from emergentintegrations.llm.openai.image_generation import OpenAIImageGeneration
        
        api_key = os.environ.get('EMERGENT_LLM_KEY')
        if not api_key:
            raise HTTPException(status_code=500, detail="EMERGENT_LLM_KEY not configured")
        
        image_gen = OpenAIImageGeneration(api_key=api_key)
        
        # Enhanced prompt for professional SaaS visuals
        enhanced_prompt = f"""Professional, high-quality {request.style} style image for VeriTrust AI FinTech company: {request.prompt}. 
        Style: Modern SaaS, enterprise-grade, clean, minimal, trustworthy. 
        Colors: Deep blue, neon green accents, white. 
        No text or logos in the image."""
        
        images = await image_gen.generate_images(
            prompt=enhanced_prompt,
            model="gpt-image-1",
            number_of_images=1
        )
        
        if images and len(images) > 0:
            image_base64 = base64.b64encode(images[0]).decode('utf-8')
            
            # Store in database
            asset = GeneratedAsset(
                asset_type="ai_generated",
                prompt=request.prompt,
                image_base64=image_base64
            )
            doc = asset.model_dump()
            doc['created_at'] = doc['created_at'].isoformat()
            await db.generated_assets.insert_one(doc)
            
            return ImageGenerationResponse(
                image_base64=image_base64,
                prompt=request.prompt
            )
        else:
            raise HTTPException(status_code=500, detail="No image was generated")
            
    except ImportError:
        raise HTTPException(status_code=500, detail="emergentintegrations library not installed")
    except Exception as e:
        logger.error(f"Image generation error: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Image generation failed: {str(e)}")

@api_router.get("/generated-assets")
async def get_generated_assets():
    """Get all generated AI assets"""
    assets = await db.generated_assets.find({}, {"_id": 0}).to_list(100)
    return assets

@api_router.get("/brand-colors")
async def get_brand_colors():
    """Get VeriTrust AI brand colors"""
    return {
        "primary": {
            "main": "#00FF94",
            "hover": "#00CC76",
            "foreground": "#000000",
            "name": "Neon Green"
        },
        "secondary": {
            "main": "#3B82F6",
            "hover": "#2563EB",
            "foreground": "#FFFFFF",
            "name": "Trust Blue"
        },
        "background": {
            "default": "#050A14",
            "paper": "#0B1221",
            "subtle": "#111827",
            "name": "Deep Obsidian"
        },
        "text": {
            "primary": "#F8FAFC",
            "secondary": "#94A3B8",
            "muted": "#64748B"
        },
        "accent": {
            "error": "#EF4444",
            "warning": "#F59E0B",
            "success": "#10B981"
        }
    }

@api_router.get("/brand-typography")
async def get_brand_typography():
    """Get VeriTrust AI typography system"""
    return {
        "fonts": {
            "primary": "Outfit",
            "secondary": "Inter",
            "mono": "JetBrains Mono"
        },
        "scale": {
            "h1": {"size": "72px", "weight": "700", "tracking": "-0.02em"},
            "h2": {"size": "48px", "weight": "600", "tracking": "-0.01em"},
            "h3": {"size": "32px", "weight": "500", "tracking": "0"},
            "body": {"size": "18px", "weight": "400", "tracking": "0"},
            "caption": {"size": "14px", "weight": "500", "tracking": "0.05em"}
        }
    }

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
