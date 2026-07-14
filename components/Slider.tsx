"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Agro-Industrial Hub",
    description: "State-of-the-art processing facility with 24/7 monitoring systems.",
    image: "/Hero.png",
    link: "/agro"
  },
  {
    title: "Pharma Research",
    description: "World-class laboratory for API development.",
    image: "/technical-advisory.png",
    link: "/pharma"
  },
  {
    title: "Cold Storage",
    description: "Multi-city warehousing with advanced control.",
    image: "/engineering.png",
    link: "/warehousing"
  },
  {
    title: "Food Safety",
    description: "International standard compliance services.",
    image: "/regulatory-advisory.png",
    link: "/regulatory-advisory"
  },
  {
    title: "Ops Excellence",
    description: "Lean manufacturing and process optimization.",
    image: "/operational-excellence.png",
    link: "/operational-excellence"
  }
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % projects.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-[#BAC291]" id="projects">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#1A3013] blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="text-center w-full">
            <span className="text-[#1A3013] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              Our Excellent
            </span>
            <h2 className="text-2xl md:text-5xl font-black text-[#1A3013] tracking-tighter uppercase ">
              Articals
            </h2>
            <div className="w-20 h-1.5 bg-[#1A3013] mx-auto rounded-full mt-8" />
          </div>
          
          <div className="flex gap-4 mb-2">
            <button 
              onClick={prevSlide}
              className="p-4 rounded-full border border-[#1A3013]/20 hover:bg-[#1A3013] hover:text-white transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="p-4 rounded-full border border-[#1A3013]/20 hover:bg-[#1A3013] hover:text-white transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Slider Track */}
      <div className="relative h-[550px] cursor-grab active:cursor-grabbing">
        <motion.div 
          className="flex gap-8 absolute left-[50%] h-full items-center"
          animate={{ x: `calc(-${index * 450}px - ${index * 32}px - 225px)` }} // Dynamic centering
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {projects.map((project, idx) => {
            const isActive = index === idx;
            return (
              <motion.div
                key={idx}
                animate={{ 
                  scale: isActive ? 1 : 0.85,
                  opacity: isActive ? 1 : 0.4,
                }}
                className="relative w-[320px] md:w-[450px] h-[450px] rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-500"
              >
                <Link href={project.link} className="block w-full h-full group">
                  {/* Image */}
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A3013] via-transparent to-transparent opacity-80" />

                  {/* Content Area */}
                  <div className="absolute inset-0 p-10 flex flex-col justify-end transform transition-transform duration-500">
                    <div className="overflow-hidden">
                      <motion.h3 
                        animate={{ y: isActive ? 0 : 50 }}
                        className="text-3xl md:text-4xl font-black text-green-200 uppercase tracking-tight mb-2"
                      >
                        {project.title}
                      </motion.h3>
                    </div>
                    
                    <motion.p 
                      animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
                      className="text-white/80 text-sm md:text-base mb-6 font-medium line-clamp-2"
                    >
                      {project.description}
                    </motion.p>

                    <motion.div 
                      animate={{ opacity: isActive ? 1 : 0 }}
                      className="flex items-center gap-2 text-[#BAC291] font-black uppercase text-xs tracking-widest"
                    >
                      Explore Project <ArrowUpRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Progress Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="w-full h-[2px] bg-[#1A3013]/10 relative">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-[#1A3013]"
            animate={{ width: `${((index + 1) / projects.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="mt-4 flex justify-between text-[#1A3013] font-mono text-sm font-bold">
          <span>0{index + 1}</span>
          <span>0{projects.length}</span>
        </div>
      </div>
    </section>
  );
}