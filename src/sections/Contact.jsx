import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { ContactForm } from '../components/ContactForm';
import { DeveloperTerminal } from '../components/DeveloperTerminal';
import { Mail, MapPin, Sparkles, Send, ArrowRight } from 'lucide-react';
import { Github, Linkedin } from '../components/BrandIcons';
import { personalInfo } from '../data/portfolio';

export const Contact = () => {
  return (
    <section id="contact" className="py-14 sm:py-16 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-indigo-900/80 via-slate-900/90 to-cyan-950/80 border border-indigo-500/30 text-white shadow-2xl backdrop-blur-xl relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for Roles & Consulting</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white">
              {personalInfo.ctaText}
            </h3>
            <p className="text-sm text-slate-300 max-w-xl font-normal">
              Whether you have an open full-stack role, need a React frontend architect, or want to discuss a new project, I'd love to connect.
            </p>
          </div>

          <a
            href={`mailto:${personalInfo.email}`}
            className="shrink-0 px-7 py-4 rounded-2xl bg-white text-slate-950 hover:bg-slate-100 font-bold text-sm shadow-xl transition-all flex items-center gap-2 active:scale-95 group"
          >
            <span>Reach Out Directly</span>
            <ArrowRight className="w-4 h-4 text-indigo-600 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <SectionHeading
          badge="Get in Touch"
          title="Start a Conversation with"
          highlight="Pratik"
          subtitle="Send me a direct message through the form or test the interactive developer terminal below."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Direct Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 shadow-sm hover:shadow-md transition-all group backdrop-blur-md"
            >
              <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border border-indigo-500/20 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Direct Email</div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-indigo-400 transition-colors truncate">
                  {personalInfo.email}
                </div>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 shadow-sm hover:shadow-md transition-all group backdrop-blur-md"
            >
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400">LinkedIn Profile</div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors truncate">
                  linkedin.com/in/pratik-k-32aba1202
                </div>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-purple-500/50 shadow-sm hover:shadow-md transition-all group backdrop-blur-md"
            >
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-500 dark:text-purple-400 border border-purple-500/20 group-hover:scale-110 transition-transform">
                <Github className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400">GitHub Profile</div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-purple-400 transition-colors truncate">
                  github.com/Pratik765
                </div>
              </div>
            </a>

            {/* Location Card */}
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-md">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border border-emerald-500/20">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Primary Location</div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">
                  {personalInfo.location} (Open to Remote & Relocation)
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

        {/* Developer Terminal Interactive Easter Egg */}
        <div className="mt-8">
          <div className="text-center mb-6">
            <h4 className="text-base font-bold font-mono text-slate-800 dark:text-slate-200 flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              Developer CLI Console
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              For engineers and recruiters: interact with my portfolio from the command line
            </p>
          </div>
          <DeveloperTerminal />
        </div>

      </div>
    </section>
  );
};
