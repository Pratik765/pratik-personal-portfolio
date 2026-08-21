import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { ArchitectureDiagram } from '../components/ArchitectureDiagram';
import { ArchitectureModal } from '../components/ArchitectureModal';
import { architectureSectionData } from '../data/portfolio';
import { Boxes, GitFork, Network, Database, Maximize2, Sparkles, CheckCircle2 } from 'lucide-react';

export const Architecture = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const pillarIcons = {
    Boxes,
    GitFork,
    Network,
    Database,
  };

  const sampleProjectForModal = {
    title: "MERN Stack Full-Scale Application",
    technologies: ["React 18", "Redux Toolkit", "Node.js", "Express.js", "JWT", "MongoDB", "Mongoose", "Axios"],
    architecture: {
      title: "Complete Enterprise MERN Architecture Flow",
      summary: "End-to-end data lifecycle from user interactions in React to NoSQL document persistence and cache layers.",
      flowSteps: [
        { label: "1. User Interaction & React UI", desc: "React 18 Functional Components with Tailwind styling and custom hooks" },
        { label: "2. State & Data Cache", desc: "Redux Toolkit slices, RTK Query cache invalidation, and async thunks" },
        { label: "3. Secure API Transport Layer", desc: "Axios client with Bearer Token interceptor, CSRF protection & error handler" },
        { label: "4. Express Routing & Middleware", desc: "Modular express.Router(), JWT token verification, CORS & rate limiter" },
        { label: "5. Controllers & Business Services", desc: "Request validation (Joi/Zod), domain service logic, transactional operations" },
        { label: "6. MongoDB & Persistence", desc: "Mongoose ODM schemas, compound indexes, lean queries and aggregations" },
      ]
    },
    keyFeatures: [
      "Layered separation of concerns between presentation, state, and network",
      "Stateless JWT access/refresh token authentication flow",
      "Defensive error handling with custom Express error middleware",
      "Optimistic UI updates with graceful fallback rollbacks"
    ]
  };

  return (
    <section id="architecture" className="py-20 sm:py-24 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Engineering Methodology"
          title={architectureSectionData.title}
          highlight="& Architecture"
          subtitle={architectureSectionData.description}
        />

        {/* 4 Architectural Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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

        {/* Interactive Architecture Flow Panel */}
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-950/90 border border-slate-800 shadow-2xl text-white relative overflow-hidden backdrop-blur-xl">
          {/* Ambient background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 text-cyan-300 border border-indigo-500/30 font-semibold">
                  Standard Architecture
                </span>
                <span className="text-xs font-mono text-slate-400">Microservices & Layered MERN</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-display text-white">
                End-to-End Microservices & MERN Pipeline
              </h3>
            </div>

            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-glow-sm hover:shadow-glow-md transition-all self-start sm:self-auto active:scale-95"
            >
              <Maximize2 className="w-4 h-4" />
              <span>Expand Full Spec Modal</span>
            </button>
          </div>

          {/* Interactive Architecture Diagram */}
          <div className="relative z-10">
            <ArchitectureDiagram
              projectTitle="Enterprise Microservices & MERN Blueprint"
              architectureData={{
                flowSteps: [
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
                ]
              }}
            />
          </div>
        </div>

        {/* Full Modal */}
        <ArchitectureModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          project={sampleProjectForModal}
        />
      </div>
    </section>
  );
};
