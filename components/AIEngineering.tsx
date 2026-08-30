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
    <section id="ai-engineering" className="bg-transparent text-white py-20 md:py-32 relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 animate-on-scroll">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-accent-red"></span>
              <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                Cognitive Layer
              </span>
            </div>
            <h2 className="font-display font-black text-4xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter">
              AI <span className="text-accent-red">SYSTEMS.</span>
            </h2>
          </div>
          <p className="font-sans text-sm md:text-base font-medium max-w-xs mt-8 md:mt-0 md:text-right text-white/70 leading-relaxed">
            Fusing autonomous intelligence with creative pipelines to scale digital production.
          </p>
        </div>

        {/* 3-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {aiFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.id} 
                className="p-8 md:p-10 border border-white/10 rounded-[2rem] bg-[#0c0c0c] hover:border-accent-red/50 transition-colors duration-500 animate-on-scroll group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-start mb-16">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent-red group-hover:scale-110 group-hover:bg-accent-red group-hover:text-black transition-all duration-500">
                    <Icon size={20} />
                  </div>
                  <span className="font-mono text-xs text-white/30 group-hover:text-accent-red font-bold transition-colors">
                    /{feature.id}
                  </span>
                </div>
                
                <h3 className="font-display font-bold text-2xl md:text-3xl mb-4 text-white uppercase tracking-tight">
                  {feature.title}
                </h3>
                <p className="font-sans text-sm text-white/60 leading-relaxed">
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
