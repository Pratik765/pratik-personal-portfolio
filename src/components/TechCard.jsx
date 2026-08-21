import React from 'react';
import { motion } from 'framer-motion';
import { getIcon } from '../utils/helpers';

const categoryColors = {
  frontend: {
    accent: 'from-indigo-500 to-cyan-400',
    iconBg: 'group-hover:bg-indigo-600',
    iconText: 'text-indigo-600 dark:text-indigo-400',
    hoverBorder: 'hover:border-indigo-500/40',
    hoverGlow: 'hover:shadow-[0_4px_20px_rgba(99,102,241,0.15)]',
    barColor: 'bg-gradient-to-r from-indigo-500 to-cyan-400',
  },
  backend: {
    accent: 'from-emerald-500 to-teal-400',
    iconBg: 'group-hover:bg-emerald-600',
    iconText: 'text-emerald-600 dark:text-emerald-400',
    hoverBorder: 'hover:border-emerald-500/40',
    hoverGlow: 'hover:shadow-[0_4px_20px_rgba(16,185,129,0.15)]',
    barColor: 'bg-gradient-to-r from-emerald-500 to-teal-400',
  },
  database: {
    accent: 'from-cyan-500 to-blue-400',
    iconBg: 'group-hover:bg-cyan-600',
    iconText: 'text-cyan-600 dark:text-cyan-400',
    hoverBorder: 'hover:border-cyan-500/40',
    hoverGlow: 'hover:shadow-[0_4px_20px_rgba(6,182,212,0.15)]',
    barColor: 'bg-gradient-to-r from-cyan-500 to-blue-400',
  },
  tools: {
    accent: 'from-purple-500 to-violet-400',
    iconBg: 'group-hover:bg-purple-600',
    iconText: 'text-purple-600 dark:text-purple-400',
    hoverBorder: 'hover:border-purple-500/40',
    hoverGlow: 'hover:shadow-[0_4px_20px_rgba(168,85,247,0.15)]',
    barColor: 'bg-gradient-to-r from-purple-500 to-violet-400',
  },
};

export const TechCard = ({ tech, index }) => {
  const IconComponent = getIcon(tech.iconName);
  const colors = categoryColors[tech.category] || categoryColors.frontend;

  const getLevelBadge = (level) => {
    switch (level) {
      case 'Expert':
        return 'bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border-emerald-500/30';
      case 'Advanced':
        return 'bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border-indigo-500/30';
      case 'Proficient':
        return 'bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 border-cyan-500/30';
      default:
        return 'bg-slate-500/10 text-slate-500 dark:text-slate-400 border-slate-500/30';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={`group relative p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md transition-all duration-300 ${colors.hoverBorder} ${colors.hoverGlow}`}
    >
      {/* Category-colored top accent line */}
      <div className={`absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r ${colors.accent} opacity-60 group-hover:opacity-100 transition-opacity`} />

      <div className="flex items-start justify-between gap-3 mb-3">
        <div className={`p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 ${colors.iconText} group-hover:scale-110 ${colors.iconBg} group-hover:text-white transition-all duration-300 shadow-sm`}>
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

        {/* Mini progress bar with category gradient */}
        <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-2.5">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${tech.proficiency}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.04 + 0.2 }}
            className={`h-full rounded-full ${colors.barColor}`}
          />
        </div>

        <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed font-normal">
          {tech.description}
        </p>
      </div>
    </motion.div>
  );
};
