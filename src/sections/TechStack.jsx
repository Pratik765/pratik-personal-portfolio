import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { techStack } from '../data/portfolio';
import { getIcon } from '../utils/helpers';

const categoryMeta = {
  frontend: {
    label: 'Frontend',
    accent: 'text-indigo-600 dark:text-indigo-400',
    barColor: 'bg-indigo-500',
    dotColor: 'bg-indigo-500',
    borderColor: 'border-indigo-500/20',
  },
  backend: {
    label: 'Backend',
    accent: 'text-emerald-600 dark:text-emerald-400',
    barColor: 'bg-emerald-500',
    dotColor: 'bg-emerald-500',
    borderColor: 'border-emerald-500/20',
  },
  database: {
    label: 'Database',
    accent: 'text-cyan-600 dark:text-cyan-400',
    barColor: 'bg-cyan-500',
    dotColor: 'bg-cyan-500',
    borderColor: 'border-cyan-500/20',
  },
  tools: {
    label: 'Tools & DevOps',
    accent: 'text-purple-600 dark:text-purple-400',
    barColor: 'bg-purple-500',
    dotColor: 'bg-purple-500',
    borderColor: 'border-purple-500/20',
  },
};

const categoryOrder = ['frontend', 'backend', 'database', 'tools'];

const rowVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const TechItem = ({ tech, catColors }) => {
  const IconComponent = getIcon(tech.iconName);

  return (
    <motion.div
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="group flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-default"
    >
      {/* Icon */}
      <div className={`shrink-0 ${catColors.accent}`}>
        <IconComponent className="w-5 h-5" />
      </div>

      {/* Name + Bar */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2 mb-1">
          <span className="text-sm font-semibold text-slate-900 dark:text-white truncate">
            {tech.name}
          </span>
          <span className="text-[11px] font-mono font-medium text-slate-400 dark:text-slate-500 shrink-0">
            {tech.proficiency}%
          </span>
        </div>

        {/* Thin proficiency line */}
        <div className="w-full h-[3px] bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${tech.proficiency}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`h-full rounded-full ${catColors.barColor}`}
          />
        </div>
      </div>
    </motion.div>
  );
};

export const TechStack = () => {
  const grouped = categoryOrder.map((catId) => ({
    id: catId,
    meta: categoryMeta[catId],
    items: techStack.filter((t) => t.category === catId),
  }));

  return (
    <section id="tech-stack" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Technical Skills"
          title="Technologies & Core"
          highlight="Ecosystem Tools"
          subtitle="A curated toolkit for building high-performance React frontends and scalable Node.js backends."
        />

        {/* Category Rows */}
        <div className="mt-14 space-y-10">
          {grouped.map((group, i) => (
            <motion.div
              key={group.id}
              custom={i}
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-2 h-2 rounded-full ${group.meta.dotColor}`} />
                <h3 className={`text-xs font-mono font-bold uppercase tracking-[0.2em] ${group.meta.accent}`}>
                  {group.meta.label}
                </h3>
                <div className={`flex-1 h-px bg-slate-200 dark:bg-slate-800`} />
                <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                  {group.items.length} tools
                </span>
              </div>

              {/* Tech Items Grid — 2 columns on desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-0">
                {group.items.map((tech) => (
                  <TechItem key={tech.name} tech={tech} catColors={group.meta} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
