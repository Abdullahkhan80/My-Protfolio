import { useNavigate, useParams } from "react-router-dom";
import AnimatedBackground from "../components/Background";
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { ExternalLink, Link } from 'lucide-react';
import projects from '../components/projects';
const Descriptionpage = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold">Project Not Found</h1>
        <p>No project exists with ID: {id}</p>
      </div>
    );
  }
  const handleLiveDemo = (e) => {
    if (!project.link) {
      console.log("ProjectLink kosong");
      e.preventDefault();
      alert("Live demo link is not available");
    }
  };
const navigate=useNavigate();
  return (
    <>
      
      <AnimatedBackground />
      <div className="min-h-screen bg-[#0a0a0a] text-white pt-20 px-[5%]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
           <div className="fixed  top-2 left-6 z-50">
                    <button onClick={(e) => navigate(-1)} className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 backdrop-blur-lg rounded-lg border border-white/10 text-white hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
                      <ArrowLeft className="w-4 h-4" />
                      Back to Home
                    </button>
                </div>
          <div className="absolute inset-5 mt-10 overflow-x-auto  scrollbar-hide transition-all  rounded-xl md:p-10 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg ">
            <div className="absolute  inset-0  opacity-50 group-hover:opacity-70 transition-opacity duration-1000"></div>

            <div className="relative p-5 z-10">
                 
              <div className="relative overflow-hidden rounded-lg">

                <div className="max-w-4xl mx-auto  p-6 bg-gradient-to-br from-slate-900/90 to-slate-800/90 rounded-xl shadow-2xl border border-white/10 relative z-10">
                  <div className="flex flex-col items-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full max-w-full rounded-2xl shadow-lg border border-purple-400/30 mb-8 object-cover"
                      style={{ aspectRatio: "16/9", background: "#222" }}
                    />

                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                <h3 className="text-2xl font-bold  bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                  {project.title}
                </h3>

                <p className="text-gray-300/80 text-sm  leading-relaxed ">
                  {project.description}
                </p>

                <div className="pt-4 flex items-center justify-between">
                  {project.link ? (
                    <a
                      href={project.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleLiveDemo}
                      className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                    >
                      <span className="text-sm font-medium">Live Demo</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <span className="text-gray-500 text-sm">Demo Not Available</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Descriptionpage;