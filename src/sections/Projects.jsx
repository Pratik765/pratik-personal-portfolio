import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { ArchitectureModal } from '../components/ArchitectureModal';
import { projects } from '../data/portfolio';
import { Server, ShoppingBag, Activity, Sparkles } from 'lucide-react';

const nodeIcons = [
  <Server className="w-4 h-4 text-indigo-400" />,
  <ShoppingBag className="w-4 h-4 text-rose-400" />,
  <Activity className="w-4 h-4 text-purple-400" />,
];

export const Projects = () => {
  const [selectedProjectForArch, setSelectedProjectForArch] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const handleOpenArchitecture = (project) => {
    setSelectedProjectForArch(project);
  };

  const handleCloseArchitecture = () => {
    setSelectedProjectForArch(null);
  };

  return (
    <section id="projects" ref={sectionRef} className="py-14 sm:py-16 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-indigo-500/8 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-purple-500/8 dark:bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Engineering Pathway"
          title="Engineered Web Applications &"
          highlight="Full-Stack Projects"
          subtitle="Explore the progression from distributed enterprise microservices to interactive frontend web experiences."
        />

        {/* ─── PATHWAY CONTAINER ─── */}
        <div className="relative mt-16 sm:mt-20">
          {/* Vertical Central Pathway Spine Line */}
          <div className="absolute top-8 bottom-8 left-6 lg:left-1/2 lg:-translate-x-1/2 w-0.5 pointer-events-none">
            {/* Base spine track */}
            <div className="w-full h-full bg-slate-200 dark:bg-slate-800 rounded-full" />

            {/* Animated glowing gradient stroke */}
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: '100%' } : { height: 0 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-indigo-500 via-rose-500 to-purple-500 shadow-glow-sm"
            />
          </div>

          {/* Project Pathway Items */}
          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            {projects.map((project, index) => {
              const isEven = index % 2 === 0; // index 0 (left), index 1 (right), index 2 (left)

              return (
                <div key={project.id} className="relative flex flex-col lg:flex-row items-center">
                  {/* Pathway Milestone Node (Center on Desktop, Left on Mobile) */}
                  <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                      transition={{ delay: 0.2 + index * 0.2, type: 'spring', stiffness: 300, damping: 20 }}
                      className="relative flex items-center justify-center"
                    >
                      {/* Pulse Ring */}
                      <span className="absolute w-12 h-12 rounded-full bg-indigo-500/20 dark:bg-indigo-400/20 animate-ping opacity-60" />
                      
                      {/* Central Node Badge */}
                      <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white dark:bg-slate-900 border-2 border-indigo-500/60 dark:border-indigo-400/80 shadow-xl flex items-center justify-center backdrop-blur-md">
                        {nodeIcons[index] || <Sparkles className="w-4 h-4 text-indigo-400" />}
                      </div>

                      {/* Phase index label */}
                      <div className="hidden lg:block absolute -top-6 whitespace-nowrap px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-slate-900/90 text-white border border-slate-700 shadow-md">
                        0{index + 1}
                      </div>
                    </motion.div>
                  </div>

                  {/* Horizontal Connector Line for Desktop */}
                  <div
                    className={`hidden lg:block absolute top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r ${
                      isEven
                        ? 'right-1/2 w-8 bg-gradient-to-l from-indigo-500 to-transparent'
                        : 'left-1/2 w-8 bg-gradient-to-r from-indigo-500 to-transparent'
                    }`}
                  />

                  {/* Card Container: Alternating Left / Right on Desktop, Indented on Mobile */}
                  <div
                    className={`w-full pl-16 lg:pl-0 lg:w-1/2 ${
                      isEven ? 'lg:pr-12 lg:mr-auto' : 'lg:pl-12 lg:ml-auto'
                    }`}
                  >
                    <ProjectCard
                      project={project}
                      index={index}
                      isEven={isEven}
                      onOpenArchitecture={handleOpenArchitecture}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Architecture Spec Modal */}
        <ArchitectureModal
          isOpen={!!selectedProjectForArch}
          onClose={handleCloseArchitecture}
          project={selectedProjectForArch}
        />
      </div>
    </section>
  );
};
