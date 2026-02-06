import React, { useState } from 'react';
import { Sparkles, ArrowRight, RefreshCw, Wand2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL;

const AIWorkflowSection = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [selectedPrompt, setSelectedPrompt] = useState(0);

  const prompts = [
    {
      title: "Abstract Security Shield",
      prompt: "Abstract geometric security shield with digital circuit patterns, neon green energy flowing through geometric shapes, dark background with subtle grid",
      style: "abstract"
    },
    {
      title: "AI Face Recognition",
      prompt: "Futuristic face recognition interface with scanning grid overlay, biometric data points, holographic display elements, dark blue and green color scheme",
      style: "futuristic"
    },
    {
      title: "Digital Identity Network",
      prompt: "Network of interconnected digital identity nodes, abstract representation of secure data flow, minimalist style with green accent lines on dark background",
      style: "minimalist"
    },
    {
      title: "Fraud Detection Dashboard",
      prompt: "Sleek dashboard interface showing real-time fraud detection analytics, data visualization with charts and alerts, modern SaaS aesthetic",
      style: "realistic"
    },
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Prompt Engineering',
      description: 'Craft detailed prompts with brand guidelines, color palette, and style specifications.',
      detail: 'Include specific keywords: "professional SaaS", "minimal", "deep blue and neon green accents"'
    },
    {
      step: '02',
      title: 'AI Generation',
      description: 'Use OpenAI GPT Image 1 to generate high-quality, realistic visuals.',
      detail: 'Multiple iterations may be needed to achieve the desired quality and brand alignment.'
    },
    {
      step: '03',
      title: 'Refinement',
      description: 'Post-process and refine the raw AI output to match brand standards.',
      detail: 'Adjust colors, add typography, and ensure consistency with brand guidelines.'
    },
    {
      step: '04',
      title: 'Integration',
      description: 'Export in multiple formats and integrate into marketing materials.',
      detail: 'Create variations for different platforms: web, social, print.'
    },
  ];

  const generateImage = async () => {
    setIsGenerating(true);
    toast.info('Generating image... This may take up to 60 seconds.', { duration: 10000 });
    
    try {
      const response = await axios.post(`${API_URL}/api/generate-image`, {
        prompt: prompts[selectedPrompt].prompt,
        style: prompts[selectedPrompt].style
      }, {
        timeout: 90000 // 90 second timeout for AI generation
      });
      
      if (response.data && response.data.image_base64) {
        setGeneratedImage(response.data.image_base64);
        toast.success('Image generated successfully!');
      } else {
        throw new Error('No image data received');
      }
    } catch (error) {
      console.error('Generation error:', error);
      const errorMessage = error.response?.data?.detail || error.message || 'Unknown error';
      if (error.code === 'ECONNABORTED') {
        toast.error('Generation timed out. Please try again with a simpler prompt.');
      } else {
        toast.error(`Generation failed: ${errorMessage}`);
      }
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="py-24 relative" data-testid="ai-workflow-section">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-veritrust-blue/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-sm font-mono text-purple-400 uppercase tracking-wider mb-4">
            AI-Assisted Design
          </span>
          <h2 className="section-heading mb-4">Design Workflow</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Explore our AI-powered design process from prompt to polished brand asset.
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {workflowSteps.map((step, idx) => (
            <div 
              key={idx}
              className="glass-card p-6 relative group"
              data-testid={`workflow-step-${idx}`}
            >
              {/* Step Number */}
              <div className="text-5xl font-outfit font-bold text-white/10 absolute top-4 right-4">
                {step.step}
              </div>
              
              {/* Content */}
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-veritrust-green/10 flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-veritrust-green" />
                </div>
                <h3 className="font-outfit font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-veritrust-text-secondary mb-3">{step.description}</p>
                <p className="text-xs text-veritrust-text-muted">{step.detail}</p>
              </div>

              {/* Connector */}
              {idx < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-veritrust-green/30" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Interactive AI Generation Demo */}
        <div className="glass-card overflow-hidden">
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-veritrust-green/10">
                <Wand2 className="w-5 h-5 text-veritrust-green" />
              </div>
              <div>
                <h3 className="font-outfit font-semibold text-white">AI Image Generation</h3>
                <p className="text-sm text-veritrust-text-muted">Generate brand visuals with GPT Image 1</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2">
            {/* Prompt Selection */}
            <div className="p-6 border-r border-white/10">
              <h4 className="font-medium text-white mb-4">Select a Prompt</h4>
              <div className="space-y-3">
                {prompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedPrompt(idx)}
                    className={`w-full p-4 rounded-xl text-left transition-all ${
                      selectedPrompt === idx
                        ? 'bg-veritrust-green/10 border border-veritrust-green/50'
                        : 'bg-white/5 border border-white/10 hover:border-white/20'
                    }`}
                    data-testid={`prompt-${idx}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-white">{prompt.title}</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-veritrust-text-muted">
                        {prompt.style}
                      </span>
                    </div>
                    <p className="text-sm text-veritrust-text-muted line-clamp-2">
                      {prompt.prompt}
                    </p>
                  </button>
                ))}
              </div>

              <Button
                onClick={generateImage}
                disabled={isGenerating}
                className="btn-primary w-full mt-6"
                data-testid="generate-btn"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Generate Image
                  </>
                )}
              </Button>
            </div>

            {/* Output Preview */}
            <div className="p-6">
              <h4 className="font-medium text-white mb-4">Generated Output</h4>
              <div className="aspect-square rounded-xl border border-white/10 bg-veritrust-bg-paper overflow-hidden flex items-center justify-center">
                {generatedImage ? (
                  <img 
                    src={`data:image/png;base64,${generatedImage}`}
                    alt="AI Generated Visual"
                    className="w-full h-full object-cover"
                    data-testid="generated-image"
                  />
                ) : isGenerating ? (
                  <div className="text-center">
                    <Loader2 className="w-12 h-12 text-veritrust-green animate-spin mx-auto mb-4" />
                    <p className="text-veritrust-text-secondary">Generating your image...</p>
                    <p className="text-xs text-veritrust-text-muted mt-2">This may take up to 60 seconds</p>
                  </div>
                ) : (
                  <div className="text-center p-8">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="w-8 h-8 text-veritrust-text-muted" />
                    </div>
                    <p className="text-veritrust-text-secondary">Select a prompt and click generate</p>
                    <p className="text-xs text-veritrust-text-muted mt-2">AI will create a brand-aligned visual</p>
                  </div>
                )}
              </div>

              {generatedImage && (
                <div className="mt-4 flex gap-2">
                  <Button
                    onClick={generateImage}
                    disabled={isGenerating}
                    className="btn-secondary flex-1"
                    data-testid="regenerate-btn"
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Regenerate
                  </Button>
                  <Button
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = `data:image/png;base64,${generatedImage}`;
                      link.download = 'veritrust-ai-generated.png';
                      link.click();
                      toast.success('Image downloaded!');
                    }}
                    className="btn-primary flex-1"
                    data-testid="download-generated-btn"
                  >
                    Download PNG
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Before/After Showcase */}
        <div className="mt-16">
          <h3 className="text-xl font-outfit font-semibold text-white mb-6 text-center">Raw to Refined</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Raw AI Output', desc: 'Direct output from GPT Image 1', stage: 'raw' },
              { title: 'Color Correction', desc: 'Adjusted to brand palette', stage: 'corrected' },
              { title: 'Final Asset', desc: 'With typography and effects', stage: 'final' },
            ].map((item, idx) => (
              <div key={idx} className="glass-card overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-veritrust-bg-paper to-veritrust-bg-dark flex items-center justify-center relative">
                  <div className="absolute inset-0 grid-pattern opacity-30" />
                  <div className={`w-24 h-24 rounded-2xl flex items-center justify-center ${
                    item.stage === 'raw' ? 'bg-gray-500/20 border border-gray-500/30' :
                    item.stage === 'corrected' ? 'bg-veritrust-green/20 border border-veritrust-green/30' :
                    'bg-gradient-to-br from-veritrust-green/30 to-veritrust-blue/30 border border-veritrust-green/50 neon-glow'
                  }`}>
                    <Sparkles className={`w-10 h-10 ${
                      item.stage === 'raw' ? 'text-gray-400' :
                      item.stage === 'corrected' ? 'text-veritrust-green/70' :
                      'text-veritrust-green'
                    }`} />
                  </div>
                  {idx < 2 && (
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 hidden md:block">
                      <ArrowRight className="w-6 h-6 text-veritrust-green" />
                    </div>
                  )}
                </div>
                <div className="p-4 border-t border-white/10">
                  <h4 className="font-medium text-white">{item.title}</h4>
                  <p className="text-sm text-veritrust-text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIWorkflowSection;
