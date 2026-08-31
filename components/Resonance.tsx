import React, { useState } from 'react';
import { Volume2, VolumeX, RefreshCw } from 'lucide-react';

const Resonance: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [tempo, setTempo] = useState(120);
  const [pitch, setPitch] = useState(44);
  const [gain, setGain] = useState(70);

  const toggleSoundplay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setTempo(120);
    setPitch(44);
    setGain(70);
  };

  // Generate bar lists to create an active graphic equalizer
  const equalizerBars = Array.from({ length: 24 });

  return (
    <section className="bg-cinema-black/50 backdrop-blur-xl py-16 sm:py-20 md:py-32 relative z-10 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Title block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 md:mb-24 animate-on-scroll">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent-red block mb-3 md:mb-4">
              Acoustic Resonance
            </span>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-8xl text-white uppercase leading-none">
              RESONANCE <br />
              <span className="text-stroke hover:text-white transition-colors duration-300">& FREQUENCY</span>
            </h2>
          </div>
          <div className="w-full md:w-96 text-left md:text-right font-mono text-xxs md:text-xs text-white/40 tracking-widest uppercase mt-6 md:mt-0">
            Tempo dictates edit cuts. Control the signal, adjust frequencies, and map the visual rhythm of modern cinematics.
          </div>
        </div>

        {/* Console grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-12 items-center">
          
          {/* Controls - grid span 5 */}
          <div className="lg:col-span-5 bg-zinc-950/60 border border-white/10 p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl flex flex-col gap-6 sm:gap-8 backdrop-blur-md animate-on-scroll">
            <div className="flex justify-between items-center border-b border-white/10 pb-4 sm:pb-6">
              <span className="font-mono text-xs uppercase tracking-widest text-white/50">
                DSP Modulator (Simulation)
              </span>
              <button 
                onClick={handleReset} 
                className="text-white hover:text-accent-red transition-colors flex items-center gap-2 font-mono text-xxs"
                title="Reset Modulation"
              >
                <RefreshCw size={12} />
                RESET
              </button>
            </div>

            {/* Parameter range sliders */}
            <div className="flex flex-col gap-5 sm:gap-6">
              
              {/* Tempo slider */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-white">TEMPO (BPM)</span>
                  <span className="text-accent-red font-bold font-mono">{tempo} BPM</span>
                </div>
                <input 
                  type="range" 
                  min="60" 
                  max="200" 
                  value={tempo} 
                  onChange={(e) => setTempo(Number(e.target.value))}
                  className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent-red"
                />
              </div>

              {/* Pitch/Freq slider */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-white">BASE FREQUENCY</span>
                  <span className="text-accent-red font-bold font-mono">{pitch} Hz</span>
                </div>
                <input 
                  type="range" 
                  min="20" 
                  max="120" 
                  value={pitch} 
                  onChange={(e) => setPitch(Number(e.target.value))}
                  className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent-red"
                />
              </div>

              {/* Gain slider */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-white">SYNCHRONIC GAIN</span>
                  <span className="text-accent-red font-bold font-mono">{gain}%</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="100" 
                  value={gain} 
                  onChange={(e) => setGain(Number(e.target.value))}
                  className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent-red"
                />
              </div>

            </div>

            {/* Modulation Play Trigger */}
            <button 
              onClick={toggleSoundplay}
              className={`w-full py-3.5 sm:py-4 rounded-xl font-mono text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-300 ${
                isPlaying 
                  ? 'bg-accent-red text-white shadow-[0_0_20px_rgba(255,60,0,0.3)]' 
                  : 'bg-white text-black hover:bg-accent-red hover:text-white'
              }`}
            >
              {isPlaying ? (
                <>
                  <Volume2 size={16} />
                  MODULATOR PLAYING
                </>
              ) : (
                <>
                  <VolumeX size={16} />
                  ACTIVATE AUDIO FEED
                </>
              )}
            </button>
          </div>

          {/* Visualizer output - grid span 7 */}
          <div className="lg:col-span-7 bg-zinc-950/45 border border-white/10 p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl h-[280px] sm:h-[330px] flex flex-col justify-between items-center relative overflow-hidden backdrop-blur-md animate-on-scroll delay-150">
            
            {/* Background Grid Accent */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
            
            <div className="w-full flex justify-between items-center relative z-10 border-b border-white/5 pb-3 sm:pb-4">
              <span className="font-mono text-[9px] uppercase tracking-widest text-white/40">
                Acoustic Field Projection
              </span>
              <div className="flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full ${isPlaying ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                <span className="font-mono text-[9px] uppercase tracking-widest text-white/60">
                  {isPlaying ? 'ACTIVE' : 'MUTED'}
                </span>
              </div>
            </div>

            {/* Equalizer Bars Render */}
            <div className="flex items-end justify-center w-full h-32 sm:h-40 gap-[2px] sm:gap-[3px] py-2 relative z-10">
              {equalizerBars.map((_, i) => {
                // Determine heights calculated using inputs for a real modulated feeling!
                const factor = Math.sin((i / equalizerBars.length) * Math.PI) * (gain / 100);
                const randomizedSkew = isPlaying ? Math.random() * 0.4 + 0.6 : 0.05;
                const dynamicHeight = Math.max(8, factor * randomizedSkew * 130 + (pitch / 10));

                // Speed or pace based on tempo
                const animationDuration = `${1.5 - (tempo / 200)}s`;

                return (
                  <div 
                    key={i}
                    className="flex-1 rounded-t-sm transition-all bg-accent-red"
                    style={{
                      height: `${dynamicHeight}px`,
                      opacity: isPlaying ? (i % 2 === 0 ? 0.9 : 0.7) : 0.2,
                      animationDuration: animationDuration,
                    }}
                  />
                );
              })}
            </div>

            {/* Oscilloscope coordinates */}
            <div className="w-full flex justify-between font-mono text-[7px] sm:text-[8px] text-white/30 relative z-10 pt-3 sm:pt-4 border-t border-white/5">
              <span>CH 1: (30HZ - P1.2)</span>
              <span>SIG_FREQ: {((gain * pitch) / 10).toFixed(1)} KHZ</span>
              <span>LATENCY: 1.2ms</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Resonance;
