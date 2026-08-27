import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, GraduationCap, Sparkles, Star, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import convocationPhoto from '../assets/pratik-convocation.jpg';
import profilePhoto from '../assets/pratik-photo.jpg';

export const Achievement = () => {
  return (
    <section id="achievements" className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background glow effects that adapt to theme */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/10 dark:bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Academic Milestone"
          title="Excellence in Academics &"
          highlight="University Ranker"
          subtitle="Demonstrating consistent dedication, discipline, and strong analytical problem-solving foundation."
        />

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl border border-amber-500/30 dark:border-amber-500/30 bg-white/80 dark:bg-slate-900/80 p-8 sm:p-12 shadow-xl dark:shadow-2xl backdrop-blur-xl overflow-hidden"
          >
            {/* Top gold accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-500 via-yellow-400 to-indigo-500" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Photo column */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative group">
                  <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-500 via-yellow-400 to-indigo-500 opacity-30 group-hover:opacity-60 blur-lg transition duration-500" />
                  <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500/40 bg-slate-100 dark:bg-slate-900 w-full max-w-sm sm:max-w-md shadow-lg">
                    <img
                      src={convocationPhoto || "/pratik-convocation.jpg"}
                      alt="Pratik Kamble Convocation & University 2nd Ranker"
                      className="w-full h-auto object-cover max-h-[420px] transform group-hover:scale-105 transition duration-500"
                      onError={(e) => {
                        e.currentTarget.src = profilePhoto || '/pratik-photo.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-center">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-500/20 border border-amber-500/50 text-amber-300 backdrop-blur-md">
                        <Trophy className="w-3.5 h-3.5 text-yellow-400" /> Convocation Ceremony
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text & Details column */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-mono font-semibold">
                  <Award className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                  <span>Rank Holder Recognition</span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
                    University <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 dark:from-amber-400 dark:via-yellow-300 dark:to-amber-500">2nd Ranker</span> 🥈
                  </h3>
                  <p className="text-base sm:text-lg font-medium text-indigo-600 dark:text-indigo-300 mt-2 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-amber-500 dark:text-amber-400 shrink-0" />
                    Shivaji University, Kolhapur
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Honored as the <strong className="text-amber-600 dark:text-amber-300 font-semibold">University 2nd Rank Holder</strong> across the entire Shivaji University for academic distinction, high merit, and exemplary performance throughout the degree curriculum.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 shrink-0">
                      <Star className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">Achievement</h4>
                      <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">2nd University Merit Rank</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">Impact</h4>
                      <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">Discipline & Problem Solving</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    'Academic Distinction',
                    'University Merit',
                    'Computer Science Foundations',
                    'Algorithms & Logic',
                  ].map((tag, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
