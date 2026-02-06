import React, { useState } from 'react';
import { Shield, Sun, Moon, Copy, Check, Fingerprint, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const BrandIdentitySection = () => {
  const [copiedColor, setCopiedColor] = useState(null);

  const copyToClipboard = (value, name) => {
    navigator.clipboard.writeText(value);
    setCopiedColor(name);
    toast.success(`${name} copied to clipboard!`);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const colors = {
    primary: [
      { name: 'Neon Green', hex: '#00FF94', usage: 'Primary actions, success states, accents' },
      { name: 'Green Hover', hex: '#00CC76', usage: 'Hover states, active elements' },
    ],
    secondary: [
      { name: 'Trust Blue', hex: '#3B82F6', usage: 'Secondary actions, links, info states' },
      { name: 'Blue Hover', hex: '#2563EB', usage: 'Hover states, focus states' },
    ],
    background: [
      { name: 'Deep Obsidian', hex: '#050A14', usage: 'Main background' },
      { name: 'Paper Dark', hex: '#0B1221', usage: 'Cards, elevated surfaces' },
      { name: 'Subtle Dark', hex: '#111827', usage: 'Borders, dividers' },
    ],
    text: [
      { name: 'Text Primary', hex: '#F8FAFC', usage: 'Headings, important text' },
      { name: 'Text Secondary', hex: '#94A3B8', usage: 'Body text, descriptions' },
      { name: 'Text Muted', hex: '#64748B', usage: 'Captions, labels' },
    ],
    accent: [
      { name: 'Error', hex: '#EF4444', usage: 'Error states, warnings' },
      { name: 'Warning', hex: '#F59E0B', usage: 'Warning states, alerts' },
      { name: 'Success', hex: '#10B981', usage: 'Success states, confirmations' },
    ],
  };

  const typography = [
    { 
      name: 'Outfit', 
      weight: 'Bold (700)', 
      usage: 'Headings, Display Text',
      sample: 'Stop Fraud Before It Happens',
      className: 'text-4xl md:text-5xl font-bold font-outfit'
    },
    { 
      name: 'Outfit', 
      weight: 'Semibold (600)', 
      usage: 'Section Titles',
      sample: 'AI-Powered Identity Verification',
      className: 'text-2xl md:text-3xl font-semibold font-outfit'
    },
    { 
      name: 'Inter', 
      weight: 'Regular (400)', 
      usage: 'Body Text, Paragraphs',
      sample: 'Enterprise-grade identity verification solutions trusted by leading banks and FinTechs worldwide.',
      className: 'text-base md:text-lg font-inter text-veritrust-text-secondary'
    },
    { 
      name: 'JetBrains Mono', 
      weight: 'Medium (500)', 
      usage: 'Captions, Labels, Code',
      sample: 'VERIFIED • 99.9% ACCURACY • REAL-TIME',
      className: 'text-sm font-mono uppercase tracking-wider text-veritrust-text-muted'
    },
  ];

  const logoVariations = [
    { 
      name: 'Primary Logo', 
      description: 'Full logo with icon and wordmark',
      bg: 'bg-veritrust-bg-dark',
      icon: <Shield className="w-8 h-8 text-veritrust-green" />,
      text: <span className="font-outfit font-bold text-xl">Veri<span className="text-veritrust-green">Trust</span> AI</span>
    },
    { 
      name: 'Light Mode', 
      description: 'For light backgrounds',
      bg: 'bg-white',
      icon: <Shield className="w-8 h-8 text-veritrust-bg-dark" />,
      text: <span className="font-outfit font-bold text-xl text-veritrust-bg-dark">Veri<span className="text-veritrust-green">Trust</span> AI</span>
    },
    { 
      name: 'Monogram', 
      description: 'Icon only for small spaces',
      bg: 'bg-veritrust-bg-paper',
      icon: <div className="w-12 h-12 rounded-xl bg-veritrust-green flex items-center justify-center"><Shield className="w-7 h-7 text-black" /></div>,
      text: null
    },
    { 
      name: 'Dark Mode', 
      description: 'For dark backgrounds',
      bg: 'bg-veritrust-bg-dark',
      icon: <Shield className="w-8 h-8 text-veritrust-green" />,
      text: <span className="font-outfit font-bold text-xl text-white">Veri<span className="text-veritrust-green">Trust</span> AI</span>
    },
  ];

  return (
    <div className="py-24 relative" data-testid="brand-identity-section">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-2 rounded-full bg-veritrust-green/10 border border-veritrust-green/30 text-sm font-mono text-veritrust-green uppercase tracking-wider mb-4">
            Brand Identity System
          </span>
          <h2 className="section-heading mb-4">Visual Language</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            A cohesive design system built for trust, innovation, and enterprise-grade experiences.
          </p>
        </div>

        {/* Tabs for Brand Elements */}
        <Tabs defaultValue="logos" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent mb-12" data-testid="brand-tabs">
            <TabsTrigger 
              value="logos" 
              className="px-6 py-3 rounded-full data-[state=active]:bg-veritrust-green data-[state=active]:text-black text-veritrust-text-secondary hover:text-white transition-colors"
              data-testid="tab-logos"
            >
              Logos
            </TabsTrigger>
            <TabsTrigger 
              value="colors" 
              className="px-6 py-3 rounded-full data-[state=active]:bg-veritrust-green data-[state=active]:text-black text-veritrust-text-secondary hover:text-white transition-colors"
              data-testid="tab-colors"
            >
              Colors
            </TabsTrigger>
            <TabsTrigger 
              value="typography" 
              className="px-6 py-3 rounded-full data-[state=active]:bg-veritrust-green data-[state=active]:text-black text-veritrust-text-secondary hover:text-white transition-colors"
              data-testid="tab-typography"
            >
              Typography
            </TabsTrigger>
            <TabsTrigger 
              value="iconography" 
              className="px-6 py-3 rounded-full data-[state=active]:bg-veritrust-green data-[state=active]:text-black text-veritrust-text-secondary hover:text-white transition-colors"
              data-testid="tab-iconography"
            >
              Iconography
            </TabsTrigger>
          </TabsList>

          {/* Logos Tab */}
          <TabsContent value="logos" className="animate-fade-in-up">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {logoVariations.map((logo, idx) => (
                <div 
                  key={idx}
                  className="glass-card overflow-hidden group"
                  data-testid={`logo-${idx}`}
                >
                  <div className={`${logo.bg} p-12 flex items-center justify-center gap-3 min-h-[160px]`}>
                    {logo.icon}
                    {logo.text}
                  </div>
                  <div className="p-4 border-t border-white/10">
                    <h4 className="font-outfit font-semibold text-white">{logo.name}</h4>
                    <p className="text-sm text-veritrust-text-muted">{logo.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Logo Guidelines */}
            <div className="mt-12 glass-card p-8">
              <h3 className="text-xl font-outfit font-semibold text-white mb-6">Logo Usage Guidelines</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-veritrust-green font-medium mb-3">Do</h4>
                  <ul className="space-y-2 text-veritrust-text-secondary">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-veritrust-green mt-1 shrink-0" />
                      <span>Use official logo files from the brand kit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-veritrust-green mt-1 shrink-0" />
                      <span>Maintain minimum clear space around the logo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-veritrust-green mt-1 shrink-0" />
                      <span>Use monogram for small sizes (under 24px)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-red-400 font-medium mb-3">Don't</h4>
                  <ul className="space-y-2 text-veritrust-text-secondary">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">✕</span>
                      <span>Stretch, rotate, or distort the logo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">✕</span>
                      <span>Change the logo colors outside brand palette</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">✕</span>
                      <span>Add effects like shadows or gradients</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Colors Tab */}
          <TabsContent value="colors" className="animate-fade-in-up">
            <div className="space-y-12">
              {Object.entries(colors).map(([category, colorList]) => (
                <div key={category}>
                  <h3 className="text-xl font-outfit font-semibold text-white capitalize mb-6">
                    {category.replace(/([A-Z])/g, ' $1').trim()} Colors
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {colorList.map((color, idx) => (
                      <div 
                        key={idx}
                        className="glass-card overflow-hidden group cursor-pointer hover:border-veritrust-green/50 transition-all"
                        onClick={() => copyToClipboard(color.hex, color.name)}
                        data-testid={`color-${category}-${idx}`}
                      >
                        <div 
                          className="h-24 relative"
                          style={{ backgroundColor: color.hex }}
                        >
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50">
                            {copiedColor === color.name ? (
                              <Check className="w-6 h-6 text-white" />
                            ) : (
                              <Copy className="w-5 h-5 text-white" />
                            )}
                          </div>
                        </div>
                        <div className="p-3">
                          <p className="font-medium text-white text-sm">{color.name}</p>
                          <p className="font-mono text-xs text-veritrust-text-muted">{color.hex}</p>
                          <p className="text-xs text-veritrust-text-muted mt-1 line-clamp-2">{color.usage}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Typography Tab */}
          <TabsContent value="typography" className="animate-fade-in-up">
            <div className="space-y-8">
              {typography.map((type, idx) => (
                <div 
                  key={idx}
                  className="glass-card p-8"
                  data-testid={`typography-${idx}`}
                >
                  <div className="flex flex-wrap gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full bg-veritrust-green/10 text-veritrust-green text-sm font-mono">
                      {type.name}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-veritrust-text-secondary text-sm">
                      {type.weight}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-veritrust-blue/10 text-veritrust-blue text-sm">
                      {type.usage}
                    </span>
                  </div>
                  <p className={type.className}>{type.sample}</p>
                </div>
              ))}
            </div>

            {/* Font Import */}
            <div className="mt-8 glass-card p-6">
              <h4 className="font-outfit font-semibold text-white mb-3">Font Import</h4>
              <div className="bg-veritrust-bg-dark rounded-lg p-4 font-mono text-sm text-veritrust-text-secondary overflow-x-auto">
                <code>
                  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&family=Outfit:wght@400;500;700;900&display=swap');
                </code>
              </div>
            </div>
          </TabsContent>

          {/* Iconography Tab */}
          <TabsContent value="iconography" className="animate-fade-in-up">
            <div className="glass-card p-8">
              <h3 className="text-xl font-outfit font-semibold text-white mb-6">Icon Style Guide</h3>
              <p className="text-veritrust-text-secondary mb-8">
                VeriTrust AI uses Lucide React icons with a consistent stroke width and style. Icons should be minimal, geometric, and convey trust and security.
              </p>
              
              {/* Icon Examples */}
              <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-8">
                {[
                  { icon: Shield, name: 'Security' },
                  { icon: Fingerprint, name: 'Biometric' },
                  { icon: Eye, name: 'Monitoring' },
                  { icon: Check, name: 'Verified' },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 hover:bg-veritrust-green/10 transition-colors">
                    <item.icon className="w-6 h-6 text-veritrust-green" />
                    <span className="text-xs text-veritrust-text-muted">{item.name}</span>
                  </div>
                ))}
              </div>

              {/* Icon Guidelines */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 rounded-lg bg-white/5">
                  <h4 className="font-medium text-white mb-2">Size</h4>
                  <p className="text-sm text-veritrust-text-muted">Use 24px for standard icons, 16px for inline, 32px+ for feature highlights</p>
                </div>
                <div className="p-4 rounded-lg bg-white/5">
                  <h4 className="font-medium text-white mb-2">Color</h4>
                  <p className="text-sm text-veritrust-text-muted">Primary: Neon Green. Secondary: Text colors. Never use gradients.</p>
                </div>
                <div className="p-4 rounded-lg bg-white/5">
                  <h4 className="font-medium text-white mb-2">Style</h4>
                  <p className="text-sm text-veritrust-text-muted">2px stroke width, rounded corners, consistent padding</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BrandIdentitySection;
