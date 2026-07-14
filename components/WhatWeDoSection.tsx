"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Compass, ShieldCheck, Cog, Zap, Milestone, Apple, Pill, Factory } from "lucide-react";

export default function WhatWeDoSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Concept & Feasibility",
      icon: Compass,
      desc: "Developing initial concepts, conducting market feasibility studies, assessing product feasibility, and outlining strategic business cases.",
      detail: "Evaluating technical viability and commercial potential early in the lifecycle to minimize risk and secure investments.",
    },
    {
      title: "Detailed Engineering",
      icon: Cog,
      desc: "Creating detailed designs, process flows, civil/structural layouts, electrical systems, and sourcing/procurement specifications.",
      detail: "Turning ideas into precise blueprints. Building with structural integrity and state-of-the-art layout engineering.",
    },
    {
      title: "Food Safety & Regulatory",
      icon: ShieldCheck,
      desc: "Navigating local and international compliance, FSSAI, US FDA validation, product labels, risk analysis, and safety auditing.",
      detail: "Integrating global compliance standards directly into designs to ensure hassle-free regulatory approvals and maximum food safety.",
    },
    {
      title: "Commissioning & PM",
      icon: Milestone,
      desc: "End-to-end project management, supervising construction, mechanical installs, commissioning equipment, and testing safety parameters.",
      detail: "Disciplined execution and timeline controls ensuring projects are delivered on time, within budget, and to exact design specifications.",
    },
    {
      title: "Operational Excellence",
      icon: Zap,
      desc: "Optimizing throughput, reducing waste, training teams, and implementing Lean structures to align personnel with machinery output.",
      detail: "Sustaining high performance by optimizing operations, reducing overhead costs, and increasing manufacturing efficiency.",
    },
  ];

  const industries = [
    { name: "Food & Beverage", icon: Apple },
    { name: "Pharmaceuticals", icon: Pill },
    { name: "Process Industries", icon: Factory },
  ];

  return (
    <section className="bg-white py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden border-b border-black/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Title and Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1A3013] tracking-tighter uppercase font-black">
                What We Do
              </h2>
              <div className="w-16 h-1 bg-[#1A3013] mt-4 rounded-full" />
            </motion.div>
          </div>
          
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 text-gray-700 font-afaca text-lg md:text-xl leading-relaxed"
            >
              <p className="font-bold text-[#1A3013] text-xl md:text-2xl leading-snug">
                We transform food, beverage, pharmaceutical and process industries — from concept to world-class operations.
              </p>
              <p>
                Paradigm is a multidisciplinary consulting and engineering company helping organizations design, build, improve and sustain high-performance manufacturing facilities.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-transparent p-8 rounded-2xl border border-green-850/30 hover:border-[#1A3013] hover:shadow-lg transition-all duration-300 flex items-center space-x-4 cursor-default group"
            >
              <div className="text-[#1A3013] group-hover:scale-110 transition-transform duration-300 shrink-0">
                {(() => {
                  const Icon = ind.icon;
                  return <Icon className="w-10 h-10 stroke-[1.8]" />;
                })()}
              </div>
              <div>
                <h3 className="text-xl font-black text-[#1A3013] uppercase tracking-tight font-black">{ind.name}</h3>
                <span className="text-xs text-green-800 font-mono font-bold tracking-wider">World-Class Standards</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Lifecycle Explorer */}
        <div className="bg-[#F9FAFB] rounded-[2.5rem] border border-black/5 p-8 md:p-12 shadow-inner">
          <div className="text-center md:text-left mb-10">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-green-800 uppercase block mb-2">
              Complete Manufacturing Lifecycle
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-[#1A3013] uppercase tracking-tight font-black">
              Lifecycle Explorer
            </h3>
            <p className="text-gray-500 font-afaca text-sm md:text-base mt-2">
              Click on each phase to explore how we partner with you from concept to commission.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Step triggers */}
            <div className="lg:col-span-5 flex flex-col space-y-3 justify-center">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                const isActive = activeStep === idx;
                return (
                  <motion.button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`flex items-center text-left p-4 rounded-xl border transition-all duration-300 group relative overflow-hidden ${
                      isActive
                        ? "bg-[#1A3013] text-white border-transparent shadow-lg shadow-[#1A3013]/10"
                        : "bg-white text-gray-700 border-black/5 hover:border-green-800/30 hover:bg-gray-50"
                    }`}
                  >
                    <Icon className={`w-5 h-5 mr-4 transition-colors ${isActive ? "text-[#BAC291]" : "text-green-800"}`} />
                    <span className="font-bold text-sm md:text-base uppercase tracking-tight flex-grow">
                      {step.title}
                    </span>
                    <ArrowRight className={`w-4 h-4 opacity-0 transition-all ${isActive ? "opacity-100 translate-x-0" : "group-hover:opacity-40 group-hover:translate-x-1"}`} />
                  </motion.button>
                );
              })}
            </div>

            {/* Step Content Card */}
            <div className="lg:col-span-7">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white p-8 md:p-12 rounded-[2rem] border border-black/5 shadow-xl h-full flex flex-col justify-between relative overflow-hidden"
              >
                {/* Visual tech badge in card */}
                <div className="absolute right-6 top-6 text-7xl font-bold text-gray-50 select-none pointer-events-none font-mono">
                  {`0${activeStep + 1}`}
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-lg bg-[#F2F5E3]">
                      {(() => {
                        const CurrentIcon = steps[activeStep].icon;
                        return <CurrentIcon className="w-6 h-6 text-green-900" />;
                      })()}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-green-800 uppercase tracking-widest block">Phase 0{activeStep + 1}</span>
                      <h4 className="text-2xl font-black text-[#1A3013] uppercase tracking-tight font-black">
                        {steps[activeStep].title}
                      </h4>
                    </div>
                  </div>

                  <p className="text-gray-700 font-afaca text-base md:text-lg leading-relaxed pt-2">
                    {steps[activeStep].desc}
                  </p>

                  <p className="text-gray-500 font-afaca text-sm md:text-base italic pl-4 border-l-2 border-[#1A3013]/25">
                    {steps[activeStep].detail}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono text-[#1A3013]">
                
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Closing summary bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-[#1A3013] text-white p-8 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden"
        >
          <div className="absolute right-0 top-0 w-32 h-32 bg-[#BAC291]/10 rounded-full blur-xl pointer-events-none" />
          <div className="space-y-2">
            <h4 className="text-xl md:text-2xl font-black uppercase tracking-tight font-black text-[#BAC291]">
              One Partner. Complete Manufacturing Transformation.
            </h4>
            <p className="text-white/70 font-afaca text-sm md:text-base max-w-2xl">
              Paradigm brings together strategy, engineering, food safety, digital transformation and operational excellence under one roof.
            </p>
          </div>
          <button 
            onClick={() => {
              const contactSection = document.getElementById("main-site-content");
              if (contactSection) {
                // Navigate to contact or scroll
                window.location.href = "/contact-us";
              }
            }}
            className="shrink-0 bg-[#BAC291] text-[#1A3013] hover:bg-white hover:text-green-950 transition-colors font-bold px-6 py-3 rounded-full text-sm uppercase tracking-wider flex items-center space-x-2"
          >
            <span>Partner With Us</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
        
      </div>
    </section>
  );
}
