import React from 'react';
import { motion } from 'framer-motion';

export const SkillBar = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="p-4 rounded-xl bg-white/60 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-sm hover:border-indigo-500/30 transition-all group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: skill.color || '#6366f1' }}
          />
          <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-indigo-400 transition-colors">
            {skill.name}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {skill.category && (
            <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
              {skill.category}
            </span>
          )}
          <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
            {skill.percentage}%
          </span>
        </div>
      </div>

      <div className="w-full h-2 bg-slate-100 dark:bg-slate-800/90 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.05 + 0.1, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${skill.color || '#6366f1'}, #06b6d4)`,
          }}
        />
      </div>
    </motion.div>
  );
};
