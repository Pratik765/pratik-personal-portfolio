import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle, Award } from 'lucide-react';

export const TimelineItem = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 sm:pl-12 pb-12 last:pb-2 group"
    >
      {/* Vertical connector line */}
      <div className="absolute left-[11px] sm:left-[19px] top-6 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800 group-last:hidden" />

      {/* Timeline Node Icon */}
      <div className="absolute left-0 sm:left-2 top-0.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-glow-sm ring-4 ring-white dark:ring-[#090d16] group-hover:scale-110 transition-transform">
        <Briefcase className="w-3.5 h-3.5" />
      </div>

      {/* Timeline Content Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/40 dark:hover:border-indigo-500/40 shadow-sm hover:shadow-xl transition-all backdrop-blur-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white">
                {item.role}
              </h3>
              {item.badge && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                  {item.badge}
                </span>
              )}
            </div>

            <div className="text-base font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
              {item.company}
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {item.period}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {item.location}
            </span>
          </div>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">
          {item.summary}
        </p>

        {/* Responsibilities */}
        {item.responsibilities && (
          <div className="space-y-2 mb-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              Key Responsibilities & Contributions
            </h4>
            {item.responsibilities.map((resp, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle className="w-4 h-4 text-indigo-500 dark:text-indigo-400 shrink-0 mt-0.5" />
                <span>{resp}</span>
              </div>
            ))}
          </div>
        )}

        {/* Technologies used */}
        {item.technologies && (
          <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800">
            <span className="text-xs font-mono text-slate-400 mr-1">Stack:</span>
            {item.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};
