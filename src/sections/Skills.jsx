import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { SkillBar } from '../components/SkillBar';
import { skillProgress } from '../data/portfolio';
import { CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';

export const Skills = () => {
  return (
    <section id="skills" className="py-20 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Proficiency"
          title="Skill & Competency"
          highlight="Distribution"
          subtitle="Measurable technical proficiencies across frontend architecture, server runtime, and database engineering."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Skill Bars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {skillProgress.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>

          {/* Right Column: Engineering Highlights & Principles */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6 p-7 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 text-white shadow-xl backdrop-blur-md"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg font-display">Development Standards</h3>
                <p className="text-xs text-slate-400">Quality benchmarks applied to every project</p>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm font-mono text-slate-300">
              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-1">
                <span className="text-indigo-400 font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                  Clean Component Hierarchy
                </span>
                <p className="text-slate-400 font-sans text-xs">
                  Separation of UI presentational components from container state logic with custom hooks.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-1">
                <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  Predictable State Slices
                </span>
                <p className="text-slate-400 font-sans text-xs">
                  Normalized Redux Toolkit state structures with immutable reducers and efficient memoized selectors.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-1">
                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  REST API Best Practices
                </span>
                <p className="text-slate-400 font-sans text-xs">
                  Standardized status codes, JWT auth middlewares, request validation guards, and error envelopes.
                </p>
              </div>
            </div>

            <div className="pt-2 text-xs font-mono text-slate-500 flex items-center justify-between border-t border-slate-800">
              <span>Configuration: Single Source of Truth</span>
              <span className="text-indigo-400">src/data/portfolio.js</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
