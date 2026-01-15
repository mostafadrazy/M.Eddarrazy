
import React, { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { IMAGES, VIDEOS } from '../constants';

const InsightsPage: React.FC = () => {
    const [hoveredArticle, setHoveredArticle] = useState<number | null>(null);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        window.scrollTo(0, 0);
        
        const moveCursor = (e: MouseEvent) => {
            setCursorPos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, []);

    const articles = [
        {
            id: 1,
            title: "The Psychology of Kinetic Typography",
            category: "Motion Theory",
            date: "Nov 02, 2024",
            readTime: "4 min read",
            image: "https://res.cloudinary.com/dmnqlruhl/image/upload/v1764377769/Screenshot_10-5-2025_193454_www.9adiya.site_v37yha.jpg"
        },
        {
            id: 2,
            title: "Redefining Brand Identity in Web3",
            category: "Strategy",
            date: "Oct 24, 2024",
            readTime: "6 min read",
            image: IMAGES.about
        },
        {
            id: 3,
            title: "Workflow: From Premiere to WebGL",
            category: "Technical",
            date: "Oct 10, 2024",
            readTime: "8 min read",
            image: "https://res.cloudinary.com/dmnqlruhl/video/upload/v1764377214/Sequence_01_6_hjkn7p.mp4" // Video preview
        },
        {
            id: 4,
            title: "The Art of Invisible VFX",
            category: "Production",
            date: "Sep 15, 2024",
            readTime: "5 min read",
            image: "https://res.cloudinary.com/dmnqlruhl/image/upload/v1764373738/nano-banana_A_portrait_1with_dram_jlmfv8.png"
        },
        {
            id: 5,
            title: "Color Grading for Emotion",
            category: "Cinematography",
            date: "Aug 30, 2024",
            readTime: "7 min read",
            image: VIDEOS[3].url // Video preview
        }
    ];

    return (
        <div className="bg-cinema-black min-h-screen pt-28 pb-[20vh] relative z-10 selection:bg-accent-orange selection:text-white">
            
            {/* Header */}
            <div className="container mx-auto px-6 md:px-12 mb-16 md:mb-24">
                 <div className="flex flex-col gap-2 mb-12 animate-on-scroll">
                    <span className="font-mono text-xs text-accent-orange uppercase tracking-[0.2em]">
                        Journal — 003
                    </span>
                    <h1 className="font-display font-black text-6xl md:text-[8vw] leading-[0.85] text-white uppercase tracking-tighter">
                        Perspectives
                    </h1>
                </div>
                <div className="w-full h-[1px] bg-white/20"></div>
                <p className="mt-8 font-sans text-white/50 max-w-lg leading-relaxed">
                    Thoughts on design systems, motion theory, and the evolving landscape of digital creation.
                </p>
            </div>

            {/* Content List */}
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col">
                    {/* List Header */}
                    <div className="grid grid-cols-12 border-b border-white/10 pb-4 mb-4 text-white/30 font-mono text-[10px] uppercase tracking-widest px-2">
                        <div className="col-span-2 hidden md:block">Date</div>
                        <div className="col-span-2 hidden md:block">Category</div>
                        <div className="col-span-10 md:col-span-6">Topic</div>
                        <div className="col-span-2 md:col-span-2 text-right">Read Time</div>
                    </div>

                    {articles.map((article, idx) => (
                        <div
                            key={article.id}
                            className="group grid grid-cols-12 py-8 md:py-12 border-b border-white/10 items-center hover:bg-white/5 transition-colors px-4 -mx-4 relative cursor-pointer animate-on-scroll"
                            style={{ transitionDelay: `${idx * 100}ms` }}
                            onMouseEnter={() => setHoveredArticle(article.id)}
                            onMouseLeave={() => setHoveredArticle(null)}
                        >
                            <div className="col-span-2 hidden md:block font-mono text-xs text-white/40 group-hover:text-white transition-colors">
                                {article.date}
                            </div>
                            <div className="col-span-2 hidden md:block font-mono text-xs text-accent-orange uppercase tracking-widest">
                                {article.category}
                            </div>
                            <div className="col-span-10 md:col-span-6">
                                <h3 className="font-display font-bold text-2xl md:text-5xl text-white group-hover:translate-x-4 transition-transform duration-300">
                                    {article.title}
                                </h3>
                                {/* Mobile Meta */}
                                <div className="md:hidden mt-2 font-mono text-[10px] text-white/40 uppercase tracking-widest flex gap-4">
                                    <span className="text-accent-orange">{article.category}</span>
                                    <span>{article.date}</span>
                                </div>
                            </div>
                            <div className="col-span-2 md:col-span-2 text-right font-mono text-[10px] md:text-xs text-white/40 uppercase tracking-widest">
                                {article.readTime}
                            </div>
                            
                            <div className="absolute right-4 md:right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 hidden md:block">
                                <ArrowUpRight className="text-white" size={24} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Hover Floating Preview Image */}
            <div 
                className="pointer-events-none fixed z-50 w-[300px] aspect-[4/3] hidden md:block transition-all duration-300 ease-out mix-blend-normal rounded-lg overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)]"
                style={{
                    left: cursorPos.x,
                    top: cursorPos.y,
                    transform: 'translate(10%, -50%)', // Offset slightly to right of cursor
                    opacity: hoveredArticle ? 1 : 0,
                    scale: hoveredArticle ? 1 : 0.95
                }}
            >
                {hoveredArticle && (() => {
                    const article = articles.find(a => a.id === hoveredArticle);
                    if (!article) return null;
                    const isVideo = article.image.endsWith('.mp4');
                    return (
                        <div className="w-full h-full relative bg-cinema-black">
                             {isVideo ? (
                                <video src={article.image} autoPlay muted loop className="w-full h-full object-cover" />
                             ) : (
                                <img src={article.image} className="w-full h-full object-cover" alt="" />
                             )}
                             <div className="absolute inset-0 bg-accent-orange/10 mix-blend-overlay"></div>
                        </div>
                    );
                })()}
            </div>

            {/* Footer Note */}
            <div className="container mx-auto px-6 md:px-12 mt-32">
                <div className="p-8 border border-white/10 rounded-xl bg-[#0f0f0f] flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="font-sans text-white/60 text-center md:text-left">
                        Want to read more about my design philosophy?
                    </p>
                    <a href="https://linkedin.com/in/eddarrazy" target="_blank" rel="noreferrer" className="bg-white text-black px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-accent-orange hover:text-white transition-all">
                        Follow on LinkedIn
                    </a>
                </div>
            </div>

        </div>
    );
};

export default InsightsPage;
