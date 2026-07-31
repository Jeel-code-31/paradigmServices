"use client";

import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import {
  Search, Users, FileText, ShieldCheck,
  ChevronRight, X, Zap, Target,
  TrendingUp, GraduationCap, ClipboardCheck,
  Plus, ArrowRight, Award, Globe, Scale,
  BookOpen, Landmark, Building2, Cog, Wind, Cpu, Construction
} from "lucide-react";
import Link from "next/link";

interface Service {
  id: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  icon: React.ReactNode;
  img: string;
  highlights: string[];
  standards?: string[];
  color: string;
}

const services: Service[] = [
  {
    id: "architecture",
    title: "•	Industrial architecture & structural engineering",
    subtitle: "Architectural & Structural Drafting",
    shortDesc: "Detailed architectural plans and structural design for industrial facilities.",
    fullDesc: "We provide comprehensive industrial architecture and civil-structural engineering services. Our team creates optimized layouts, performs structural analysis, and prepares complete civil construction drawings to ensure safety, functionality, and compliance with local regulations.",
    icon: <Building2 className="w-12 h-12" />,
    img: "/img6.png",
    highlights: [
      "Space utilization & GMP zoning",
      "Structural load and foundation analysis",
      "Detailed civil construction drawings",
      "Architectural plans, sections, and elevations"
    ],
    color: "#BAC291"
  },
  {
    id: "process",
    title: "•	Process engineering & automation",
    subtitle: "Process Design & Optimization",
    shortDesc: "Process flow sheets, equipment sizing, and pipeline layout design.",
    fullDesc: "Our process engineering services cover the creation of Process Flow Diagrams (PFDs), Equipment Layouts, and detailed Piping & Instrumentation Diagrams (P&IDs). We calculate precise sizing requirements for process machinery and utilities to ensure high performance and safety.",
    icon: <Cog className="w-12 h-12" />,
    img: "/img7.png",
    highlights: [
      "Process Flow Diagrams (PFDs) design",
      "Piping & Instrumentation Diagrams (P&IDs)",
      "Equipment layout and capacity planning",
      "Process pipeline sizing and validation"
    ],
    color: "#BAC291"
  },
  {
    id: "utilities",
    title: "Utilities, MEP, HVAC, clean utilities & fire safety systems",
    subtitle: "Mechanical, Electrical, Piping & HVAC",
    shortDesc: "Clean utility design, MEP routing, HVAC systems, and loss prevention.",
    fullDesc: "We design robust utility and mechanical, electrical, and plumbing (MEP) systems, including cleanrooms, HVAC systems, water/steam distribution, electrical cabling, substations, and comprehensive fire safety hydrant systems tailored for industrial settings.",
    icon: <Wind className="w-12 h-12" />,
    img: "/img8.png",
    highlights: [
      "Cleanroom HVAC and air classification design",
      "Utilities routing (water, steam, compressed air)",
      "Fire safety & sprinkler system layouts",
      "Electrical substation sizing & cabling networks"
    ],
    color: "#BAC291"
  },
  {
    id: "automation",
    title: "Automation & digital integration",
    subtitle: "Digital Integration & Controls",
    shortDesc: "PLC, SCADA, DCS configuration, instrumentation, and control loops.",
    fullDesc: "We offer automation engineering to bring intelligence and real-time control to your factory. From selecting field instruments to programming PLCs and SCADA networks, we ensure seamless data integration and control loop implementation for optimal operations.",
    icon: <Cpu className="w-12 h-12" />,
    img: "/img9.png",
    highlights: [
      "Instrument specifications & I/O lists",
      "SCADA, PLC, and DCS integration",
      "Cable schedule & loop schematic drafting",
      "Smart monitoring & data logging systems"
    ],
    color: "#BAC291"
  },
  {
    id: "epcm",
    title: "EPCM & turnkey project execution",
    subtitle: "Engineering, Procurement & Construction Management",
    shortDesc: "Complete lifecycle management from concept design to commercial run.",
    fullDesc: "Our EPCM team coordinates all phases of greenfield and brownfield projects, managing engineering design, equipment procurement, vendor selection, project scheduling, and on-site execution to deliver facilities on time and within budget.",
    icon: <Construction className="w-12 h-12" />,
    img: "/img10.png",
    highlights: [
      "Turnkey execution oversight",
      "Master project scheduling & CPM tracking",
      "Equipment procurement & vendor audits",
      "Quality and safety assurance controls"
    ],
    color: "#BAC291"
  },
  {
    id: "pmc",
    title: "Project Management Consultancy (PMC)",
    subtitle: "PMC Services",
    shortDesc: "Supervision, budgeting, bill certification, and timeline monitoring.",
    fullDesc: "We act as independent project managers to protect our client's interests. We oversee contractors, verify progress billings, run site status meetings, resolve engineering clashes, and ensure that construction strictly follows quality guidelines.",
    icon: <Target className="w-12 h-12" />,
    img: "/img11.png",
    highlights: [
      "Contractor coordination & site scheduling",
      "Progress bill verification & auditing",
      "Site safety management & QA reviews",
      "Conflict resolution and delay mitigation"
    ],
    color: "#BAC291"
  },
  {
    id: "commissioning",
    title: "Commissioning support",
    subtitle: "Pre-commissioning, Dry runs & Wet runs",
    shortDesc: "Trial runs, safety interlock checks, and operational handholding.",
    fullDesc: "We provide on-site commissioning support to transition the facility to commercial operations. We manage equipment trials, run dry and wet tests, configure safety interlocks, train factory staff, and deliver standard operating procedures (SOPs).",
    icon: <ClipboardCheck className="w-12 h-12" />,
    img: "/img12.png",
    highlights: [
      "Pre-commissioning dry & wet trial runs",
      "Safety interlocks & emergency shutdown checks",
      "Operator training & SOP handoff documentation",
      "Transition to daily commercial manufacturing"
    ],
    color: "#BAC291"
  }
];


export default function RegularAdvisory() {
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
    <div ref={containerRef} className="min-h-screen bg-paradigm-bg selection:bg-[#1A3013] selection:text-white pt-24 font-afaca overflow-x-hidden">


      <main className="max-w-[1440px] mx-auto px-6 lg:px-16 relative">

        {/* HERO SECTION */}
        <section className="py-20 md:py-40 space-y-10 flex flex-col items-center text-center relative">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="space-y-4 relative z-10">

            <h1 className="text-xl md:text-5xl font-black text-[#1A3013] uppercase leading-[0.8] tracking-tighter font-black">
              Factory Design<br /> & EPCM Solutions
            </h1>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="max-w-auto text-xl md:text-2xl text-gray-600 mt-24   md:mt-16 leading-relaxed font-afaca relative">
            We provide end-to-end EPCM (Engineering, Procurement & Construction Management) services for greenfield, brownfield and expansion projects. Our multidisciplinary teams take facilities from concept to commissioning—delivering projects on time, within budget and to global engineering, quality and safety standards.
            <br />
            Our engineering capabilities are further strengthened through our sister concern, Zen Consultech Pvt. Ltd. (Zen Group), which extends our in-house team with experienced architects and engineering professionals. Together, we deliver fully integrated multidisciplinary engineering—from architecture and civil-structural design through MEP, HVAC and fire safety—providing coordinated engineering, faster execution and a single point of responsibility across greenfield developments, brownfield expansions and manufacturing modernisation projects.
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
