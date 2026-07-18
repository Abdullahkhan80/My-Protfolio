import React, { useEffect } from "react";
import { Check, Zap, GitMerge, LayoutDashboard, Cpu, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const packages = [
  {
    level: "Level 1: Quick Win",
    title: "AI Auto-Responder",
    desc: "Tired of missing leads when you're busy or asleep? This system chats with incoming leads instantly on WhatsApp, Facebook, or Instagram so you never lose a hot prospect.",
    standardRate: "$750",
    price: "$299",
    billing: "setup + $100/mo",
    icon: Zap,
    features: [
      "Chats with prospects automatically",
      "Asks the right questions to qualify them",
      "Pings your phone the second they're ready to buy"
    ],
    badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/25",
    hoverGlow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]",
    delay: 100
  },
  {
    level: "Level 2: Integrator",
    title: "Automated Lead Routing",
    desc: "Say goodbye to copying and pasting lead info by hand. We connect your ads directly to your database so everything is organized automatically.",
    standardRate: "$1,200",
    price: "$499",
    billing: "one-time",
    icon: GitMerge,
    features: [
      "Grabs leads straight from Facebook & Instagram ads",
      "Cleans up and formats names, numbers, and emails",
      "Pops them directly into the systems you already use"
    ],
    badgeColor: "bg-blue-500/10 text-blue-300 border-blue-500/25",
    hoverGlow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
    delay: 200
  },
  {
    level: "Level 3: Professional",
    title: "Custom Lead Dashboard",
    desc: "Stop fighting with messy, slow spreadsheets or bloated software. You get a clean, private dashboard built just for you and your sales team.",
    standardRate: "$3,500",
    price: "$1,499",
    billing: "setup + $99/mo",
    icon: LayoutDashboard,
    features: [
      "Super simple, easy-to-use screen",
      "Keep your lead data safe in one place",
      "Filter and track hot conversations in real-time"
    ],
    badgeColor: "bg-indigo-500/10 text-indigo-300 border-indigo-500/25",
    hoverGlow: "group-hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]",
    delay: 300
  },
  {
    level: "Level 4: Enterprise",
    title: "Full CRM Ecosystem",
    desc: "The ultimate hands-free setup for scaling. We build your entire customer management system from scratch, complete with automated text and voice calling.",
    standardRate: "$10,000+",
    price: "$5,000",
    billing: "setup + $299/mo",
    icon: Cpu,
    features: [
      "AI Auto-Responder (Qualify leads 24/7 on chat)",
      "AI Voice Calling Agent (Calls leads instantly)",
      "Full Custom CRM (All-in-one system for your team)"
    ],
    badgeColor: "bg-amber-500/10 text-[#e6c078] border-[#e6c078]/25",
    hoverGlow: "group-hover:shadow-[0_0_30px_rgba(230,192,120,0.15)]",
    delay: 400
  }
];

export default function Packages() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.querySelector("#Contact");
    if (contactSection) {
      const top = contactSection.offsetTop - 100;
      window.scrollTo({
        top: top,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="py-20" id="Packages">
      {/* Header section */}
      <div 
        className="mx-auto mb-16 flex max-w-3xl flex-col items-center text-center" 
        data-aos="fade-up" 
        data-aos-duration="1000"
      >
        <span className="eyebrow mb-5">INVESTMENT TIERS</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-luxe-gradient mb-4">
          Automation & CRM Architecture Packages
        </h2>
        <div className="mb-5 h-px w-24 bg-gradient-to-r from-transparent via-[#e6c078]/60 to-transparent" />
        <p className="mx-auto max-w-2xl text-base leading-7 text-gray-400 md:text-lg">
          Strategic technology investments for real estate teams. Choose a tier or contact me for bespoke enterprise solutions.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
        {packages.map((pkg, idx) => {
          const IconComp = pkg.icon;
          return (
            <motion.div
              key={idx}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={pkg.delay}
              className="h-full will-change-transform"
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <div className={`premium-card group relative h-full flex flex-col justify-between p-6 overflow-hidden transition-all duration-300 ${pkg.hoverGlow}`}>
                {/* Background Accent Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.015] to-transparent pointer-events-none" />
                
                {/* Card Top Info */}
                <div>
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${pkg.badgeColor}`}>
                      {pkg.level}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#e6c078] group-hover:scale-110 transition-transform duration-300">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white mt-5 group-hover:text-gold-gradient transition-colors duration-300">
                    {pkg.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                    {pkg.desc}
                  </p>
                </div>

                {/* Price Block & Features */}
                <div className="mt-6 flex-1 flex flex-col justify-end">
                  {/* Pricing Box */}
                  <div className="border border-dashed border-[#e6c078]/20 bg-white/[0.02] rounded-2xl p-4 mb-6">
                    <span className="text-xs text-gray-500 line-through block mb-1">
                      Standard Agency Rate: {pkg.standardRate}
                    </span>
                    <div className="flex items-baseline gap-1 text-2xl font-bold text-white">
                      <span>{pkg.price}</span>
                      <span className="text-xs text-purple-300/80 font-normal">
                        {pkg.billing}
                      </span>
                    </div>
                  </div>

                  {/* Features Bullet Points */}
                  <ul className="space-y-3.5">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={scrollToContact}
                    className="w-full mt-8 py-3 px-4 rounded-xl bg-white/5 hover:bg-[#e6c078] hover:text-black font-semibold text-sm border border-[#e6c078]/25 hover:border-[#e6c078] transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
