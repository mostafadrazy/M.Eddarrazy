import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
    return (
        <section className="py-32 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/5">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h3 className="text-gray-500 uppercase tracking-widest text-xs font-bold mb-2">Trusted By</h3>
                <div className="flex justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700 mt-8 flex-wrap">
                    {/* Mock Logos using text for cleanliness */}
                    <span className="text-xl font-display font-bold text-white tracking-tighter">SLIMSTOCK</span>
                    <span className="text-xl font-display font-bold text-white tracking-tighter">DIGIREACH</span>
                    <span className="text-xl font-display font-bold text-white tracking-tighter">S2M</span>
                </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {TESTIMONIALS.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="relative bg-white/5 rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-colors"
                    >
                        <i className="fas fa-quote-left text-3xl text-white/10 absolute top-8 left-8"></i>
                        <div className="relative z-10 pt-6">
                            <p className="text-xl md:text-2xl text-white font-light leading-relaxed mb-8">
                                "{testimonial.quote}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-brand-red to-red-900 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                    {testimonial.author.charAt(0)}
                                </div>
                                <div>
                                    <div className="text-white font-bold text-sm">{testimonial.author}</div>
                                    <div className="text-gray-500 text-xs uppercase tracking-wide">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;