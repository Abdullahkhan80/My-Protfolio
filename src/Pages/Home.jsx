import React, { useEffect, memo, useMemo } from "react"
import { FileText, Code, Award, Globe, ArrowUpRight, Sparkles, UserCheck, ArrowLeft, LayoutDashboard, TrendingUp, Users, Mail, BarChart3 } from "lucide-react"
import { motion } from "framer-motion"
import AOS from 'aos'
import 'aos/dist/aos.css'
import Techstacks from "../components/Techstacks"
import { Link } from 'react-router-dom'

const services = [
  {
    icon: LayoutDashboard,
    title: "AI Automation Systems",
    description: "Tailored AI automation systems built to match your business processes and workflows.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: TrendingUp,
    title: "Workflow Automation",
    description: "Automated workflows that connect tools, reduce manual work, and keep operations moving in real time.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Real-time analytics and custom reports for data-driven business decisions.",
    color: "from-indigo-500 to-purple-500"
  }
];

const ServicesSection = memo(() => (
  <div id="Services" className="py-20">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mx-auto mb-12 max-w-3xl text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500">
            AI Automation Services
          </span>
        </h2>
        <p className="mx-auto max-w-2xl text-base leading-7 text-gray-400 md:text-lg">
          Custom AI automation systems and full-stack workflow tools that drive business growth
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />
            <div className="relative z-10">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
));

// Memoized Components
const Header = memo(() => (
  <div className="text-center lg:mb-8 mb-2">

    <p
      className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
      data-aos="zoom-in-up"
      data-aos-duration="800"
    >
      <Sparkles className="w-5 h-5 text-orange-500" />
      Building Professional AI Automation Systems
      <Sparkles className="w-5 h-5 text-purple-400" />
    </p>
  </div>
));

