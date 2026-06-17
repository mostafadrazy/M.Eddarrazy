import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface AIPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
}

const aiPillars: AIPillar[] = [
  {
    id: "01",
    title: "AI Automation",
    subtitle: "Web Scraping & Agents",
    description: "Architecting automated data ingestion engines and scrapers. I build autonomous workflows that extract complex unstructured datasets and trigger actions dynamically.",
    stack: ["Python", "Scrapy", "Selenium", "Cron Jobs", "APIs"]
  },
  {
    id: "02",
    title: "RAG & Knowledge",
    subtitle: "Cognitive Architectures",
    description: "Developing context-grounded systems by linking LLMs to vector databases and semantic indexing, delivering high-precision responses tailored to data stores.",
    stack: ["LangChain", "Vector DBs", "LLMs", "Semantic Search", "Embeddings"]
  },
  {
    id: "03",
    title: "Generative Media",
    subtitle: "Creative Automation",
    description: "Connecting diffusion and generation APIs directly to customized code environments. Programmatic video curation, asset editing, and rendering pipelines.",
    stack: ["FFmpeg", "Hugging Face", "Cloudinary API", "Next.js", "Tailwind CSS"]
  }
];

const AIEngineering: React.FC = () => {
  return (
    <section id="ai-engineering" className="bg-transparent text-white py-16 md:py-32 relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-16 md:mb-24 animate-on-scroll">
          <span className="font-mono text-xs text-accent-orange uppercase tracking-[0.25em] mb-4 block">
            Cognitive Layer
          </span>
          <h2 className="font-display font-black text-4xl md:text-8xl leading-none uppercase mb-6">
            INTELLIGENT <span className="text-accent-orange">SYSTEMS</span>
          </h2>
          <div className="w-full h-[1px] bg-white/20"></div>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-b border-white/10">
          {aiPillars.map((pillar, index) => (
            <div 
              key={pillar.id}
              className={`p-6 md:p-12 flex flex-col justify-between min-h-[350px] transition-colors duration-500 hover:bg-white/[0.02] group animate-on-scroll ${
                index < 2 ? 'border-b md:border-b-0 md:border-r border-white/10' : ''
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div>
                {/* Index / Subtitle */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-xs text-accent-orange font-bold">
                    /{pillar.id}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-white/40">
                    {pillar.subtitle}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight mb-4 group-hover:text-accent-orange transition-colors">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm text-white/60 leading-relaxed mb-8">
                  {pillar.description}
                </p>
              </div>

              {/* Stack / Link */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {pillar.stack.map(tech => (
                    <span 
                      key={tech} 
                      className="font-mono text-[9px] text-white/40 border border-white/10 px-2 py-0.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-2 text-white/30 group-hover:text-white transition-colors duration-300">
                  <span className="font-sans text-[10px] uppercase tracking-wider font-bold">Explore Stack</span>
                  <ArrowUpRight size={12} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AIEngineering;
