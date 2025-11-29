import React from 'react';
import { PROCESS_STEPS, FAQ } from '../constants';
import { motion } from 'framer-motion';

const Process: React.FC = () => {
    return (
        <div className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-20 text-center"
            >
                <h1 className="font-display text-5xl md:text-7xl font-black mb-6 tracking-tighter">
                    THE <span className="text-brand-red">BLUEPRINT</span>
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    A transparent look at how we take your project from concept to completion.
                </p>
            </motion.div>

            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
                {PROCESS_STEPS.map((step, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        key={step.number}
                        className="relative pl-12 border-l border-white/10"
                    >
                        <span className="absolute -left-[19px] top-0 w-10 h-10 bg-black border border-brand-red rounded-full flex items-center justify-center text-brand-red font-bold text-sm">
                            {step.number}
                        </span>
                        <h3 className="font-display text-3xl font-bold mb-4">{step.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{step.description}</p>
                    </motion.div>
                ))}
            </div>

            {/* FAQ Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto"
            >
                <h2 className="font-display text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    {FAQ.map((item, index) => (
                        <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                            <h3 className="font-bold text-lg mb-3 text-white">{item.question}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.answer}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Process;
