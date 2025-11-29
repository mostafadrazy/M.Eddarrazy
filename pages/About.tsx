import React from 'react';
import { GEAR_STACK } from '../constants';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    return (
        <div className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-20"
            >
                <h1 className="font-display text-5xl md:text-7xl font-black mb-6 tracking-tighter">
                    BEHIND THE <span className="text-brand-red">PIXELS</span>
                </h1>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="font-display text-3xl font-bold mb-6">The Story</h2>
                    <div className="space-y-6 text-gray-300 leading-relaxed">
                        <p>
                            My journey didn't start with code or cameras—it started with words. With a background in English Literature, I learned the art of storytelling before I ever opened a timeline or wrote a line of Python.
                        </p>
                        <p>
                            Today, I bridge the gap between creative expression and technical precision. Whether I'm editing a high-energy commercial or building a complex SaaS platform, the core mission remains the same: <strong className="text-white">to communicate ideas with impact.</strong>
                        </p>
                        <p>
                            Based in Salé, Morocco, I work with clients globally, bringing a unique blend of narrative intuition and technical problem-solving to every project.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="font-display text-3xl font-bold mb-6">Philosophy</h2>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                        <blockquote className="text-xl italic text-gray-300 mb-6">
                            "Design is not just what it looks like and feels like. Design is how it works."
                        </blockquote>
                        <p className="text-gray-400">
                            I believe that great work lives at the intersection of aesthetics and functionality. A beautiful video that doesn't hold attention is a failure. A robust app that feels clunky is a missed opportunity. I strive for that sweet spot where form enhances function.
                        </p>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="font-display text-3xl font-bold mb-10 text-center">My Gear & Stack</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {Object.entries(GEAR_STACK).map(([category, items], index) => (
                        <div key={category} className="bg-black border border-white/10 rounded-xl p-6">
                            <h3 className="font-display text-xl font-bold mb-6 capitalize text-brand-red">
                                {category}
                            </h3>
                            <ul className="space-y-3">
                                {items.map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default About;
