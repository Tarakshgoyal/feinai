'use client';
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import EmailSignup from '@/components/EmailSignup';
import Features from '@/components/Features';
import Survey from '@/components/Survey';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-waiting-bg text-waiting-text">
      <Header />
      <Hero />
      <AboutSection />
      <EmailSignup />
      <Features />
      <Survey />
      <Footer />
    </div>
  );
};

export default Index;
