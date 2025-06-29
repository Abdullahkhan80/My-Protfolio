// filepath: c:\Users\Abdullah\Desktop\Abdullah\src\components\Certificate.jsx
import React from 'react'
import { ExternalLink } from 'lucide-react';
import { achievements } from './projects';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import CardProject from './CardProject';

const Certificate = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="py-40 md:py-80  text-white text-center px-[5%]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <motion.h2 
          className="inline-block text-3xl md:text-5xl pb-10 md:py-20 font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-[#a855f7]"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span style={{ color: '#111', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Achievements
          </span>
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {achievements.slice(0,3).map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.4 + index * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <CardProject
                Img={project.image}
                Title={project.title}
                Description={project.description}
                index={index}
                // Link={project.link}
                // id={project.link}
              />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="pt-20 flex relative items-center cursor-pointer justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
           <Link to="/Acheivements"
             className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg border border-[#a855f7]/50 text-[#a855f7] font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 hover:bg-[#a855f7]/10 animate-bounce-slow delay-200"
           >
             <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" /> View Acheivements
     
           </Link>
         </motion.div>
      </motion.div>
    </div>
  )
}

export default Certificate