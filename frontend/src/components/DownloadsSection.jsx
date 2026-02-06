import React from 'react';
import { Download, FileText, Image, Palette, Type, Package, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const DownloadsSection = () => {
  const downloadAssets = [
    {
      title: 'Logo Pack',
      description: 'Primary logo, monogram, and all variations in PNG, SVG formats',
      icon: Image,
      files: ['logo-primary.svg', 'logo-monogram.svg', 'logo-light.svg', 'logo-dark.svg'],
      type: 'logos'
    },
    {
      title: 'Brand Colors',
      description: 'Complete color palette with HEX, RGB, and HSL values',
      icon: Palette,
      files: ['color-palette.json', 'colors.css', 'tailwind-colors.js'],
      type: 'colors'
    },
    {
      title: 'Typography',
      description: 'Font files and typography guidelines',
      icon: Type,
      files: ['typography-guide.pdf', 'font-import.css'],
      type: 'typography'
    },
    {
      title: 'Brand Guidelines PDF',
      description: 'Complete brand guidelines document',
      icon: FileText,
      files: ['VeriTrust-AI-Brand-Guidelines.pdf'],
      type: 'guidelines',
      featured: true
    },
    {
      title: 'Social Media Kit',
      description: 'Templates for LinkedIn, Twitter, and email campaigns',
      icon: Package,
      files: ['linkedin-carousel.pptx', 'social-banners.zip', 'email-templates.zip'],
      type: 'social'
    },
    {
      title: 'Figma Source Files',
      description: 'Complete Figma file with all components and designs',
      icon: ExternalLink,
      files: ['VeriTrust-AI-Design-System.fig'],
      type: 'figma',
      external: true
    },
  ];

  const handleDownload = (asset) => {
    // Generate downloadable content based on asset type
    let content = '';
    let filename = '';
    let mimeType = 'text/plain';

    switch (asset.type) {
      case 'colors':
        content = JSON.stringify({
          brand: "VeriTrust AI",
          version: "1.0",
          colors: {
            primary: { main: "#00FF94", hover: "#00CC76", foreground: "#000000" },
            secondary: { main: "#3B82F6", hover: "#2563EB", foreground: "#FFFFFF" },
            background: { default: "#050A14", paper: "#0B1221", subtle: "#111827" },
            text: { primary: "#F8FAFC", secondary: "#94A3B8", muted: "#64748B" },
            accent: { error: "#EF4444", warning: "#F59E0B", success: "#10B981" }
          }
        }, null, 2);
        filename = 'veritrust-colors.json';
        mimeType = 'application/json';
        break;

      case 'typography':
        content = `/* VeriTrust AI Typography */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&family=Outfit:wght@400;500;700;900&display=swap');

:root {
  --font-primary: 'Outfit', sans-serif;
  --font-secondary: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}

/* Typography Scale */
.heading-1 { font-family: var(--font-primary); font-size: 72px; font-weight: 700; letter-spacing: -0.02em; }
.heading-2 { font-family: var(--font-primary); font-size: 48px; font-weight: 600; letter-spacing: -0.01em; }
.heading-3 { font-family: var(--font-primary); font-size: 32px; font-weight: 500; }
.body { font-family: var(--font-secondary); font-size: 18px; font-weight: 400; }
.caption { font-family: var(--font-mono); font-size: 14px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; }
`;
        filename = 'veritrust-typography.css';
        mimeType = 'text/css';
        break;

      case 'guidelines':
        content = `VERITRUST AI BRAND GUIDELINES
==============================

Version 1.0 | ${new Date().toLocaleDateString()}

TABLE OF CONTENTS
-----------------
1. Brand Identity
2. Logo Usage
3. Color Palette
4. Typography
5. Iconography
6. Voice & Tone
7. Application Examples

1. BRAND IDENTITY
-----------------
Mission: Stop Fraud Before It Happens
Vision: Enterprise-grade identity verification powered by next-gen AI
Values: Trust, Innovation, Security, Precision

2. LOGO USAGE
-------------
Primary Logo: Full wordmark with shield icon
Monogram: Shield icon only for small applications
Clear Space: Minimum 20% of logo height on all sides
Minimum Size: 24px for digital, 10mm for print

3. COLOR PALETTE
----------------
Primary Colors:
- Neon Green: #00FF94 (Primary actions, success)
- Trust Blue: #3B82F6 (Secondary actions, links)

Background Colors:
- Deep Obsidian: #050A14 (Main background)
- Paper Dark: #0B1221 (Cards, surfaces)
- Subtle Dark: #111827 (Borders)

Text Colors:
- Primary: #F8FAFC
- Secondary: #94A3B8
- Muted: #64748B

4. TYPOGRAPHY
-------------
Primary Font: Outfit (Headings)
Secondary Font: Inter (Body)
Monospace: JetBrains Mono (Code, labels)

5. ICONOGRAPHY
--------------
Style: Lucide React icons
Stroke: 2px
Corners: Rounded
Color: Match text hierarchy

6. VOICE & TONE
---------------
Professional, trustworthy, innovative
Technical but accessible
Confident without being aggressive
Focus on solutions and outcomes

7. APPLICATION EXAMPLES
-----------------------
- Website: Dark theme with neon green accents
- Marketing: Bold typography, minimal graphics
- Social: Consistent brand elements across platforms
- Email: Clean layouts with clear CTAs

---
© ${new Date().getFullYear()} VeriTrust AI. All rights reserved.
`;
        filename = 'VeriTrust-AI-Brand-Guidelines.txt';
        mimeType = 'text/plain';
        break;

      case 'logos':
        // SVG Logo
        content = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#00FF94"/>
      <stop offset="100%" style="stop-color:#3B82F6"/>
    </linearGradient>
  </defs>
  <rect x="5" y="10" width="30" height="30" rx="6" fill="#00FF94"/>
  <path d="M20 17 L20 33 M13 25 L27 25" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <text x="45" y="32" font-family="Outfit, sans-serif" font-size="24" font-weight="700" fill="#F8FAFC">Veri</text>
  <text x="88" y="32" font-family="Outfit, sans-serif" font-size="24" font-weight="700" fill="#00FF94">Trust</text>
  <text x="150" y="32" font-family="Outfit, sans-serif" font-size="24" font-weight="700" fill="#F8FAFC">AI</text>
</svg>`;
        filename = 'veritrust-logo.svg';
        mimeType = 'image/svg+xml';
        break;

      default:
        toast.info('This asset pack is available for download');
        return;
    }

    // Create and trigger download
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    toast.success(`Downloaded ${filename}`);
  };

  return (
    <div className="py-24 relative" data-testid="downloads-section">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-veritrust-green/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-2 rounded-full bg-veritrust-green/10 border border-veritrust-green/30 text-sm font-mono text-veritrust-green uppercase tracking-wider mb-4">
            Brand Kit
          </span>
          <h2 className="section-heading mb-4">Download Assets</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Access the complete VeriTrust AI brand kit including logos, colors, typography, and guidelines.
          </p>
        </div>

        {/* Download Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {downloadAssets.map((asset, idx) => (
            <div 
              key={idx}
              className={`download-card group ${asset.featured ? 'lg:col-span-2 md:col-span-2' : ''}`}
              data-testid={`download-${asset.type}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl ${asset.featured ? 'bg-veritrust-green/20' : 'bg-white/10'}`}>
                  <asset.icon className={`w-6 h-6 ${asset.featured ? 'text-veritrust-green' : 'text-veritrust-text-secondary'}`} />
                </div>
                {asset.featured && (
                  <span className="px-3 py-1 rounded-full bg-veritrust-green/10 text-veritrust-green text-xs font-mono">
                    Featured
                  </span>
                )}
              </div>

              <h3 className="font-outfit font-semibold text-white text-xl mb-2">{asset.title}</h3>
              <p className="text-veritrust-text-secondary mb-4">{asset.description}</p>

              {/* File List */}
              <div className="space-y-2 mb-6">
                {asset.files.map((file, fileIdx) => (
                  <div key={fileIdx} className="flex items-center gap-2 text-sm text-veritrust-text-muted">
                    <div className="w-1.5 h-1.5 rounded-full bg-veritrust-green/50" />
                    <span className="font-mono">{file}</span>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => handleDownload(asset)}
                className={asset.featured ? 'btn-primary w-full' : 'btn-secondary w-full'}
                data-testid={`download-btn-${asset.type}`}
              >
                {asset.external ? (
                  <>
                    Open in Figma
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </>
                ) : (
                  <>
                    Download
                    <Download className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          ))}
        </div>

        {/* Quick Reference */}
        <div className="mt-16 glass-card p-8">
          <h3 className="font-outfit font-semibold text-white text-xl mb-6">Quick Reference</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Colors Quick Reference */}
            <div>
              <h4 className="text-sm font-mono text-veritrust-text-muted uppercase tracking-wider mb-4">Primary Colors</h4>
              <div className="space-y-3">
                {[
                  { name: 'Neon Green', hex: '#00FF94' },
                  { name: 'Trust Blue', hex: '#3B82F6' },
                  { name: 'Deep Obsidian', hex: '#050A14' },
                ].map((color, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div 
                      className="w-8 h-8 rounded-lg border border-white/10"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div>
                      <p className="text-sm text-white">{color.name}</p>
                      <p className="text-xs font-mono text-veritrust-text-muted">{color.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography Quick Reference */}
            <div>
              <h4 className="text-sm font-mono text-veritrust-text-muted uppercase tracking-wider mb-4">Typography</h4>
              <div className="space-y-3">
                <div>
                  <p className="font-outfit font-bold text-white">Outfit Bold</p>
                  <p className="text-xs text-veritrust-text-muted">Headings & Display</p>
                </div>
                <div>
                  <p className="font-inter text-white">Inter Regular</p>
                  <p className="text-xs text-veritrust-text-muted">Body Text</p>
                </div>
                <div>
                  <p className="font-mono text-white">JetBrains Mono</p>
                  <p className="text-xs text-veritrust-text-muted">Code & Labels</p>
                </div>
              </div>
            </div>

            {/* Logo Quick Reference */}
            <div>
              <h4 className="text-sm font-mono text-veritrust-text-muted uppercase tracking-wider mb-4">Logo</h4>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-veritrust-bg-dark border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-veritrust-green flex items-center justify-center">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <span className="font-outfit font-bold text-xl text-white">
                  Veri<span className="text-veritrust-green">Trust</span> AI
                </span>
              </div>
              <p className="text-xs text-veritrust-text-muted mt-2">Primary logo with shield monogram</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="glass-card p-12 relative overflow-hidden">
            <div className="absolute inset-0 hero-glow opacity-50" />
            <div className="relative">
              <h3 className="text-3xl font-outfit font-bold text-white mb-4">
                Ready to Build with VeriTrust AI?
              </h3>
              <p className="text-veritrust-text-secondary mb-8 max-w-xl mx-auto">
                Download the complete brand kit and start creating consistent, professional marketing materials.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  className="btn-primary"
                  onClick={() => handleDownload({ type: 'guidelines' })}
                  data-testid="download-all-btn"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Brand Kit
                </Button>
                <Button 
                  className="btn-outline"
                  onClick={() => document.getElementById('brand-identity').scrollIntoView({ behavior: 'smooth' })}
                >
                  View Brand Guidelines
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadsSection;
