import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ScrollProgress } from '../components/ScrollProgress';
import { BackToTop } from '../components/BackToTop';
import { ParticleBackground } from '../components/ParticleBackground';

export const MainLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#f8fafc] text-slate-900 dark:bg-[#090d16] dark:text-slate-100 selection:bg-indigo-500 selection:text-white transition-colors duration-300">
      {/* Global Interactive Animated Particle Canvas */}
      <ParticleBackground />

      {/* Top scroll progress indicator */}
      <ScrollProgress />

      {/* Main sticky navigation header */}
      <Navbar />

      {/* Main content body */}
      <main className="flex-1 relative z-10">
        {children}
      </main>

      {/* Back to top floating button */}
      <BackToTop />

      {/* Modern Developer Footer */}
      <Footer />
    </div>
  );
};
