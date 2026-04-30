import React from 'react';

const TechStackIcon = ({ TechStackIcon, Language }) => {
  return (
    <div className="group h-full w-full p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 border border-white/5 hover:border-white/10 transition-transform transition-shadow transition-colors duration-300 ease-in-out flex flex-col items-center justify-center gap-4 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl min-h-[160px] lg:min-h-[180px] will-change-transform">
      <div className="relative flex items-center justify-center">
        <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500 will-change-opacity"></div>
        <img 
          src={TechStackIcon} 
          alt={`${Language} icon`} 
          className="relative h-12 w-12 md:h-16 md:w-16 object-contain transform transition-transform duration-300 group-hover:rotate-6"
        />
      </div>
      <span className="text-slate-300 font-medium text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300 text-center">
        {Language}
      </span>
    </div>
  );
};

export default TechStackIcon; 