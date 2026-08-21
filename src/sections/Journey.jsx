import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { mernJourney } from '../data/portfolio';
import { CheckCircle2, Award, ArrowRight, Sparkles, Compass } from 'lucide-react';

export const Journey = () => {
  return (
    <section id="journey" className="py-20 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Growth Timeline"
          title="My Engineering &"
          highlight="MERN Journey"
          subtitle="A continuous trajectory of technical growth from semantic web fundamentals to full-stack system architecture."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mernJourney.map((step, index) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 sm:p-7 rounded-3xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl transition-all duration-300 backdrop-blur-md flex flex-col justify-between group hover:-translate-y-1 hover:border-indigo-500/40"
            >
              <div>
                {/* Phase & Year Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono font-extrabold text-2xl text-gradient">
                    {step.phase}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border border-indigo-500/30">
                    {step.year}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors mb-2">
                  {step.title}
                </h3>

                <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 mb-3">
                  {step.skills}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-normal">
                  {step.description}
                </p>
              </div>

              {/* Progress & Status */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500 dark:text-slate-400">Mastery Level</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">
                    {step.status} ({step.growth}%)
                  </span>
                </div>

                <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${step.growth}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
