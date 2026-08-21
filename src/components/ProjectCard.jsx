import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Layers, Sparkles, ArrowUpRight, Check } from 'lucide-react';
import { Github } from './BrandIcons';

export const ProjectCard = ({ project, onOpenArchitecture, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden backdrop-blur-md"
    >
      {/* Top Media Preview */}
      <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-950">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${project.fallbackColor || 'from-indigo-900 to-slate-900'} flex items-center justify-center p-6 text-center`}>
            <div className="space-y-2">
              <div className="p-3 rounded-2xl bg-indigo-500/20 text-indigo-400 w-fit mx-auto border border-indigo-500/30">
                <Layers className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-white">{project.title}</h4>
            </div>
          </div>
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-slate-900/80 text-indigo-300 border border-indigo-500/30 backdrop-blur-md">
            {project.category}
          </span>

          {project.featured && (
            <span className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 border border-amber-500/40 backdrop-blur-md">
              <Sparkles className="w-3 h-3 text-amber-400" />
              Featured
            </span>
          )}
        </div>

        {/* Architecture button overlay on hover */}
        <div className="absolute bottom-4 right-4 z-10">
          <button
            onClick={() => onOpenArchitecture(project)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium bg-indigo-600 hover:bg-indigo-500 text-white shadow-glow-sm hover:shadow-glow-md transition-all active:scale-95"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Architecture</span>
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
            {project.title}
          </h3>

          <p className="text-xs font-mono text-indigo-600 dark:text-indigo-400 mt-1 mb-3">
            {project.tagline}
          </p>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-5">
            {project.description}
          </p>

          {/* Key Features */}
          {project.keyFeatures && (
            <div className="space-y-1.5 mb-6">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                Core Highlights
              </div>
              {project.keyFeatures.slice(0, 3).map((feature, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                  <Check className="w-3.5 h-3.5 text-indigo-500 mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-300 border border-indigo-500/30 hover:bg-indigo-600 hover:text-white transition-all duration-200"
            >
              <span>Live Demo</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700 transition-all duration-200"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source</span>
            </a>
          </div>

          <button
            onClick={() => onOpenArchitecture(project)}
            className="text-xs font-mono text-slate-500 dark:text-slate-400 hover:text-indigo-400 flex items-center gap-1 transition-colors"
          >
            <span>View Flow</span>
            <Layers className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
