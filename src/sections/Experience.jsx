import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { TimelineItem } from '../components/TimelineItem';
import { experience } from '../data/portfolio';

export const Experience = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Work & Mentorship"
          title="Professional Experience &"
          highlight="Training Track Record"
          subtitle="Mentoring the next generation of full-stack developers while driving hands-on technical architecture."
        />

        <div>
          {experience.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
