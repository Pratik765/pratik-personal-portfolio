import React from 'react';
import { motion } from 'framer-motion';
import { getIcon } from '../utils/helpers';

export const TechCard = ({ tech, index }) => {
  const IconComponent = getIcon(tech.iconName);

  const getLevelBadge = (level) => {
    switch (level) {
      case 'Expert':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'Advanced':
        return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30';
      case 'Proficient':
        return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30';
      default:
        return 'bg-slate-500/10 text-slate-400 border-slate-500/30';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={`group relative p-5 rounded-2xl border transition-all duration-300 ${
        tech.highlight
          ? 'bg-slate-900/60 dark:bg-slate-900/80 border-indigo-500/40 hover:border-indigo-400 shadow-glow-sm dark:shadow-glow-sm'
          : 'bg-white/70 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 hover:border-indigo-500/40 hover:shadow-lg'
      } backdrop-blur-md`}
    >
      {/* Subtle top glowing bar for highlighted techs */}
      {tech.highlight && (
        <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-80" />
      )}

      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm">
          <IconComponent className="w-6 h-6" />
        </div>

        <span className={`px-2 py-0.5 rounded-md text-[11px] font-mono font-medium border ${getLevelBadge(tech.level)}`}>
          {tech.level}
        </span>
      </div>

      <div className="mt-2">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-base font-semibold text-slate-900 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
            {tech.name}
          </h3>
          <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400">
            {tech.proficiency}%
          </span>
        </div>

        {/* Mini progress bar */}
        <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-2.5">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${tech.proficiency}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.04 + 0.2 }}
            className={`h-full rounded-full ${
              tech.highlight
                ? 'bg-gradient-to-r from-indigo-500 to-cyan-400'
                : 'bg-indigo-500 dark:bg-indigo-400'
            }`}
          />
        </div>

        <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed font-normal">
          {tech.description}
        </p>
      </div>
    </motion.div>
  );
};
