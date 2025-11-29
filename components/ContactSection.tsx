import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 md:px-6 max-w-[1400px] mx-auto mb-20">
      <div className="bg-[#111] rounded-[3.5rem] p-8 md:p-24 relative overflow-hidden text-center border border-white/5">

        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-red/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="font-display font-black text-6xl md:text-8xl text-white mb-8 tracking-tighter">
            Let's <span className="text-brand-red">Create</span>.
          </h2>
          <p className="text-gray-400 text-xl font-medium mb-12">
            Have a project in mind? Let's turn your vision into a visual reality.
          </p>

          <a href="mailto:Mostafadrazy@gmail.com" className="inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full font-bold text-lg uppercase tracking-wide hover:scale-105 transition-transform duration-300">
            Start a Project <i className="fas fa-arrow-right"></i>
          </a>

          <div className="mt-16 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:items-start items-center gap-2">
              <a href="mailto:Mostafadrazy@gmail.com" className="text-xl font-bold text-white hover:text-brand-red transition-colors">Mostafadrazy@gmail.com</a>
              <a href="tel:+212657067384" className="text-lg text-gray-400 hover:text-white transition-colors">+212 657 067 384</a>
            </div>

            <div className="flex gap-6">
              <a href="https://www.linkedin.com/in/eddarrazy/" target="_blank" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"><i className="fab fa-github"></i></a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <p className="mt-8 text-gray-600 text-xs uppercase tracking-widest font-bold">© 2025 Mustapha Eddarrazy</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;