
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import WorkPage from './components/WorkPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import ProjectDetailPage from './components/ProjectDetailPage';
import ScrollingVideoBackground from './components/ScrollingVideoBackground';
import { ThemeProvider } from './context/ThemeContext';

const AppContent = () => {
  const [loading, setLoading] = useState(true);
  const [isMenuHidden, setIsMenuHidden] = useState(false);
  
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuHidden(false);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-cinema-black selection:bg-accent-red selection:text-white transition-colors duration-400">
      <Preloader onComplete={() => setLoading(false)} />
      <div className="noise-overlay"></div>

      <div className={`w-full overflow-x-hidden transition-opacity duration-1000 ${loading ? 'pointer-events-none' : 'pointer-events-auto'}`}>
          <ScrollingVideoBackground />
          <Navigation hideMenu={isMenuHidden} />
          
          <main>
            <Routes>
              <Route path="/" element={<Home startAnimation={!loading} onModalStateChange={setIsMenuHidden} />} />
              <Route path="/work" element={<WorkPage onModalStateChange={setIsMenuHidden} />} />
              <Route path="/work/:slug" element={<ProjectDetailPage onModalStateChange={setIsMenuHidden} />} />
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
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
};

export default App;
