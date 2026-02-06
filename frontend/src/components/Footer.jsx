import React from 'react';
import { Shield, Linkedin, Twitter, Github, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: 'Identity Verification', href: '#features' },
      { label: 'Fraud Detection', href: '#features' },
      { label: 'Digital KYC', href: '#features' },
      { label: 'API Documentation', href: '#' },
    ],
    company: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Contact', href: '#' },
    ],
    resources: [
      { label: 'Brand Guidelines', href: '#downloads' },
      { label: 'Press Kit', href: '#downloads' },
      { label: 'Case Studies', href: '#' },
      { label: 'Help Center', href: '#' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Security', href: '#' },
      { label: 'Compliance', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer className="relative bg-veritrust-bg-paper border-t border-white/10" data-testid="footer">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-veritrust-green flex items-center justify-center">
                <Shield className="w-6 h-6 text-black" />
              </div>
              <span className="font-outfit font-bold text-xl text-white">
                Veri<span className="text-veritrust-green">Trust</span> AI
              </span>
            </div>
            <p className="text-veritrust-text-secondary mb-6 max-w-xs">
              Enterprise-grade identity verification and fraud detection powered by next-generation AI.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-veritrust-green/20 hover:text-veritrust-green transition-colors"
                  data-testid={`social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-5 h-5 text-veritrust-text-secondary" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], idx) => (
            <div key={idx}>
              <h4 className="font-outfit font-semibold text-white mb-4 capitalize">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.href}
                      className="text-veritrust-text-secondary hover:text-veritrust-green transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-veritrust-text-muted">
              © {currentYear} VeriTrust AI. All rights reserved. This is a fictional brand for demonstration purposes.
            </p>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2 text-sm text-veritrust-text-muted">
                <span className="w-2 h-2 rounded-full bg-veritrust-green animate-pulse" />
                All systems operational
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-veritrust-green/10 rounded-full blur-3xl pointer-events-none" />
    </footer>
  );
};

export default Footer;
