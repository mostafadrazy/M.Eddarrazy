import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
    return (
        <section id="services" className="py-32 px-4 md:px-8 max-w-7xl mx-auto">

            <div className="flex flex-col md:flex-row gap-16 md:gap-32 items-start">
                {/* Header */}
                <div className="md:w-1/3 sticky top-32">
                    <span className="text-brand-red font-mono text-xs uppercase tracking-widest mb-4 block">Capabilities</span>
                    <h2 className="font-display text-5xl md:text-6xl font-black text-white leading-none mb-8">
                        What<br />I Do
                    </h2>
                    <p className="text-gray-400 leading-relaxed font-light text-lg">
                        Combining technical precision with artistic vision to deliver comprehensive digital solutions.
                    </p>
                </div>

                {/* Services List */}
                <div className="md:w-2/3 flex flex-col gap-4">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-surface hover:bg-white/5 border border-white/5 rounded-3xl p-8 md:p-12 transition-all duration-500 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                                <i className={`fas ${index === 0 ? 'fa-film' : index === 1 ? 'fa-layer-group' : 'fa-code'} text-4xl text-brand-red`}></i>
                            </div>

                            <h3 className="text-3xl font-display font-bold text-white mb-4 group-hover:text-brand-red transition-colors">{service.title}</h3>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg group-hover:text-gray-300 transition-colors">
                                {service.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {service.tools.map((tool, i) => (
                                    <span key={i} className="text-xs font-bold uppercase tracking-wide text-gray-500 bg-black/50 px-4 py-2 rounded-full border border-white/5 group-hover:border-brand-red/30 group-hover:text-white transition-colors">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;