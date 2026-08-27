import React from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  ArrowRight,
  Mail,
  Sparkles,
  Layers,
  Code2,
  Cpu,
  Database,
  CheckCircle2,
  Atom,
  Server
} from 'lucide-react';
import { Github, Linkedin } from '../components/BrandIcons';
import { personalInfo } from '../data/portfolio';
import { scrollToSection } from '../utils/helpers';
import profilePhoto from '../assets/pratik-photo.jpg';

export const Hero = () => {
  const floatingIcons = [
    { Icon: Atom, label: 'React', color: 'text-cyan-400', pos: 'top-4 -left-4 sm:-left-6', delay: 0 },
    { Icon: Server, label: 'Node.js', color: 'text-emerald-400', pos: 'top-1/3 -right-4 sm:-right-8', delay: 0.5 },
    { Icon: Layers, label: 'Redux', color: 'text-purple-400', pos: 'bottom-8 -left-4 sm:-left-6', delay: 1 },
    { Icon: Database, label: 'MongoDB', color: 'text-emerald-500', pos: 'bottom-4 -right-4 sm:-right-6', delay: 1.5 },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-radial-gradient"
    >
      {/* Background ambient neon spheres */}
      <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Intro & Call To Actions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.status}</span>
            </div>

            {/* Main Headings */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Hi, I'm{' '}
                <span className="text-gradient">
                  {personalInfo.name}
                </span>
              </h1>

              <div className="flex items-center justify-center lg:justify-start gap-2 flex-wrap text-lg sm:text-xl font-mono font-semibold text-slate-700 dark:text-slate-300">
                <span className="text-indigo-600 dark:text-indigo-400">
                  {personalInfo.role}
                </span>
              </div>
            </div>

            {/* Short Tagline */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {personalInfo.shortTagline}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-glow-md hover:shadow-glow-lg transition-all duration-200 flex items-center gap-2 active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={personalInfo.resumeUrl}
                download="Pratik_Kamble_Resume.pdf"
                className="px-6 py-3.5 rounded-2xl bg-white dark:bg-slate-900 text-slate-800 dark:text-white font-semibold text-sm border border-slate-300 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200 flex items-center gap-2 shadow-sm active:scale-95"
              >
                <Download className="w-4 h-4 text-indigo-500" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-5 py-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 text-sm font-semibold border border-slate-200 dark:border-slate-700/60 transition-all active:scale-95"
              >
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Links & Quick Proof */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-5 text-slate-500 dark:text-slate-400">
              <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                Connect:
              </span>

              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 border border-slate-200 dark:border-slate-700 hover:scale-110 transition-all shadow-sm"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 border border-slate-200 dark:border-slate-700 hover:scale-110 transition-all shadow-sm"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send Email"
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-purple-500 dark:hover:text-purple-400 border border-slate-200 dark:border-slate-700 hover:scale-110 transition-all shadow-sm"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: User Profile Photo with Glowing Frame & Floating Tech Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-64 sm:w-80 md:w-96 aspect-[4/5]">
              {/* Outer Neon Glow Layer */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 rounded-3xl blur-xl opacity-60 dark:opacity-75 animate-pulse-glow" />

              {/* Photo Card Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden bg-slate-900 border-2 border-indigo-500/40 shadow-2xl p-1.5">
                <img
                  src={profilePhoto || personalInfo.photoUrl}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-center rounded-[20px]"
                  onError={(e) => {
                    e.currentTarget.src = personalInfo.photoUrl || '/pratik-photo.jpg';
                  }}
                />

                {/* Bottom subtle glass gradient over photo */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex items-end p-4">
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <p className="text-white font-bold text-sm sm:text-base font-display">
                        {personalInfo.name}
                      </p>
                      <p className="text-[11px] font-mono text-cyan-300">
                        {personalInfo.role.split('|')[0]}
                      </p>
                    </div>
                    <div className="p-1.5 rounded-lg bg-indigo-600/80 text-white shadow-sm">
                      <Code2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Tech Badges */}
              {floatingIcons.map((item, idx) => {
                const IconComp = item.Icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ y: 0 }}
                    animate={{ y: [-6, 6, -6] }}
                    transition={{
                      duration: 4 + idx,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: item.delay,
                    }}
                    className={`absolute ${item.pos} z-20 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 dark:bg-slate-900/95 border border-slate-700/80 shadow-glow-sm backdrop-blur-md`}
                  >
                    <IconComp className={`w-4 h-4 ${item.color}`} />
                    <span className="text-xs font-mono font-semibold text-white">
                      {item.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
