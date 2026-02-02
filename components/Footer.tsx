import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 py-24 px-6 mt-20 border-t border-white/5 bg-gradient-to-t from-black to-transparent">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Who this is for</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">▹</span> Experienced closers with proven results
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">▹</span> Comfortable with high-ticket commission-only offers
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">▹</span> Skilled in calls, DMs, and follow-ups
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">▹</span> Ready for performance-based rewards
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Mission</h4>
            <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-600 leading-tight">
              “We hunt closers.<br/>We don’t train them.”
            </p>
          </div>
          <div className="mt-8 md:mt-0 text-gray-600 text-xs">
            © {new Date().getFullYear()} Web3 Closer Hunt. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;