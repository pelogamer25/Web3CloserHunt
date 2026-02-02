import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowDown } from 'lucide-react';

interface HeroProps {
  onScrollToForm: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollToForm }) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-32">
      
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 backdrop-blur-md"
      >
        <span className="text-emerald-400 text-xs font-bold tracking-[0.2em] uppercase">Private Access Only</span>
      </motion.div>

      {/* Title */}
      <motion.h1 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-7xl lg:text-8xl font-black text-center text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-6 tracking-tight"
      >
        WEB3 CLOSER HUNT
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-lg md:text-xl text-gray-400 text-center max-w-2xl font-light mb-16 leading-relaxed"
      >
        Connecting experienced closers with verified Web3 opportunities.
      </motion.p>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mb-20">
        
        {/* Pros */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-panel p-8 rounded-2xl border-t-2 border-t-emerald-500/50"
        >
          <div className="flex items-center gap-3 mb-6">
             <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
               <Check size={16} className="text-emerald-400" />
             </div>
             <h3 className="text-xl font-bold text-white">The Standard</h3>
          </div>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-gray-300">
              <Check size={16} className="text-emerald-500 shrink-0" />
              <span>Proven closer experience</span>
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <Check size={16} className="text-emerald-500 shrink-0" />
              <span>High-ticket & commission based</span>
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <Check size={16} className="text-emerald-500 shrink-0" />
              <span>No fixed salary — high upside</span>
            </li>
            <li className="flex items-center gap-3 text-gray-300">
               <Check size={16} className="text-emerald-500 shrink-0" />
               <span className="font-semibold text-white">No beginners. No guarantees.</span>
            </li>
          </ul>
        </motion.div>

        {/* Cons */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="glass-panel p-8 rounded-2xl border-t-2 border-t-red-500/20"
        >
          <div className="flex items-center gap-3 mb-6">
             <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
               <X size={16} className="text-red-400" />
             </div>
             <h3 className="text-xl font-bold text-gray-400">Automatic Rejection</h3>
          </div>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-gray-400">
              <X size={16} className="text-red-500/50 shrink-0" />
              <span>Looking to "learn sales"</span>
            </li>
            <li className="flex items-center gap-3 text-gray-400">
              <X size={16} className="text-red-500/50 shrink-0" />
              <span>Zero closing experience</span>
            </li>
            <li className="flex items-center gap-3 text-gray-400">
              <X size={16} className="text-red-500/50 shrink-0" />
              <span>Need hand-holding</span>
            </li>
            <li className="flex items-center gap-3 text-gray-400">
              <X size={16} className="text-red-500/50 shrink-0" />
              <span>Seeking hourly wages</span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="flex flex-col items-center gap-4"
      >
        <button 
          onClick={onScrollToForm}
          className="group relative px-10 py-5 bg-emerald-500 text-black font-bold text-xl rounded-full tracking-wider hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] hover:scale-105"
        >
          APPLY NOW
          <div className="absolute inset-0 rounded-full animate-pulse-slow ring-4 ring-emerald-500/30"></div>
        </button>
        <span className="text-xs text-emerald-500/60 font-medium tracking-widest uppercase">Performance-based.</span>
      </motion.div>

      {/* Scroll Hint */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-10"
      >
        <ArrowDown className="text-white/20" />
      </motion.div>
    </div>
  );
};

export default Hero;