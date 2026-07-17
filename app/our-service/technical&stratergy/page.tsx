"use client";

import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { 
  Search, Users, FileText, ShieldCheck, 
  ChevronRight, X, Zap, Target,
  TrendingUp, GraduationCap, ClipboardCheck, 
  Plus, ArrowRight, Award, Layers
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
    id: "gap",
    title: "Market & investment feasibility studies",
    subtitle: "Potential vs Performance",
    shortDesc: "Strategic alignment through thorough gap analysis and risk assessment.",
    fullDesc: "We provide a rigorous analysis of your market position, investment viability, and project risks. Our feasibility studies bridge the gap between opportunity and execution, ensuring your projects begin with strategic clarity.",
    icon: <TrendingUp className="w-12 h-12" />,
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    highlights: ["we provide guidence of meeeting the requirement of global standards of layout, flow of material, equipment, personnel, waste and utilities", "We help to bridge the gap between desired and actual by reviewing and incorporation all of the food sfety. Sanitation requirements, records", "Food safety requirements in consultation with the project Team."],
    color: "#BAC291"
  },
  {
    id: "training",
    title: "Product & process development",
    subtitle: "Implementation Competence",
    shortDesc: "From idea to scalable production, we transform concepts into market-ready realities.",
    fullDesc: "We Consult your core your core team for implementation of food tailor a program that reflects your specification and expectations.",
    icon: <GraduationCap className="w-12 h-12" />,
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200",
    highlights: ["Core team", "tailow a program", "Training programme", "senior staff"],
    color: "#BAC291"
  },
  {
    id: "documentation",
    title: "Manufacturing technology selection & global technology sourcings",
    subtitle: "Structural Architecture",
    shortDesc: "We provide end-to-end support for technology selection and global sourcing, ensuring optimal equipment and process integration.",
    fullDesc: "Our technology scouting and selection process ensures you acquire the best-in-class machinery and processing solutions from a global vendor base. We evaluate technologies against your specific requirements, conduct due diligence, and support procurement to guarantee seamless integration into your operations.",
    icon: <FileText className="w-12 h-12" />,
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200",
    highlights: ["Product characterisics-raw material, intgredients,product-contact and end product", "Development of flow charts, system procdire, SOPs", "Process Validation and cleaning validation", "Critical Limit identification & validation, Monitoring procedures, correctuve action,verification planing"],
    color: "#BAC291"
  },
  {
    id: "audit",
    title: "Capacity planning & plant location studies",
    subtitle: "Vigilance & Surveillance",
    shortDesc: "Strategic planning for scalability and optimal site selection.",
    fullDesc: "We provide data-driven insights for capacity planning and plant location studies, helping you scale operations efficiently and select the most strategic locations for long-term success.",
    icon: <ShieldCheck className="w-12 h-12" />,
    img: "https://images.unsplash.com/photo-1574950578143-858c6fc58922?auto=format&fit=crop&q=80&w=1200",
    highlights: ["BRC Global Standards for food safety", "We identify the autiors and training in internal auditing","Handholding audit cycle"],
    color: "#BAC291"
  },
  {
    id: "certification support for food safety",
    title: "Technical due diligence",
    subtitle: "Standards Fulfillment",
    shortDesc: "Final gap closure for FSSC 22000, BRC, ISO, and global safety markers.",
    fullDesc: "We perform comprehensive technical due diligence to validate business models, manufacturing processes, and growth strategies. Our assessments help investors and stakeholders make informed decisions by identifying risks, validating potential, and ensuring alignment with industry best practices.",
    icon: <Award className="w-12 h-12" />,
    img: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80&w=1200",
    highlights: ["GFSI benchmark standrs like BRC,IFS,FSSC 22000", "SQF fod food manufacturing,packging and storage", 'HACCP',"ISO 22000",'FAMI-QS','GMP'],
    standards: ["ISO 9001", "ISO 14001", "ISO 45001"],
    color: "#BAC291"
  }
];

export default function TechnicalAdvisory() {
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
    <div ref={containerRef} className="min-h-screen bg-paradigm-bg selection:bg-[#1A3013] selection:text-white pt-24 pb-32 font-afaca overflow-x-hidden">
      

      <main className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-20">
        
        {/* HERO SECTION */}
        <section className=" flex flex-col items-center text-center relative">
    
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-4 relative z-10"
          >
            <span className="text-[#BAC291] font-black uppercase tracking-[0.4em] text-sm">Innovation in Industry</span>
            <h1 className="text-xl md:text-5xl font-black text-[#1A3013] uppercase leading-[0.8] tracking-tighter font-black">
              Strategy & Technical Advisory
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-auto text-xl mt-10 md:text-2xl text-gray-600 leading-relaxed font-medium "
          >
          We help organisations de-risk manufacturing investments through rigorous, data-driven technical and commercial advisory. From evaluating opportunities to selecting the right technologies, we ensure every project begins with a sound strategic and engineering foundation.
          </motion.p>
        </section>

        {/* STAGGERED VERTICAL TRACK */}
        <div ref={trackRef} className="space-y-8 md:space-y-12 relative py-20">
          {/* Scroll Progress Line (Desktop) */}
          <motion.div 
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-black/5 z-0"
            style={{ scaleY, originY: 0 }}
          />
          <motion.div 
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#BAC291] z-10"
            style={{ scaleY, originY: 0 }}
          />

          {services.map((service, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <ServiceBlock 
                key={service.id} 
                service={service} 
                isEven={isEven} 
                index={idx}
                onReadMore={() => setSelectedService(service)}
              />
            );
          })}
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
          Explore More<ChevronRight className="w-5 h-5 group-hover:scale-125 transition-all text-[#BAC291]" />
        </motion.button>
      </div>
    </motion.div>
  );
}
