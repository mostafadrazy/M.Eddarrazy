import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
    return (
        <section id="process" className="py-32 bg-surface relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <div className="flex flex-col md:flex-row gap-16 md:gap-32">

                    {/* Header */}
                    <div className="md:w-1/3">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="sticky top-32"
                        >
                            <span className="text-brand-red font-mono text-xs uppercase tracking-widest mb-4 block">The Method</span>
                            <h2 className="font-display text-5xl text-white font-bold tracking-tighter mb-6">
                                Order from <br /> <span className="text-gray-600">Chaos</span>
                            </h2>
                            <p className="text-gray-400 leading-relaxed font-light">
                                Great work isn't accidental. It's the result of a rigorous process that bridges the gap between abstract creativity and concrete delivery.
                            </p>
                            <div className="mt-8">
                                <a href="#contact" className="text-white text-sm font-bold border-b border-white/20 pb-1 hover:border-white transition-all">Start a project</a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Steps */}
                    <div className="md:w-2/3 space-y-12">
                        {PROCESS_STEPS.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: index * 0.1 }}
                                className="group flex gap-6 md:gap-10 border-b border-white/5 pb-12 last:border-0"
                            >
                                <span className="font-display text-5xl md:text-7xl font-bold text-white/10 group-hover:text-brand-red/20 transition-colors duration-500">
                                    {step.number}
                                </span>
                                <div className="pt-3 md:pt-6">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-red transition-colors">{step.title}</h3>
                                    <p className="text-gray-400 text-lg font-light leading-relaxed max-w-lg">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Process;