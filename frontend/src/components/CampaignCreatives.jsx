import React from 'react';
import { ChevronLeft, ChevronRight, Linkedin, Twitter, Mail, Image } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CampaignCreatives = () => {
  const [activeSlide, setActiveSlide] = React.useState(0);

  const carouselSlides = [
    {
      title: "Stop Fraud Before It Happens",
      subtitle: "AI-Powered Identity Verification",
      visual: "shield",
      stats: "99.9% Accuracy",
      bg: "from-veritrust-green/20 to-veritrust-blue/20"
    },
    {
      title: "Real-Time Detection",
      subtitle: "ML-Powered Fraud Prevention",
      visual: "eye",
      stats: "<1s Response Time",
      bg: "from-veritrust-blue/20 to-purple-500/20"
    },
    {
      title: "Digital KYC",
      subtitle: "Seamless Onboarding Experience",
      visual: "document",
      stats: "120+ Countries",
      bg: "from-purple-500/20 to-veritrust-green/20"
    },
    {
      title: "Enterprise Security",
      subtitle: "SOC 2 Type II Compliant",
      visual: "lock",
      stats: "$2B+ Fraud Blocked",
      bg: "from-veritrust-green/20 to-yellow-500/20"
    },
    {
      title: "Join Industry Leaders",
      subtitle: "Transform Your Verification Process",
      visual: "cta",
      stats: "Get Started Today",
      bg: "from-veritrust-green/30 to-veritrust-blue/30"
    },
  ];

  const socialBanners = [
    {
      platform: "LinkedIn",
      icon: Linkedin,
      size: "1200x627",
      title: "Enterprise Identity Verification",
      subtitle: "Stop Fraud Before It Happens",
    },
    {
      platform: "Twitter",
      icon: Twitter,
      size: "1600x900",
      title: "AI-Powered KYC Solutions",
      subtitle: "Sub-second verification for millions",
    },
    {
      platform: "Email",
      icon: Mail,
      size: "600x200",
      title: "Transform Your Security",
      subtitle: "99.9% accuracy rate",
    },
  ];

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % carouselSlides.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);

  return (
    <div className="py-24 relative" data-testid="campaigns-section">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-veritrust-green/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-2 rounded-full bg-veritrust-blue/10 border border-veritrust-blue/30 text-sm font-mono text-veritrust-blue uppercase tracking-wider mb-4">
            Campaign Creatives
          </span>
          <h2 className="section-heading mb-4">Marketing Assets</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Ready-to-use campaign creatives for LinkedIn, social media, and email marketing.
          </p>
        </div>

        {/* LinkedIn Carousel */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-outfit font-semibold text-white">LinkedIn Carousel</h3>
            <div className="flex items-center gap-2">
              <button 
                onClick={prevSlide}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                data-testid="carousel-prev"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <span className="text-sm text-veritrust-text-muted font-mono">
                {activeSlide + 1} / {carouselSlides.length}
              </span>
              <button 
                onClick={nextSlide}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                data-testid="carousel-next"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Carousel Display */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {carouselSlides.map((slide, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-2">
                  <div 
                    className={`carousel-slide bg-gradient-to-br ${slide.bg} p-8 flex flex-col justify-between`}
                    data-testid={`carousel-slide-${idx}`}
                  >
                    {/* Slide Header */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-veritrust-green flex items-center justify-center">
                        <span className="text-black font-bold font-outfit">V</span>
                      </div>
                      <span className="text-sm font-mono text-veritrust-text-muted">VeriTrust AI</span>
                    </div>

                    {/* Slide Content */}
                    <div className="flex-1 flex flex-col items-center justify-center text-center py-8">
                      {/* Visual Representation */}
                      <div className="w-24 h-24 rounded-2xl bg-veritrust-green/20 border border-veritrust-green/50 flex items-center justify-center mb-6">
                        {slide.visual === 'shield' && (
                          <svg className="w-12 h-12 text-veritrust-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          </svg>
                        )}
                        {slide.visual === 'eye' && (
                          <svg className="w-12 h-12 text-veritrust-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        )}
                        {slide.visual === 'document' && (
                          <svg className="w-12 h-12 text-veritrust-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" y1="13" x2="8" y2="13" />
                            <line x1="16" y1="17" x2="8" y2="17" />
                          </svg>
                        )}
                        {slide.visual === 'lock' && (
                          <svg className="w-12 h-12 text-veritrust-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                          </svg>
                        )}
                        {slide.visual === 'cta' && (
                          <svg className="w-12 h-12 text-veritrust-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                          </svg>
                        )}
                      </div>

                      <h4 className="text-2xl font-outfit font-bold text-white mb-2">{slide.title}</h4>
                      <p className="text-veritrust-text-secondary mb-4">{slide.subtitle}</p>
                      
                      <span className="inline-block px-4 py-2 rounded-full bg-veritrust-green/20 text-veritrust-green text-sm font-mono">
                        {slide.stats}
                      </span>
                    </div>

                    {/* Slide Footer */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-veritrust-text-muted font-mono">
                        Slide {idx + 1} of {carouselSlides.length}
                      </span>
                      {idx === carouselSlides.length - 1 ? (
                        <button className="px-4 py-2 rounded-full bg-veritrust-green text-black text-sm font-semibold">
                          Learn More →
                        </button>
                      ) : (
                        <span className="text-xs text-veritrust-text-muted">Swipe →</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {carouselSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === activeSlide ? 'bg-veritrust-green w-8' : 'bg-white/20'
                }`}
                data-testid={`carousel-indicator-${idx}`}
              />
            ))}
          </div>
        </div>

        {/* Social Media Banners */}
        <div className="mb-20">
          <h3 className="text-xl font-outfit font-semibold text-white mb-6">Social Media Banners</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {socialBanners.map((banner, idx) => (
              <div 
                key={idx}
                className="glass-card overflow-hidden group"
                data-testid={`social-banner-${idx}`}
              >
                {/* Banner Preview */}
                <div className="aspect-video bg-gradient-to-br from-veritrust-bg-paper to-veritrust-bg-dark p-6 flex flex-col justify-between relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 grid-pattern opacity-30" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-veritrust-green/20 rounded-full blur-3xl" />
                  
                  {/* Content */}
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-veritrust-green flex items-center justify-center">
                        <span className="text-black font-bold text-sm">V</span>
                      </div>
                      <span className="text-xs font-mono text-veritrust-text-muted">VeriTrust AI</span>
                    </div>
                    <h4 className="text-lg font-outfit font-bold text-white">{banner.title}</h4>
                    <p className="text-sm text-veritrust-text-secondary">{banner.subtitle}</p>
                  </div>
                </div>

                {/* Banner Info */}
                <div className="p-4 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <banner.icon className="w-4 h-4 text-veritrust-text-muted" />
                      <span className="font-medium text-white">{banner.platform}</span>
                    </div>
                    <span className="text-xs text-veritrust-text-muted font-mono">{banner.size}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emailer Banner */}
        <div className="mb-20">
          <h3 className="text-xl font-outfit font-semibold text-white mb-6">Email Campaign Banner</h3>
          <div className="glass-card overflow-hidden">
            {/* Email Preview */}
            <div className="bg-veritrust-bg-paper p-4 rounded-t-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 bg-veritrust-bg-dark rounded-full px-4 py-1 text-xs text-veritrust-text-muted">
                  email.campaign@veritrust.ai
                </div>
              </div>

              {/* Email Content */}
              <div className="bg-white rounded-lg overflow-hidden">
                {/* Email Banner */}
                <div className="bg-gradient-to-r from-veritrust-bg-dark to-veritrust-bg-paper p-8 relative overflow-hidden">
                  <div className="absolute inset-0 grid-pattern opacity-20" />
                  <div className="absolute right-0 top-0 w-48 h-48 bg-veritrust-green/20 rounded-full blur-3xl" />
                  
                  <div className="relative flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-veritrust-green flex items-center justify-center">
                          <span className="text-black font-bold font-outfit">V</span>
                        </div>
                        <span className="font-outfit font-semibold text-white">VeriTrust AI</span>
                      </div>
                      <h4 className="text-2xl font-outfit font-bold text-white mb-2">
                        Stop Fraud Before It Happens
                      </h4>
                      <p className="text-veritrust-text-secondary mb-4">
                        Enterprise-grade identity verification with 99.9% accuracy
                      </p>
                      <button className="px-6 py-2 rounded-full bg-veritrust-green text-black font-semibold text-sm">
                        Get Started Free →
                      </button>
                    </div>
                    <div className="hidden md:block">
                      <div className="w-32 h-32 rounded-2xl bg-veritrust-green/20 border border-veritrust-green/50 flex items-center justify-center">
                        <svg className="w-16 h-16 text-veritrust-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email Body Placeholder */}
                <div className="p-6 space-y-3">
                  <div className="h-3 bg-gray-200 rounded w-3/4" />
                  <div className="h-3 bg-gray-200 rounded w-full" />
                  <div className="h-3 bg-gray-200 rounded w-5/6" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Explainer Visual */}
        <div>
          <h3 className="text-xl font-outfit font-semibold text-white mb-6">Product Explainer</h3>
          <div className="glass-card p-8">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Upload Document', desc: 'User uploads ID document', icon: 'upload' },
                { step: '02', title: 'AI Analysis', desc: 'OCR & authenticity check', icon: 'brain' },
                { step: '03', title: 'Face Matching', desc: 'Selfie vs document match', icon: 'face' },
                { step: '04', title: 'Verified', desc: 'Identity confirmed', icon: 'check' },
              ].map((item, idx) => (
                <div key={idx} className="text-center relative">
                  {/* Connector Line */}
                  {idx < 3 && (
                    <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-veritrust-green to-veritrust-blue" />
                  )}
                  
                  {/* Step Icon */}
                  <div className="relative z-10 w-24 h-24 mx-auto rounded-2xl bg-veritrust-green/10 border border-veritrust-green/30 flex items-center justify-center mb-4">
                    <span className="text-3xl font-outfit font-bold text-veritrust-green">{item.step}</span>
                  </div>
                  
                  <h4 className="font-outfit font-semibold text-white mb-1">{item.title}</h4>
                  <p className="text-sm text-veritrust-text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignCreatives;
