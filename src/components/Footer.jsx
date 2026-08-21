import React from 'react';
import { Mail, Heart, ArrowUp, Code2, Sparkles } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { personalInfo } from '../data/portfolio';
import { scrollToSection } from '../utils/helpers';

export const Footer = () => {
  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/80 text-slate-400 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 p-[1.5px]">
                <div className="w-full h-full bg-[#090d16] rounded-[10px] flex items-center justify-center">
                  <span className="font-display font-extrabold text-sm text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">
                    PK
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-display">
                  {personalInfo.name}
                </h3>
                <p className="text-xs text-indigo-400 font-mono">
                  {personalInfo.role}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              {personalInfo.shortTagline}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono bg-emerald-950/60 text-emerald-300 border border-emerald-800/50">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{personalInfo.status}</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-mono">
              {['about', 'skills', 'experience', 'projects', 'architecture', 'journey'].map((sec) => (
                <li key={sec}>
                  <button
                    onClick={() => scrollToSection(sec)}
                    className="hover:text-indigo-400 transition-colors capitalize text-slate-400"
                  >
                    {sec}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Connect */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold mb-4">
              Connect Directly
            </h4>
            <div className="space-y-3">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4 text-indigo-400" />
                <span>github.com/Pratik765</span>
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>linkedin.com/in/pratik-k-32aba1202</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>{personalInfo.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            <span>Built with React 18 • Vite • Tailwind CSS • Framer Motion</span>
          </div>

          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
