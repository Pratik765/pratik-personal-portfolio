import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { Star, GitFork, ExternalLink, Code2, GitCommit, Users } from 'lucide-react';
import { Github } from '../components/BrandIcons';
import { githubProfileData } from '../data/portfolio';

export const GitHub = () => {
  return (
    <section id="github" className="py-14 sm:py-16 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Open Source & Repositories"
          title="GitHub Activity &"
          highlight="Code Contributions"
          subtitle="A glimpse into open-source repositories, architectural boilerplates, and regular code commits."
        />

        {/* GitHub Metrics Overview */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
          <div className="p-5 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 text-center backdrop-blur-md shadow-sm hover:border-indigo-500/50 transition-all">
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-indigo-500">
              {githubProfileData.stats.publicRepos}
            </div>
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
              Public Repositories
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 text-center backdrop-blur-md shadow-sm hover:border-cyan-500/50 transition-all">
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-cyan-400">
              9
            </div>
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
              Microservices Engineered
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1 p-5 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 text-center backdrop-blur-md shadow-sm hover:border-emerald-500/50 transition-all">
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-emerald-400">
              100%
            </div>
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
              Open-Source & Production
            </div>
          </div>
        </div>

        {/* Pinned Repos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {githubProfileData.pinnedRepos.map((repo, idx) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-md flex flex-col justify-between hover:border-indigo-500/50 hover:shadow-glow-sm transition-all backdrop-blur-md group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-indigo-400" />
                    <h4 className="font-mono font-bold text-sm text-slate-900 dark:text-white group-hover:text-indigo-400 transition-colors">
                      {repo.name}
                    </h4>
                  </div>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                  {repo.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-400" />
                  <span>{repo.language}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[11px] font-semibold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    Active
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View full github profile button */}
        <div className="text-center">
          <a
            href={githubProfileData.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 text-xs sm:text-sm font-semibold font-mono shadow-md transition-all active:scale-95"
          >
            <Github className="w-4 h-4" />
            <span>Explore All Repositories on GitHub →</span>
          </a>
        </div>
      </div>
    </section>
  );
};
