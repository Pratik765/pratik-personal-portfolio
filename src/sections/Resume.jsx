import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { personalInfo } from '../data/portfolio';
import { Download, Eye, FileText, CheckCircle2, Award, Briefcase, GraduationCap } from 'lucide-react';

export const Resume = () => {
  return (
    <section id="resume" className="py-16 sm:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Curriculum Vitae"
          title="Professional Resume &"
          highlight="Credentials"
          subtitle="A comprehensive record of my full-stack training experience, technical stack, and verified developer skills."
        />

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 sm:p-12 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-2xl backdrop-blur-xl relative overflow-hidden"
          >
            {/* Ambient accent glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
              {/* Left Column: Resume Highlights */}
              <div className="md:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border border-indigo-500/30">
                    <FileText className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
                      Pratik Kamble
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-indigo-600 dark:text-indigo-400">
                      MERN Stack & React.js Developer
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Looking for a recruiter-ready technical summary? Download my latest resume for a full breakdown of my training background at Know-IT C-DAC ACTS Pune, core competencies, and project portfolio.
                </p>

                <div className="space-y-2.5 text-xs sm:text-sm font-mono text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-indigo-500" />
                    <span>Experience: 2.5+ Years in Full-Stack Training & Dev</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-cyan-400" />
                    <span>Specialty: React 18, Redux Toolkit, Express, MongoDB</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-emerald-400" />
                    <span>Mentorship: 150+ Full-Stack Engineers Guided</span>
                  </div>
                </div>

                {/* Download and View Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <a
                    href={personalInfo.resumeUrl}
                    download="Pratik_Kamble_Resume.pdf"
                    className="px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-glow-sm hover:shadow-glow-md transition-all duration-200 flex items-center gap-2 active:scale-95"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download PDF Resume</span>
                  </a>

                  <a
                    href={personalInfo.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-indigo-500 dark:hover:text-indigo-400 border border-slate-200 dark:border-slate-700 text-sm font-semibold transition-all flex items-center gap-2 active:scale-95"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View in Tab</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Visual PDF Document Mockup */}
              <div className="md:col-span-5 flex justify-center">
                <div className="w-full max-w-[280px] aspect-[1/1.4] rounded-2xl bg-slate-950 border border-slate-700/80 p-5 shadow-2xl flex flex-col justify-between text-slate-400 font-mono text-[10px] relative group hover:border-indigo-500/60 transition-all">
                  {/* Top header bar */}
                  <div className="border-b border-slate-800 pb-3">
                    <div className="w-12 h-1 bg-indigo-500 rounded-full mb-2" />
                    <div className="text-white font-bold text-xs">PRATIK KAMBLE</div>
                    <div className="text-[9px] text-indigo-400">MERN Developer Resume</div>
                  </div>

                  {/* Body skeleton lines */}
                  <div className="space-y-3 py-2">
                    <div>
                      <div className="text-slate-300 font-bold mb-1">EXPERIENCE</div>
                      <div className="w-full h-1 bg-slate-800 rounded" />
                      <div className="w-4/5 h-1 bg-slate-800 rounded mt-1" />
                    </div>

                    <div>
                      <div className="text-slate-300 font-bold mb-1">TECHNICAL SKILLS</div>
                      <div className="w-full h-1 bg-slate-800 rounded" />
                      <div className="w-3/4 h-1 bg-slate-800 rounded mt-1" />
                    </div>

                    <div>
                      <div className="text-slate-300 font-bold mb-1">PROJECTS</div>
                      <div className="w-full h-1 bg-slate-800 rounded" />
                      <div className="w-2/3 h-1 bg-slate-800 rounded mt-1" />
                    </div>
                  </div>

                  {/* Bottom badge */}
                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[8px] text-slate-500">
                    <span>PDF • Verified</span>
                    <span className="text-emerald-400">Ready for Review</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
