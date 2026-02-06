import React, { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = ({ activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'brand-identity', label: 'Brand' },
    { id: 'features', label: 'Features' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'campaigns', label: 'Campaigns' },
    { id: 'ai-workflow', label: 'AI Workflow' },
    { id: 'downloads', label: 'Downloads' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      data-testid="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-veritrust-bg-dark/90 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer" 
            onClick={() => scrollToSection('hero')}
            data-testid="logo"
          >
            <div className="w-10 h-10 rounded-xl bg-veritrust-green flex items-center justify-center">
              <Shield className="w-6 h-6 text-black" />
            </div>
            <span className="font-outfit font-bold text-xl text-white">
              Veri<span className="text-veritrust-green">Trust</span> AI
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" data-testid="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                data-testid={`nav-${item.id}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-veritrust-green/10 text-veritrust-green'
                    : 'text-veritrust-text-secondary hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              data-testid="header-cta"
              className="btn-primary"
              onClick={() => scrollToSection('downloads')}
            >
              Get Brand Kit
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav 
            className="lg:hidden mt-4 p-4 glass-card"
            data-testid="mobile-nav"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                data-testid={`mobile-nav-${item.id}`}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? 'bg-veritrust-green/10 text-veritrust-green'
                    : 'text-veritrust-text-secondary hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button 
              className="btn-primary w-full mt-4"
              onClick={() => scrollToSection('downloads')}
              data-testid="mobile-cta"
            >
              Get Brand Kit
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
