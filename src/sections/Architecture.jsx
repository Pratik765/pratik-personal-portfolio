import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { architectureSectionData } from '../data/portfolio';
import {
  Boxes, GitFork, Network, Database,
  Monitor, Shield, Server, HardDrive,
  ChevronRight, Layers, Cpu
} from 'lucide-react';

const flowNodes = [
  {
    id: 'ui',
    label: 'React Frontend',
    tech: 'React 19 • Tailwind • Redux Toolkit',
    desc: 'Declarative SPA with responsive UI, custom hooks, protected routes, and Framer Motion transitions.',
    icon: Monitor,
    color: 'from-indigo-500 to-cyan-500',
    borderColor: 'border-indigo-500/40',
    bgGlow: 'bg-indigo-500/10',
  },
  {
    id: 'gateway',
    label: 'API Gateway',
    tech: 'Express.js Reverse Proxy • Port :5000',
    desc: 'Centralized edge routing, CORS, request logging, and delegation to downstream microservices.',
    icon: Layers,
    color: 'from-cyan-500 to-teal-400',
    borderColor: 'border-cyan-500/40',
    bgGlow: 'bg-cyan-500/10',
  },
  {
    id: 'auth',
    label: 'Auth & Security',
    tech: 'JWT • Email OTP • RBAC Guards',
    desc: 'Stateless token authentication, automated OTP pipelines, and 3-tier Role-Based Access Control.',
    icon: Shield,
    color: 'from-amber-500 to-orange-400',
    borderColor: 'border-amber-500/40',
    bgGlow: 'bg-amber-500/10',
  },
  {
    id: 'services',
    label: 'Microservices',
    tech: 'User • Leave • Attendance • Payroll',
    desc: 'Decoupled domain services on isolated ports (:5001–:5008) with interservice HTTP sync.',
    icon: Cpu,
    color: 'from-emerald-500 to-green-400',
    borderColor: 'border-emerald-500/40',
    bgGlow: 'bg-emerald-500/10',
  },
  {
    id: 'db',
    label: 'Isolated Databases',
    tech: '8x MongoDB • Mongoose Schemas',
    desc: 'Database-Per-Service pattern: each microservice owns its dedicated MongoDB instance.',
    icon: HardDrive,
    color: 'from-purple-500 to-violet-400',
    borderColor: 'border-purple-500/40',
    bgGlow: 'bg-purple-500/10',
  },
];

export const Architecture = () => {
  const [activeNode, setActiveNode] = useState(null);

  const pillarIcons = { Boxes, GitFork, Network, Database };

  return (
    <section id="architecture" className="py-16 sm:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Engineering Methodology"
          title={architectureSectionData.title}
          highlight="& Architecture"
          subtitle={architectureSectionData.description}
        />

        {/* 4 Architectural Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {architectureSectionData.pillars.map((pillar, index) => {
            const Icon = pillarIcons[pillar.icon] || Boxes;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-3xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 backdrop-blur-md group hover:-translate-y-1"
              >
                <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border border-indigo-500/20 w-fit mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {pillar.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Horizontal Architecture Flow */}
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-950/90 border border-slate-800 shadow-2xl text-white relative overflow-hidden backdrop-blur-xl">
          {/* Background glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 text-cyan-300 border border-indigo-500/30 font-semibold">
                System Flow
              </span>
              <span className="text-xs font-mono text-slate-400">Click nodes to explore</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              MERN Microservices Pipeline
            </h3>
          </div>

          {/* Horizontal Flow — desktop */}
          <div className="relative z-10 hidden lg:flex items-stretch justify-between gap-0">
            {flowNodes.map((node, idx) => {
              const Icon = node.icon;
              const isActive = activeNode === node.id;
              return (
                <React.Fragment key={node.id}>
                  <motion.button
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    whileHover={{ y: -4, transition: { duration: 0.15 } }}
                    onClick={() => setActiveNode(isActive ? null : node.id)}
                    className={`flex-1 p-5 rounded-2xl border transition-all duration-300 cursor-pointer text-left min-w-0 ${
                      isActive
                        ? `${node.borderColor} ${node.bgGlow} shadow-lg`
                        : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
                    }`}
                  >
                    <div className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${node.color} mb-3 shadow-sm`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1 truncate">{node.label}</h4>
                    <p className="text-[10px] font-mono text-slate-400 truncate">{node.tech}</p>
                  </motion.button>

                  {/* Animated connector arrow */}
                  {idx < flowNodes.length - 1 && (
                    <div className="flex items-center px-1 shrink-0">
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + 0.3 }}
                      >
                        <ChevronRight className="w-5 h-5 text-indigo-500/60" />
                      </motion.div>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Vertical Flow — mobile/tablet */}
          <div className="relative z-10 lg:hidden space-y-3">
            {flowNodes.map((node, idx) => {
              const Icon = node.icon;
              const isActive = activeNode === node.id;
              return (
                <motion.button
                  key={node.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.08 }}
                  onClick={() => setActiveNode(isActive ? null : node.id)}
                  className={`w-full p-4 rounded-2xl border transition-all duration-300 cursor-pointer text-left flex items-center gap-4 ${
                    isActive
                      ? `${node.borderColor} ${node.bgGlow} shadow-lg`
                      : 'border-slate-800 bg-slate-900/60'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${node.color} shrink-0`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-white">{node.label}</h4>
                    <p className="text-[10px] font-mono text-slate-400 truncate">{node.tech}</p>
                  </div>
                  <ChevronRight className={`w-4 h-4 text-slate-500 shrink-0 transition-transform ${isActive ? 'rotate-90' : ''}`} />
                </motion.button>
              );
            })}
          </div>

          {/* Expandable detail panel */}
          <AnimatePresence>
            {activeNode && (
              <motion.div
                key={activeNode}
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="relative z-10 overflow-hidden"
              >
                {flowNodes
                  .filter((n) => n.id === activeNode)
                  .map((node) => {
                    const Icon = node.icon;
                    return (
                      <div
                        key={node.id}
                        className={`p-5 sm:p-6 rounded-2xl border ${node.borderColor} ${node.bgGlow}`}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${node.color} shrink-0`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-base font-bold text-white mb-1">{node.label}</h4>
                            <p className="text-xs font-mono text-slate-400 mb-3">{node.tech}</p>
                            <p className="text-sm text-slate-300 leading-relaxed">{node.desc}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
