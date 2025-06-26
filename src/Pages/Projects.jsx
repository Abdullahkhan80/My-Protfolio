import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import CardProject from '../components/CardProject';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Define default projects
    const defaultProjects = [
      {
        id: 1,
        title: "White Space Website",
        description: "A powerful project management platform designed to help teams collaborate, plan, and manage daily tasks",
        image: "../public/projects/project1.png",
        link: "https://white-space-psi.vercel.app/"
      },
      {
        id: 2,
        title: "Ai consultant website",
        description: "A webiste which provide expert AI consulting services to help businesses automate processes, enhance decision-making, and unlock data-driven growth. From strategy to deployment — we turn your AI vision into reality.",
        image: "../public/projects/project2.png",
        link: "https://project2.com"
      },
      {
        id: 3,
        title: "Golf website",
        description: "A premium golf website offering everything from course details and memberships to event booking and training resources. Designed for golf enthusiasts, players, and clubs to connect and thrive.",
        image: "../public/projects/project3.png",
        link: "https://project3.com"
      
      },
      {
        id: 4,
        title: "burger website",
        description: "This burger website is your go-to destination for delicious, handcrafted burgers made with the freshest ingredients.",
        image: "../public/projects/project4.png",
        link: "https://project3.com"
      
      },
      {
        id: 5,
        title: "Real state website",
        description: "A modern real estate website offering property listings, virtual tours, and expert guidance for buyers, sellers, and renters. Find your dream home or investment with ease.",
        image: "../public/projects/project5.png",
        link: "https://project3.com"
      },
    ];

    // Always update localStorage with the default projects
    localStorage.setItem("projects", JSON.stringify(defaultProjects));
    setProjects(defaultProjects);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-20 px-[5%]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-orange-500 to-[#a855f7] bg-clip-text text-transparent">
          My Projects
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <CardProject
              key={project.id}
              Img={project.image}
              Title={project.title}
              Description={project.description}
              Link={project.link}
              id={project.id}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects; 