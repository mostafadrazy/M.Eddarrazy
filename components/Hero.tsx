
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <header id="home" className="relative min-h-screen w-full flex items-center bg-black overflow-hidden pt-20">

            {/* Background Gradient */}
            <div className="absolute inset-0 bg-hero-gradient z-0"></div>

            {/* Dynamic Red Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-brand-red/10 blur-[100px] rounded-full pointer-events-none animate-pulse duration-[5000ms]"></div>

            <div className="max-w-[1600px] mx-auto w-full px-4 md:px-12 relative z-20 h-[85vh] flex items-center">

                {/* Left Typography */}
                <div className="w-full lg:w-[60%] flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-6 flex items-center gap-3"
                    >
                        <span className="h-[1px] w-12 bg-brand-red"></span>
                        <span className="text-brand-red font-bold tracking-[0.3em] text-sm uppercase">Based in Morocco</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="font-display font-black text-[5rem] sm:text-[7rem] lg:text-[9rem] leading-[0.85] tracking-tighter text-white mix-blend-exclusion"
                    >
                        VISUAL <br />
                        <span className="text-outline hover:text-white transition-all duration-700 cursor-default">DIRECTOR</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mt-8 text-xl text-gray-400 max-w-md font-light leading-relaxed border-l-2 border-white/10 pl-6"
                    >
                        Operated by Mustapha Eddarrazy. <br />
                        Video Editor, Graphic Designer & Entrepreneur.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mt-12"
                    >
                        <a href="#work" className="group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-wider text-sm inline-flex items-center gap-3 overflow-hidden">
                            <span className="relative z-10">Selected Works</span>
                            <i className="fas fa-arrow-down relative z-10 group-hover:translate-y-1 transition-transform"></i>
                            <div className="absolute inset-0 bg-brand-red transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                        </a>
                    </motion.div>
                </div>

            </div>

            {/* Right - Hero Image (User's Dark Portrait) - Positioned Absolutely to take full space */}
            <div className="absolute inset-0 z-10 flex items-end justify-center lg:justify-end pointer-events-none lg:pointer-events-auto overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.0, ease: "easeOut" }}
                    className="relative h-full w-full lg:w-[50%] flex items-end justify-center lg:justify-end translate-y-0"
                >
                    <img
                        src="https://res.cloudinary.com/dmnqlruhl/image/upload/v1764373738/nano-banana_A_portrait_1with_dram_jlmfv8.png"
                        alt="Mustapha Portrait"
                        className="h-[85vh] lg:h-[95vh] w-auto object-contain object-bottom lg:object-right-bottom"
                        style={{
                            maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)'
                        }}
                    />

                    {/* Image Overlay Texture */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 lg:opacity-0"></div>
                </motion.div>
            </div>

            {/* Scrolling Text Behind */}
            <div className="absolute bottom-10 w-full overflow-hidden whitespace-nowrap opacity-[0.03] pointer-events-none select-none z-0">
                <h2 className="text-[20vw] font-display font-black leading-none">VIDEO EDITING GRAPHIC DESIGN</h2>
            </div>
        </header>
    );
};

export default Hero;
