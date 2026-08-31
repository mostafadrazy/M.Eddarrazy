
import React, { useEffect, useState } from 'react';
import { SOCIAL_LINKS } from '../constants';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
import Logo from './Logo';

const ContactPage: React.FC = () => {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Contact | Mustapha Eddarrazy — Digital Creator";
    }, []);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(SOCIAL_LINKS.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-transparent min-h-screen pt-24 sm:pt-28 pb-12 relative z-10 selection:bg-accent-red selection:text-white flex flex-col justify-between">
            
            {/* Header */}
            <div className="container mx-auto px-4 sm:px-6 md:px-12 animate-on-scroll">
                <div className="flex flex-col gap-2 mb-8 sm:mb-12">
                    <span className="font-mono text-xs text-accent-red uppercase tracking-[0.2em]">
                        Contact — 004
                    </span>
                    <h1 className="font-display font-black text-5xl sm:text-6xl md:text-[9vw] leading-[0.85] text-white uppercase tracking-tighter break-words">
                        Let's Talk <br/> Future
                    </h1>
                </div>
                <div className="w-full h-[1px] bg-white/20 mb-8 sm:mb-12"></div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 sm:px-6 md:px-12 flex-1 flex flex-col justify-center animate-on-scroll delay-100">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-32 items-end">
                    
                    {/* Left: Contact Info */}
                    <div>
                        <p className="font-sans text-base sm:text-lg md:text-2xl text-white/60 leading-relaxed mb-8 sm:mb-12 max-w-xl">
                            I'm currently available for freelance projects and collaborations. If you have an idea, a script, or just a vague concept—let's discuss how we can turn it into reality.
                        </p>
                        
                        <div className="mb-8 sm:mb-12">
                            <span className="font-mono text-[10px] sm:text-xs text-white/30 uppercase tracking-widest block mb-3 sm:mb-4">Email Address</span>
                            <div className="group relative inline-flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <a 
                                    href={`mailto:${SOCIAL_LINKS.email}`} 
                                    className="font-display font-bold text-2xl sm:text-3xl md:text-5xl text-white hover:text-accent-red transition-colors break-all"
                                >
                                    {SOCIAL_LINKS.email}
                                </a>
                                <button 
                                    onClick={copyToClipboard}
                                    className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-white/70 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer text-xs"
                                    title={copied ? "Copied!" : "Copy Email"}
                                    aria-label="Copy Email"
                                >
                                    {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                                    <span className="font-mono text-[10px] uppercase font-bold text-white/80">
                                        {copied ? "Copied!" : "Copy"}
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className="mb-6 sm:mb-12">
                            <span className="font-mono text-[10px] sm:text-xs text-white/30 uppercase tracking-widest block mb-2 sm:mb-4">Base</span>
                            <p className="font-display font-bold text-xl sm:text-2xl text-white">{SOCIAL_LINKS.location}</p>
                            <p className="font-sans text-xs sm:text-sm text-white/50 mt-1">Available for remote work worldwide.</p>
                        </div>
                    </div>

                    {/* Right: Socials & Form Placeholder */}
                    <div className="flex flex-col gap-6 sm:gap-8">
                         <div className="p-5 sm:p-8 border border-white/10 rounded-xl sm:rounded-2xl bg-[#0f0f0f] hover:border-accent-red/50 transition-colors group">
                            <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-4 sm:mb-6">Connect</h3>
                            <div className="flex flex-col gap-3.5 sm:gap-4">
                                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-between text-white/60 hover:text-white group/link">
                                    <span className="font-sans text-base sm:text-lg">LinkedIn</span>
                                    <ArrowUpRight className="group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" size={18} />
                                </a>
                                <a href="#" target="_blank" rel="noreferrer" className="flex items-center justify-between text-white/60 hover:text-white group/link">
                                    <span className="font-sans text-base sm:text-lg">Instagram</span>
                                    <ArrowUpRight className="group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" size={18} />
                                </a>
                                <a href="#" target="_blank" rel="noreferrer" className="flex items-center justify-between text-white/60 hover:text-white group/link">
                                    <span className="font-sans text-base sm:text-lg">Behance</span>
                                    <ArrowUpRight className="group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" size={18} />
                                </a>
                            </div>
                         </div>

                         <div className="p-5 sm:p-8 border border-white/10 rounded-xl sm:rounded-2xl bg-accent-red/10 backdrop-blur-sm">
                             <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-2">Need a quote?</h3>
                             <p className="font-sans text-xs sm:text-sm text-white/60 mb-5 sm:mb-6">
                                 Send me a brief description of your project and timeline. I usually respond within 24 hours.
                             </p>
                             <a href={`mailto:${SOCIAL_LINKS.email}`} className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-accent-red hover:text-white transition-colors">
                                 Send Inquiry <ArrowUpRight size={14} />
                             </a>
                         </div>
                    </div>

                </div>

            </div>

            {/* FAQ / Engagement Section */}
            <div className="container mx-auto px-4 sm:px-6 md:px-12 mt-16 sm:mt-24 border-t border-white/10 pt-10 sm:pt-16 animate-on-scroll">
                <h3 className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-white mb-6 sm:mb-10 uppercase">
                    Engagement Scope
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-xs sm:text-sm">
                    <div className="flex flex-col gap-2 p-4 sm:p-0 rounded-xl bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-0">
                        <span className="font-mono text-xs text-accent-red uppercase tracking-wider font-bold">01/ Full Production</span>
                        <p className="font-sans text-white/50 leading-relaxed">
                            Complete post-production pipelines. I handle color grading, motion branding, editing cuts, and frontend layout implementations synchronously.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 p-4 sm:p-0 rounded-xl bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-0">
                        <span className="font-mono text-xs text-accent-red uppercase tracking-wider font-bold">02/ Automation Setup</span>
                        <p className="font-sans text-white/50 leading-relaxed">
                            Consulting on scraper configurations, RAG architectures, and custom LLM workflows to optimize team velocity and capture structural data.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 p-4 sm:p-0 rounded-xl bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-0">
                        <span className="font-mono text-xs text-accent-red uppercase tracking-wider font-bold">03/ Remote Availability</span>
                        <p className="font-sans text-white/50 leading-relaxed">
                            Operating across CET/EST time zones. Async workflows ensure progress is recorded daily via detailed commits and high-fidelity video updates.
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer Minimal */}
            <div className="container mx-auto px-4 sm:px-6 md:px-12 pt-8 sm:pt-12 mt-8 sm:mt-12 border-t border-white/10 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <Logo className="w-6 h-6 sm:w-7 sm:h-7 text-white/70" />
                    <span className="font-mono text-[9px] sm:text-[10px] text-white/40 uppercase tracking-widest">
                        © 2025 Mustapha Eddarrazy.
                    </span>
                </div>
                <span className="font-mono text-[9px] sm:text-[10px] text-white/20 uppercase tracking-widest">
                    v2.0.4
                </span>
            </div>
        </div>
    );
};

export default ContactPage;
