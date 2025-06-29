import React from 'react';
import { motion } from 'framer-motion';
import CardProject from '../components/CardProject';
import { achievements } from '../components/projects';

const Projects = () => {
  return (
    <div className=" text-white px-[5%]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="inline-block text-3xl md:text-5xl p-5 font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-[#a855f7]">
          <span style={{ color: '#111', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            My Achievements
          </span>
        </h2>
        {/* Masonry layout using columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {achievements.map((project) => (
            <div key={project.id} className="break-inside-avoid mb-6">
              <CardProject
                Img={project.image}
                Title={project.title}
                Description={project.description}
                // Link={project.link}
                // id={project.id}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;