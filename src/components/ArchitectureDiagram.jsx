import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Smartphone,
  Server,
  Shield,
  Layers,
  Database,
  ArrowDown,
  ArrowRight,
  Sparkles,
  Info,
  CheckCircle2,
  Cpu,
  Boxes
} from 'lucide-react';

export const ArchitectureDiagram = ({ projectTitle, architectureData, isDetailed = false }) => {
  const [selectedNode, setSelectedNode] = useState(null);

  const defaultNodes = [
    {
      label: "1. Presentation Layer (React 19 SPA)",
      tech: "React 19 • Tailwind CSS • Framer Motion • Redux",
      desc: "Declarative, responsive UI components with clean separation of concerns, accessible interactive forms, and custom hook abstractions.",
    },
    {
      label: "2. API Gateway & Reverse Proxy",
      tech: "Node.js • Express Gateway • Port :5000",
      desc: "Centralized edge routing delegating incoming /pc/* requests to corresponding microservices with CORS and logging.",
    },
    {
      label: "3. Microservices & Interservice Auth",
      tech: "JWT • Email OTP • Role-Based Access Control",
      desc: "Stateless authentication, automated OTP verification pipeline, and strict tiered access (ADMIN, HR, EMPLOYEE).",
    },
    {
      label: "4. Core Domain Microservices",
      tech: "User • Leave • Attendance • Payroll Services",
      desc: "Decoupled business logic services running on isolated ports (:5001 - :5008) with interservice HTTP synchronization.",
    },
    {
      label: "5. Database-Per-Service Persistence",
      tech: "8 Isolated MongoDB Databases • Mongoose Schemas",
      desc: "Complete data isolation where each microservice owns its dedicated database (pc_auth_db, pc_user_db, pc_payroll_db).",
    },
  ];

  const nodesToRender = architectureData?.flowSteps || defaultNodes;

  const colorStyles = [
    {
      border: 'border-indigo-500/40 hover:border-indigo-400',
      bg: 'bg-slate-900/90 hover:bg-slate-850',
      badge: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
      number: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30',
      glow: 'hover:shadow-[0_0_25px_rgba(99,102,241,0.25)]',
    },
    {
      border: 'border-cyan-500/40 hover:border-cyan-400',
      bg: 'bg-slate-900/90 hover:bg-slate-850',
      badge: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      number: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
      glow: 'hover:shadow-[0_0_25px_rgba(6,182,212,0.25)]',
    },
    {
      border: 'border-purple-500/40 hover:border-purple-400',
      bg: 'bg-slate-900/90 hover:bg-slate-850',
      badge: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      number: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
      glow: 'hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]',
    },
    {
      border: 'border-amber-500/40 hover:border-amber-400',
      bg: 'bg-slate-900/90 hover:bg-slate-850',
      badge: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      number: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
      glow: 'hover:shadow-[0_0_25px_rgba(245,158,11,0.25)]',
    },
    {
      border: 'border-emerald-500/40 hover:border-emerald-400',
      bg: 'bg-slate-900/90 hover:bg-slate-850',
      badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      number: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
      glow: 'hover:shadow-[0_0_25px_rgba(16,185,129,0.25)]',
    },
  ];

  return (
    <div className="w-full">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-5 mb-6 rounded-2xl bg-slate-950/90 border border-slate-800/90 text-white shadow-lg backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 text-white shadow-glow-sm">
            <Boxes className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-sm sm:text-base text-white font-display">
              {projectTitle || 'Production-Ready MERN & Microservices Architecture'}
            </h4>
            <p className="text-xs text-slate-400 font-mono mt-0.5">
              Interactive System Flow • Click any node to inspect data contracts
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono bg-emerald-950/60 px-3 py-1.5 rounded-full border border-emerald-500/40 text-emerald-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Active Architecture</span>
        </div>
      </div>

      {/* Nodes Layout */}
      <div className="space-y-4">
        {nodesToRender.map((node, index) => {
          const style = colorStyles[index % colorStyles.length];
          const isSelected = selectedNode === index;

          return (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => setSelectedNode(isSelected ? null : index)}
                className={`relative p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${style.bg} ${style.border} ${style.glow} ${
                  isSelected ? 'ring-2 ring-indigo-500 shadow-glow-md bg-slate-800' : ''
                } backdrop-blur-xl group`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start sm:items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center font-mono font-bold text-sm shrink-0 shadow-sm transition-transform group-hover:scale-105 ${style.number}`}>
                      0{index + 1}
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h5 className="font-bold text-base sm:text-lg text-white group-hover:text-cyan-300 transition-colors">
                          {node.label || node.title}
                        </h5>
                        <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium border ${style.badge}`}>
                          {node.tech || 'Core Module'}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                        {node.desc || node.description}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center justify-end gap-1.5 text-xs font-mono text-slate-400 group-hover:text-indigo-400 transition-colors">
                    <Info className="w-4 h-4" />
                    <span>{isSelected ? 'Collapse' : 'Inspect'}</span>
                  </div>
                </div>

                {/* Expanded Details Pane */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-slate-700/60 text-xs font-mono text-slate-300 space-y-2 overflow-hidden"
                    >
                      <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 space-y-2">
                        <div className="text-cyan-400 font-semibold flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Architectural Specifications & Contracts:
                        </div>
                        <p className="text-slate-300 font-sans text-xs sm:text-sm">
                          {node.desc || 'Strict boundary isolation, type-safe data pipelines, automated error boundary rollbacks, and clean RESTful interfaces.'}
                        </p>
                        <div className="pt-2 text-slate-400 flex flex-wrap items-center justify-between gap-2 border-t border-slate-800/80">
                          <span className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            Status: High Availability
                          </span>
                          <span className="text-cyan-400 font-mono">Response Time: &lt;15ms</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Connecting animated arrow */}
              {index < nodesToRender.length - 1 && (
                <div className="flex justify-center my-1.5">
                  <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-950/90 border border-slate-800 text-indigo-400 shadow-md text-xs font-mono backdrop-blur-md">
                    <ArrowDown className="w-3.5 h-3.5 animate-bounce text-cyan-400" />
                    <span className="text-[11px] text-slate-400 font-medium">
                      Interservice HTTP / REST Stream
                    </span>
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

