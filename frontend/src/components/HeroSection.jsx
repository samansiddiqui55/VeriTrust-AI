import React from 'react';
import { ArrowRight, Shield, Fingerprint, Eye, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const stats = [
    { value: '99.9%', label: 'Accuracy Rate' },
    { value: '<1s', label: 'Verification Time' },
    { value: '500M+', label: 'IDs Verified' },
    { value: '120+', label: 'Countries' },
  ];

  const trustedBy = [
    'HDFC Bank', 'ICICI', 'Axis Bank', 'Kotak', 'SBI', 'Yes Bank', 'PayTM', 'PhonePe'
  ];

  return (
    <div className="hero-section relative min-h-screen flex flex-col" data-testid="hero-section">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      
      {/* Hero Glow Effect */}
      <div className="absolute inset-0 hero-glow" />

      {/* Main Hero Content */}
      <div className="relative flex-1 flex items-center pt-24">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-veritrust-green/10 border border-veritrust-green/30">
                <span className="w-2 h-2 rounded-full bg-veritrust-green animate-pulse" />
                <span className="text-sm font-medium text-veritrust-green font-mono uppercase tracking-wider">
                  AI-Powered Identity Verification
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none font-outfit">
                <span className="text-white">Stop Fraud</span>
                <br />
                <span className="text-gradient">Before It Happens</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-veritrust-text-secondary leading-relaxed max-w-xl">
                Enterprise-grade identity verification, fraud detection, and digital KYC solutions powered by next-generation AI. Trusted by leading banks and FinTechs.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Button 
                  data-testid="hero-cta-primary"
                  className="btn-primary flex items-center gap-2"
                  onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Solutions
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button 
                  data-testid="hero-cta-secondary"
                  className="btn-outline"
                  onClick={() => document.getElementById('brand-identity').scrollIntoView({ behavior: 'smooth' })}
                >
                  View Brand Identity
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                {[
                  { icon: Shield, text: 'Enterprise Security' },
                  { icon: CheckCircle2, text: 'SOC 2 Compliant' },
                  { icon: Eye, text: 'Real-time Monitoring' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-veritrust-text-muted text-sm">
                    <item.icon className="w-4 h-4 text-veritrust-green" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Visual */}
            <div className="relative animate-fade-in-up animate-delay-200">
              <div className="relative">
                {/* Main Visual Card */}
                <div className="glass-card p-8 relative overflow-hidden">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-veritrust-green/20 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-veritrust-blue/20 rounded-full blur-2xl" />
                  
                  {/* Identity Verification Visual */}
                  <div className="relative space-y-6">
                    {/* Face Scan Simulation */}
                    <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-veritrust-bg-paper">
                      <img 
                        src="https://images.unsplash.com/photo-1689103722266-1f2f837145e7?crop=entropy&cs=srgb&fm=jpg&q=85&w=800"
                        alt="AI Face Verification"
                        className="w-full h-full object-cover opacity-70"
                      />
                      {/* Scan Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-veritrust-bg-dark/80 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 border-2 border-veritrust-green rounded-lg animate-pulse-glow flex items-center justify-center">
                          <Fingerprint className="w-12 h-12 text-veritrust-green" />
                        </div>
                      </div>
                      {/* Status Badge */}
                      <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-veritrust-green/20 border border-veritrust-green/50">
                        <span className="w-2 h-2 rounded-full bg-veritrust-green animate-pulse" />
                        <span className="text-xs font-mono text-veritrust-green uppercase">Verifying</span>
                      </div>
                    </div>

                    {/* Verification Steps */}
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { label: 'Document', status: 'complete' },
                        { label: 'Face Match', status: 'active' },
                        { label: 'Liveness', status: 'pending' },
                      ].map((step, idx) => (
                        <div 
                          key={idx}
                          className={`p-3 rounded-lg text-center ${
                            step.status === 'complete' 
                              ? 'bg-veritrust-green/10 border border-veritrust-green/30' 
                              : step.status === 'active'
                              ? 'bg-veritrust-blue/10 border border-veritrust-blue/30 animate-pulse'
                              : 'bg-white/5 border border-white/10'
                          }`}
                        >
                          <p className={`text-xs font-mono uppercase ${
                            step.status === 'complete' ? 'text-veritrust-green' : 
                            step.status === 'active' ? 'text-veritrust-blue' : 'text-veritrust-text-muted'
                          }`}>
                            {step.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Stats Card */}
                <div className="absolute -bottom-6 -left-6 glass-card p-4 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-veritrust-green/20 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-veritrust-green" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white font-outfit">99.9%</p>
                      <p className="text-xs text-veritrust-text-muted">Fraud Prevention</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
                data-testid={`stat-${idx}`}
              >
                <p className="text-3xl md:text-4xl font-bold text-white font-outfit">{stat.value}</p>
                <p className="text-sm text-veritrust-text-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Marquee */}
      <div className="relative py-8 border-t border-white/10 overflow-hidden">
        <div className="flex items-center gap-4 mb-4 justify-center">
          <span className="text-xs font-mono text-veritrust-text-muted uppercase tracking-wider">
            Trusted by leading institutions
          </span>
        </div>
        <div className="marquee-container">
          <div className="marquee-content">
            {[...trustedBy, ...trustedBy].map((brand, idx) => (
              <span 
                key={idx} 
                className="mx-8 text-lg font-medium text-veritrust-text-muted/50 hover:text-veritrust-text-secondary transition-colors"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
