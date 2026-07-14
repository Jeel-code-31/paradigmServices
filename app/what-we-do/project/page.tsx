"use client";

import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import {
  Building2, Cog, Wind, Drill,
  ChevronRight, X, Zap, ArrowRight,
  Cylinder, Ruler, HardHat, Construction
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
  color: string;
}

const services: Service[] = [
  {
    id: "Vision with super",
    title: "Preventive compliance",
    subtitle: "regulatory reviews & FoSTaC",
    shortDesc: "Stages of Inspection Limited to",
    fullDesc: (
      <>
        .Administrative and control of construction aspects.
        <br /><br />
        .Planing of construction work and preparation & issue of site progress report,Organized site to ensure that the work is carried out in a safe and workmanlike manner in accordance with the specifications and to the schedule.
        <br /><br />
        .Check, Assess resources including labor force required to meet the site erection program and ensure tht contractors deploy the required labor force and construction equipment,Conduct trade tests for craftsmen including welders,mechanical fitters,pie fitters and instrument fitters if required.
        <br /><br />
        .Supervise unloading of special/abnormal size weight equipment at site,Render assistance in hirig construction equipment/tool
        <br /><br />
        .Witness tests upon completion of construction.
      </>
    ),
    icon: <Building2 className="w-12 h-12" />,
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200",
    highlights: ["Craftsmen welders, mechanical fitters", ' pipe fitters and instrument fitters', "Special tools and with equipments kit"],
    color: "#BAC291"
  },
  {
    id: "Consturction",
    title: "Statutory compliance",
    subtitle: "food licences & regulatory filings",
    shortDesc: "Strong reason to choose us for construction beacuse......",
    fullDesc: (
      <>
        .Directly suppervise sie-work executed by the various construction Contractors,so that the constuction is n conformity with the specified requirements and the project schedule is strictly adhered..
        <br /><br />
        .Paradigm's Services in the respect shall cover site Management in general, and the surveillance of Construction contractor's work in respect of Construction.
        <br /><br />
        .Seqences,On-line supervision,safety and other specific requirements,co-ordination between Client & different Sub-contractors and Bill Certifictions.
      </>
    ),
    icon: <Wind className="w-12 h-12" />,
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200",
    highlights: ["Bond Between Contractor and Client", "On-line Supervision", "Bill Certifictions", "Safety and other specific requirements"],
    color: "#BAC291"
  },
  {
    id: "Order Placement",
    title: "Regulatory enforcement & adjudication",
    subtitle: " inspection support, sampling, representations & adjudication proceedings",
    shortDesc: "Order is the most important part of the project",
    fullDesc: (
      <>
        .Preparation of Enquiry Document.
        <br /><br />
        .Issue of Enquirey
        <br /><br />
        .Receving of Technical and Commercial offer.
        <br /><br />
        .Technical Clarification & Discusion with Vendors.
        <br /><br />
        .Commercial Comprasion & Recommendation.
      </>
    ),
    icon: <Drill className="w-12 h-12" />,
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
    highlights: [],
    color: "#BAC291"
  },
  {
    id: "Accurate Service",
    title: "Litigation support",
    subtitle: "food law matters, representation before appellate authorities & courts, and expert opinions",
    shortDesc: "Stages of Inspection Limited to",
    fullDesc: (
      <>
        .Identification of materials.
        <br /><br />
        .Welding procedures and welders performance qualifications,(WPS & WPQ)..
        <br /><br />
        .Precentage of fit ups and alignments, Cracks detection/welding defct examination/ Radiography where applicable.
        <br /><br />
        .Full Dimensional and visual chcek,including arrangement internals where applicable
        <br /><br />
        .Hydrostatic testing/Running Trails incase of agitated vessels
      </>
    ),
    icon: <HardHat className="w-12 h-12" />,
    img: "https://images.unsplash.com/photo-1503387762-592dea58ef21?auto=format&fit=crop&q=80&w=1200",
    highlights: ["Emergency", "Specific Equipments & istruments", "Detailed bill of material"],
    color: "#BAC291"
  }
];


export default function ProjectManagement() {
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
              Food Regulatory & Legal Advisory
            </h1>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="max-w-auto text-xl md:text-2xl text-gray-600 leading-relaxed font-afaca relative">
            Beyond technical compliance, we provide specialised legal and regulatory advisory through our sister concern, Paradigm Law Associates. We assist clients in navigating regulatory requirements, inspections, enforcement actions and legal proceedings under food laws, ensuring practical and effective compliance support
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
                <div className="w-auto h-full overflow-y-auto overflow-hidden [overscroll-behavior:contain] p-12 md:p-20 bg-[#1A3013] text-white">
                  <div className="max-w-120 mx-120 space-y-16 relative z-10 text-left">
                    <div className="space-y-6">
                      <div className="w-24 h-24 rounded-3xl bg-[#BAC291]/20 flex items-center justify-center text-[#BAC291]">{selectedService.icon}</div>
                      <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter leading-none">{selectedService.title}</h2>
                      <div className="flex items-center gap-4"><div className="h-[2px] w-20 bg-[#BAC291]" /><p className="text-2xl text-[#BAC291] font-black uppercase tracking-[0.2em]">{selectedService.subtitle}</p></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
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
  const ref = useRef(null);
  const { scrollYProgress: itemProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(itemProgress, [0, 1], [100, -100]);
  const y2 = useTransform(itemProgress, [0, 1], [-50, 50]);

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 md:gap-10 items-center`}
    >
      {/* Visual Component */}
      <div className="w-full lg:w-1/2 relative group">
        <motion.div
          style={{ y: y1 }}
          className="relative z-10 aspect-[6/5] rounded-[1rem] overflow-hidden shadow-2xl border border-black/5"
        >
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
          <img
            src={service.img}
            alt={service.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
          />
          <div className="absolute top-12 left-12 z-20 flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center text-[#1A3013] shadow-lg">
              {service.icon}
            </div>
            <div className="h-20 w-[2px] bg-white/50" />
          </div>
        </motion.div>

        {/* Floating Accent */}
        <motion.div
          style={{ y: y2 }}
          className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#BAC291]/20 rounded-full blur-3xl -z-10 group-hover:bg-[#BAC291]/40 transition-all duration-700"
        />
      </div>

      {/* Text Component */}
      <div className={`w-full lg:w-1/2 space-y-10 ${isEven ? 'lg:pl-16' : 'lg:pr-16 text-right lg:items-end flex flex-col'}`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6 relative"
        >
          <span className={`text-6xl md:text-8xl font-black text-[#1A3013]/5 select-none absolute -top-12 leading-none whitespace-nowrap ${isEven ? 'left-0' : 'right-0'}`}>0{index + 1}</span>
          <h2 className="text-2xl md:text-3xl font-black text-[#1A3013] uppercase tracking-tighter leading-none relative z-10">
            {service.title}
          </h2>

        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed font-afaca"
        >
          {service.shortDesc}
        </motion.p>

        <motion.button
          whileHover={{ x: isEven ? 10 : -10 }}
          onClick={onReadMore}
          className="group flex items-center gap-4 text-[#1A3013] font-black uppercase text-xs tracking-widest pt-8 border-t border-black/10 w-full lg:w-max"
        >
          Details <ChevronRight className="w-5 h-5 group-hover:scale-125 transition-all text-[#BAC291]" />
        </motion.button>
      </div>
    </motion.div>
  );
}
