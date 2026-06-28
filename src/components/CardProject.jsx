import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CardProject = ({ Img, Title, Description, Link: ProjectLink, id, index = 0 }) => {
  // Handle empty  ProjectLink kosong
  const handleLiveDemo = (e) => {
    if (!ProjectLink) {
      console.log("ProjectLink empty");
      e.preventDefault();
      alert("Live demo link is not available")
    }
  };
  
  const handleDetails = (e) => {
    if (!id) {
      console.log("ID empty");
      e.preventDefault();
      alert("Project details are not available");
    }
  };
  

  return (
    <motion.div 
      className="group relative w-full"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
    >
            
      <div className="premium-card relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#e6c078]/[0.06] via-purple-500/[0.06] to-orange-500/[0.06] opacity-60 group-hover:opacity-90 transition-opacity duration-300"
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
        ></motion.div>
    
        <div className="relative p-5 z-10">
          <motion.div 
            className="relative overflow-hidden rounded-lg"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <motion.img
              src={Img}
              alt={Title}
              className="w-full h-full object-cover"
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.5 }
              }}
            />
          </motion.div>
          
          <motion.div 
            className="mt-4 space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
          >
            <motion.h3
              className="font-display text-xl font-semibold bg-gradient-to-r from-[#f7e7ce] via-purple-200 to-[#e6c078] bg-clip-text text-transparent"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              {Title}
            </motion.h3>
            
            <p className="text-gray-300/80 text-sm leading-relaxed line-clamp-2">
              {Description}
            </p>
            
            <div className="pt-4 flex items-center justify-between">
              {ProjectLink ? (
                <motion.a
                  href={ProjectLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLiveDemo}
                  className="inline-flex items-center space-x-2 text-[#e6c078] hover:text-[#f7e7ce] transition-colors duration-200"
                  whileHover={{ 
                    scale: 1.05,
                    x: 5,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-sm font-medium">Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              ) : (
                <span className="text-gray-500 text-sm"></span>
              )}
              
     

              {id ? (
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={`/projects/Descriptionpage/${id}`}
                    onClick={handleDetails}
                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 border border-[#e6c078]/20 hover:border-[#e6c078]/50 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#e6c078]/40"
                  >
                    <span className="text-sm font-medium">Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ) : (
                <span className="text-gray-500 text-sm"></span>
              )}
            </div>
          </motion.div>
          
          <motion.div
            className="absolute inset-0 border border-white/0 group-hover:border-[#e6c078]/30 rounded-xl transition-colors duration-300 -z-50"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CardProject;