const ProfileImage = memo(() => (
  <div className="flex items-center justify-center p-0 py-2 pb-2 md:justify-end md:p-8 md:py-0 md:pb-0">
    <div 
      className="relative group" 
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Optimized gradient backgrounds with reduced complexity for mobile */}
      <div className="absolute -inset-6 opacity-[25%] z-0 hidden sm:block">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 rounded-full blur-2xl animate-spin-slower" />
        <div className="absolute inset-0 bg-gradient-to-l from-fuchsia-500 via-rose-500 to-pink-600 rounded-full blur-2xl animate-pulse-slow opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-cyan-500 to-teal-400 rounded-full blur-2xl animate-float opacity-50" />
      </div>

      <div className="relative">
        <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105">
          <div className="absolute inset-0 border-4 border-white/20 rounded-full z-20 transition-all duration-700 group-hover:border-white/40 group-hover:scale-105" />
          
          {/* Optimized overlay effects - disabled on mobile */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10 transition-opacity duration-700 group-hover:opacity-0 hidden sm:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-blue-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden sm:block" />
          
          <img
            src="/Photo.png"
            alt="Profile"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
            loading="lazy"
          />

          {/* Advanced hover effects - desktop only */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 hidden sm:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/10 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000 delay-100" />
            <div className="absolute inset-0 rounded-full border-8 border-white/10 scale-0 group-hover:scale-100 transition-transform duration-700 animate-pulse-slow" />
          </div>
        </div>
      </div>
    </div>
  </div>
));

const StatCard = memo(({ icon: Icon, color, value, label, description, animation }) => (
  <Link to={label === "Total Projects" ? "/projects" : "#"} className="block">
    <div data-aos={animation} data-aos-duration={1300} className="relative group">
      <div className="relative z-10 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col justify-between cursor-pointer">
        <div className={`absolute -z-10 inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 transition-transform group-hover:rotate-6">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <span 
            className="text-4xl font-bold text-white"
            data-aos="fade-up-left"
            data-aos-duration="1500"
            data-aos-anchor-placement="top-bottom"
          >
            {value}
          </span>
        </div>

        <div>
          <p 
            className="text-sm uppercase tracking-wider text-gray-300 mb-2"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-anchor-placement="top-bottom"
          >
            {label}
          </p>
          <div className="flex items-center justify-between">
            <p 
              className="text-xs text-gray-400"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-anchor-placement="top-bottom"
            >
              {description}
            </p>
            <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
          </div>
        </div>
      </div>
    </div>
  </Link>
));

const AboutPage = () => {
  // Memoized calculations
  const { totalProjects, totalCertificates, YearExperience } = useMemo(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects") || "[]");
    const storedCertificates = JSON.parse(localStorage.getItem("certificates") || "[]");
    
    const startDate = new Date("2021-11-06");
    const today = new Date();
    const experience = today.getFullYear() - startDate.getFullYear() -
      (today < new Date(today.getFullYear(), startDate.getMonth(), startDate.getDate()) ? 1 : 0);

    return {
      totalProjects: storedProjects.length || 2, // Fallback to 2 if no projects in localStorage
      totalCertificates: storedCertificates.length,
      YearExperience: experience
    };
  }, []);

  // Optimized AOS initialization
  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: false, 
      });
    };

    initAOS();
    
    // Debounced resize handler
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(initAOS, 250);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  // Memoized stats data
  const statsData = useMemo(() => [
    {
      icon: Code,
      color: "from-[#6366f1] to-[#a855f7]",
      value: totalProjects,
      label: "Total Projects",
      description: "Innovative web solutions crafted",
      animation: "fade-right",
    },
    {
      icon: Award,
      color: "from-[#a855f7] to-[#6366f1]",
      value: totalCertificates,
      label: "Certificates",
      description: "Professional skills validated",
      animation: "fade-up",
    },
    {
      icon: Globe,
      color: "from-[#6366f1] to-[#a855f7]",
      value: YearExperience,
      label: "Years of Experience",
      description: "Continuous learning journey",
      animation: "fade-left",
    },
  ], [totalProjects, totalCertificates, YearExperience]);

  return (
    <div
      className="overflow-hidden px-[5%] py-20 text-white md:px-[7%] lg:px-[10%]" 
      id="About"
    >
      <Header />

      <div className="relative mx-auto w-full max-w-7xl pt-8 sm:pt-12">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="space-y-6 text-center md:text-left">
            <h2 
              className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-[#a855f7]">
                Hello, I'm
              </span>
              <span 
                className="block mt-2 text-gray-200"
                data-aos="fade-right"
                data-aos-duration="1300"
              >
               Abdullah
              </span>
            </h2>
            
            <p
              className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 leading-relaxed pb-4 sm:pb-0"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
             I build professional AI automation systems,
             <br />Specializing in full-stack and Next.js development
             <br />Helping businesses automate workflows, connect tools, and scale operations with data-driven solutions
            </p>

            <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
              <a href="https://drive.google.com/file/d/1PHDajwHuJ4GL0en5OwoFZoA54FME3xX-/view?usp=sharing" className="w-full sm:w-auto">
              <button 
                data-aos="fade-up"
                data-aos-duration="800"
                className="w-full sm:w-auto px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-orange-500 to-[#a855f7] text-white font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl animate-bounce-slow"
              >
                <FileText className="w-4 h-4 sm:w-5 sm:h-5" /> Download CV
              </button>
              </a>
              <Link to="/projects" className="w-full sm:w-auto">
              <button 
                data-aos="fade-up"
                data-aos-duration="1000"
                className="w-full sm:w-auto px-6 py-2 sm:py-3 rounded-lg border border-[#a855f7]/50 text-[#a855f7] font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 hover:bg-[#a855f7]/10 animate-bounce-slow delay-200"
              >
                <Code className="w-4 h-4 sm:w-5 sm:h-5" /> View Projects
              </button>
              </Link>
            </div>
          </div>

          <ProfileImage />
        </div>

        {/* <a href="#Portofolio">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 cursor-pointer">
            {statsData.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </a> */}
        <div className="mt-20">
        <Techstacks/>
        </div>

        <ServicesSection />

      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes spin-slower {
          to { transform: rotate(360deg); }
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        .animate-pulse-slow {
          animation: pulse 3s infinite;
        }
        .animate-spin-slower {
          animation: spin-slower 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default memo(AboutPage);
