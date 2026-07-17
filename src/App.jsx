import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, lazy, Suspense } from 'react';
import "./index.css";
import WelcomeScreen from "./Pages/WelcomeScreen";
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from "./components/LoadingScreen";

const Home = lazy(() => import("./Pages/Home.jsx"));
const Featured = lazy(() => import("./Pages/Featured"));
const About = lazy(() => import("./Pages/About"));
const AnimatedBackground = lazy(() => import("./components/Background"));
const Navbar = lazy(() => import("./components/Navbar"));
const ContactPage = lazy(() => import("./Pages/Contact"));
const Projects = lazy(() => import("./Pages/Projects"));
const Descriptionpage = lazy(() => import("./Pages/Descriptionpage"));
const Acheivements = lazy(() => import("./Pages/Acheivements.jsx"));
const Certificate = lazy(() => import("./components/Certificate.jsx"));

const LandingPage = ({ showWelcome, setShowWelcome }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <Suspense fallback={<LoadingScreen />}>
          <Navbar />
          <AnimatedBackground />
          <About />
          <Home />
          <div id="Projects">
            <Featured />
          </div>
          <div id="Achievements" >
            <Certificate/>
          </div>
          <ContactPage />
          <footer>
            <center>
              <div className="gold-hairline my-3 sm:mx-auto lg:my-6 max-w-5xl" />
              <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
                © 2026{" "}
                <a href="https://flowbite.com/" className="text-gold-gradient font-medium hover:underline">
                  Abdullah™
                </a>
                . All Rights Reserved.
              </span>
            </center>
          </footer>
        </Suspense>
      )}
    </>
  );
};

const ProjectPageLayout = () => (
  <Suspense fallback={<LoadingScreen />}>
    <AnimatedBackground />
    <Projects />
    <footer>
      <center>
        <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
        <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
          © 2026{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Abdullah™
          </a>
          . All Rights Reserved.
        </span>
      </center>
    </footer>
  </Suspense>
);

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<LandingPage showWelcome={showWelcome} setShowWelcome={setShowWelcome} />} />
          <Route path="/projects" element={<ProjectPageLayout />} />
          <Route path="/projects/Descriptionpage/:id" element={<Descriptionpage />} />
          <Route path="/Acheivements" element={<Acheivements/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
