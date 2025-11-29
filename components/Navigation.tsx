import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-6 md:px-12"
      >

        <Link to="/" className="group flex items-center gap-2 z-50">
          <div className="bg-white text-black rounded-sm w-10 h-10 flex items-center justify-center font-display font-black text-xl tracking-tighter group-hover:bg-brand-red group-hover:text-white transition-colors">
            M
          </div>
          <span className="font-display font-bold text-lg hidden md:block">EDDARRAZY</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 bg-black/50 backdrop-blur-md px-8 py-3 rounded-full border border-white/5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-brand-red transition-all"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 z-50">
          <Link to="/contact" className="hidden md:flex text-white border border-white/20 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-red hover:border-brand-red hover:text-white transition-all items-center gap-2">
            Let's Talk
          </Link>
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white border border-white/10"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-brand-red flex flex-col justify-center items-center p-8 md:hidden"
          >
            <div className="flex flex-col gap-8 text-center">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-display text-5xl font-black text-black hover:text-white transition-colors uppercase tracking-tighter"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl"
            >
              <i className="fas fa-times"></i>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;