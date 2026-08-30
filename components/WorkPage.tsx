
import React, { useState, useEffect } from 'react';
import { ALL_PROJECTS, slugify } from '../constants';
import { ArrowUpRight, LayoutGrid, List, X, Play, Maximize2, Minimize2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface WorkPageProps {
  onModalStateChange?: (isOpen: boolean) => void;
}

const WorkPage: React.FC<WorkPageProps> = ({ onModalStateChange }) => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Modal State
  const [selectedProject, setSelectedProject] = useState<typeof ALL_PROJECTS[0] | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Filter Logic
  const categories = ['All', 'Cinematography', 'Editing', 'Motion Design', 'Web Development', 'Rebranding', 'Graphic Design'];
  const filteredProjects = filter === 'All'
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter(p => p.category === filter || (filter === 'Motion Design' && p.category === 'Motion'));

  // Track cursor for floating preview in List Mode
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Work Archive | Mustapha Eddarrazy — Digital Creator";
  }, []);

  // Handle Project Click
  const handleProjectClick = (project: typeof ALL_PROJECTS[0]) => {
      const slug = slugify(project.title);
      navigate(`/work/${slug}`);
  };

  // Handle Close
  const handleCloseModal = () => {
      setIsModalVisible(false); // Start sliding down
      
      // Delay showing the menu until the modal has FULLY left the screen
      setTimeout(() => {
          if (onModalStateChange) onModalStateChange(false);
          setSelectedProject(null);
          document.body.style.overflow = 'unset';
      }, 800); // Wait 800ms (Animation is 800ms)
  };

  // Helper to determine the best image source for the modal
  const getModalImageSrc = (project: any) => {
      if (project.modalImage) return project.modalImage;
      // If URL is a direct image file, prefer it over thumbnail (likely higher res)
      if (/\.(jpg|jpeg|png|webp|gif)$/i.test(project.url)) return project.url;
      // If URL is a website link (Behance/Site), fallback to thumbnail
      return project.thumbnail || project.url;
  };

  return (
    <div className="bg-transparent min-h-screen pt-28 pb-[20vh] md:pb-[40vh] relative z-10 selection:bg-accent-red selection:text-white">
      
      {/* =========================================================================
          PROJECT DETAIL OVERLAY
         ========================================================================= */}
      {selectedProject && (
          <div className={`fixed inset-0 z-[999] flex flex-col bg-[#050505] transition-transform duration-[800ms] cubic-bezier(0.76, 0, 0.24, 1) ${isModalVisible ? 'translate-y-0' : 'translate-y-full'}`}>
              
              {/* Header / Close Area - Solid Backdrop to Hide Nav completely */}
              <div className="absolute top-0 left-0 w-full z-[1000] flex justify-between items-center px-6 py-6 md:px-12 md:py-8 bg-[#050505] border-b border-white/5">
                   
                   {/* Left spacer - Logo is provided by Navigation.tsx now on z-[1002] */}
                   <div></div>

                   {/* Center: Project Tag (Hidden on small mobile, visible on desktop) */}
                   <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex bg-white/5 px-4 py-2 rounded-full border border-white/10 items-center gap-2 backdrop-blur-md">
                       <div className="w-2 h-2 rounded-full bg-accent-red animate-pulse"></div>
                       <span className="font-mono text-[10px] uppercase tracking-widest text-white">
                           Project Detail
                       </span>
                   </div>
                   
                   {/* Right: Close Button - High z-index to sit above everything */}
                   <button 
                      onClick={handleCloseModal}
                      className="group flex items-center gap-4 text-white hover:text-accent-red transition-colors z-50 cursor-pointer pointer-events-auto"
                   >
                       <span className="font-mono text-xs uppercase tracking-widest hidden md:block group-hover:-translate-x-2 transition-transform font-bold">
                           Close
                       </span>
                       <div className="w-12 h-12 rounded-full border border-white/20 group-hover:border-accent-red bg-white/5 flex items-center justify-center transition-all duration-300 group-hover:bg-accent-red group-hover:text-black">
                           <X size={20} />
                       </div>
                   </button>
              </div>

              <div className="flex flex-col lg:flex-row h-full w-full pt-24 md:pt-32">
                  
                  {/* Media Section (Top on mobile, Left on desktop) 
                      Mobile: 55% height (increased from 40%), Desktop: 60% width */}
                  <div className="relative h-[55vh] lg:h-full lg:w-[60%] bg-[#080808] group flex flex-col border-b lg:border-b-0 lg:border-r border-white/5">
                       
                       {/* Layer 1: Ambient Background (Blurred) - Fixed to container */}
                       <div className="absolute inset-0 w-full h-full opacity-30 scale-110 blur-3xl pointer-events-none overflow-hidden">
                           {selectedProject.isWeb ? (
                               <img src={getModalImageSrc(selectedProject)} className="w-full h-full object-cover" alt="" />
                           ) : (
                               <video src={selectedProject.url} muted loop className="w-full h-full object-cover" />
                           )}
                       </div>

                       {/* Layer 2: Main Content (Scrollable for Images, Center for Video) */}
                       <div className={`relative w-full h-full z-10 ${selectedProject.isWeb ? 'overflow-y-auto scrollbar-hide' : 'flex items-center justify-center p-6 md:p-12 lg:p-16'}`}>
                           {selectedProject.isWeb ? (
                               selectedProject.images && selectedProject.images.length > 0 ? (
                                   <div className="flex flex-col gap-4">
                                       {selectedProject.images.map((img, idx) => (
                                           <img 
                                               key={idx}
                                               src={img} 
                                               className="w-full h-auto object-cover"
                                               alt={`${selectedProject.title} ${idx + 1}`}
                                           />
                                       ))}
                                   </div>
                               ) : (
                                   <img 
                                      src={getModalImageSrc(selectedProject)} 
                                      className="w-full h-auto object-cover"
                                      alt={selectedProject.title}
                                   />
                               )
                           ) : (
                               <video 
                                  src={selectedProject.url} 
                                  autoPlay 
                                  loop 
                                  muted={false} 
                                  playsInline 
                                  controls={true}
                                  className="max-w-full max-h-full object-contain shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-sm bg-black"
                               />
                           )}
                       </div>
                  </div>

                  {/* Info Section (Bottom on mobile, Right on desktop) 
                      Mobile: Balance height, Desktop: 40% width.
                      Added 'overflow-y-auto' to allow scrolling of text without overlapping footer. */}
                  <div className="relative h-[45vh] lg:h-full lg:w-[40%] bg-[#050505] flex flex-col">
                       
                       {/* Scrollable Content Container */}
                       <div className="flex-1 overflow-y-auto px-6 md:px-12 py-8 md:py-12 scrollbar-hide">
                           <div className={`transition-all duration-700 delay-300 flex flex-col items-start min-h-full ${isModalVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                               
                               {/* Category Tag */}
                               <div className="flex flex-wrap items-center gap-4 mb-6 md:mb-8">
                                   <span className="font-mono text-[10px] text-accent-red border border-accent-red/30 px-3 py-1 rounded-full uppercase tracking-widest bg-accent-red/5">
                                       {selectedProject.category}
                                   </span>
                                   <span className="w-px h-4 bg-white/10"></span>
                                   <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                                       {selectedProject.year || '2024'}
                                   </span>
                               </div>

                               {/* Title */}
                               <h2 className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white uppercase leading-[0.9] tracking-tighter mb-6 md:mb-8 break-words w-full">
                                   {selectedProject.title}
                               </h2>

                               {/* Description */}
                               <div className="relative pl-6 border-l border-white/10 mb-8 md:mb-12">
                                    <p className="font-sans text-white/60 text-sm md:text-base leading-relaxed max-w-md">
                                        {selectedProject.isWeb 
                                            ? "An immersive digital experience focusing on visual identity, interaction, and brand storytelling. Crafted to deliver a seamless user journey."
                                            : "A cinematic visual narrative crafted with precision editing and sound design. This piece explores the intersection of rhythm, emotion, and brand identity."
                                        }
                                    </p>
                               </div>

                               {/* Action Button */}
                               <a 
                                  href={selectedProject.url}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="group flex items-center justify-between gap-6 bg-white text-black pl-6 pr-2 py-2 rounded-full font-sans font-bold uppercase tracking-wider hover:bg-accent-red transition-all duration-300 w-full md:w-auto min-w-[200px] mb-12"
                               >
                                   <span className="text-sm">{selectedProject.isWeb ? 'View Project' : 'Watch Full Project'}</span>
                                   <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                                      <ArrowUpRight size={16} />
                                   </div>
                               </a>

                               {/* Footer Meta - Pushed to bottom of flex container or scroll flow */}
                               <div className="mt-auto pt-8 border-t border-white/5 w-full">
                                   <div className="flex flex-col gap-2">
                                       <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest">Client / Role</span>
                                       <span className="font-sans text-sm text-white font-medium">Global Brand — Lead Creative</span>
                                   </div>
                               </div>
                           </div>
                       </div>
                  </div>
              </div>
          </div>
      )}

      {/* 1. Floating Preview (List Mode Only) */}
      {viewMode === 'list' && (
            <div
                className="pointer-events-none fixed z-50 w-[320px] md:w-[450px] aspect-video hidden md:block transition-all duration-300 ease-out mix-blend-normal rounded-lg overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)]"
                style={{
                    left: cursorPos.x,
                    top: cursorPos.y,
                    transform: 'translate(-50%, -50%)',
                    opacity: hoveredProject && !isModalVisible ? 1 : 0, // Hide when modal is open
                    scale: hoveredProject ? 1 : 0.95
                }}
            >
                {hoveredProject && (() => {
                    const project = ALL_PROJECTS.find(p => p.title === hoveredProject);
                    if (!project) return null;
                    return (
                        <div className="w-full h-full relative bg-cinema-black">
                             {project.isWeb ? (
                                <img src={project.thumbnail || project.url} className="w-full h-full object-cover" alt="" />
                             ) : (
                                <video src={project.url} autoPlay muted loop className="w-full h-full object-cover" />
                             )}
                             {/* Meta Overlay */}
                             <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent flex justify-between items-end">
                                 <span className="font-display font-bold text-white text-xl uppercase">{project.title}</span>
                                 <span className="font-mono text-xs text-accent-red uppercase tracking-widest">{project.year || '2024'}</span>
                             </div>
                        </div>
                    );
                })()}
            </div>
      )}

      {/* 2. Header Section */}
      <div className="container mx-auto px-6 md:px-12 mb-12">
        
        {/* Title */}
        <div className="flex flex-col gap-2 mb-16 animate-on-scroll">
            <span className="font-mono text-xs text-accent-red uppercase tracking-[0.2em]">
                Index — 001
            </span>
            <h1 className="font-display font-black text-6xl md:text-[7vw] leading-[0.85] text-white uppercase tracking-tighter">
                Visual <br/> Archive
            </h1>
            
            {/* Portfolio statistics counters */}
            <div className="flex flex-wrap gap-8 md:gap-16 mt-8 font-mono text-xs text-white/50 border-l border-accent-red/40 pl-6">
                <div>
                    <span className="block text-white font-display font-bold text-2xl">15+</span>
                    <span className="uppercase text-[9px] tracking-widest text-white/30">Total Works</span>
                </div>
                <div>
                    <span className="block text-white font-display font-bold text-2xl">06+</span>
                    <span className="uppercase text-[9px] tracking-widest text-white/30">Web & AI Solutions</span>
                </div>
                <div>
                    <span className="block text-white font-display font-bold text-2xl">08+</span>
                    <span className="uppercase text-[9px] tracking-widest text-white/30">Cinematic & Reels</span>
                </div>
            </div>
        </div>

        {/* Sticky Toolbar */}
        <div className="w-full sticky top-24 z-30 animate-on-scroll delay-100">
             <div className="absolute inset-0 bg-cinema-black/80 backdrop-blur-md border-t border-b border-white/10"></div>
             <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center py-4 gap-4">
                 
                 {/* Left: Filters */}
                 <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`font-mono text-[10px] md:text-xs uppercase tracking-widest transition-all duration-300 ${
                                filter === cat 
                                    ? 'text-accent-red' 
                                    : 'text-white/40 hover:text-white'
                            }`}
                        >
                            [{cat}]
                        </button>
                    ))}
                 </div>

                 {/* Right: View Toggle */}
                 <div className="flex items-center gap-2 self-end md:self-auto">
                     <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest mr-2 hidden md:inline">View</span>
                     <button
                        onClick={() => setViewMode('grid')}
                        className={`p-2 rounded-md transition-all duration-300 border border-transparent ${
                            viewMode === 'grid' 
                                ? 'bg-white text-black' 
                                : 'text-white/40 hover:text-white hover:border-white/20'
                        }`}
                        aria-label="Grid View"
                     >
                         <LayoutGrid size={16} />
                     </button>
                     <button
                        onClick={() => setViewMode('list')}
                        className={`p-2 rounded-md transition-all duration-300 border border-transparent ${
                            viewMode === 'list' 
                                ? 'bg-white text-black' 
                                : 'text-white/40 hover:text-white hover:border-white/20'
                        }`}
                        aria-label="List View"
                     >
                         <List size={16} />
                     </button>
                 </div>
             </div>
        </div>
      </div>

      {/* 3. Content Area */}
      <div className="container mx-auto px-6 md:px-12 min-h-[50vh] animate-on-scroll delay-200">
          
          {/* A. GRID VIEW */}
          {viewMode === 'grid' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                  {filteredProjects.map((project, idx) => (
                      <div 
                        key={`${project.title}-${idx}`}
                        onClick={() => handleProjectClick(project)}
                        className="group relative aspect-video md:aspect-[16/10] overflow-hidden bg-white/5 cursor-pointer block"
                        onMouseEnter={() => setHoveredProject(project.title)}
                        onMouseLeave={() => setHoveredProject(null)}
                      >
                          {/* Media Layer */}
                          <div className="w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105">
                               {project.isWeb ? (
                                  <img 
                                    src={project.thumbnail || project.url} 
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100" 
                                    alt={project.title}
                                  />
                               ) : (
                                  <video 
                                    src={project.url} 
                                    loop 
                                    muted 
                                    playsInline 
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100" 
                                    onMouseOver={e => e.currentTarget.play()} 
                                    onMouseOut={e => e.currentTarget.pause()} 
                                  />
                               )}
                          </div>

                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-center backdrop-blur-sm">
                              <span className="font-mono text-accent-red text-xs uppercase tracking-widest mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                  {project.category} — {project.year || '2024'}
                              </span>
                              <h2 className="font-display font-black text-3xl md:text-6xl text-white uppercase leading-[0.9] translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                  {project.title}
                              </h2>
                              <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                  <div className="px-6 py-3 border border-white/20 rounded-full flex items-center gap-2 bg-white text-black hover:bg-accent-red hover:border-accent-red hover:text-black transition-colors">
                                      <span className="font-sans font-bold text-sm uppercase tracking-wider">Explore</span>
                                      <ArrowUpRight size={16} />
                                  </div>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          )}

          {/* B. LIST VIEW */}
          {viewMode === 'list' && (
              <div className="flex flex-col">
                  {/* List Header */}
                  <div className="grid grid-cols-12 border-b border-white/10 pb-4 mb-4 text-white/30 font-mono text-[10px] uppercase tracking-widest px-2">
                      <div className="col-span-1 hidden md:block">No.</div>
                      <div className="col-span-2 hidden md:block">Year</div>
                      <div className="col-span-8 md:col-span-6">Project</div>
                      <div className="col-span-4 md:col-span-3 text-right">Category</div>
                  </div>

                  {filteredProjects.map((project, idx) => (
                      <div
                          key={`${project.title}-${idx}`}
                          onClick={() => handleProjectClick(project)}
                          className="group grid grid-cols-12 py-8 border-b border-white/10 items-center hover:bg-white/5 transition-colors px-4 -mx-4 relative cursor-pointer"
                          onMouseEnter={() => setHoveredProject(project.title)}
                          onMouseLeave={() => setHoveredProject(null)}
                      >
                          <div className="col-span-1 hidden md:block font-mono text-xs text-white/40 group-hover:text-accent-red transition-colors">
                              {(idx + 1).toString().padStart(2, '0')}
                          </div>
                          <div className="col-span-2 hidden md:block font-mono text-xs text-white/60">
                              {project.year || '2024'}
                          </div>
                          <div className="col-span-8 md:col-span-6">
                              <h3 
                                className="font-display font-bold text-3xl md:text-5xl text-white transition-all duration-300 origin-left group-hover:scale-[1.02]"
                              >
                                  <span className="block group-hover:hidden">{project.title}</span>
                                  {/* Outline Version on Hover */}
                                  <span 
                                    className="hidden group-hover:block text-transparent"
                                    style={{ WebkitTextStroke: '1px #ff3c00' }}
                                  >
                                      {project.title}
                                  </span>
                              </h3>
                          </div>
                          <div className="col-span-4 md:col-span-3 text-right font-mono text-[10px] md:text-xs text-white/40 uppercase tracking-widest group-hover:text-white transition-colors">
                              {project.category}
                          </div>
                          
                          <div className="absolute right-4 md:right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 hidden md:block">
                              <ArrowUpRight className="text-accent-red" size={24} />
                          </div>
                      </div>
                  ))}
              </div>
          )}

          {/* Empty State */}
          {filteredProjects.length === 0 && (
              <div className="w-full py-32 text-center border border-white/10 rounded-lg mt-8">
                  <p className="font-mono text-white/40 uppercase tracking-widest">No projects found in this category.</p>
              </div>
          )}

      </div>
    </div>
  );
};

export default WorkPage;

