import React, { useEffect, useState, useCallback } from "react";
import { db, collection } from "../firebase";
import { getDocs } from "firebase/firestore";
import PropTypes from "prop-types";
import TechStackIcon from "../components/TechStackIcon";
import AOS from "aos";
import "aos/dist/aos.css";

const techStacks = [
  { icon: "nextjs.png", language: "Next.js" },
  { icon: "nodejs.svg", language: "Node JS" },
  { icon: "reactjs.svg", language: "ReactJS" },
  { icon: "MongoDb.png", language: "Mongo DB" },
  { icon: "mysql.png", language: "MySQL" },
  { icon: "firebase.png", language: "Firebase" },
  { icon: "javascript.svg", language: "JavaScript" },
  { icon: "tailwind.svg", language: "Tailwind CSS" },
  { icon: "vite.svg", language: "Vite" },
  { icon: "GSAP.svg", language: "GSAP" },
  { icon: "Framer.webp", language: "Framer Motion" },
  { icon: "Github.webp", language: "Github" },
];

export default function TechStackOnly() {
  const [techStacksData, setTechStacksData] = useState([]);
  
  useEffect(() => {
    AOS.init({ once: true });
    setTechStacksData(techStacks);
  }, []);

  return (
    <div className="py-16" id="TechStack">
      {/* Header section */}
      <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center text-center" data-aos="fade-up" data-aos-duration="1000">
        <span className="eyebrow mb-5">Toolkit</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-luxe-gradient mb-4">
          Tech Stack
        </h2>
        <div className="mb-5 h-px w-24 bg-gradient-to-r from-transparent via-[#e6c078]/60 to-transparent" />
        <p className="mx-auto max-w-2xl text-base leading-7 text-gray-400 md:text-lg">
          Explore the technologies I use to build applications and websites.
        </p>
      </div>

      {/* Tech Stack Icons Section */}
      <div className="flex justify-center items-center">
        <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-6">
          {techStacksData.map((stack, index) => (
            <div
              key={index}
              data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
              data-aos-duration="800"
              className="h-full will-change-transform"
            >
              <TechStackIcon TechStackIcon={stack.icon} Language={stack.language} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
