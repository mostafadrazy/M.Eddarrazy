
import React, { useState } from 'react';
import { VIDEOS } from '../constants';
import { ArrowUpRight, Maximize2, X } from 'lucide-react';

interface WorkProps {
    onModalStateChange?: (isOpen: boolean) => void;
}

const Work: React.FC<WorkProps> = ({ onModalStateChange }) => {
  // Combined projects - manually curated for Home Page
  const projects = [
    ...VIDEOS.slice(0, 3), // Show top 3 videos
    { 
        title: "9adiya.site", 
        category: "Web Development", 
        url: "https://www.9adiya.site/", 
        thumbnail: "https://res.cloudinary.com/dmnqlruhl/image/upload/v1764377769/Screenshot_10-5-2025_193454_www.9adiya.site_v37yha.jpg",
        isWeb: true 
    },
    {
        title: "Association Sportive Sale",
        category: "Rebranding",
        url: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/30f52e151133187.630668ac01f38.png",
        thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/808/78c0aa151133187.Y3JvcCwxNDAwLDEwOTUsMCwxNDkw.png",
        isWeb: true,
        year: "2024"
    }
  ];

  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleFullscreen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const container = e.currentTarget.closest('.relative');
    const video = container?.querySelector('video');

    if (video) {
        // Unmute for fullscreen experience
        video.muted = false;
        
        // Helper to reset on exit
        const handleExit = () => {
            if (!document.fullscreenElement && !(document as any).webkitFullscreenElement) {
                video.muted = true;
                video.controls = false;
                video.removeEventListener('fullscreenchange', handleExit);
                video.removeEventListener('webkitendfullscreen', handleExit); 
            }
        };

        // Attach listeners
        video.addEventListener('fullscreenchange', handleExit);
        video.addEventListener('webkitendfullscreen', handleExit); // iOS

        // Request Fullscreen
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if ((video as any).webkitEnterFullscreen) {
            (video as any).webkitEnterFullscreen();
        } else if ((video as any).msRequestFullscreen) {
            (video as any).msRequestFullscreen();
        }
        
        // Enable controls so user can scrub/exit
        video.controls = true;
    }
  };

  const handleProjectClick = (project: any) => {
      setSelectedProject(project);
      document.body.style.overflow = 'hidden';
      // Notify parent to hide menu immediately
      if (onModalStateChange) onModalStateChange(true);
      
      // Small delay to allow DOM render before animating class
      setTimeout(() => {
          setIsModalVisible(true);
      }, 10);
  };

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
    <section id="work" className="bg-cinema-black py-16 md:py-24 relative z-10">
      
      {/* =========================================================================
          PROJECT DETAIL OVERLAY
         ========================================================================= */}
      {selectedProject && (
          <div className={`fixed inset-0 z-[1005] flex flex-col bg-[#050505] transition-transform duration-[800ms] cubic-bezier(0.76, 0, 0.24, 1) ${isModalVisible ? 'translate-y-0' : 'translate-y-full'}`}>
              
              {/* Header / Close Area */}
              <div className="absolute top-0 left-0 w-full z-[1000] flex justify-between items-center px-6 py-6 md:px-12 md:py-8 bg-[#050505] border-b border-white/5">
                   
                   <div></div>

                   {/* Center: Project Tag */}
                   <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex bg-white/5 px-4 py-2 rounded-full border border-white/10 items-center gap-2 backdrop-blur-md">
                       <div className="w-2 h-2 rounded-full bg-accent-orange animate-pulse"></div>
                       <span className="font-mono text-[10px] uppercase tracking-widest text-white">
                           Project Detail
                       </span>
                   </div>
                   
                   {/* Right: Close Button */}
                   <button 
                      onClick={handleCloseModal}
                      className="group flex items-center gap-4 text-white hover:text-accent-orange transition-colors z-50 cursor-pointer pointer-events-auto"
                   >
                       <span className="font-mono text-xs uppercase tracking-widest hidden md:block group-hover:-translate-x-2 transition-transform font-bold">
                           Close
                       </span>
                       <div className="w-12 h-12 rounded-full border border-white/20 group-hover:border-accent-orange bg-white/5 flex items-center justify-center transition-all duration-300 group-hover:bg-accent-orange group-hover:text-black">
                           <X size={20} />
                       </div>
                   </button>
              </div>

              <div className="flex flex-col lg:flex-row h-full w-full pt-24 md:pt-32">
                  
                  {/* Media Section */}
                  <div className="relative h-[55vh] lg:h-full lg:w-[60%] bg-[#080808] group border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col">
                       
                       {/* Blurred Background - Fixed to container */}
                       <div className="absolute inset-0 w-full h-full opacity-30 scale-110 blur-3xl pointer-events-none overflow-hidden">
                           {selectedProject.isWeb ? (
                               <img src={getModalImageSrc(selectedProject)} className="w-full h-full object-cover" alt="" />
                           ) : (
                               <video src={selectedProject.url} muted loop className="w-full h-full object-cover" />
                           )}
                       </div>

                       {/* Content Wrapper - Allows scrolling for Web/Images, Center for Videos */}
                       <div className={`relative w-full h-full z-10 ${selectedProject.isWeb ? 'overflow-y-auto scrollbar-hide' : 'flex items-center justify-center p-6 md:p-12 lg:p-16'}`}>
                           {selectedProject.isWeb ? (
                               <img 
                                  src={getModalImageSrc(selectedProject)} 
                                  className="w-full h-auto object-cover"
                                  alt={selectedProject.title}
                               />
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

                  {/* Info Section */}
                  <div className="relative h-[45vh] lg:h-full lg:w-[40%] bg-[#050505] flex flex-col">
                       
                       <div className="flex-1 overflow-y-auto px-6 md:px-12 py-8 md:py-12 scrollbar-hide">
                           <div className={`transition-all duration-700 delay-300 flex flex-col items-start min-h-full ${isModalVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                               
                               <div className="flex flex-wrap items-center gap-4 mb-6 md:mb-8">
                                   <span className="font-mono text-[10px] text-accent-orange border border-accent-orange/30 px-3 py-1 rounded-full uppercase tracking-widest bg-accent-orange/5">
                                       {selectedProject.category}
                                   </span>
                                   <span className="w-px h-4 bg-white/10"></span>
                                   <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                                       {selectedProject.year || '2024'}
                                   </span>
                               </div>

                               <h2 className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white uppercase leading-[0.9] tracking-tighter mb-6 md:mb-8 break-words w-full">
                                   {selectedProject.title}
                               </h2>

                               <div className="relative pl-6 border-l border-white/10 mb-8 md:mb-12">
                                    <p className="font-sans text-white/60 text-sm md:text-base leading-relaxed max-w-md">
                                        {selectedProject.isWeb 
                                            ? "An immersive digital experience focusing on visual identity, interaction, and brand storytelling. Crafted to deliver a seamless user journey."
                                            : "A cinematic visual narrative crafted with precision editing and sound design. This piece explores the intersection of rhythm, emotion, and brand identity."
                                        }
                                    </p>
                               </div>

                               <a 
                                  href={selectedProject.url}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="group flex items-center justify-between gap-6 bg-white text-black pl-6 pr-2 py-2 rounded-full font-sans font-bold uppercase tracking-wider hover:bg-accent-orange transition-all duration-300 w-full md:w-auto min-w-[200px] mb-12"
                               >
                                   <span className="text-sm">{selectedProject.isWeb ? 'View Project' : 'Watch Full Project'}</span>
                                   <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                                      <ArrowUpRight size={16} />
                                   </div>
                               </a>

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

      <div className="container mx-auto px-4 md:px-12">
        
        {/* Header */}
        <div className="mb-12 md:mb-32 animate-on-scroll">
            <h2 className="font-display font-black text-4xl md:text-8xl text-white leading-none mb-4 md:mb-6">
                SELECTED <br/> <span className="text-accent-orange">WORKS</span>
            </h2>
            <div className="w-full h-[1px] bg-white/20"></div>
        </div>

        {/* Stacking Cards */}
        <div className="flex flex-col gap-6 md:gap-0">
            {projects.map((project, index) => {
                const isLandscape = project.isWeb;
                const isVideo = !isLandscape;
                
                return (
                    <div 
                        key={index} 
                        className="sticky top-20 md:top-24 flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-12 p-5 md:p-12 rounded-[1.5rem] md:rounded-[2rem] border border-white/10 shadow-2xl transition-transform duration-500 origin-top bg-[#0f0f0f] animate-on-scroll"
                        style={{
                            zIndex: index + 1,
                            marginBottom: `${(projects.length - index) * 20}px` // Reduced spacing for mobile stack
                        }}
                    >
                        {/* Left: Content */}
                        <div className="md:col-span-5 flex flex-col justify-between order-2 md:order-1 py-2 md:py-4">
                            <div>
                                <div className="flex items-center gap-4 mb-4 md:mb-6">
                                    <span className="font-sans text-[9px] md:text-xs font-bold uppercase tracking-widest text-accent-orange border border-accent-orange/30 px-2 py-1 md:px-3 rounded-full">
                                        0{index + 1}
                                    </span>
                                    <span className="w-8 md:w-12 h-[1px] bg-white/20"></span>
                                    <span className="font-sans text-[9px] md:text-xs uppercase tracking-widest text-white/40">
                                        {project.category}
                                    </span>
                                </div>
                                
                                <h3 className="font-display font-bold text-2xl md:text-6xl mb-4 md:mb-6 leading-[1.0] text-white">
                                    {project.title}
                                </h3>
                                
                                <p className="font-sans text-sm md:text-base text-white/60 leading-relaxed max-w-sm">
                                    {isLandscape 
                                        ? "Strategic brand identity and digital design that cuts through the noise." 
                                        : "Cinematic visual storytelling crafted for maximum engagement and brand impact."}
                                </p>
                            </div>
                            
                            <div className="mt-6 md:mt-0">
                                <button 
                                    onClick={() => handleProjectClick(project)}
                                    className="group inline-flex items-center gap-3 font-sans text-xs md:text-sm font-bold uppercase tracking-wider text-white hover:text-accent-orange transition-colors"
                                >
                                    <span className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-accent-orange group-hover:border-accent-orange group-hover:text-black transition-all">
                                        <ArrowUpRight size={16} />
                                    </span>
                                    Open Project
                                </button>
                            </div>
                        </div>

                        {/* Right: Media Container */}
                        <div className="md:col-span-7 order-1 md:order-2 flex items-center justify-center md:justify-end md:h-[60vh] mt-2 md:mt-0">
                             <div 
                                className={`relative rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-black group transition-all duration-500 ${
                                    isLandscape 
                                        ? 'aspect-video w-full h-auto' 
                                        : 'aspect-[9/16] w-[75%] md:w-auto md:h-full mx-auto'
                                }`}
                             >
                                 {project.isWeb ? (
                                     <img 
                                        src={project.thumbnail || project.url} 
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                     />
                                 ) : (
                                     <video 
                                        src={project.url} 
                                        muted 
                                        loop 
                                        playsInline
                                        autoPlay
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                     />
                                 )}
                                 
                                 {/* Overlay Effect */}
                                 <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                                 
                                 {/* Fullscreen Button for Video */}
                                 {isVideo && (
                                     <button 
                                        onClick={toggleFullscreen}
                                        className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 hover:bg-accent-orange hover:scale-110 pointer-events-auto z-20"
                                        aria-label="Fullscreen"
                                     >
                                         <Maximize2 size={18} className="text-white" />
                                     </button>
                                 )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>

        {/* End Spacer */}
        <div className="h-20 md:h-40"></div>

      </div>
    </section>
  );
};

export default Work;
