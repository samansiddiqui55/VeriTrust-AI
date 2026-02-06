import React, { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BrandIdentitySection from '@/components/BrandIdentitySection';
import FeaturesSection from '@/components/FeaturesSection';
import DashboardMockups from '@/components/DashboardMockups';
import CampaignCreatives from '@/components/CampaignCreatives';
import AIWorkflowSection from '@/components/AIWorkflowSection';
import DownloadsSection from '@/components/DownloadsSection';
import Footer from '@/components/Footer';

const LandingPage = () => {
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <div className="min-h-screen bg-veritrust-bg-dark">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        
        <section id="brand-identity">
          <BrandIdentitySection />
        </section>
        
        <section id="features">
          <FeaturesSection />
        </section>
        
        <section id="dashboard">
          <DashboardMockups />
        </section>
        
        <section id="campaigns">
          <CampaignCreatives />
        </section>
        
        <section id="ai-workflow">
          <AIWorkflowSection />
        </section>
        
        <section id="downloads">
          <DownloadsSection />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LandingPage;
