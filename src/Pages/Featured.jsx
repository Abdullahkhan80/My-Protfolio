import React from "react";
import { projects } from "../components/projects";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import CardProject from "../components/CardProject";
import { ExternalLink, } from 'lucide-react';

const Featured = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="px-[5%] py-20 text-center text-white md:px-[7%] lg:px-[10%]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <motion.div
          className="mb-12 flex flex-col items-center"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="eyebrow mb-5">Selected Work</span>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl text-luxe-gradient">
            Featured Projects
          </h2>
          <div className="mt-5 h-px w-24 bg-gradient-to-r from-transparent via-[#e6c078]/60 to-transparent" />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {projects.slice(0, 3).map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.4 + index * 0.2,
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
      <motion.div 
        className="relative flex cursor-pointer items-center justify-center pt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Link to="/projects"
          className="btn-luxe-ghost flex w-full items-center justify-center gap-2 px-6 py-2.5 font-medium sm:py-3 lg:w-auto"
        >
          <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" /> View Projects

        </Link>
      </motion.div>
    </div>
  );
};

export default Featured;
