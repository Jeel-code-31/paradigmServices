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
    id: "infrastructure",
    title: "GMP & hygienic design",
    subtitle: "Architecture & Structural",
    shortDesc: "Understand user Requirement and optimal basic engineering....",
    fullDesc: (
      <>
        .To Review the input received from the process team/cross check equipment sizing & cycle times, wherever applicable,
        <br /><br />
        .Preparation of process flow diagram
        <br /><br />
        .Preparation of equipmwnt sizing and distribution schemes
        <br /><br />
        .Specification for equipment(Process & Utility)
        <br /><br />
        .Conecptualizing solvent recovery scheme, wherever applicable
      </>
    ),
    icon: <Building2 className="w-12 h-12" />,
    img: "/img1.png",
    highlights: ["Review of fabrication drawing as per data sheet/ P& ID's", "update P&ID's with GA Drawings provided by the vendors", "updating of equipment layout with fabrication drawings/GA drawings provided by the vendors"],
    color: "#BAC291"
  },
  {
    id: "hvac",
    title: "GFSI-recognised food safety systems (FSSC 22000, BRCGS)",
    subtitle: "GMP & FDA Compliance",
    shortDesc: "Understand Structural Requirements....",
    fullDesc: (
      <>
        .Detailed structural analysis for buildings/Sturcutres.
        <br /><br />
        .Working out BOQ and Preparation of tender documents.
        <br /><br />
        .Preparation of fabrication drawingsfor structural steel works.
        <br /><br />
        .Preparation of architectural drawings for buildings.
        <br /><br />
        .Preparation of architectural drawings for buildings.
        <br /><br />
        .Detailed plans, Sections ad elevations of various buildings.
        <br /><br />
        .Finalization of Building levels and road levels to suit strom water drainage.
        <br /><br />
        .All side Elevations and 3D perspective views.
        <br /><br />
        .Finishing schedule and details for door,windows,flooring,etc...
        <br /><br />
        .Preparation of Working Drawings and detailing
      </>
    ),
    icon: <Wind className="w-12 h-12" />,
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200",
    highlights: ["Cleanroom Ventilation", "Temperature Mapping", "Particulate Control", "Sterile Zone Design"],
    color: "#BAC291"
  },
  {
    id: "ma",
    title: "US FDA, EU & international regulatory compliance",
    subtitle: "Electrical & Instrumentation",
    shortDesc: "Design of Efficent Utility system and piping engineering",
    fullDesc: (
      <>
        .Checking & approving fabrication drawing / GA Drawing prepared by vendors.
        <br /><br />
        .Detailed equipment layout for process plant & utility.
        <br /><br />
        .Working BOQ and preparation of tend doument for insulation,painting,mechanical Work
        <br /><br />
        .Detailed engineering design for piping based on P&ID's for process plnt and utilities.
        <br /><br />
        .Preparation of pipig layout BOQ  for valves and pipes etc.
      </>
    ),
    icon: <Drill className="w-12 h-12" />,
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
    highlights: [],
    color: "#BAC291"
  },
  {
    id: "hv",
    title: "FSSAI compliance",
    subtitle: "Enquiry to Commissioning",
    shortDesc: "Design of HVAC systems catering to the latest GMP and FDA Requirements.",
    fullDesc: (
      <>
        .Prepare design basis on the HVAC Requirement for different areas in the layouts.
        <br /><br />
        .GMP review of layout, Man-Material Moment,GMP Area Classification,AHU segreegation & pressure segreegation.
        <br /><br />
        .Prepare preliminary drawings/sketches for routing of ducting and location of HVAC equipment.
        <br /><br />
        .Review and approve vendor drawings and data-sheets air-conditioning,room differential pressure,clean room class,and ventilation and refrigeration sytems.
        <br /><br />
        .Scrutinze vendor's duct routing drawing for any interference with Civil, Mechanical, Piping, Electrial and Instrumentation.
      </>
    ),
    icon: <HardHat className="w-12 h-12" />,
    img: "/img2.png",
    highlights: ["Construction Supervision", "Vendor Inspection", "Timeline Management", "Commissioning Support"],
    color: "#BAC291"
  },
  {
    id: "AI",
    title: "Validation & qualification",
    subtitle: "Enquiry to Commissioning",
    shortDesc: "Design of Detaling of controls.....",
    fullDesc: (
      <>
        .Preparation Of The instrument index data sheet.
        <br /><br />
        .Preparation of I/O List.
        <br /><br />
        .Prepare of instrument specificaion sheets.
        <br /><br />
        .Vendor data review for all field instruments and Control System.
        <br></br>
        .Preparation of Hook-up drawings loop Schemtics,Jb Details,Cable Schedule,Air header schedules.
        <br></br>
        .Preparation of Specification for fire detection and alaram system,Access Control system and Door Intrlock system and prepare for document instrumentation works.
      </>
    ),
    icon: <HardHat className="w-12 h-12" />,
    img: "/img3.png",
    highlights: ["Construction Supervision", "Vendor Inspection", "Timeline Management", "Commissioning Support"],
    color: "#BAC291"
  },
  {
    id: "Eh",
    title: "Food defence & food fraud mitigation",
    subtitle: "Enquiry to Commissioning",
    shortDesc: "Understand safety zoning Requirements and efficient design of electrical.....",
    fullDesc: (
      <>
        .Selection and Sizing of Transformewrs and Deign of Substations.
        <br /><br />
        .Emergency power supply systems through DG sets and with AMF panels.
        <br /><br />
        .Design of power control centers and motor control centers with SFUs/Contractors/ MCCBs,Automatic power factor improvement Capacitors banks.
        <br /><br />
        .Internal Electrification such as Lighting (Gor Normal offices/complexes as per IS:3646 and also for hazardous factory areas with FLP fixtures), Power Wiring/cabling etc.
        <br /><br />
        .Security systems like Access Control Systems,CCTV Systems, Parking Management Systems & building Automation Systems.
      </>
    ),
    icon: <HardHat className="w-12 h-12" />,
    img: "/img4.png",
    highlights: ["Construction Supervision", "Vendor Inspection", "Timeline Management", "Commissioning Support"],
    color: "#BAC291"
  },
  {
    id: "FS",
    title: "Food defence & food fraud mitigation",
    subtitle: "Enquiry to Commissioning",
    shortDesc: "Detaild design of hydrant network as per requirements in every area.....",
    fullDesc: (
      <>
        .Preparation of P & ID For fire hydrant system..
        <br /><br />
        .Detailed Design of Hydrant system as per requirements in every area
        <br /><br />
        .Layout of hydrant,hose boxes and other related items,Exitinguishers & Lightening arrestors, also Escape routing & identification of assembly points.

      </>
    ),
    icon: <HardHat className="w-12 h-12" />,
    img: "/img4.png",
    highlights: ["Emergency", "Specific Equipments & istruments", "Detailed bill of material"],
    color: "#BAC291"
  },
   {
    id: "EE",
    title: "Audit readiness & compliance management",
    subtitle: "Enquiry to Commissioning",
    shortDesc: "Understand safety zoning Requirements and efficient design of electrical.....",
    fullDesc: (
      <>
        .Selection and Sizing of Transformewrs and Deign of Substations.
        <br /><br />
        .Emergency power supply systems through DG sets and with AMF panels.
        <br /><br />
        .Design of power control centers and motor control centers with SFUs/Contractors/ MCCBs,Automatic power factor improvement Capacitors banks.
        <br /><br />
        .Internal Electrification such as Lighting (Gor Normal offices/complexes as per IS:3646 and also for hazardous factory areas with FLP fixtures), Power Wiring/cabling etc.
        <br /><br />
        .Security systems like Access Control Systems,CCTV Systems, Parking Management Systems & building Automation Systems.
      </>
    ),
    icon: <HardHat className="w-12 h-12" />,
    img: "/img5.png",
    highlights: ["Construction Supervision", "Vendor Inspection", "Timeline Management", "Commissioning Support"],
    color: "#BAC291"
  }
];


