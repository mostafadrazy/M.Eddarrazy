import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION } from '../constants';

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="py-32 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">

                {/* Image Column */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 relative group"
                >
                    <div className="relative overflow-hidden rounded-[2rem] aspect-[3/4]">
                        <div className="absolute inset-0 bg-brand-red/10 mix-blend-overlay z-10"></div>
                        <img
                            src="https://res.cloudinary.com/dmnqlruhl/image/upload/v1764382689/c02e59e2_Large_dpwia7.png"
                            alt="Mustapha Eddarrazy"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                        />
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-brand-red/10 rounded-full blur-3xl"></div>
                    <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
                </motion.div>

                {/* Content Column */}
                <div className="md:w-1/2 space-y-12">
                    <div>
                        <span className="text-brand-red font-mono text-xs uppercase tracking-widest mb-4 block">Profile</span>
                        <h2 className="font-display text-5xl md:text-7xl font-black text-white leading-[0.9] mb-8">
                            Visual<br />Director
                        </h2>
                        <p className="text-xl text-gray-300 font-light leading-relaxed">
                            I'm Mustapha Eddarrazy, a multidisciplinary creative based in Salé, Morocco. I bridge the gap between technical execution and artistic vision.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <p className="text-gray-400 leading-relaxed">
                            With a background in English Literature and years of hands-on experience in video production and design, I bring a unique narrative-first approach to every project. Whether it's crafting a cinematic sequence or building a digital product, my focus remains the same: <span className="text-white font-bold">impact.</span>
                        </p>

                        {/* Education */}
                        <div className="border-l-2 border-brand-red/30 pl-6 py-2">
                            <span className="text-xs font-bold text-brand-red uppercase tracking-widest block mb-1">Education</span>
                            <h4 className="text-white font-bold text-lg">BA, English Language & Literature</h4>
                            <p className="text-gray-500 text-sm">Mohammed V University in Rabat • 2021 - 2024</p>
                        </div>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                        <div>
                            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                                <i className="fas fa-layer-group text-brand-red text-sm"></i> Focus
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>Video Editing</li>
                                <li>Graphic Design</li>
                                <li>Brand Strategy</li>
                                <li>Web Development</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                                <i className="fas fa-tools text-brand-red text-sm"></i> Toolkit
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>Adobe Premiere Pro</li>
                                <li>After Effects</li>
                                <li>Photoshop & Illustrator</li>
                                <li>Python & React</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;