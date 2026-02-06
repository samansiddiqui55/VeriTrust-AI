import React from 'react';
import { 
  Shield, 
  Fingerprint, 
  Eye, 
  FileCheck, 
  Brain, 
  Lock,
  Zap,
  Globe,
  BarChart3
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Fingerprint,
      title: 'AI Identity Verification',
      description: 'Advanced biometric verification using facial recognition, liveness detection, and document authentication powered by deep learning.',
      stats: '99.9% accuracy',
      highlight: true,
      span: 'lg:col-span-2'
    },
    {
      icon: Shield,
      title: 'Fraud Detection',
      description: 'Real-time fraud prevention using ML models that analyze behavioral patterns and transaction anomalies.',
      stats: '500ms response',
      highlight: false,
      span: ''
    },
    {
      icon: FileCheck,
      title: 'Digital KYC',
      description: 'Streamlined Know Your Customer processes with automated document verification and compliance checks.',
      stats: '120+ countries',
      highlight: false,
      span: ''
    },
    {
      icon: Eye,
      title: 'Liveness Detection',
      description: 'Anti-spoofing technology that ensures real-time human presence verification.',
      stats: '3D depth analysis',
      highlight: false,
      span: ''
    },
    {
      icon: Brain,
      title: 'Behavioral Analytics',
      description: 'ML-powered analysis of user behavior patterns to detect suspicious activities.',
      stats: 'Real-time scoring',
      highlight: false,
      span: ''
    },
    {
      icon: Lock,
      title: 'Data Security',
      description: 'Enterprise-grade encryption and SOC 2 Type II compliance for maximum data protection.',
      stats: 'SOC 2 certified',
      highlight: true,
      span: 'lg:col-span-2'
    },
  ];

  const capabilities = [
    { icon: Zap, label: 'Sub-second Verification', value: '<1s' },
    { icon: Globe, label: 'Global Coverage', value: '120+' },
    { icon: BarChart3, label: 'Accuracy Rate', value: '99.9%' },
    { icon: Shield, label: 'Fraud Blocked', value: '$2B+' },
  ];

  return (
    <div className="py-24 relative overflow-hidden" data-testid="features-section">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-veritrust-green/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-2 rounded-full bg-veritrust-blue/10 border border-veritrust-blue/30 text-sm font-mono text-veritrust-blue uppercase tracking-wider mb-4">
            Solutions
          </span>
          <h2 className="section-heading mb-4">AI-Powered Protection</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Comprehensive identity verification and fraud prevention solutions designed for enterprise-scale operations.
          </p>
        </div>

        {/* Capabilities Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {capabilities.map((cap, idx) => (
            <div 
              key={idx}
              className="stat-card text-center group hover:border-veritrust-green/30 transition-all"
              data-testid={`capability-${idx}`}
            >
              <cap.icon className="w-6 h-6 text-veritrust-green mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <p className="text-2xl font-bold text-white font-outfit">{cap.value}</p>
              <p className="text-xs text-veritrust-text-muted">{cap.label}</p>
            </div>
          ))}
        </div>

        {/* Features Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`feature-card ${feature.span} ${feature.highlight ? 'border-veritrust-green/30' : ''}`}
              data-testid={`feature-${idx}`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                feature.highlight 
                  ? 'bg-veritrust-green/20' 
                  : 'bg-white/10'
              }`}>
                <feature.icon className={`w-7 h-7 ${
                  feature.highlight 
                    ? 'text-veritrust-green' 
                    : 'text-veritrust-blue'
                }`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-outfit font-semibold text-white mb-3 group-hover:text-veritrust-green transition-colors">
                {feature.title}
              </h3>
              <p className="text-veritrust-text-secondary mb-4 leading-relaxed">
                {feature.description}
              </p>

              {/* Stats Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-veritrust-green" />
                <span className="text-xs font-mono text-veritrust-text-muted uppercase tracking-wider">
                  {feature.stats}
                </span>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-veritrust-green/5 to-transparent rounded-2xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Identity Verification Deep Dive */}
        <div className="mt-24">
          <div className="glass-card overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Left - Content */}
              <div className="p-12 flex flex-col justify-center">
                <span className="inline-block w-fit px-3 py-1 rounded-full bg-veritrust-green/10 text-veritrust-green text-sm font-mono uppercase tracking-wider mb-6">
                  Featured
                </span>
                <h3 className="text-3xl md:text-4xl font-outfit font-bold text-white mb-6">
                  AI Identity Verification
                </h3>
                <p className="text-veritrust-text-secondary mb-8 leading-relaxed">
                  Our flagship solution combines multiple verification layers including document OCR, facial recognition, liveness detection, and behavioral analysis to provide the most accurate identity verification in the industry.
                </p>

                {/* Verification Steps */}
                <div className="space-y-4">
                  {[
                    { step: '01', title: 'Document Upload', desc: 'Capture ID document with AI-guided positioning' },
                    { step: '02', title: 'Data Extraction', desc: 'OCR extracts and validates document information' },
                    { step: '03', title: 'Face Matching', desc: 'Compare selfie with document photo using AI' },
                    { step: '04', title: 'Liveness Check', desc: 'Ensure real human presence, not photo/video' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 group">
                      <span className="text-veritrust-green font-mono text-sm mt-1">{item.step}</span>
                      <div>
                        <h4 className="font-medium text-white group-hover:text-veritrust-green transition-colors">{item.title}</h4>
                        <p className="text-sm text-veritrust-text-muted">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Visual */}
              <div className="relative bg-veritrust-bg-paper p-8 flex items-center justify-center">
                <div className="absolute inset-0 hero-glow opacity-50" />
                <div className="relative w-full max-w-sm">
                  {/* Phone Mockup */}
                  <div className="aspect-[9/16] rounded-3xl border-4 border-white/10 bg-veritrust-bg-dark overflow-hidden shadow-2xl">
                    {/* Status Bar */}
                    <div className="h-8 bg-black flex items-center justify-center">
                      <div className="w-24 h-6 rounded-full bg-black" />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 space-y-6">
                      {/* Header */}
                      <div className="text-center">
                        <div className="w-12 h-12 rounded-xl bg-veritrust-green mx-auto mb-3 flex items-center justify-center">
                          <Shield className="w-6 h-6 text-black" />
                        </div>
                        <h4 className="font-outfit font-semibold text-white">VeriTrust</h4>
                        <p className="text-xs text-veritrust-text-muted">Identity Verification</p>
                      </div>

                      {/* Face Scan Area */}
                      <div className="aspect-square rounded-2xl border-2 border-dashed border-veritrust-green/50 flex items-center justify-center bg-veritrust-green/5 relative overflow-hidden">
                        <div className="absolute inset-4 border-2 border-veritrust-green rounded-xl animate-pulse" />
                        <Fingerprint className="w-16 h-16 text-veritrust-green/50" />
                      </div>

                      {/* Progress */}
                      <div>
                        <div className="flex justify-between text-xs text-veritrust-text-muted mb-2">
                          <span>Verifying...</span>
                          <span>78%</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full w-[78%] bg-veritrust-green rounded-full" />
                        </div>
                      </div>

                      {/* Action */}
                      <button className="w-full py-3 rounded-xl bg-veritrust-green text-black font-semibold text-sm">
                        Capture Selfie
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
