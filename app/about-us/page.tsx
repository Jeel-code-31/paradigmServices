"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { 
  Lightbulb, CheckCircle2, Users, Building2, 
  ShieldCheck, Cog, ExternalLink, Globe, 
  Layers, Zap, Target, ChevronDown, Briefcase,
  FileText, Scale, Gavel
} from "lucide-react";
import Link from "next/link";

// Custom Stat Counter Component
function StatCounter({ target, suffix, label }: { target: number, suffix: string, label: string }) {
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
        if (start >= target) { setCount(target); clearInterval(timer); }
        else { setCount(Math.floor(start)); }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <div ref={ref} className="group p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-[#BAC291]/10 transition-all duration-500">
      <div className="text-5xl md:text-6xl font-black text-[#BAC291] mb-2">
        {count}{suffix}
      </div>
      <p className="text-white/40 uppercase tracking-[0.2em] font-bold text-[10px] md:text-xs">
        {label}
      </p>
    </div>
  );
}

export default function AboutUs() {
  const [expandedIndices, setExpandedIndices] = useState<{ [key: number]: boolean }>({});
  const [activeRegulatoryTab, setActiveRegulatoryTab] = useState(0);

  const toggleExpand = (index: number) => {
    setExpandedIndices(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const services = [
    { 
      title: "End-to-End Transformation", 
      icon: <Cog className="w-6 h-6 text-[#1A3013]" />,
      detail: "From Market feasibility and product development to engineering, Projcet execution, regulatory compliance and operational excellence, We support clients throughout the complete manufacturing lifecycle." 
    },
    { 
      title: "Multidisciplinary Expertise Under One Roof", 
      icon: <Layers className="w-6 h-6 text-[#1A3013]" />,
      detail: "Our integrated team of engineers, architects, food technologists, GMP specialists, automation professionals, regulatory experts and project managers works collaboratively to deliver comprehensive solutions- Not isolated recommendations." 
    },
    { 
      title: "Deep Industry Experience", 
      icon: <Building2 className="w-6 h-6 text-[#1A3013]" />,
      detail: "With more than two decades of experience we have sucessfully supported projects across food processing, ingredients, beverages, dairy, bakery,species,nutraceuticals,pharmaceuticals, food chemicals, packaging and allied manufacturing sectors." 
    },
    { 
      title: "Proven Project Delivery", 
      icon: <CheckCircle2 className="w-6 h-6 text-[#1A3013]" />,
      detail: "Having delivered more than 500 consulting and engineering assignments, we understand the technical, commercial and operational challenges of both greenfield developments and brownfield expansions." 
    },
    { 
      title: "Global Standards. Local Execution", 
      icon: <Globe className="w-6 h-6 text-[#1A3013]" />,
      detail: "Our solutions are aligned with internationally recignised standards- FSSAI, GFSI Schemes Us FDA requiremnets, European regulationas and global GMP and hygienic engineering practies- While remaining practical and commercially viable for local execution." 
    },
    {
      title: "Engineering with a business perspective",
      icon: <Briefcase className="w-6 h-6 text-[#1A3013]" />,
      detail: "Every recommendation is evaluted not only for technical excellence but also for investment optimisation, lifecycle cost, operational efficinecy, maintaninability and long-term business value.",
    },
    {
      title: "Independent and Client-Focused",
      icon: <ShieldCheck className="w-6 h-6 text-[#1A3013]" />,
      detail: "As an independent consulting and engineering organisation, Our recommendations are driven solely by our clients objectives- Ensuring unbiased technical advice, transparent decision making and uncompremising professional integrity.",
    },
    {
      title: "Execution Beyond Consulting",
      icon: <Zap className="w-6 h-6 text-[#1A3013]" />,
      detail: "We Dont stop at reports. We partner with our clients through design reviews, procurement support management, implementation, commissioning, validation and operational stabilisation ensure sucessful project outcomes.",
    },
  ];

  const regulatoryServices = [
    {
      title: "Preventive Compliance",
      icon: ShieldCheck,
      points: [
        "Regulatory compliance reviews",
        "FOSTAC & Regulatory Training",
        "Gap assessments & preventive compliance programmes",
      ]
    },
    {
      title: "Statutory compliance",
      icon: FileText,
      points: [
        "Food Licence applications, renewals & modifications",
        "regulatory filings & statutory compliance management",
      ]
    },
    {
      title: "Regulatory engorcement & Adjudication",
      icon: Scale,
      points: [
        "Technical and Legal support during inspections and sampling",
        "Representation before Adjudicating Officers and regulatory Authorities",
        "End-to-End support through adjudication proceedings",
      ]
    },
    {
      title: "Litigation Support",
      icon: Gavel,
      points: [
        "Technical and legal support for food law cases.",
        "Representation before appellate authorities and courrts through associated legal cousnel.",
        "Expert technical opinions and documentation for legal proceedings.",
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-paradigm-bg selection:bg-[#1A3013] selection:text-white overflow-x-hidden pt-20 font-afaca">
      <main className="max-w-[1440px] mx-auto px-6 lg:px-16">
        
        {/* SECTION 1: HERO & CORE IDENTITY */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-16 md:py-28">
          <div className="lg:col-span-7 space-y-8">
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-[#1A3013] leading-[0.85] tracking-tighter uppercase font-black">
              About us
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              <p className="text-2xl font-bold text-[#1A3013] leading-snug border-l-4 border-[#BAC291] pl-6 font-afaca">
              The Paradigm Advantages.
              <br/>
              Manufacturing projects today demand far more than individual consultants or isolated engineering disciplines. They require an integrated partner who understands technology engineering, regulatory requirements, food safety, project execution and operational excellence as one connected system.
              </p>
              <p className="text-gray-600/80 font-medium font-afaca">
               Paradigm brings together multidisciplinary under one roof, Enabling clients to move confidently from concept to commiissioning and beyond. Our integrated approach reduces project risk, improves execution efficiency and delivers sustainable business outcomes.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 relative w-full mt-10 md:mt-30 h-[350px] md:h-[450px] lg:h-full min-h-[350px] lg:min-h-[450px]">
             <img 
               src="/About.png" 
               alt="About Us" 
               className="w-full h-full object-cover object-center rounded-[2rem] border-2 border-[#1A3013] shadow-2xl"
             />
          </div>
        </section>

        {/* SECTION 2: THE "ONE-ROOF" ECOSYSTEM */}
        <section className="py-24">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-[#1A3013] mb-4 font-black">What Sets Us Apart.</h2>
            <p className="text-[#1A3013]/50 uppercase tracking-widest text-xs font-bold font-afaca">End-to-End Manufacturing transformation</p>
            <p className="text-gray-600/80 font-bold mt-5 md:mt-10 font-afaca">
              From market feasiblity and product development to engineering, project execution, regulatory compliance and operational excellence, We support clients throughout the complete manufacturing lifecycle.
              </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {services.map((s, i) => {
              const isExpanded = !!expandedIndices[i];
              return (
                <motion.div 
                  layout
                  key={i}
                  whileHover={{ y: isExpanded ? 0 : -5 }}
                  className="bg-white border border-black/5 p-8 rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between h-full min-h-[300px]"
                >
                  <div>
                    <motion.div layout="position" className="mb-8 text-[#1A3013]">
                      <div className="w-14 h-14 border border-[#1A3013]/20 rounded-2xl flex items-center justify-center transition-all duration-500">
                        {s.icon}
                      </div>
                    </motion.div>
                    <motion.h3 layout="position" className="text-xl font-black uppercase leading-tight font-black text-[#1A3013] mb-4">
                      {s.title}
                    </motion.h3>
                    
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-gray-600/80 font-medium font-afaca text-sm leading-relaxed mb-6 overflow-hidden"
                        >
                          {s.detail}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <motion.div layout="position" className="mt-4">
                    <button
                      onClick={() => toggleExpand(i)}
                      className="text-[#1A3013] font-bold text-xs uppercase tracking-widest hover:text-[#BAC291] transition-colors flex items-center gap-1"
                    >
                      <span>{isExpanded ? "Read Less" : "Read More"}</span>
                      <motion.span
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.span>
                    </button>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* SECTION 3: THE INDUSTRIAL LEGACY (DARK BLOCK) */}
        <section className="bg-[#1A3013] overflow-hidden text-white relative shadow-2xl">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          
          <div className="relative z-10 p-12 md:p-24 grid lg:grid-cols-2 gap-20">
            <div className="space-y-10">
              <h2 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter font-black">
                Global <br/> <span className="text-[#BAC291]">Legacy.</span>
              </h2>
              <p className="text-xl text-white/70 font-medium leading-relaxed max-w-lg font-afaca">
                With over <span className="text-white font-bold">45 years of collective experience</span>, we bridge the gap between complex engineering and realistic business implementation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 pt-6">
                <Link href="http://www.zengroupindia.com" target="_blank" 
                  className="flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-4 rounded-full hover:bg-white hover:text-[#1A3013] transition-all group font-afaca">
                  <span className="font-bold uppercase text-sm tracking-widest">Sister Concern: Zen Group</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <StatCounter target={500} suffix="+" label="Assignments Global" />
              <StatCounter target={45} suffix="+" label="Years Industry Presence" />
              <StatCounter target={90} suffix="+" label="Engineering Experts" />
              <div className="p-8 rounded-[2rem] bg-[#BAC291] text-[#1A3013] flex flex-col justify-center shadow-xl">
                <p className="font-black uppercase text-xs tracking-widest mb-2 font-afaca">Startup Target</p>
                <p className="text-2xl font-black leading-tight font-black">"Realistic milestones, scheduled delivery."</p>
              </div>
            </div>
          </div>
        </section>

       <section className="py-24 border-t border-black/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-4xl font-black uppercase text-[#1A3013] mb-4 font-black">Food Regulatory & Legal Advisory.</h2>
              <div className="w-16 h-1 bg-[#1A3013] rounded-full" />
            </div>
            <div className="lg:col-span-7">
              <p className="text-gray-600/80 font-bold font-afaca text-lg md:text-xl leading-relaxed">
                Beyond technical compliance, Paradigm offers specialised legal and regulatory support for food businesses through our sister concern Paradigm Law Associates—enabling clients to effectively manage regulatory inspections, enforcement actions, and legal proceedings under food laws.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-12">
            {/* Left selector panel */}
            <div className="lg:col-span-5 flex flex-col space-y-3 justify-center">
              {regulatoryServices.map((service, idx) => {
                const Icon = service.icon;
                const isActive = activeRegulatoryTab === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveRegulatoryTab(idx)}
                    className={`flex items-center text-left p-6 rounded-3xl border transition-all duration-300 group ${
                      isActive
                        ? "bg-[#1A3013] text-white border-transparent shadow-xl shadow-[#1A3013]/10"
                        : "bg-white text-gray-700 border-black/5 hover:border-[#1A3013]/30 hover:bg-gray-50"
                    }`}
                  >
                    <div className={`p-3 rounded-2xl mr-4 transition-colors ${isActive ? "bg-white/10 text-[#BAC291]" : "bg-paradigm-bg text-[#1A3013]"}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-black text-base uppercase tracking-tight flex-grow">
                      {service.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right details display card */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeRegulatoryTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-10 md:p-12 rounded-[3rem] border border-black/5 shadow-xl h-full flex flex-col justify-between relative overflow-hidden"
                >
                  {/* Decorative numeric watermark */}
                  <div className="absolute right-8 top-4 text-9xl font-bold text-gray-50 select-none pointer-events-none font-mono">
                    {`0${activeRegulatoryTab + 1}`}
                  </div>

                  <div className="space-y-8">
                    <div className="flex items-center space-x-4">
                      <div className="p-4 rounded-2xl bg-paradigm-bg border border-[#1A3013]/10 text-[#1A3013]">
                        {(() => {
                          const Icon = regulatoryServices[activeRegulatoryTab].icon;
                          return <Icon className="w-6 h-6" />;
                        })()}
                      </div>
                      <div>
                        <span className="text-xs font-mono text-green-800 font-bold uppercase tracking-widest block">Advisory Domain</span>
                        <h4 className="text-2xl font-black text-[#1A3013] uppercase tracking-tight font-black">
                          {regulatoryServices[activeRegulatoryTab].title}
                        </h4>
                      </div>
                    </div>

                    <ul className="space-y-4">
                      {regulatoryServices[activeRegulatoryTab].points.map((point, idx) => (
                        <motion.li 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          key={idx} 
                          className="flex items-start gap-3 text-gray-700 font-medium font-afaca text-base leading-relaxed"
                        >
                          <span className="w-2 h-2 rounded-full bg-[#BAC291] shrink-0 mt-2.5" />
                          <span>{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-mono text-gray-400">Paradigm Law Associates Partner Network</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}