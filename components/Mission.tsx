import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Mission: React.FC = () => {
  return (
    <section className="relative z-10 py-24 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto relative"
      >
         {/* Decorative background element */}
         <div className="absolute -top-20 -left-20 text-emerald-500/5 select-none pointer-events-none">
            <Quote size={200} />
         </div>

         <div className="relative space-y-8 text-lg md:text-xl text-gray-400 leading-relaxed font-light text-center md:text-left">
            <p>
              I’m just one ugly guy on a mission to bring closers <strong className="text-emerald-400 font-medium">real financial freedom</strong>, money, stability, and control over their own lives.
            </p>
            <p>
              I’ve seen too many great salespeople working for peanuts.
              <br />
              Too many people with real skills, but no system, no real opportunity, and no winning environment.
            </p>
            
            <div className="py-4">
              <p className="text-3xl font-bold text-white mb-4">
                That’s why I built a system.
              </p>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  A system that doesn’t look for beginners.
                </p>
                <p className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  A system that doesn’t tolerate excuses.
                </p>
                <p className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  A system built only for those who already know how to sell and want more.
                </p>
              </div>
            </div>

            <p>
              I don’t promise an easy path.
              <br /> 
              I promise an opportunity to step into a proven system, perform at your highest level, and get paid what you’re truly worth.
            </p>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 p-6 md:p-8 bg-gradient-to-br from-emerald-900/10 to-transparent border border-emerald-500/20 rounded-2xl backdrop-blur-sm"
            >
              <p className="text-lg md:text-xl text-emerald-100 italic font-medium">
                "If you’re an elite closer with a strong mindset and real experience, this is where you get to show your skills and build real financial freedom."
              </p>
            </motion.div>
         </div>
      </motion.div>
    </section>
  );
};

export default Mission;