
import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import WorkPage from './components/WorkPage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import InsightsPage from './components/InsightsPage';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

const App: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [loading, setLoading] = useState(true);
  
  // View Routing State
  const [view, setView] = useState<'home' | 'work' | 'insights' | 'about' | 'services' | 'contact'>('home');
  // Modal State for managing Global UI overrides (like hiding menu)
  const [isMenuHidden, setIsMenuHidden] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over a clickable element
      const target = e.target as HTMLElement;
      const isClickable = target.closest('a') || target.closest('button') || target.getAttribute('data-cursor') === 'hover' || target.closest('.group') || target.tagName === 'BUTTON';
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  // Handle smooth scroll reset when changing views
  const handleViewChange = (newView: 'home' | 'work' | 'insights' | 'about' | 'services' | 'contact') => {
      if (view !== newView) {
          window.scrollTo(0, 0);
          setView(newView);
          setIsMenuHidden(false); // Reset menu visibility state
      }
  };

  return (
    <div className="relative min-h-screen bg-cinema-black selection:bg-accent-orange selection:text-white">
      
      {/* Preloader - blocks interactions until complete */}
      <Preloader onComplete={() => setLoading(false)} />

      {/* Noise Overlay - Persistent */}
      <div className="noise-overlay"></div>
      
      {/* Custom Cursor */}
      <div 
        className={`custom-cursor ${isHovering ? 'hovered' : ''}`}
        style={{ 
          left: `${cursorPos.x}px`, 
          top: `${cursorPos.y}px`,
          opacity: loading ? 0 : 1 // Hide cursor during loading
        }}
      ></div>

      {/* Main App Content - Visible underneath but interactive only after load */}
      <div className={`transition-opacity duration-1000 ${loading ? 'pointer-events-none' : 'pointer-events-auto'}`}>
          <Navigation currentView={view} onViewChange={handleViewChange} hideMenu={isMenuHidden} />
          
          <main>
            {view === 'home' ? (
                <Home startAnimation={!loading} onModalStateChange={setIsMenuHidden} />
            ) : view === 'work' ? (
                <WorkPage onModalStateChange={setIsMenuHidden} />
            ) : view === 'insights' ? (
                <InsightsPage />
            ) : view === 'services' ? (
                <ServicesPage />
            ) : view === 'contact' ? (
                <ContactPage />
            ) : (
                <AboutPage />
            )}
          </main>
          
          {/* Only show standard footer on Home/Work/About/Services. Contact page has its own footer/content. */}
          {view !== 'contact' && <Footer />}
      </div>
    </div>
  );
};

export default App;
