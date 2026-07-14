"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function TaglineIntro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth scroll animations for micro-parallax effect
  const yText = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const opacityText = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.4, 1, 1, 0.4]);

  const taglineWords = "Engineering the Future of Manufacturing.".split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[70vh] flex flex-col items-center justify-center bg-[#F2F5E3] py-24 px-6 md:px-12 overflow-hidden border-b border-black/5"
    >
      {/* Editorial Watermark Background */}
      <div className="absolute right-[-10%] top-[-10%] text-[20vw] font-black text-black/[0.02] select-none pointer-events-none font-black leading-none uppercase">
        Future
      </div>
      <div className="absolute left-[-5%] bottom-[-5%] text-[20vw] font-black text-black/[0.02] select-none pointer-events-none font-black leading-none uppercase">
        Engine
      </div>

      {/* Decorative Grid Lines to match Telemetry Theme */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#1A3013]/20 to-transparent" />
        <div className="absolute right-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#1A3013]/20 to-transparent" />
        <div className="absolute left-0 right-0 top-1/3 h-px bg-gradient-to-r from-transparent via-[#1A3013]/20 to-transparent" />
        <div className="absolute left-0 right-0 top-2/3 h-px bg-gradient-to-r from-transparent via-[#1A3013]/20 to-transparent" />
      </div>

      {/* Tech corner decors */}
      <div className="absolute top-12 left-12 w-6 h-6 border-l border-t border-[#1A3013]/10" />
      <div className="absolute top-12 right-12 w-6 h-6 border-r border-t border-[#1A3013]/10" />
      <div className="absolute bottom-12 left-12 w-6 h-6 border-l border-b border-[#1A3013]/10" />
      <div className="absolute bottom-12 right-12 w-6 h-6 border-r border-b border-[#1A3013]/10" />

      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center"
      >
        {/* Little tag above tagline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center space-x-2 bg-[#1A3013]/5 px-4 py-1.5 rounded-full border border-[#1A3013]/10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-700 animate-pulse" />
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#1A3013] uppercase">
            Paradigm Core Positioning
          </span>
        </motion.div>

        {/* Tagline Heading */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-[#1A3013] tracking-tighter leading-[0.95] mb-10 font-black"
        >
          {taglineWords.map((word, idx) => {
            const isSpecial = ["Future", "Manufacturing."].includes(word);
            return (
              <motion.span
                key={idx}
                variants={wordVariants}
                className="inline-block mr-3 md:mr-5 relative group"
              >
                {isSpecial ? (
                  <span className="relative inline-block text-green-800 italic font-bold">
                    {word}
                    {/* Subtle glow highlight on hover */}
                    <span className="absolute bottom-1 left-0 w-full h-[6px] bg-green-700/10 -z-10 group-hover:h-[20px] transition-all duration-300 rounded-sm" />
                  </span>
                ) : (
                  word
                )}
              </motion.span>
            );
          })}
        </motion.h1>

        {/* Dynamic separator */}
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "120px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-[3px] bg-green-800 rounded-full mb-10"
        />

        {/* Positioning Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-xl md:text-3xl leading-relaxed text-gray-700 font-afaca font-medium max-w-4xl px-4"
        >
          Helping organizations design, build, improve and sustain{" "}
          <span className="text-[#1A3013] font-bold border-b border-[#1A3013]/25 hover:border-[#1A3013] transition-colors cursor-default">
            world-class manufacturing facilities
          </span>
          .
        </motion.p>
      </motion.div>
    </section>
  );
}
