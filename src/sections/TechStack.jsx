import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { TechCard } from '../components/TechCard';
import { techStack, techStackCategories } from '../data/portfolio';

export const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredTechs = activeCategory === 'all'
    ? techStack
    : techStack.filter((t) => t.category === activeCategory);

  return (
    <section id="tech-stack" className="py-20 sm:py-24 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Technical Skills"
          title="Technologies & Core"
          highlight="Ecosystem Tools"
          subtitle="A comprehensive toolkit engineered for high-performance React frontends and scalable Node.js microservices."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {techStackCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-indigo-600 text-white shadow-glow-sm scale-105'
                  : 'bg-white/80 dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
        >
          <AnimatePresence>
            {filteredTechs.map((tech, index) => (
              <TechCard key={tech.name} tech={tech} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
