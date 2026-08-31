import React from 'react';
import { Bot, Sparkles, Workflow } from 'lucide-react';

const aiFeatures = [
  {
    id: "01",
    title: "Autonomous Workflows",
    description: "Custom AI agents that automate research, data ingestion, and repetitive tasks, freeing up time for pure creative work.",
    icon: Bot
  },
  {
    id: "02",
    title: "Generative Pipelines",
    description: "Programmatic rendering and diffusion models integrated directly into video and design pipelines for rapid prototyping.",
    icon: Sparkles
  },
  {
    id: "03",
    title: "Knowledge Systems",
    description: "Retrieval-Augmented Generation (RAG) databases that organize and instantly synthesize your internal creative assets.",
    icon: Workflow
  }
];

const AIEngineering: React.FC = () => {
  return (
    <section id="ai-engineering" className="bg-transparent text-white py-16 sm:py-20 md:py-32 relative z-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 animate-on-scroll">
          <div>
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <span className="w-2 h-2 rounded-full bg-accent-red"></span>
              <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                Cognitive Layer
              </span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter">
              AI <span className="text-accent-red">SYSTEMS.</span>
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm md:text-base font-medium max-w-xs mt-6 md:mt-0 md:text-right text-white/70 leading-relaxed">
            Fusing autonomous intelligence with creative pipelines to scale digital production.
          </p>
        </div>

        {/* 3-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {aiFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.id} 
                className="relative overflow-hidden p-6 sm:p-8 md:p-10 border border-white/10 rounded-[1.5rem] sm:rounded-[2rem] bg-[#0c0c0c] hover:-translate-y-3 hover:border-accent-red/40 hover:shadow-[0_20px_40px_-15px_rgba(255,51,51,0.15)] transition-all duration-500 ease-out animate-on-scroll group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Background Glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent-red/0 group-hover:bg-accent-red/20 blur-[50px] rounded-full transition-colors duration-700 ease-in-out pointer-events-none z-0"></div>

                <div className="relative z-10 flex justify-between items-start mb-8 sm:mb-12 md:mb-16">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/5 bg-white/5 flex items-center justify-center text-white/40 group-hover:scale-110 group-hover:bg-accent-red group-hover:border-accent-red group-hover:text-black transition-all duration-500 ease-out">
                    <Icon size={18} strokeWidth={2.5} />
                  </div>
                  <span className="font-mono text-[10px] text-white/30 group-hover:text-accent-red font-bold transition-colors tracking-wider">
                    /{feature.id}
                  </span>
                </div>
                
                <h3 className="relative z-10 font-display font-bold text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 text-white uppercase tracking-tight group-hover:text-accent-red transition-colors duration-500">
                  {feature.title}
                </h3>
                <p className="relative z-10 font-sans text-xs sm:text-sm text-white/50 leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AIEngineering;
