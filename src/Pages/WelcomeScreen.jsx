import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const TypewriterEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 260);

    return () => clearInterval(timer);
  }, [text]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const BackgroundEffect = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Elegant champagne-gold + purple glow on a deep luxe base */}
    <div className="absolute -top-1/3 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] rounded-full bg-[#e6c078]/10 blur-[140px] animate-pulse" />
    <div className="absolute bottom-[-20%] left-[10%] w-[40rem] h-[40rem] rounded-full bg-[#a855f7]/10 blur-[130px] animate-float" />
    <div className="absolute bottom-[-25%] right-[5%] w-[36rem] h-[36rem] rounded-full bg-[#f97316]/[0.07] blur-[130px] animate-pulse" />
    {/* fine grid */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
  </div>
);

const WelcomeScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: false,
    });

    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        onLoadingComplete?.();
      }, 1000);
    }, 4000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  const containerVariants = {
    exit: {
      opacity: 0,
      scale: 1.1,
      filter: "blur(10px)",
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const childVariants = {
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  return (

    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-[#030014]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit="exit"
          variants={containerVariants}
        >

          <BackgroundEffect />
          <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-10">
            <div className="mx-auto w-full max-w-4xl text-center">
              {/* Luxury eyebrow */}
              <motion.div
                className="mb-6 flex justify-center"
                variants={childVariants}
                data-aos="fade-down"
                data-aos-delay="100"
              >
                <span className="eyebrow">AI Automation Studio</span>
              </motion.div>

              {/* Welcome Text */}
              <motion.div
                className="mb-8 sm:mb-10"
                variants={childVariants}
              >
                <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-7xl">
                  <span data-aos="fade-right" data-aos-delay="200" className="block bg-gradient-to-r from-white via-[#f7e7ce] to-purple-200 bg-clip-text text-transparent">
                    Automate. Scale.
                  </span>
                  <span data-aos="fade-up" data-aos-delay="600" className="mt-3 block text-luxe-gradient">
                    Grow Effortlessly
                  </span>
                </h1>
              </motion.div>

              {/* Refined gold loader */}
              <div className="relative flex items-center justify-center">
                <div className="absolute h-16 w-16 rounded-full bg-[#e6c078]/20 blur-xl" />
                <svg className="animate-spin h-14 w-14 text-[#e6c078] mb-4" viewBox="0 0 24 24">
                  <circle className="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" />
                  <path className="opacity-90" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
              </div>

              {/* Website Link */}
              <motion.div
                className="mt-4"
                variants={childVariants}
                data-aos="fade-up"
                data-aos-delay="1200"
              >
                <a
                  href="https://www.Abdullahprotfolio"
                  className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full relative group hover:scale-105 transition-transform duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#e6c078]/15 to-purple-600/15 rounded-full blur-md group-hover:blur-lg transition-all duration-300" />
                  <div className="relative flex items-center gap-2 text-lg sm:text-xl md:text-2xl">

                    <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-[#e6c078]" />
                    <span className="text-gold-gradient font-medium">
                      <TypewriterEffect text="www.Abdullah" />
                    </span>
                  </div>
                </a>
                
                {/* <DotLottieReact
                  src="https://lottie.host/41518083-9381-4705-9e4c-995413de7025/v6EhjoT6w9.lottie"
                  loop
                  autoplay
                  style={{ height: 50, display: 'flex' }}
                /> */}
              </motion.div>
            </div>


          </div>
        </motion.div>

      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
