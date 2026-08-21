import React from 'react';
import { motion } from 'framer-motion';

export const TechMarquee = () => {
  const row1 = [
    'React 18 & 19',
    'Custom Hooks',
    'Redux Toolkit',
    'Database-Per-Service',
    'Microservices',
    'Rich Interactive UI',
    'Higher Order Components',
    'Config-Driven UI',
    'WebSocket',
    'Design Systems',
    'Tailwind CSS',
    'Axios Interceptors',
  ];

  const row2 = [
    'RESTful APIs',
    'JWT Authentication',
    'Email OTP Flows',
    'Node.js Event Loop',
    'Express.js',
    'Mongoose ODM',
    'IndexedDB Persistence',
    'Vite & Rollup',
    'Non-blocking I/O',
    'HTTP Caching & ETag',
    'Role-Based Access Control',
    'State Slices & Selectors',
  ];

  const row3 = [
    'Optimizing React Apps',
    'Clean Architecture',
    'Reusable Components',
    'Props & State Contracts',
    'Framer Motion',
    'Git Branching Strategy',
    'API Gateway Reverse Proxy',
    'E2E & Unit Testing',
    'Best Coding Practices',
    'Error Boundaries',
    'Production Deployment',
    'Continuous Integration',
  ];

  return (
    <div className="w-full overflow-hidden py-10 bg-slate-950/90 border-y border-slate-800/80 relative">
      {/* Left and right fade gradients */}
      <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-slate-950 via-slate-950/90 to-transparent z-10 pointer-events-none" />

      <div className="space-y-3.5">
        {/* Row 1 - Left sliding */}
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex gap-3 whitespace-nowrap will-change-transform"
        >
          {[...row1, ...row1, ...row1].map((skill, idx) => (
            <span
              key={`r1-${idx}`}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium text-slate-300 bg-slate-900/90 border border-slate-800 shadow-sm hover:border-indigo-500/50 hover:text-white hover:bg-slate-800/90 transition-all select-none cursor-default"
            >
              {skill}
            </span>
          ))}
        </motion.div>

        {/* Row 2 - Right sliding */}
        <motion.div
          animate={{ x: [-1200, 0] }}
          transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
          className="flex gap-3 whitespace-nowrap will-change-transform"
        >
          {[...row2, ...row2, ...row2].map((skill, idx) => (
            <span
              key={`r2-${idx}`}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium text-slate-300 bg-slate-900/90 border border-slate-800 shadow-sm hover:border-cyan-500/50 hover:text-white hover:bg-slate-800/90 transition-all select-none cursor-default"
            >
              {skill}
            </span>
          ))}
        </motion.div>

        {/* Row 3 - Left sliding */}
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          className="flex gap-3 whitespace-nowrap will-change-transform"
        >
          {[...row3, ...row3, ...row3].map((skill, idx) => (
            <span
              key={`r3-${idx}`}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium text-slate-300 bg-slate-900/90 border border-slate-800 shadow-sm hover:border-purple-500/50 hover:text-white hover:bg-slate-800/90 transition-all select-none cursor-default"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
