"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Sectors from "@/components/Sectors";
import Slider from "@/components/Slider";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
// import Preloader from "@/components/Preloader";


import TaglineIntro from "@/components/TaglineIntro";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import ThreeDMarquee from "@/components/ThreeDMarquee";
import VisionMissionValues from "@/components/VisionMissionValues";


function CounterItem({ target, suffix, label }: { target: number, suffix: string, label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center"
    >
      <div className="text-4xl md:text-6xl font-black text-[#1A3013] mb-2 tracking-tighter font-black">
        {count}{suffix}
      </div>
      <div className="text-sm font-bold md:text-sm font-afaca text-[#1A3013] uppercase tracking-widest px-2">
        {label}
      </div>
    </motion.div>
  );
}


// --- Main Page ---

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(true); // Temporarily bypass preloader
  const heroScrollRef = useRef(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  useEffect(() => {
    if (!isLoaded) return;
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    const onScroll = () => {
      ScrollTrigger.update();
    };

    lenis.on("scroll", onScroll);

    const onTick = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(onTick);
    };
  }, [isLoaded]);

  const points = [
    { 
      label: "Plant Engineering Design", 
      detail: "Comprehensive planning and design of industrial layouts and utilities for seamless production workflows.",
      top: "15%", left: "15%", lineHeight: "120px" 
    },
    { 
      label: "Procurement", 
      detail: "Strategic sourcing of equipment and materials with cost-effective solutions and reliable vendor management.",
      top: "55%", left: "25%", lineHeight: "100px" 
    },
    { 
      label: "Construction", 
      detail: "Supervisory excellence for civil and mechanical engineering projects, ensuring structural integrity and safety.",
      top: "45%", left: "42%", lineHeight: "140px" 
    },
    { 
      label: "Project Management", 
      detail: "End-to-end oversight insuring timelines, quality standards, and budget constraints are strictly met.",
      top: "25%", left: "55%", lineHeight: "160px" 
    },
    { 
      label: "Architecture", 
      detail: "Aesthetic and functional design for industrial facilities and corporate offices, balancing form and function.",
      top: "50%", left: "68%", lineHeight: "130px" 
    },
    { 
      label: "Food Technical & Regulatory", 
      detail: "Expert guidance for FSSAI, FDA, and international compliance to ensure your products meet global standards.",
      top: "18%", left: "82%", lineHeight: "140px" 
    },
  ];

  const markerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({ 
      opacity: 1, 
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.5 }
    }),
  };

  return (
    <>
      {/* Preloader - Temporarily disabled */}
      {/* {!isLoaded && (
        <Preloader onComplete={() => setIsLoaded(true)} />
      )} */}

      <div 
        id="main-site-content" 
        className={`${isLoaded ? "opacity-100" : "opacity-0 pointer-events-none"} transition-opacity duration-1000`}
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          className="text-gray-800 bg-white overflow-x-hidden" 
        >
          {/* Hero Section */}
          <header ref={heroScrollRef} className="relative w-full h-[80vh] md:h-screen overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/20 z-10" />
          <img 
            src="/Hero.png" 
            alt="Paradigm Industrial Project" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 z-20 pointer-events-none">
          {points.map((point, idx) => (
            <motion.div 
              key={idx} 
              className="absolute pointer-events-auto"
              style={{ top: point.top, left: point.left }}
              custom={idx}
              initial="hidden"
              animate="visible"
              variants={markerVariants}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Pulsing Hotspot */}
              <div className="relative group flex items-center justify-center">
                <motion.div 
                  className="w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-[0_0_15px_rgba(34,197,94,0.6)] z-10"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
                <motion.div 
                  className="absolute w-8 h-8 bg-green-500/30 rounded-full"
                  animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />

                {/* Information Box (Layout Expansion) */}
                <motion.div
                  layout
                  className="absolute left-6 bottom-0 translate-y-1/2 w-48 md:w-64 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/20 z-20 origin-left cursor-pointer"
                  style={{ borderRadius: "1rem" }}
                >
                  <motion.h4 
                    layout="position"
                    className="text-xs md:text-sm font-afaca text-[#1A3013] font-black uppercase tracking-tight"
                  >
                    {point.label}
                  </motion.h4>
                  
                  <AnimatePresence>
                    {hoveredIdx === idx && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-[10px] md:text-xs text-gray-700 font-afaca leading-relaxed mt-2 pt-2 border-t border-gray-100">
                          {point.detail}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>

              {/* Connecting Line (Optional styling) */}
              <div className="flex flex-col items-center mt-2 opacity-30">
                <div 
                  style={{ height: point.lineHeight }}
                  className="w-px border-l-2 border-dashed border-green"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </header>
      
      {/* Stats Counter */}
      <section className="max-w-7xl mx-auto px-4 relative z-30 -mt-20">
        <div className="bg-white py-12 md:py-16 rounded-[2.5rem] shadow-2xl border border-white/20 backdrop-blur-md">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <CounterItem target={400} suffix="+" label="Projects Completed" />
            <CounterItem target={26} suffix="+" label="Years of Working" />
            <CounterItem target={120} suffix="+" label="Team On Board" />
            <CounterItem target={30} suffix="+" label="Runing Projects" />
          </div>
        </div>
      </section>

      {/* Tagline & Positioning Highlight */}
      <TaglineIntro />

      {/* What We Do Overview & Lifecycle */}
      <WhatWeDoSection />

      {/* 3D Infinite Marquee */}
      <ThreeDMarquee />

      {/* Vision, Mission, Values & Promise */}
      <VisionMissionValues />

      {/* Why Us Timeline */}
      <section className="bg-white py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-[#1A3013] mb-4 tracking-tighter font-black uppercase">Why Paradigm</h2>
            <div className="w-20 h-1.5 bg-[#1A3013] mx-auto rounded-full mb-8" />
            <p className="text-xl md:text-3xl text-[#1A3013]/80 font-afaca max-w-5xl mx-auto">
              Two + decades of excellence in agro-processing and food chemicals.
            </p>
          </div>

          <div className="relative">
            {/* Center Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#1A3013]/20" />

            <div className="space-y-12 md:space-y-16">
              {[
                "Single-stop-shop with required  expertise in technical, regulatory,design,and operations.",
                "Completed 500+ assignments in multiple sectors with leading companies.",
                "Team of 90+ engineers and domain experts working in cohesion.",
                "Uncompromised integrity and sharp focus on cost control.",
                "Recognized by FSSAI, APEDA, QCI, and US FDA."
              ].map((point, idx) => (
                <div key={idx} className="flex flex-col md:flex-row items-center gap-4 md:gap-0">
                  {/* Left Side */}
                  <div className="flex-1 w-full flex justify-end md:pr-12">
                    {idx % 2 === 0 ? (
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-white/30 p-6 rounded-2xl border border-black/50  w-full md:w-auto"
                      >
                        <p className="text-lg font-bold font-afaca">{point}</p>
                      </motion.div>
                    ) : <div className="hidden md:block" />}
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 w-12 h-12 bg-[#1A3013] rounded-full flex items-center justify-center border-4 border-[#BAC291] shadow-xl shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>

                  {/* Right Side */}
                  <div className="flex-1 w-full flex justify-start md:pl-12">
                    {idx % 2 !== 0 ? (
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-white/30 p-6 rounded-2xl border border-black/50 w-full md:w-auto"
                      >
                        <p className="text-lg font-afaca font-bold text-[#1A3013]">{point}</p>
                      </motion.div>
                    ) : <div className="hidden md:block" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Sectors />
      <Slider />
        </motion.div>
      </div>
    </>
  );
}