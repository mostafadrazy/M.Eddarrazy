import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import CustomCursor from './components/CustomCursor';
import AIChat from './components/AIChat';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Services from './pages/Services';
import Process from './pages/Process';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center">
        <div className="font-display text-8xl font-black text-white mb-4 tracking-tighter">
          M<span className="text-brand-red">.</span>
        </div>
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-brand-red animate-[width_1.5s_ease-out_forwards] w-full origin-left"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#020202] text-white overflow-x-hidden selection:bg-brand-red selection:text-white">
      {/* Noise Texture */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] bg-noise"></div>

      <CustomCursor />
      <Navigation />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/services" element={<Services />} />
          <Route path="/process" element={<Process />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <AIChat />
    </div>
  );
};

export default App;