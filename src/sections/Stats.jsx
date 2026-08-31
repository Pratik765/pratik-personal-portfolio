import React from 'react';
import { motion } from 'framer-motion';
import { developerStats } from '../data/portfolio';
import { AnimatedCounter } from '../components/AnimatedCounter';

export const Stats = () => {
  return (
    <section className="py-16 sm:py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {developerStats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 sm:p-7 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-md backdrop-blur-md text-center hover:border-indigo-500/40 transition-all group"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-gradient mb-2 group-hover:scale-105 transition-transform">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <h4 className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 font-display">
                {stat.label}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-normal">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
