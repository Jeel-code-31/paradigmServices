"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { 
  Cog, Layers, Building2, CheckCircle2, Globe, 
  Briefcase, ShieldCheck, Zap, ChevronDown, 
  FileText, Scale, Gavel, ArrowRight
} from "lucide-react";
import Link from "next/link";

function StatRow({ target, suffix, label }: { target: number, suffix: string, label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
    <div ref={ref} className="flex items-baseline justify-between border-b border-black/10 py-6 w-full break-words group hover:border-black transition-colors duration-300">
      <span className="text-gray-400 text-xs font-mono uppercase tracking-widest group-hover:text-black transition-colors">{label}</span>
      <span className="text-4xl md:text-5xl font-black text-black tracking-tighter">
        {count}{suffix}
      </span>
    </div>
  );
}

export default function AboutUs() {
  const [expandedIndices, setExpandedIndices] = useState<{ [key: number]: boolean }>({});
  const [activeRegulatoryTab, setActiveRegulatoryTab] = useState(0);

  const toggleExpand = (index: number) => {
    setExpandedIndices(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const services = [
    { 
      title: "End-to-End Transformation", 
      icon: <Cog className="w-4 h-4" />,
      detail: "From Market feasibility and product development to engineering, Project execution, regulatory compliance and operational excellence, We support clients throughout the complete manufacturing lifecycle." 
    },
    { 
      title: "Multidisciplinary Expertise Under One Roof", 
      icon: <Layers className="w-4 h-4" />,
      detail: "Our integrated team of engineers, architects, food technologists, GMP specialists, automation professionals, regulatory experts and project managers works collaboratively to deliver comprehensive solutions- Not isolated recommendations." 
    },
    { 
      title: "Deep Industry Experience", 
      icon: <Building2 className="w-4 h-4" />,
      detail: "With more than two decades of experience we have successfully supported projects across food processing, ingredients, beverages, dairy, bakery, spices, nutraceuticals, pharmaceuticals, food chemicals, packaging and allied manufacturing sectors." 
    },
    { 
      title: "Proven Project Delivery", 
      icon: <CheckCircle2 className="w-4 h-4" />,
      detail: "Having delivered more than 500 consulting and engineering assignments, we understand the technical, commercial and operational challenges of both greenfield developments and brownfield expansions." 
    },
    { 
      title: "Global Standards. Local Execution", 
      icon: <Globe className="w-4 h-4" />,
      detail: "Our solutions are aligned with internationally recognized standards- FSSAI, GFSI Schemes US FDA requirements, European regulations and global GMP and hygienic engineering practices- While remaining practical and commercially viable for local execution." 
    },
    {
      title: "Engineering with a business perspective",
      icon: <Briefcase className="w-4 h-4" />,
      detail: "Every recommendation is evaluated not only for technical excellence but also for investment optimization, lifecycle cost, operational efficiency, maintainability and long-term business value.",
    },
    {
      title: "Independent and Client-Focused",
      icon: <ShieldCheck className="w-4 h-4" />,
      detail: "As an independent consulting and engineering organisation, Our recommendations are driven solely by our clients objectives- Ensuring unbiased technical advice, transparent decision making and uncompromising professional integrity.",
    },
    {
      title: "Execution Beyond Consulting",
      icon: <Zap className="w-4 h-4" />,
      detail: "We Don't stop at reports. We partner with our clients through design reviews, procurement support management, implementation, commissioning, validation and operational stabilisation ensure successful project outcomes.",
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
        "Regulatory filings & statutory compliance management",
      ]
    },
    {
      title: "Regulatory enforcement & Adjudication",
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
        "Representation before appellate authorities and courts through associated legal counsel.",
        "Expert technical opinions and documentation for legal proceedings.",
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white antialiased overflow-x-hidden pt-12">
      <main className="max-w-[1440px] mx-auto px-6 lg:px-16 space-y-40 pb-40">
        
        {/* SECTION 1: ASYMMETRIC BLUEPRINT HERO */}
       <section className="pt-24 border-t-[6px] border-black flex flex-col gap-12">
          {/* Main Statement Array */}
          <div className="w-full flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-4">
            <div className="space-y-4 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
                <span className="text-[10px] font-mono tracking-[0.4em] text-gray-400 block uppercase">
                  System Architecture // 2026
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] break-words text-black">
                ABOUT<br />PARADIGM.
              </h1>
            </div>
            
            {/* The Core Standout Phrase */}
            <div className="max-w-xl lg:text-right">
              <p className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-[1.1] text-black break-words">
                INTEGRATED INDUSTRIAL<br />
                <span className="text-gray-400">TRANSFORMATION MATRIX.</span>
              </p>
            </div>
          </div>

          {/* Subsystem Layout Layer */}
          <div className="border-t border-black/10 pt-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Aspect: Asymmetric Editorial Columns */}
              <div className="lg:col-span-8 space-y-8">
                <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-black font-black">
                  [ System Perspective: The Paradigm Advantages ]
                </h2>
                
                {/* Advanced Multi-Column Paragraph Array */}
                <div className="md:columns-2 gap-10 text-gray-600 font-medium text-base leading-relaxed break-words space-y-6 [column-rule:1px_solid_rgba(0,0,0,0.05)]">
                  <p className="inline-block mt-0">
                    Manufacturing projects today demand far more than individual consultants or isolated engineering disciplines. They require an integrated partner who understands technology engineering, regulatory requirements, food safety, project execution and operational excellence as <span className="text-black font-bold underline decoration-1 underline-offset-4">one connected system</span>.
                  </p>
                  <p className="inline-block">
                    Paradigm brings together multidisciplinary teams under one roof, enabling clients to move confidently from concept to commissioning and beyond. Our integrated framework actively reduces project risk matrices, stabilizes execution schedules, and delivers realistic, sustainable commercial business outcomes.
                  </p>
                </div>
              </div>

              {/* Right Aspect: Engineering Precision Micro-Visual */}
              <div className="lg:col-span-4 w-full h-full min-h-[180px] relative rounded-2xl overflow-hidden group border border-black/10 bg-gray-50 flex items-center justify-center">
                <img 
                  src="/About.png" 
                  alt="Operational Engineering Matrix" 
                  className="w-full h-full object-cover absolute inset-0 opacity-90 grayscale contrast-125 transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
                
                {/* Asymmetric Technical Watermark Tag */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 border border-black/5 flex items-center gap-2 select-none shadow-sm">
                  <span className="w-1.5 h-1.5 bg-black rounded-full" />
                  <span className="text-[9px] font-mono uppercase tracking-widest text-black font-bold">PRDM // SPEC-01</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 2: THE STRUCTURAL INDEX (Blueprinted List) */}
        <section className="space-y-12">
          <div className="border-b border-black pb-4 flex items-baseline justify-between">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-gray-400 font-bold">Capabilities index // 08 points</h2>
            <span className="text-xs font-mono text-gray-400">Transformational System</span>
          </div>

          <div className="divide-y divide-black/10">
            {services.map((s, i) => {
              const isExpanded = !!expandedIndices[i];
              return (
                <div key={i} className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-4 items-start break-words group">
                  <div className="lg:col-span-1 text-xs font-mono text-gray-400 group-hover:text-black transition-colors pt-1">
                    0{i + 1} //
                  </div>
                  <div className="lg:col-span-4 flex items-center gap-3">
                    <span className="text-black shrink-0">{s.icon}</span>
                    <h3 className="text-lg font-black uppercase tracking-tight text-black leading-tight">
                      {s.title}
                    </h3>
                  </div>
                  <div className="lg:col-span-6">
                    <AnimatePresence initial={false}>
                      {isExpanded ? (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-gray-600 font-medium text-sm leading-relaxed"
                        >
                          {s.detail}
                        </motion.p>
                      ) : (
                        <p className="text-gray-400 text-sm font-medium line-clamp-1 truncate">
                          {s.detail}
                        </p>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="lg:col-span-1 text-right">
                    <button
                      onClick={() => toggleExpand(i)}
                      className="text-xs font-mono uppercase text-black font-bold tracking-wider hover:underline"
                    >
                      {isExpanded ? "[ Close ]" : "[ View ]"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 3: THE INDUSTRIAL LEGACY COLUMN */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start border-t border-black pt-16">
          <div className="lg:col-span-6 space-y-8">
            <span className="text-xs font-mono tracking-widest text-gray-400 block uppercase">Industrial Heritage Matrix</span>
            <h2 className="text-5xl md:text-6xl font-black uppercase leading-[0.9] tracking-tighter break-words">
              GLOBAL<br/>LEGACY.
            </h2>
            <p className="text-lg text-gray-600 font-medium leading-relaxed max-w-lg break-words">
              With over <span className="text-black font-black">45 years of collective experience</span>, we bridge the gap between complex engineering and realistic business implementation.
            </p>
            <div className="pt-4">
              <Link href="http://www.zengroupindia.com" target="_blank" 
                className="inline-flex items-center gap-4 border-2 border-black text-black text-xs font-black uppercase tracking-widest px-8 py-4 hover:bg-black hover:text-white transition-all group max-w-full break-words rounded-none">
                <span>Sister Concern: Zen Group</span>
                <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center divide-y divide-black/10 border-t border-b border-black/10 lg:border-t-0 lg:border-b-0">
            <StatRow target={500} suffix="+" label="Assignments Global" />
            <StatRow target={45} suffix="+" label="Years Industry Presence" />
            <StatRow target={90} suffix="+" label="Engineering Experts" />
            <div className="py-6 flex justify-between items-baseline break-words w-full">
              <span className="text-gray-400 text-xs font-mono uppercase tracking-widest">Startup Target</span>
              <span className="text-right text-base font-black uppercase tracking-tight max-w-xs leading-tight">
                "Realistic milestones, scheduled delivery."
              </span>
            </div>
          </div>
        </section>

        {/* SECTION 4: FOOD REGULATORY BRUTALIST TAB SYSTEM */}
        <section className="border-t-4 border-black pt-16 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono tracking-widest text-gray-400 block uppercase">Legal System Architecture</span>
              <h2 className="text-3xl md:text-4xl font-black uppercase text-black tracking-tighter break-words leading-none">Food Regulatory &<br/>Legal Advisory.</h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-gray-600 font-medium text-base leading-relaxed break-words">
                Beyond technical compliance, Paradigm offers specialised legal and regulatory support for food businesses through our sister concern <span className="text-black font-black underline">Paradigm Law Associates</span>—enabling clients to effectively manage regulatory inspections, enforcement actions, and legal proceedings under food laws.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch border border-black overflow-hidden divide-y lg:divide-y-0 lg:divide-x divide-black">
            {/* Left Nav Column */}
            <div className="lg:col-span-5 flex flex-col divide-y divide-black bg-gray-50/50">
              {regulatoryServices.map((service, idx) => {
                const isActive = activeRegulatoryTab === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveRegulatoryTab(idx)}
                    className={`text-left p-6 font-black text-sm uppercase tracking-wider transition-all break-words leading-tight flex items-center justify-between group ${
                      isActive ? "bg-black text-white" : "bg-white hover:bg-gray-50"
                    }`}
                  >
                    <span>{service.title}</span>
                    <span className={`font-mono text-xs ${isActive ? "text-white/40" : "text-gray-300 group-hover:text-black"}`}>[0{idx + 1}]</span>
                  </button>
                );
              })}
            </div>

            {/* Right Display Panel */}
            <div className="lg:col-span-7 p-8 md:p-12 bg-white flex flex-col justify-between relative min-h-[320px] break-words">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeRegulatoryTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-8 h-full flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    <span className="text-[10px] font-mono text-gray-400 font-bold uppercase tracking-widest block leading-none">
                      Active Workspace Specification
                    </span>
                    <ul className="space-y-4">
                      {regulatoryServices[activeRegulatoryTab].points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-700 font-medium text-base leading-relaxed break-words">
                          <span className="text-xs font-mono text-black select-none pt-0.5">//</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-black/10 flex items-center justify-between text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                    <span>Structural Network Node</span>
                    <span>Paradigm Law Associates Network</span>
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