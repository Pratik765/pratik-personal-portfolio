import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Sparkles, ArrowUpRight } from 'lucide-react';
import { Github } from './BrandIcons';

export const ProjectCard = ({ project, onOpenArchitecture, index, isEven }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25, x: isEven ? -15 : 15 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group relative w-full rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden backdrop-blur-xl p-5 sm:p-6"
    >
      {/* Top subtle gradient accent line */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${
          index === 0
            ? 'from-indigo-500 via-cyan-400 to-blue-500'
            : index === 1
            ? 'from-rose-500 via-pink-400 to-amber-400'
            : 'from-purple-500 via-violet-400 to-indigo-400'
        }`}
      />

      {/* Header Info */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/50">
            Phase 0{index + 1}
          </span>
          <span className="text-[11px] font-mono font-semibold text-slate-500 dark:text-slate-400">
            {project.category}
          </span>
        </div>

        {project.featured && (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-300 border border-amber-500/30">
            <Sparkles className="w-2.5 h-2.5 text-amber-500" />
            Featured
          </span>
        )}
      </div>

      {/* Title & Tagline */}
      <h3 className="text-base sm:text-lg font-bold font-display text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
        {project.title}
      </h3>

      <p className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-medium mt-0.5 mb-2 line-clamp-1">
        {project.tagline}
      </p>

      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2 mb-3">
        {project.description}
      </p>

      {/* Tech Stack Pills */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.technologies.slice(0, 5).map((tech, i) => (
          <span
            key={i}
            className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 5 && (
          <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono bg-slate-50 dark:bg-slate-800/40 text-slate-500 dark:text-slate-400 border border-slate-200/60 dark:border-slate-800">
            +{project.technologies.length - 5}
          </span>
        )}
      </div>

      {/* Action Buttons Row */}
      <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm transition-all duration-200"
          >
            <span>Live Demo</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700 transition-all duration-200"
          >
            <Github className="w-3 h-3" />
            <span>Source</span>
          </a>
        </div>

        <button
          onClick={() => onOpenArchitecture(project)}
          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[11px] font-mono text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 border border-indigo-200/60 dark:border-indigo-800/40 transition-colors"
        >
          <Layers className="w-3 h-3" />
          <span>Architecture</span>
        </button>
      </div>
    </motion.div>
  );
};
