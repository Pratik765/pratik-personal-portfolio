import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const TechMarquee = () => {
  const row1 = [
    { text: 'React 18 & 19', cat: 'frontend' },
    { text: 'Custom Hooks', cat: 'frontend' },
    { text: 'Redux Toolkit', cat: 'frontend' },
    { text: 'Database-Per-Service', cat: 'backend' },
    { text: 'Microservices', cat: 'backend' },
    { text: 'Rich Interactive UI', cat: 'frontend' },
    { text: 'Higher Order Components', cat: 'frontend' },
    { text: 'Config-Driven UI', cat: 'frontend' },
    { text: 'WebSocket', cat: 'backend' },
    { text: 'Design Systems', cat: 'frontend' },
    { text: 'Tailwind CSS', cat: 'frontend' },
    { text: 'Axios Interceptors', cat: 'frontend' },
  ];

  const row2 = [
    { text: 'RESTful APIs', cat: 'backend' },
    { text: 'JWT Authentication', cat: 'backend' },
    { text: 'Email OTP Flows', cat: 'backend' },
    { text: 'Node.js Event Loop', cat: 'backend' },
    { text: 'Express.js', cat: 'backend' },
    { text: 'Mongoose ODM', cat: 'database' },
    { text: 'IndexedDB Persistence', cat: 'database' },
    { text: 'Vite & Rollup', cat: 'tools' },
    { text: 'Non-blocking I/O', cat: 'backend' },
    { text: 'HTTP Caching & ETag', cat: 'backend' },
    { text: 'Role-Based Access Control', cat: 'backend' },
    { text: 'State Slices & Selectors', cat: 'frontend' },
  ];

  const row3 = [
    { text: 'Optimizing React Apps', cat: 'frontend' },
    { text: 'Clean Architecture', cat: 'tools' },
    { text: 'Reusable Components', cat: 'frontend' },
    { text: 'Props & State Contracts', cat: 'frontend' },
    { text: 'Framer Motion', cat: 'frontend' },
    { text: 'Git Branching Strategy', cat: 'tools' },
    { text: 'API Gateway Reverse Proxy', cat: 'backend' },
    { text: 'E2E & Unit Testing', cat: 'tools' },
    { text: 'Best Coding Practices', cat: 'tools' },
    { text: 'Error Boundaries', cat: 'frontend' },
    { text: 'Production Deployment', cat: 'tools' },
    { text: 'Continuous Integration', cat: 'tools' },
  ];

  const catStyles = {
    frontend: 'border-indigo-500/30 text-indigo-300 hover:border-indigo-400/70 hover:text-white hover:bg-indigo-500/15 hover:shadow-[0_0_12px_rgba(99,102,241,0.2)]',
    backend: 'border-emerald-500/30 text-emerald-300 hover:border-emerald-400/70 hover:text-white hover:bg-emerald-500/15 hover:shadow-[0_0_12px_rgba(16,185,129,0.2)]',
    database: 'border-cyan-500/30 text-cyan-300 hover:border-cyan-400/70 hover:text-white hover:bg-cyan-500/15 hover:shadow-[0_0_12px_rgba(6,182,212,0.2)]',
    tools: 'border-purple-500/30 text-purple-300 hover:border-purple-400/70 hover:text-white hover:bg-purple-500/15 hover:shadow-[0_0_12px_rgba(168,85,247,0.2)]',
  };

  const renderPill = (skill, idx, prefix) => (
    <span
      key={`${prefix}-${idx}`}
      className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium bg-slate-900/90 border transition-all duration-200 select-none cursor-default ${catStyles[skill.cat]}`}
    >
      {skill.text}
    </span>
  );

  return (
    <div className="w-full overflow-hidden py-16 sm:py-20 bg-slate-950/95 border-y border-slate-800/80 relative">
      {/* Left and right fade gradients */}
      <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-44 bg-gradient-to-r from-slate-950 via-slate-950/95 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-44 bg-gradient-to-l from-slate-950 via-slate-950/95 to-transparent z-10 pointer-events-none" />

      {/* Section header */}
      <div className="text-center mb-8 relative z-20 px-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Core Engineering Capabilities</span>
        </div>
        <p className="text-sm text-slate-400 font-mono max-w-lg mx-auto">
          Technologies, patterns, and principles I apply across every project
        </p>
      </div>

      <div className="space-y-3.5">
        {/* Row 1 - Left sliding */}
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex gap-3 whitespace-nowrap will-change-transform"
        >
          {[...row1, ...row1, ...row1].map((skill, idx) => renderPill(skill, idx, 'r1'))}
        </motion.div>

        {/* Row 2 - Right sliding */}
        <motion.div
          animate={{ x: [-1200, 0] }}
          transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
          className="flex gap-3 whitespace-nowrap will-change-transform"
        >
          {[...row2, ...row2, ...row2].map((skill, idx) => renderPill(skill, idx, 'r2'))}
        </motion.div>

        {/* Row 3 - Left sliding */}
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          className="flex gap-3 whitespace-nowrap will-change-transform"
        >
          {[...row3, ...row3, ...row3].map((skill, idx) => renderPill(skill, idx, 'r3'))}
        </motion.div>
      </div>
    </div>
  );
};
