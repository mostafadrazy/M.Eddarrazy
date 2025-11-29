import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Work: React.FC = () => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))];

    const filteredProjects = filter === 'All'
        ? PROJECTS
        : PROJECTS.filter(p => p.category === filter);

    return (
        <div className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-16"
            >
                <h1 className="font-display text-5xl md:text-7xl font-black mb-6 tracking-tighter">
                    THE <span className="text-brand-red">ARCHIVE</span>
                </h1>
                <p className="text-gray-400 max-w-2xl text-lg">
                    A curated collection of commercial work, creative experiments, and technical solutions.
                </p>
            </motion.div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest border transition-all ${filter === cat
                            ? 'bg-brand-red border-brand-red text-white'
                            : 'border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Project Grid */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode='popLayout'>
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            key={project.id}
                            className={`group relative bg-white/5 rounded-xl overflow-hidden border border-white/10 ${project.className || ''}`}
                        >
                            <div className={`relative w-full overflow-hidden ${project.aspect === 'vertical' ? 'aspect-[9/16]' :
                                project.aspect === 'square' ? 'aspect-square' : 'aspect-video'
                                }`}>
                                {project.type === 'video' ? (
                                    <video
                                        src={project.videoUrl}
                                        muted
                                        loop
                                        playsInline
                                        autoPlay
                                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                                    />
                                ) : (
                                    <img
                                        src={project.videoUrl}
                                        alt={project.title}
                                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                                    />
                                )}

                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 transition-opacity duration-300" />

                                <div className="absolute bottom-0 left-0 p-6 w-full">
                                    <span className="text-brand-red text-xs font-bold uppercase tracking-widest mb-2 block">
                                        {project.category}
                                    </span>
                                    <h3 className="font-display text-2xl font-bold mb-2">{project.title}</h3>
                                    {project.description && (
                                        <p className="text-gray-400 text-sm line-clamp-2 mb-4">{project.description}</p>
                                    )}
                                    {project.externalLink && (
                                        <a
                                            href={project.externalLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-brand-red transition-colors"
                                        >
                                            Visit Site <i className="fas fa-arrow-right"></i>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default Work;
