import React from 'react';
import { Camera, Film, Lightbulb, Music } from 'lucide-react';

const BoardItems = [
  {
    title: "Cinematography Draft",
    category: "Rhythm & Frame",
    image: "https://res.cloudinary.com/dmnqlruhl/image/upload/v1764373738/nano-banana_A_portrait_1with_dram_jlmfv8.png",
    aspect: "col-span-12 md:col-span-8 h-80 md:h-[450px]"
  },
  {
    title: "Studio Vibe",
    category: "Audio / Visual Space",
    icon: Music,
    text: "Sound is 50% of the experience. It drives the cuts, dictates the grading, and commands attention. Without sonic resonance, visual narrative is flat.",
    aspect: "col-span-12 md:col-span-4 h-80 md:h-[450px] bg-zinc-950/60 border border-white/10 backdrop-blur-md flex flex-col justify-between p-8"
  },
  {
    title: "Light Formulation",
    category: "Luminescence",
    icon: Lightbulb,
    text: "We do not shoot reality. We sculpt illumination. Contrast creates memory.",
    aspect: "col-span-12 md:col-span-4 h-64 md:h-[350px] bg-white/10 text-white border border-white/20 backdrop-blur-md flex flex-col justify-between p-8"
  },
  {
    title: "Cinematic Reel",
    category: "01. Color & Grade",
    image: "https://res.cloudinary.com/dmnqlruhl/image/upload/v1764382689/c02e59e2_Large_dpwia7.png",
    aspect: "col-span-12 md:col-span-8 h-64 md:h-[350px]"
  }
];

const Moodboard: React.FC = () => {
  return (
    <section className="bg-cinema-black/50 backdrop-blur-xl py-20 md:py-32 relative z-10 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 animate-on-scroll">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent-red block mb-4">
              Visual Laboratory
            </span>
            <h2 className="font-display font-black text-4xl md:text-8xl text-white uppercase leading-none">
              CONCEPT <br />
              <span className="text-stroke hover:text-white transition-colors duration-300">MOODBOARDS</span>
            </h2>
          </div>
          <div className="w-full md:w-96 text-left md:text-right font-mono text-xxs md:text-xs text-white/40 tracking-widest uppercase mt-6 md:mt-0">
            A selective documentation of lighting structures, rhythmic systems, and audio experiments that define my direction.
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {BoardItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className={`group relative overflow-hidden rounded-3xl ${item.aspect} transition-all duration-500 hover:border-accent-red/30 animate-on-scroll`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Background Image if present */}
                {item.image && (
                  <div className="absolute inset-0 w-full h-full scale-100 group-hover:scale-105 transition-transform duration-700 select-none">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover grayscale contrast-110 opacity-60 group-hover:opacity-80 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                  </div>
                )}

                {/* Grid Item Content overlay for Text Cards */}
                <div className="relative z-10 w-full h-full flex flex-col justify-between p-6 md:p-8">
                  {/* Item Top: Header */}
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-xxs uppercase tracking-widest opacity-50 text-white">
                      {item.category}
                    </span>
                    {Icon && <Icon size={20} className={item.image ? "text-white" : "text-accent-red"} />}
                  </div>

                  {/* Main text / description if present */}
                  {item.text && (
                    <p className={`font-sans ${item.image ? 'text-white/80' : 'text-stone-300'} text-sm md:text-lg font-medium leading-relaxed my-4`}>
                      "{item.text}"
                    </p>
                  )}

                  {/* Item Footer */}
                  <div className="mt-auto">
                    <h3 className={`font-display font-bold text-lg md:text-2xl uppercase ${item.image ? 'text-white' : 'text-accent-red'} tracking-tight`}>
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Moodboard;
