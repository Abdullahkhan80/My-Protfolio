import React from "react";
import { projects } from "../components/projects";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CardProject from "../components/CardProject";
import { ExternalLink, } from 'lucide-react';


const Featured = () => (
  <div className="text-white mt-10 text-center px-[5%]">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto"
    >
      <h2 className="inline-block text-3xl md:text-5xl p-5 font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-[#a855f7]">
        <span style={{ color: '#111', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Featured Projects
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.slice(0, 3).map((project) => (
          <div key={project.id}>
            <CardProject
              Img={project.image}
              Title={project.title}
              Description={project.description}
              Link={project.link}
              id={project.id}
            />
          </div>
        ))}
      </div>
    </motion.div>
    <div className="pt-20 flex relative items-center cursor-pointer justify-center">
      <Link to="/projects"
        className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg border border-[#a855f7]/50 text-[#a855f7] font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 hover:bg-[#a855f7]/10 animate-bounce-slow delay-200"
      >
        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" /> View Projects

      </Link>
    </div>
  </div>
);

export default Featured;