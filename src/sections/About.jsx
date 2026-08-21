import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Server,
  Layers,
  Sparkles,
  Award,
  Users,
  Compass,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { personalInfo } from '../data/portfolio';

export const About = () => {
  const pillars = [
    {
      icon: Code,
      title: "Frontend Engineering",
      desc: "Specialized in React 18, state management with Redux Toolkit, custom hooks, component modularity, and high-performance UI rendering.",
      color: "text-indigo-400",
      border: "hover:border-indigo-500/50",
    },
    {
      icon: Server,
      title: "Full-Stack REST Architecture",
      desc: "Constructing scalable Node.js & Express backends, JWT token authentication flows, rate-limiting, and REST API controllers.",
      color: "text-cyan-400",
      border: "hover:border-cyan-500/50",
    },
    {
      icon: Users,
      title: "Technical Mentorship",
      desc: "Trained 150+ aspiring developers at Know-IT C-DAC ACTS Pune in core JavaScript algorithms, React architecture, and MERN fundamentals.",
      color: "text-purple-400",
      border: "hover:border-purple-500/50",
    },
    {
      icon: Cpu,
      title: "Scalable Database Systems",
      desc: "Designing persistent data models with MongoDB Atlas, Mongoose schemas, document aggregations, and MySQL relational queries.",
      color: "text-emerald-400",
      border: "hover:border-emerald-500/50",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="About Me"
          title="Bridging Visual Polish with"
          highlight="Robust Engineering"
          subtitle="A passionate developer dedicated to building maintainable web applications, clean architecture, and delightful user experiences."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Story Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-5 p-7 sm:p-9 rounded-3xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-md backdrop-blur-md"
          >
            <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white">
              Hello, I'm <span className="text-indigo-500">{personalInfo.name}</span>
            </h3>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              I am a <strong>MERN Stack and React.js Developer</strong> with extensive hands-on experience in architecting modern single-page applications and full-stack systems. My work focuses on writing clean, scalable JavaScript/React code with predictable state flow and seamless responsive interfaces.
            </p>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              At <strong>Know-IT C-DAC ACTS Pune</strong>, I serve as a MERN Stack Trainer where I have mentored over 150+ students through complex coding bootcamps, code reviews, and capstone project architectures. This experience has honed my communication skills, technical rigor, and deep understanding of core web fundamentals.
            </p>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2 text-xs sm:text-sm font-mono text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>Focus: Scalable Frontend Architectures & RESTful Backends</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Passion: Modern React 18, Redux Toolkit & Clean Code Patterns</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Mindset: Recruiter-ready, performance-driven & continuous learning</span>
              </div>
            </div>
          </motion.div>

          {/* 4 Architectural Pillars Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`p-6 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 ${pillar.border} transition-all duration-300 backdrop-blur-md group hover:-translate-y-1 shadow-sm hover:shadow-lg`}
                >
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 w-fit mb-4 group-hover:scale-110 transition-transform">
                    <Icon className={`w-5 h-5 ${pillar.color}`} />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
