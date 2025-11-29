import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';

const WorkSection: React.FC = () => {
  const [modalProject, setModalProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-32 px-4 md:px-12 max-w-[1600px] mx-auto">

      <div className="flex flex-col md:flex-row justify-between items-end mb-20">
        <h2 className="font-display text-5xl md:text-8xl font-black text-white tracking-tighter uppercase">
          Selected <span className="text-outline-red">Projects</span>
        </h2>
        <span className="text-brand-red font-mono text-sm tracking-widest hidden md:block">/// ARCHIVE 2024-2025</span>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">

        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`group relative overflow-hidden bg-surface cursor-pointer ${project.className || 'aspect-[4/5]'}`}
            onClick={() => {
              if (project.externalLink) {
                window.open(project.externalLink, '_blank');
              } else {
                setModalProject(project);
              }
            }}
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>

            {project.type === 'video' ? (
              <video
                src={project.videoUrl}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                muted loop autoPlay playsInline
              />
            ) : (
              <img
                src={project.videoUrl}
                alt={project.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
              />
            )}

            <div className="absolute inset-0 border-[1px] border-white/5 group-hover:border-brand-red/50 transition-colors z-20 pointer-events-none"></div>

            <div className="absolute bottom-0 left-0 w-full p-8 z-20">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-brand-red font-bold uppercase tracking-widest text-[10px] mb-2 block">{project.category}</span>
                <h3 className="text-3xl font-display font-bold text-white uppercase tracking-tight">{project.title}</h3>
                {project.description && (
                  <p className="text-gray-400 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{project.description}</p>
                )}
              </div>
            </div>
          </motion.div>
        ))}

      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {modalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setModalProject(null)}
          >
            <button className="absolute top-8 right-8 text-white text-xl hover:text-brand-red transition-colors z-50">
              CLOSE <i className="fas fa-times ml-2"></i>
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-full max-w-7xl aspect-video bg-black border border-white/10 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                controls
                autoPlay
                className="w-full h-full object-contain"
                src={modalProject.videoUrl}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WorkSection;