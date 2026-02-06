#!/usr/bin/env python3

import requests
import sys
import json
from datetime import datetime

class VeriTrustAPITester:
    def __init__(self, base_url="https://trust-id-visuals.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.failed_tests = []

    def run_test(self, name, method, endpoint, expected_status, data=None, timeout=30):
        """Run a single API test"""
        url = f"{self.base_url}/api/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=timeout)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=timeout)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"   Response: {json.dumps(response_data, indent=2)[:200]}...")
                except:
                    print(f"   Response: {response.text[:200]}...")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text[:200]}...")
                self.failed_tests.append({
                    'name': name,
                    'expected': expected_status,
                    'actual': response.status_code,
                    'response': response.text[:200]
                })

            return success, response.json() if success and response.text else {}

        except requests.exceptions.Timeout:
            print(f"❌ Failed - Request timeout after {timeout}s")
            self.failed_tests.append({
                'name': name,
                'error': f'Timeout after {timeout}s'
            })
            return False, {}
        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.failed_tests.append({
                'name': name,
                'error': str(e)
            })
            return False, {}

    def test_root_endpoint(self):
        """Test root API endpoint"""
        return self.run_test("Root API", "GET", "", 200)

    def test_brand_colors(self):
        """Test brand colors endpoint"""
        success, response = self.run_test("Brand Colors", "GET", "brand-colors", 200)
        if success:
            # Validate response structure
            required_keys = ['primary', 'secondary', 'background', 'text', 'accent']
            for key in required_keys:
                if key not in response:
                    print(f"⚠️  Warning: Missing key '{key}' in brand colors response")
                    return False
            print("✅ Brand colors structure validated")
        return success

    def test_brand_typography(self):
        """Test brand typography endpoint"""
        success, response = self.run_test("Brand Typography", "GET", "brand-typography", 200)
        if success:
            # Validate response structure
            if 'fonts' not in response or 'scale' not in response:
                print("⚠️  Warning: Missing 'fonts' or 'scale' in typography response")
                return False
            print("✅ Brand typography structure validated")
        return success

    def test_status_endpoints(self):
        """Test status check endpoints"""
        # Test POST status
        test_data = {"client_name": f"test_client_{datetime.now().strftime('%H%M%S')}"}
        success_post, response = self.run_test("Create Status Check", "POST", "status", 200, test_data)
        
        # Test GET status
        success_get, _ = self.run_test("Get Status Checks", "GET", "status", 200)
        
        return success_post and success_get

    def test_ai_image_generation(self):
        """Test AI image generation endpoint (with longer timeout)"""
        test_data = {
            "prompt": "Abstract security shield with neon green accents",
            "style": "abstract"
        }
        success, response = self.run_test(
            "AI Image Generation", 
            "POST", 
            "generate-image", 
            200, 
            test_data, 
            timeout=70  # Longer timeout for AI generation
        )
        
        if success:
            if 'image_base64' not in response:
                print("⚠️  Warning: Missing 'image_base64' in AI generation response")
                return False
            print("✅ AI image generation successful")
        return success

    def test_generated_assets(self):
        """Test generated assets endpoint"""
        return self.run_test("Generated Assets", "GET", "generated-assets", 200)

def main():
    print("🚀 Starting VeriTrust AI Backend API Tests")
    print("=" * 50)
    
    tester = VeriTrustAPITester()
    
    # Run all tests
    tests = [
        ("Root API", tester.test_root_endpoint),
        ("Brand Colors", tester.test_brand_colors),
        ("Brand Typography", tester.test_brand_typography),
        ("Status Endpoints", tester.test_status_endpoints),
        ("Generated Assets", tester.test_generated_assets),
        ("AI Image Generation", tester.test_ai_image_generation),  # Test this last due to timeout
    ]
    
    for test_name, test_func in tests:
        print(f"\n📋 Running {test_name} test...")
        try:
            test_func()
        except Exception as e:
            print(f"❌ Test {test_name} crashed: {str(e)}")
            tester.failed_tests.append({
                'name': test_name,
                'error': f'Test crashed: {str(e)}'
            })
    
    # Print results
    print("\n" + "=" * 50)
    print(f"📊 Test Results: {tester.tests_passed}/{tester.tests_run} passed")
    
    if tester.failed_tests:
        print("\n❌ Failed Tests:")
        for failure in tester.failed_tests:
            print(f"   - {failure['name']}: {failure.get('error', f\"Expected {failure.get('expected')}, got {failure.get('actual')}\")}")
    
    success_rate = (tester.tests_passed / tester.tests_run * 100) if tester.tests_run > 0 else 0
    print(f"\n📈 Success Rate: {success_rate:.1f}%")
    
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())