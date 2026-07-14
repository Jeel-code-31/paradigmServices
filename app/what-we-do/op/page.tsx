"use client";

import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import {
  Search, Users, FileText, ShieldCheck,
  ChevronRight, X, Zap, Target,
  TrendingUp, GraduationCap, ClipboardCheck,
  Plus, ArrowRight, Award, Globe, Scale,
  BookOpen, Landmark, Cpu
} from "lucide-react";
import Link from "next/link";

interface Service {
  id: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: React.ReactNode;
  icon: React.ReactNode;
  img: string;
  highlights: string[];
  standards?: string[];
  color: string;
}

const services: Service[] = [
  {
    id: "Lean",
    title: "Process Streamlining",
    subtitle: "",
    shortDesc: "Process is very imp phase after complete the assessment of the organization. In this phase we work on the process to make it more efficient and effective.",
    fullDesc: (
      <>
        .Process Optimization for - Line Wise profitablility, Cost And Material Controls.
        <br /><br />
        .Building Controls for - Process Simplification, Standardization
        <br /><br />
        .Process Management for - Organization Sturcture driven by KPI,Develop and Sustain Measurement and Monitoring Systems.
        <br /><br />
        .Develop and sustain key process Control Factors like Management Information System (MIS) For operational Efficiency and cost Saving.
        <br /><br />
        .Commercial Comprasion & Recommendation.
      </>
    ),
    icon: <Landmark className="w-12 h-12" />,
    img: "https://images.unsplash.com/photo-1521791136064-7986c2959d43?auto=format&fit=crop&q=80&w=1200",
    highlights: ["Preparation of FSMS plans and recall and traceablity plans", "Alignement with properietary food definitions", "Labelling,Packaging and legal metrology", "Preparation of Representations to FSSAI"],
    color: "#BAC291"
  },
  {
    id: "Manufacture",
    title: "World Class Manufacturing (WCM)",
    subtitle: "5S, Kaizen & zero-defect initiatives",
    shortDesc: "World Class Manufacturing (WCM) is a philosophy that focuses on continuous improvement in all aspects of manufacturing. It is a holistic approach that involves the entire organization, from top management to front-line employees, in the pursuit of excellence.",
    fullDesc: "our Experience working with Automobile, IT Sectors, Telll us that food processing industry requires a culture change. We have amalgamentd the tools to crease unique approches for various segments of factories to get desired the outcomes as we know.",
    icon: <Globe className="w-12 h-12" />,
    img: "https://images.unsplash.com/photo-1526304640581-d4a8ef0b3296?auto=format&fit=crop&q=80&w=1200",
    highlights: ["Foregin supplier Verification programme", "PCQI(Preventive Control Qualified Individual) Training", "TACCP(Threat assessment and critical control point)", "Infrastructure Zoning"],
    color: "#BAC291"
  },
  {
    id: "lean-6",
    title: "Lean manufacturing & Six Sigma",
    subtitle: ".",
    shortDesc: "World Class Manufacturing (WCM) is a philosophy that focuses on continuous improvement in all aspects of manufacturing. It is a holistic approach that involves the entire organization, from top management to front-line employees, in the pursuit of excellence.",
    fullDesc: "In Lean six Sigma Approch, We do solve focused problem by graduating people to challenge organization problems and create continous improvment culture following are the outcomes",
    icon: <Globe className="w-12 h-12" />,
    img: "https://images.unsplash.com/photo-1526304640581-d4a8ef0b3296?auto=format&fit=crop&q=80&w=1200",
    highlights: ["Foregin supplier Verification programme", "PCQI(Preventive Control Qualified Individual) Training", "TACCP(Threat assessment and critical control point)", "Infrastructure Zoning"],
    color: "#BAC291"
  },
  {
    id: "yield-improvement",
    title: "Yield improvement, waste reduction & cost optimisation",
    subtitle: "Material & Cost Optimization",
    shortDesc: "Maximizing material efficiency, reducing waste, and streamlining operational costs.",
    fullDesc: "We implement advanced yield management strategies and structured waste elimination audits. Our specialists identify raw material loss points, optimize resource usage, and establish cost monitoring systems to directly improve bottom-line margins.",
    icon: <TrendingUp className="w-12 h-12" />,
    img: "https://images.unsplash.com/photo-1526304640581-d4a8ef0b3296?auto=format&fit=crop&q=80&w=1200",
    highlights: [
      "Raw material yield optimization",
      "Structured waste (Muda) elimination",
      "Utility and resource cost audits",
      "Process margin improvements"
    ],
    color: "#BAC291"
  },
  {
    id: "digital-factory",
    title: "Digital factory solutions – ERP, IoT & AI-enabled operations",
    subtitle: "Smart Manufacturing & Industry 4.0",
    shortDesc: "Integrating IoT, ERP interfaces, and AI-enabled diagnostics for real-time operations.",
    fullDesc: "We guide factories through digital transformation. By integrating ERP databases with shop-floor IoT sensors, building real-time dashboards, and deploying AI diagnostics, we enable predictive maintenance and data-driven decision-making.",
    icon: <Cpu className="w-12 h-12" />,
    img: "https://images.unsplash.com/photo-1526304640581-d4a8ef0b3296?auto=format&fit=crop&q=80&w=1200",
    highlights: [
      "Real-time operational dashboards",
      "ERP and shop floor database bridging",
      "IoT sensors & predictive diagnostics",
      "AI-driven manufacturing analytics"
    ],
    color: "#BAC291"
  },
  {
    id: "supply-chain",
    title: "End-to-end supply chain optimisation",
    subtitle: "Logistics & Supply Chain Management",
    shortDesc: "Optimizing inventory levels, supplier reliability, and logistics networks.",
    fullDesc: "We analyze and optimize supply chains from raw materials to customer delivery. Our services include inventory control modeling, warehouse space planning, logistics network optimization, and vendor performance audits to ensure maximum reliability and lower holding costs.",
    icon: <Globe className="w-12 h-12" />,
    img: "https://images.unsplash.com/photo-1526304640581-d4a8ef0b3296?auto=format&fit=crop&q=80&w=1200",
    highlights: [
      "Inventory optimization & safety stock modeling",
      "Warehouse layout & space optimization",
      "Logistics and transit routing audits",
      "Vendor performance & risk evaluations"
    ],
    color: "#BAC291"
  }
];


