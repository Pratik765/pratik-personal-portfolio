import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { ArchitectureModal } from '../components/ArchitectureModal';
import { projects } from '../data/portfolio';

export const Projects = () => {
  const [selectedProjectForArch, setSelectedProjectForArch] = useState(null);

  const handleOpenArchitecture = (project) => {
    setSelectedProjectForArch(project);
  };

  const handleCloseArchitecture = () => {
    setSelectedProjectForArch(null);
  };

  return (
    <section id="projects" className="py-20 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Featured Work"
          title="Engineered Web Applications &"
          highlight="Full-Stack Projects"
          subtitle="Real-world production-ready applications built with modern React, Redux Toolkit, Node.js, Express, and MongoDB."
        />

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpenArchitecture={handleOpenArchitecture}
            />
          ))}
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
