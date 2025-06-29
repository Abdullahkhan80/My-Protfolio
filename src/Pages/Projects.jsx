import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import CardProject from '../components/CardProject';
import projects from '../components/projects';

const Projects = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-20 px-[5%]">
      {/* Back Button */}
      <div className="absolute top-6 left-6 z-50">
        <Link to="/">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 backdrop-blur-lg rounded-lg border border-white/10 text-white hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <motion.h2 
          className="inline-block text-3xl md:text-5xl p-5 font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-[#a855f7]"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span style={{ color: '#111', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            My Projects
          </span>
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.4 + index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <CardProject
                Img={project.image}
                Title={project.title}
                Description={project.description}
                Link={project.link}
                id={project.id}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;