export default function EngineeringAdvisory() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start center", "end center"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    document.body.style.overflow = selectedService ? "hidden" : "auto";
  }, [selectedService]);

  return (
    <div ref={containerRef} className="min-h-screen bg-paradigm-bg selection:bg-[#1A3013] selection:text-white pt-2 pb-3 font-afaca overflow-x-hidden">
      <motion.div className="hidden lg:block fixed left-1/2 top-0 bottom-0 w-[2px] bg-black/5 z-0" style={{ scaleY, originY: 0 }} />
      <motion.div className="hidden lg:block fixed left-1/2 top-0 bottom-0 w-[2px] bg-[#BAC291] z-10" style={{ scaleY, originY: 0 }} />

      <main className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-20">
        <section className="py-20 md:py-40 space-y-10 flex flex-col items-center text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="space-y-4">
         
            <h1 className="text-xl md:text-5xl font-black text-[#1A3013] uppercase leading-[0.8] tracking-tighter font-black">
             Food Safety, GMP & Regulatory Excellence
            </h1>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-auto text-xl md:text-2xl text-gray-600 font-medium leading-relaxed">
           We help organisations implement internationally recognised food safety, GMP, EHS and sustainability standards—from hygienic design during project planning through regulatory compliance and audit readiness during operations
          </motion.p>
        </section>

        <div className="space-y-40 md:space-y-80">
          {services.map((service, idx) => (
            <ServiceBlock key={service.id} service={service} isEven={idx % 2 === 0} index={idx} onReadMore={() => setSelectedService(service)} />
          ))}
        </div>
        {/* MODAL SECTION */}
        <AnimatePresence>
          {selectedService && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 backdrop-blur-2xl" onClick={() => setSelectedService(null)}>
              <motion.div initial={{ scale: 0.95, opacity: 0, y: 50 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 50 }} className="bg-paradigm-bg w-full mt-10 max-w-7xl max-h-[80vh] rounded-[1rem] md:rounded-[1rem] shadow-[0_0_100px_rgba(0,0,0,0.4)] relative overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
                <button onClick={() => setSelectedService(null)} className="absolute top-20 right-8 z-[110] w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-2xl hover:rotate-90 transition-all group lg:bg-white/90"><X className="w-8 h-8 text-[#1A3013] group-hover:scale-110 transition-transform" /></button>
                <div className="w-auto h-full overflow-hidden [overscroll-behavior:contain] p-12 md:p-20 bg-[#1A3013] text-white">
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
  return (
    <motion.div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 md:gap-24 items-center`}>
      <div className="w-full lg:w-1/2 relative group">
        <div className="relative z-10 aspect-[6/5] rounded-2xl overflow-hidden  border border-black/5">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
          <img src={service.img} alt={service.title} loading="lazy" decoding="async" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
          <div className="absolute top-12 left-12 z-20 flex flex-col items-center gap-2"><div className="w-16 h-16 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center text-[#1A3013] shadow-lg">{service.icon}</div><div className="h-20 w-[2px] bg-white/50" /></div>
        </div>
      </div>
      <div className={`w-full lg:w-1/2 space-y-10 ${isEven ? 'lg:pl-16 text-left' : 'lg:pr-16 text-right lg:items-end flex flex-col'}`}>
        <motion.div initial={{ opacity: 0, x: isEven ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-6">
          <span className="text-6xl md:text-8xl font-black text-[#1A3013]/5 absolute -top-12 leading-none whitespace-nowrap">0{index + 1}</span>
          <h2 className="text-xl md:text-2xl font-black text-[#1A3013] uppercase tracking-tighter leading-none relative z-10">{service.title}</h2>

        </motion.div>
        <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed">{service.shortDesc}</p>

        <motion.button onClick={onReadMore} className="group flex items-center gap-4 text-[#1A3013] font-black uppercase text-xs tracking-widest pt-8 border-t border-black/10 w-max leading-none">
          Explore More <ChevronRight className="w-5 h-5 group-hover:scale-125 transition-all text-[#BAC291]" />
        </motion.button>
      </div>
    </motion.div>
  );
}
