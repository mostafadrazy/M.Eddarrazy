import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ALL_PROJECTS, slugify, getProjectBySlug } from '../constants';
import { ArrowUpRight, ArrowLeft, Play, Maximize2, ExternalLink, Calendar, Tag, ShieldCheck, User, Video } from 'lucide-react';
import { motion } from 'motion/react';

interface ProjectDetailPageProps {
  onModalStateChange?: (isOpen: boolean) => void;
}

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ onModalStateChange }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  // Find the exact project
  const project = slug ? getProjectBySlug(slug) : null;

  // Handle Mount settings
  useEffect(() => {
    // Scroll to top of the page on route change
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    
    // Ensure navigation menu is shown (not hidden)
    if (onModalStateChange) {
      onModalStateChange(false);
    }

    if (project) {
      document.title = `${project.title} | Mustapha Eddarrazy — Digital Creator`;
    } else {
      document.title = `Project Not Found | Mustapha Eddarrazy`;
    }
  }, [slug, project, onModalStateChange]);

  // If no project, render modern empty/not-found screen
  if (!project) {
    return (
      <div className="bg-cinema-black min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24">
        <span className="font-mono text-xs text-accent-orange uppercase tracking-[0.2em] mb-4">
          Error 404
        </span>
        <h1 className="font-display font-black text-4xl md:text-6xl text-white uppercase tracking-tighter mb-8">
          Project Not Found
        </h1>
        <Link 
          to="/work" 
          className="group relative inline-flex items-center gap-4 bg-[#0f0f0f] border border-white/20 px-8 py-4 rounded-full overflow-hidden hover:border-accent-orange transition-colors"
        >
          <span className="relative z-10 font-mono text-xs uppercase tracking-wider text-white group-hover:text-black transition-colors duration-300">
            Return to Visual Archive
          </span>
          <div className="relative z-10 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-black text-white group-hover:text-accent-orange transition-colors duration-300">
            <ArrowLeft size={14} />
          </div>
          <div className="absolute inset-0 bg-accent-orange translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"></div>
        </Link>
      </div>
    );
  }

  // Get index for the current project to find the "Next Project"
  const currentIdx = ALL_PROJECTS.findIndex(p => p.title === project.title);
  const nextProject = ALL_PROJECTS[(currentIdx + 1) % ALL_PROJECTS.length];
  const nextProjectSlug = slugify(nextProject.title);

  // Helper inside Page to get image src
  const getPageImageSrc = (p: any) => {
    if (p.modalImage) return p.modalImage;
    if (/\.(jpg|jpeg|png|webp|gif)$/i.test(p.url)) return p.url;
    return p.thumbnail || p.url;
  };

  const isWeb = !!project.isWeb;

  // Custom Fullscreen Trigger for Videos
  const handleFullscreenVideo = (e: React.MouseEvent) => {
    e.preventDefault();
    const video = document.querySelector('video.project-main-video') as any;
    if (video) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitEnterFullscreen) {
        video.webkitEnterFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
    }
  };

  return (
    <div className="bg-cinema-black min-h-screen relative z-10 selection:bg-accent-orange selection:text-white pb-[20vh] md:pb-[42vh]">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-0 w-full h-[80vh] opacity-15 overflow-hidden pointer-events-none">
        <div className="absolute inset-x-0 top-[-20%] h-full bg-gradient-to-b from-accent-orange/30 via-transparent to-transparent blur-[120px] scale-110"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 pt-32 md:pt-40">
        
        {/* Navigation & Header Meta */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <Link 
            to="/work" 
            className="group inline-flex items-center gap-3 text-white/50 hover:text-accent-orange transition-colors font-mono text-xs uppercase tracking-widest"
          >
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent-orange transition-colors">
              <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            </div>
            Back to Archive
          </Link>
          
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-mono text-[10px] text-accent-orange border border-accent-orange/30 px-3 py-1 rounded-full uppercase tracking-widest bg-accent-orange/5">
              {project.category}
            </span>
            <span className="w-px h-4 bg-white/10 hidden sm:block"></span>
            <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
              Released: {project.year || '2024'}
            </span>
          </div>
        </div>

        {/* Project Large Title */}
        <div className="mb-12 md:mb-16">
          <h1 className="font-display font-black text-5xl md:text-[7vw] leading-[0.85] text-white uppercase tracking-tighter break-words">
            {project.title}
          </h1>
        </div>

        {/* MAIN BODY AREA (Two columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-start">
          
          {/* COLUMN 1: MEDIA WORKCASE (8/12 of widescreen) */}
          <div className="lg:col-span-8 flex flex-col gap-6 md:gap-12">
            
            {/* Main Showcase block */}
            <div className={`relative w-full rounded-2xl border border-white/10 bg-[#080808] shadow-2xl group ${isWeb ? 'overflow-visible h-auto' : 'aspect-video overflow-hidden'}`}>
              {isWeb ? (
                // Web representation: Top primary showcase image
                <img 
                  src={getPageImageSrc(project)} 
                  className="w-full h-auto rounded-2xl grayscale-[15%] group-hover:grayscale-0 transition-all duration-700 block" 
                  alt={project.title} 
                  referrerPolicy="no-referrer"
                />
              ) : (
                // Video project representation: Video player with custom widescreen feel
                <div className="w-full h-full relative">
                  <video 
                    src={project.url}
                    autoPlay={isVideoPlaying}
                    loop
                    muted={false}
                    playsInline
                    controls
                    className="project-main-video w-full h-full object-contain bg-black"
                  />
                  {/* Subtle hover fullscreen prompt */}
                  <button 
                    onClick={handleFullscreenVideo}
                    className="absolute bottom-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-accent-orange hover:scale-110 pointer-events-auto transition-all duration-300 z-10"
                    title="Fullscreen Mode"
                  >
                    <Maximize2 size={16} className="text-white" />
                  </button>
                </div>
              )}
            </div>

            {/* Additional Project Images (Specifically for Web Dev to show high quality sections) */}
            {isWeb && project.images && project.images.length > 0 && (
              <div className="flex flex-col gap-8 md:gap-14 mt-6">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest">Detail Showcases</span>
                  <div className="flex-1 h-px bg-white/10"></div>
                </div>
                {project.images.map((img, idx) => (
                  <div key={idx} className="rounded-xl overflow-hidden border border-white/5 bg-[#0a0a0a] shadow-lg">
                    <img 
                      src={img} 
                      className="w-full h-auto object-cover" 
                      alt={`${project.title} screenshot ${idx + 1}`}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* COLUMN 2: SPECS & META PANEL (4/12 of widescreen, Sticky) */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 flex flex-col gap-8 md:gap-12">
            
            {/* Meta Specifications Table */}
            <div className="bg-[#0f0f0f] border border-white/10 p-6 md:p-8 rounded-2xl flex flex-col gap-6 md:gap-8 shadow-2xl">
              
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] text-accent-orange uppercase tracking-widest font-bold">
                  Description
                </span>
                <p className="font-sans text-white/75 text-sm md:text-base leading-relaxed">
                  {isWeb 
                    ? "An immersive, responsive digital case study engineered around intuitive interface design, custom interaction flows, and unique branding. Developed to optimize performance and enrich user discovery."
                    : "A high-fidelity cinematic video sequence centered on exquisite pacing, precise audio design rhythms, and deep branding aesthetics. Created for maximum user engagement and powerful visual messaging."
                  }
                </p>
              </div>

              <div className="h-px bg-white/10"></div>

              {/* Specs Table List */}
              <div className="flex flex-col gap-4 font-mono text-xs">
                
                <div className="flex items-center justify-between py-1 border-b border-white/5">
                  <div className="flex items-center gap-2 text-white/40">
                    <Tag size={12} className="text-accent-orange" />
                    <span>Discipline</span>
                  </div>
                  <span className="text-white hover:text-accent-orange transition-colors">{project.category}</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-white/5">
                  <div className="flex items-center gap-2 text-white/40">
                    <Calendar size={12} className="text-accent-orange" />
                    <span>Year Completed</span>
                  </div>
                  <span className="text-white">{project.year || '2024'}</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-white/5">
                  <div className="flex items-center gap-2 text-white/40">
                    <User size={12} className="text-accent-orange" />
                    <span>Creative Lead</span>
                  </div>
                  <span className="text-white">Mustapha Eddarrazy</span>
                </div>

                <div className="flex items-center justify-between py-1">
                  <div className="flex items-center gap-2 text-white/40">
                    <ShieldCheck size={12} className="text-accent-orange" />
                    <span>Status</span>
                  </div>
                  <span className="text-white flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Live Production
                  </span>
                </div>

              </div>

              {/* Main Call to Action Button */}
              <a 
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="group w-full flex items-center justify-between gap-6 bg-white text-black pl-6 pr-2 py-2 rounded-full font-sans font-bold uppercase tracking-wider hover:bg-accent-orange transition-all duration-300 pointer-events-auto"
              >
                <span className="text-xs md:text-sm">{isWeb ? 'Explore Live Site' : 'Launch Full Output'}</span>
                <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight size={14} />
                </div>
              </a>

            </div>

            {/* Quick Share / Back option */}
            <div className="flex items-center gap-4 justify-between bg-white/5 border border-white/5 px-6 py-4 rounded-xl">
              <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Permanent URL</span>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Copied link to clipboard!');
                }}
                className="font-mono text-[10px] text-accent-orange hover:underline cursor-pointer"
              >
                Copy Link [↗]
              </button>
            </div>

          </div>

        </div>

        {/* CONTINUOUS BROWSING SECTION (Bottom "Next Project" transition) */}
        <div className="mt-28 md:mt-48 pt-20 border-t border-white/10 text-center relative z-20">
          <Link 
            to={`/work/${nextProjectSlug}`}
            className="group block py-16 px-4 hover:bg-white/[0.02] rounded-3xl transition-all duration-500 border border-transparent hover:border-white/5"
          >
            <div className="flex flex-col items-center">
              <span className="font-mono text-xs uppercase text-accent-orange tracking-[0.25em] mb-4 flex items-center gap-2">
                <Play size={10} className="fill-accent-orange" />
                Up Next
              </span>
              
              <h2 className="font-display font-black text-4xl md:text-8xl text-white group-hover:text-accent-orange transition-colors uppercase leading-none tracking-tighter mb-8 max-w-4xl text-center break-words">
                {nextProject.title}
              </h2>

              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/5 group-hover:bg-accent-orange group-hover:text-black border border-white/10 group-hover:border-accent-orange text-white flex items-center justify-center transition-all duration-300">
                <ArrowUpRight size={24} className="group-hover:rotate-45 transition-transform" />
              </div>
            </div>
          </Link>
        </div>

        {/* Extra Bottom Spacer to offset the overlap of the floating Footer CTA card */}
        <div className="h-32 md:h-56"></div>

      </div>
    </div>
  );
};

export default ProjectDetailPage;
