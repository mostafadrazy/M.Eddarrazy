
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import WorkPage from './components/WorkPage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import InsightsPage from './components/InsightsPage';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import ProjectDetailPage from './components/ProjectDetailPage';
import ScrollingVideoBackground from './components/ScrollingVideoBackground';

const AppContent = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isMenuHidden, setIsMenuHidden] = useState(false);
  
  const location = useLocation();

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      const isClickable = target.closest('a') || target.closest('button') || target.getAttribute('data-cursor') === 'hover' || target.closest('.group') || target.tagName === 'BUTTON';
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuHidden(false);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-cinema-black selection:bg-accent-orange selection:text-white">
      <Preloader onComplete={() => setLoading(false)} />
      <div className="noise-overlay"></div>
      
      <div 
        className={`custom-cursor ${isHovering ? 'hovered' : ''}`}
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px`, opacity: loading ? 0 : 1 }}
      ></div>

      <div className={`w-full overflow-x-hidden transition-opacity duration-1000 ${loading ? 'pointer-events-none' : 'pointer-events-auto'}`}>
          <ScrollingVideoBackground />
          <Navigation hideMenu={isMenuHidden} />
          
          <main>
            <Routes>
              <Route path="/" element={<Home startAnimation={!loading} onModalStateChange={setIsMenuHidden} />} />
              <Route path="/work" element={<WorkPage onModalStateChange={setIsMenuHidden} />} />
              <Route path="/work/:slug" element={<ProjectDetailPage onModalStateChange={setIsMenuHidden} />} />
              <Route path="/insights" element={<InsightsPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </main>
          
          {location.pathname !== '/contact' && <Footer />}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
