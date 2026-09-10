import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useLocation } from 'react-router-dom';
import Hls from 'hls.js';
import { useTheme } from '../context/ThemeContext';

gsap.registerPlugin(ScrollTrigger);

// Video A: Original camera movements
const HLS_A = 'https://res.cloudinary.com/dmnqlruhl/video/upload/sp_auto/v1781362889/Create_video_camera_movements_202606131559_wfbj8n.m3u8';
const MP4_A = 'https://res.cloudinary.com/dmnqlruhl/video/upload/v1781362889/Create_video_camera_movements_202606131559_wfbj8n.mp4';

// Video B: New fast camera movements
const HLS_B = 'https://res.cloudinary.com/dmnqlruhl/video/upload/sp_auto/v1781368839/Create_video_fast_camera_movements_202606131740_cpw4gw.m3u8';
const MP4_B = 'https://res.cloudinary.com/dmnqlruhl/video/upload/v1781368839/Create_video_fast_camera_movements_202606131740_cpw4gw.mp4';

const ScrollingVideoBackground: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const location = useLocation();
  const { isLight } = useTheme();

  const [sources, setSources] = useState({
    hls: HLS_A,
    mp4: MP4_A
  });

  const currentTargetRef = useRef(0);
  const seekPendingRef = useRef(false);

  // Path change handler to determine specific background video source per page
  useEffect(() => {
    setIsLoaded(false);
    setLoadingProgress(0);

    const path = location.pathname;
    if (path === '/') {
      // Home page: Original camera movements (cinematic, clean)
      setSources({ hls: HLS_A, mp4: MP4_A });
    } else if (path.startsWith('/work')) {
      // Work page and Project Details: Fast camera movements (dynamic)
      setSources({ hls: HLS_B, mp4: MP4_B });
    } else if (path === '/about') {
      // About page: Original camera movements (editorial, calm)
      setSources({ hls: HLS_A, mp4: MP4_A });
    } else if (path === '/services') {
      // Services page: Fast camera movements (energetic, technical)
      setSources({ hls: HLS_B, mp4: MP4_B });
    } else if (path === '/insights') {
      // Insights page: Original camera movements (journal, slow)
      setSources({ hls: HLS_A, mp4: MP4_A });
    } else if (path === '/contact') {
      // Contact page: Fast camera movements (high impact)
      setSources({ hls: HLS_B, mp4: MP4_B });
    } else {
      // Fallback
      setSources({ hls: HLS_A, mp4: MP4_A });
    }
  }, [location.pathname]);

  // Throttle seeking: if currently seeking, defer next seek
  const doSeek = (video: HTMLVideoElement, targetTime: number) => {
    currentTargetRef.current = targetTime;
    if (!video.seeking) {
      video.currentTime = targetTime;
    } else {
      seekPendingRef.current = true;
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    const handleSeeked = () => {
      if (seekPendingRef.current) {
        seekPendingRef.current = false;
        if (videoRef.current) {
          videoRef.current.currentTime = currentTargetRef.current;
        }
      }
    };

    const handleCanPlay = () => {
      setIsLoaded(true);
      setLoadingProgress(100);
    };

    const handleProgress = () => {
      // Fallback for native progress tracking (Safari / MP4)
      if (video.duration) {
        const buffered = video.buffered;
        if (buffered.length > 0) {
          const bufferedEnd = buffered.end(buffered.length - 1);
          const progress = Math.min(
            Math.round((bufferedEnd / video.duration) * 100),
            100
          );
          setLoadingProgress(progress);
        }
      }
    };

    const handleError = () => {
      // Both HLS and MP4 sources failed: stop waiting, hide the video,
      // and let the ambient overlays carry the background instead.
      setVideoFailed(true);
      setIsLoaded(true);
    };

    video.addEventListener('seeked', handleSeeked);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('progress', handleProgress);
    video.addEventListener('error', handleError);

    // Setup HLS.js configuration
    const config = {
      maxBufferLength: 120,
      maxMaxBufferLength: 600,
      maxBufferSize: 20 * 1024,
      startPosition: 0,
      capLevelToPlayerSize: false,
      startLevel: -1,
      autoStartLoad: true,
    };

    if (Hls.isSupported()) {
      hls = new Hls(config);
      hls.loadSource(sources.hls);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        if (hls) {
          const maxLevel = hls.levels.length - 1;
          hls.currentLevel = maxLevel;
          hls.startLevel = maxLevel;
        }
      });

      hls.on(Hls.Events.FRAG_BUFFERED, () => {
        if (video.duration) {
          const buffered = video.buffered;
          if (buffered.length > 0) {
            const bufferedEnd = buffered.end(buffered.length - 1);
            const progress = Math.min(
              Math.round((bufferedEnd / video.duration) * 100),
              100
            );
            setLoadingProgress(progress);
          }
        }
      });

      // Recover or fallback on error
      hls.on(Hls.Events.ERROR, (_event, data) => {
        if (data.fatal) {
          console.warn('HLS.js encountered a fatal error, falling back to MP4:', data);
          if (hls) hls.destroy();
          video.src = sources.mp4;
          video.load();
        }
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Native HLS (Safari)
      video.src = sources.hls;
    } else {
      // Direct MP4 fallback
      video.src = sources.mp4;
    }

    return () => {
      video.removeEventListener('seeked', handleSeeked);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('progress', handleProgress);
      video.removeEventListener('error', handleError);
      if (hls) {
        hls.destroy();
      }
    };
  }, [sources.hls, sources.mp4]);

  // Safety net: never trap the visitor behind the loading overlay.
  // If the video hasn't loaded after 12s, dismiss the overlay anyway.
  useEffect(() => {
    if (isLoaded) return;
    const timer = setTimeout(() => setIsLoaded(true), 12000);
    return () => clearTimeout(timer);
  }, [isLoaded]);

  // Scroll seek trigger setup
  useGSAP(() => {
    const video = videoRef.current;
    if (!video) return;

    const trigger = ScrollTrigger.create({
      trigger: document.documentElement,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => {
        if (video.duration) {
          const targetTime = self.progress * video.duration;
          doSeek(video, targetTime);
        }
      },
    });

    return () => trigger.kill();
  }, { dependencies: [isLoaded, sources.hls] });

  // Mouse Parallax Effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!wrapperRef.current) return;

      const moveY = (e.clientY / window.innerHeight) * 2 - 1;

      gsap.to(wrapperRef.current, {
        y: moveY * -30,
        duration: 1,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Loading Overlay */}
      {!isLoaded && (
        <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center pointer-events-auto transition-colors duration-300 ${
          isLight ? 'bg-[#f8f8fa]' : 'bg-black'
        }`}>
          <div className={`text-2xl font-sans font-bold tracking-wider animate-pulse ${
            isLight ? 'text-black' : 'text-white'
          }`}>
            Loading... {loadingProgress}%
          </div>
        </div>
      )}

      {/* Video Wrapper */}
      <div
        ref={wrapperRef}
        className="fixed top-0 left-0 w-full h-full z-0 scale-[1.05] origin-center pointer-events-none select-none overflow-hidden bg-cinema-black transition-colors duration-400"
      >
        {!videoFailed && (
        <video
          ref={videoRef}
          className={`w-full h-full object-cover scale-[1.35] transition-opacity duration-500 ${
            isLight ? 'opacity-25' : 'opacity-40'
          }`}
          muted
          playsInline
          crossOrigin="anonymous"
        />
        )}
        {/* Ambient Overlays */}
        <div className={`absolute inset-0 z-[1] pointer-events-none transition-all duration-400 ${
          isLight 
            ? 'bg-gradient-to-t from-[#f8f8fa] via-transparent to-[#f8f8fa]/85' 
            : 'bg-gradient-to-t from-cinema-black via-transparent to-cinema-black/80'
        }`} />
        <div className={`absolute inset-0 z-[1] pointer-events-none transition-all duration-400 ${
          isLight 
            ? 'bg-gradient-to-r from-[#f8f8fa]/80 via-transparent to-[#f8f8fa]/80' 
            : 'bg-gradient-to-r from-cinema-black via-transparent to-cinema-black'
        }`} />
        <div 
          className="absolute inset-0 z-[1] opacity-80 pointer-events-none transition-all duration-400"
          style={{
            background: isLight 
              ? 'radial-gradient(circle, transparent 35%, #f8f8fa 92%)' 
              : 'radial-gradient(circle, transparent 30%, #0a0a0a 90%)'
          }}
        />
        <div className="absolute inset-0 backdrop-blur-[1px] z-[1] pointer-events-none" />
      </div>
    </>
  );
};

export default ScrollingVideoBackground;