export default function OperationalExcellence() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Scroll lock
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedService]);

  return (
    <div ref={containerRef} className="min-h-screen bg-paradigm-bg selection:bg-[#1A3013] selection:text-white pt-2 font-afaca overflow-x-hidden">


      <main className="max-w-[1440px] mx-auto px-6 lg:px-16 relative">

        {/* HERO SECTION */}
        <section className="py-20 md:py-40 space-y-10 flex flex-col items-center text-center relative">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="space-y-4 relative z-10">

            <h1 className="text-xl md:text-5xl font-black text-[#1A3013] uppercase leading-[0.8] tracking-tighter font-black">
              Operational Excellence<br />& Smart Manufacturing
            </h1>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="max-w-auto text-xl md:text-2xl text-gray-600 leading-relaxed font-afaca relative">
            We improve operational performance through structured excellence programmes, lean manufacturing practices and digital transformation initiatives. Our objective is to enhance productivity, quality and profitability while building sustainable systems that enable continuous improvement<br />
            Our operational excellence practice is delivered through our sister concern, Paradigm Excellence Services LLP, a dedicated team of lean, quality and digital manufacturing specialists. We go beyond recommendations by working alongside clients to implement practical improvements, develop organisational capabilities and create a culture of continuous improvement that delivers measurable, long-term business results.
          </motion.p>
        </section>

        {/* STAGGERED VERTICAL TRACK */}
        <div ref={trackRef} className="space-y-8 md:space-y-12 relative py-20">
          {/* Scroll Progress Line (Desktop) */}
          <motion.div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-black/5 z-0" style={{ scaleY, originY: 0 }} />
          <motion.div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#BAC291] z-10" style={{ scaleY, originY: 0 }} />

          {services.map((service, idx) => (
            <ServiceBlock
              key={service.id}
              service={service}
              isEven={idx % 2 === 0}
              index={idx}
              onReadMore={() => setSelectedService(service)}
            />
          ))}
        </div>

        {/* MODAL SECTION */}
        <AnimatePresence>
          {selectedService && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 backdrop-blur-2xl" onClick={() => setSelectedService(null)}>
              <motion.div initial={{ scale: 0.95, opacity: 0, y: 50 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 50 }} className="bg-paradigm-bg w-full mt-10 max-w-7xl max-h-[80vh] rounded-[1rem] md:rounded-[1rem] shadow-[0_0_100px_rgba(0,0,0,0.4)] relative overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
                <button onClick={() => setSelectedService(null)} className="absolute top-20 right-8 z-[110] w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-2xl hover:rotate-90 transition-all group lg:bg-white/90"><X className="w-8 h-8 text-[#1A3013] group-hover:scale-110 transition-transform" /></button>
                <div className="w-auto h-full overflow-y-auto custom-scrollbar-green [overscroll-behavior:contain] p-12 md:p-20 bg-[#1A3013] text-white">
                  <div className="max-w-120 mx-120 space-y-16 relative z-10 text-left">
                    <div className="space-y-6">
                      <div className="w-24 h-24 rounded-3xl bg-[#BAC291]/20 flex items-center justify-center text-[#BAC291]">{selectedService.icon}</div>
                      <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter leading-none">{selectedService.title}</h2>
                      <div className="flex items-center gap-4"><div className="h-[2px] w-20 bg-[#BAC291]" /><p className="text-2xl text-[#BAC291] font-black uppercase tracking-[0.2em]">{selectedService.subtitle}</p></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="space-y-10"><p className="text-xl font-afacada opacity-80 font-afaca">{selectedService.fullDesc}</p>
                      </div>
                      <div className="space-y-16">
                        <div className="space-y-8"><h4 className="text-[#BAC291] font-black uppercase text-xs tracking-[0.4em] border-b border-white/10 pb-6">Engineering Depth</h4>
                          <div className="grid grid-cols-1 gap-6">
                            {selectedService.highlights.map((h, i) => (
                              <div key={i} className="flex items-center gap-5 bg-white/5 border border-white/10 p-6 rounded-[2rem]"><Zap className="w-5 h-5 text-[#BAC291]" /><span className="text-sm font-bold uppercase tracking-widest leading-none">{h}</span></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

function ServiceBlock({ service, isEven, index, onReadMore }: { service: Service, isEven: boolean, index: number, onReadMore: () => void }) {
  return (
    <motion.div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 md:gap-10 items-center`}>
      <div className="w-full lg:w-1/2 relative group">
        <div className="relative z-10 aspect-[6/5] rounded-2xl overflow-hidden shadow-2xl border border-black/5">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
          <img src={service.img} alt={service.title} loading="lazy" decoding="async" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
          <div className="absolute top-12 left-12 z-20 flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center text-[#1A3013] shadow-lg">{service.icon}</div>
            <div className="h-20 w-[2px] bg-white/50" />
          </div>
        </div>
      </div>
      <div className={`w-full lg:w-1/2 space-y-10 ${isEven ? 'lg:pl-16 text-left flex flex-col' : 'lg:pr-16 text-right lg:items-end flex flex-col'}`}>
        <motion.div initial={{ opacity: 0, x: isEven ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-6 relative">
          <span className={`text-6xl md:text-8xl font-black text-[#1A3013]/5 absolute -top-12 leading-none whitespace-nowrap ${isEven ? 'left-0' : 'right-0'}`}>0{index + 1}</span>
          <h2 className="text-1xl md:text-3xl font-black text-[#1A3013] uppercase tracking-tighter leading-none relative z-10">{service.title}</h2>

        </motion.div>
        <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed font-afaca">{service.shortDesc}</p>

        <motion.button onClick={onReadMore} className="group flex items-center gap-4 text-[#1A3013] font-black uppercase text-xs tracking-widest pt-8 border-t border-black/10 w-max">
          Details <ChevronRight className="w-5 h-5 group-hover:scale-125 transition-all text-[#BAC291]" />
        </motion.button>
      </div>
    </motion.div>
  );
}
