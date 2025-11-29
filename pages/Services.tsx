import React from 'react';
import { DETAILED_SERVICES } from '../constants';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
    return (
        <div className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-20 text-center"
            >
                <h1 className="font-display text-5xl md:text-7xl font-black mb-6 tracking-tighter">
                    CAPABILITIES <span className="text-brand-red">&</span> PACKAGES
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Comprehensive creative and technical solutions tailored to elevate your brand.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {DETAILED_SERVICES.map((service, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        key={service.title}
                        className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col hover:border-brand-red/50 transition-colors group"
                    >
                        <div className="mb-6">
                            <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-brand-red transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>

                        <div className="mb-8 flex-grow">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4">Includes</h4>
                            <ul className="space-y-3">
                                {service.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3 text-sm text-gray-300">
                                        <i className="fas fa-check text-brand-red mt-1"></i>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="pt-6 border-t border-white/10">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-2">Ideal For</h4>
                            <p className="text-white font-medium text-sm">{service.idealFor}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-20 text-center">
                <p className="text-xl text-gray-300 mb-8">Need a custom package?</p>
                <a
                    href="/contact"
                    className="inline-block bg-brand-red text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-red-700 transition-colors"
                >
                    Book a Discovery Call
                </a>
            </div>
        </div>
    );
};

export default Services;
