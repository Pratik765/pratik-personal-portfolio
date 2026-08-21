import React, { useEffect } from 'react';
import { ThemeProvider } from './hooks/useTheme';
import { MainLayout } from './layouts/MainLayout';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Stats } from './sections/Stats';
import { TechStack } from './sections/TechStack';
import { TechMarquee } from './components/TechMarquee';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Architecture } from './sections/Architecture';
import { Journey } from './sections/Journey';
import { Achievement } from './sections/Achievement';
import { GitHub } from './sections/GitHub';
import { Resume } from './sections/Resume';
import { Contact } from './sections/Contact';

export function App() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <ThemeProvider>
      <MainLayout>
        <Hero />
        <About />
        <Stats />
        <TechStack />
        <TechMarquee />
        <Skills />
        <Experience />
        <Projects />
        <Architecture />
        <Journey />
        <Achievement />
        <GitHub />
        <Resume />
        <Contact />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
