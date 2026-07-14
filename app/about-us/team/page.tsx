"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import React from "react";
import {
    GraduationCap, Award, Briefcase,
    MapPin, X, Plus, ChevronRight,
    ShieldCheck, Cog, Zap, Target
} from "lucide-react";

interface TeamMember {
    name: string;
    role: string;
    shortBio: string;
    img: string;
    education: string[];
    qualifications: string[];
    expertise: string[];
    milestones: string[];
    leadershipFocus?: string[];
}
const cssStyles = `
    @keyframes marquee-flat {
      from {
        transform: translate3d(0, 0, 0);
      }
      to {
        transform: translate3d(-50%, 0, 0);
      }
    }

    .animate-marquee-flat {
      display: flex;
      width: max-content;
      animation: marquee-flat 40s linear infinite;
      will-change: transform;
    }

    .word-outlined {
      color: transparent;
      -webkit-text-stroke: 1.5px #1a510aff;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: .22em;
    }

    .dot-outlined {
      color: transparent;
      -webkit-text-stroke: 1.5px #1a510aff;
      font-weight: 900;
    }
  `;

const words = [
    "One Team. Multiple Disciplines. One Commitment to Excellence.",
    "One Team. Multiple Disciplines. One Commitment to Excellence.",
  ];
const team: TeamMember[] = [
    {
        name: "Atul Ganediwala",
        role: "Founder & Managing Director – Paradigm Services Pvt. Ltd. | Director – Zen Consultech Pvt. Ltd. (Zen Group) | Partner – Paradigm Excellence Services LLP | Advisory Board Member – Paradigm Law Associates",
        shortBio: "Nearly 30 years of experience in manufacturing consulting, engineering and business transformation for the food and allied process industries.",
        img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
        education: [
            "B.Tech. (Food Technology), IIT Kharagpur",
            "M.Tech. (Post-Harvest Engineering), IIT Kharagpur"
        ],
        qualifications: [
            "Founder & Managing Director – Paradigm Services Pvt. Ltd.",
            "Director – Zen Consultech Pvt. Ltd. (Zen Group)",
            "Partner – Paradigm Excellence Services LLP",
            "Advisory Board Member – Paradigm Law Associates",
            "ISO 9000, ISO 22000 auditor & trainer",
            "BRC Approved Training Provider for Asian Sub Continent since 2006",
            "Lead Instructor - Preventive Controls for Human Foods (US FDA)",
            "Principal Consultant - NBQP, Quality Council of India (QCI)",
            "APEDA Approved Consultant"
        ],
        expertise: [
            "Led the planning, design, engineering, and commissioning of greenfield, brownfield, and plant modernisation projects.",
            "Expertise spans manufacturing strategy, technology evaluation, factory planning, EPCM, process engineering, GMP, and regulatory compliance.",
            "Evolved Paradigm into a multidisciplinary organisation integrating strategy, engineering, food safety, regulatory advisory, and operational excellence.",
            "Advised promoters, entrepreneurs, MNCs, and investors in establishing globally compliant manufacturing operations."
        ],
        leadershipFocus: [
            "Manufacturing Strategy & Business Transformation",
            "Greenfield & Brownfield Manufacturing Projects",
            "Factory Design, Engineering & EPCM",
            "Specialist in GMP, Food safety",
            "Hygienic Engineering & Regulatory Compliance",
            "Operational Excellence & Smart Manufacturing",
            "Leadership Development & Capability Building"
        ],
        milestones: ["30+ Years Experience", "IIT Kharagpur Alumnus", "Multidisciplinary Leader"]
    },
    {
        name: "Nagesh S. Walimbe",
        role: "Ex-Director & Mentor – Paradigm Services Pvt. Ltd. | Founder Chairman – Zen Consultech Pvt. Ltd. (Zen Group)",
        shortBio: "Industry veteran with over 40 years of experience in process engineering, manufacturing facility design and project execution.",
        img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
        education: ["B.Tech. (Chemical Engineering), IIT Bombay"],
        qualifications: [
            "Ex-Director & Mentor – Paradigm Services Pvt. Ltd.",
            "Founder Chairman – Zen Consultech Pvt. Ltd. (Zen Group)"
        ],
        expertise: [
            "Provides strategic guidance in process engineering, complex unit operations, and design of world-class manufacturing facilities.",
            "Led the conceptualisation, design, engineering, and commissioning of numerous greenfield and brownfield projects.",
            "Expertise spans heat and mass transfer, separation processes, reaction engineering, and process scale-up.",
            "Closely associated with APIs/Intermediates and food processing sectors as an expert in chemical engineering."
        ],
        leadershipFocus: [
            "Process Engineering & Technology Development",
            "Manufacturing Process Design & Scale-up",
            "Food & Chemical Manufacturing Facilities",
            "Heat & Mass Transfer & Unit Operations",
            "GMP-Oriented Plant Design & Commissioning",
            "Process Optimisation & Manufacturing Excellence"
        ],
        milestones: ["40+ Years Engineering", "IIT Bombay Alumnus", "Process Design Icon"]
    },
    {
        name: "Rajinikanth Bathula",
        role: "Founder & Managing Director – Zen Consultech Pvt. Ltd. | Director – Projects, Paradigm Services Pvt. Ltd.",
        shortBio: "Accomplished engineering and project management professional with extensive experience in planning and executing complex industrial projects.",
        img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
        education: ["B.E. (Mechanical Engineering), JNTU"],
        qualifications: [
            "Founder & Managing Director – Zen Consultech Pvt. Ltd.",
            "Director – Projects, Paradigm Services Pvt. Ltd."
        ],
        expertise: [
            "Leads project execution from detailed engineering to commissioning across food, biotech, pharma, and chemical sectors.",
            "Directs multidisciplinary engineering teams (civil, structural, mechanical, electrical, plumbing, HVAC, automation).",
            "Transforms designs into safe, efficient, and operational facilities through disciplined project control.",
            "Specialises in engineering coordination, detailed procurement, construction management, and overall delivery."
        ],
        leadershipFocus: [
            "Project Planning & Execution",
            "EPCM & Project Management Consultancy (PMC)",
            "Multidisciplinary Engineering Leadership",
            "Engineering Coordination & Project Delivery",
            "Construction Management & Commissioning",
            "Procurement & Contract Management"
        ],
        milestones: ["Project Delivery Expert", "Zen Consultech MD", "Commissioning Authority"]
    },
    {
        name: "Jayesh Bhatt",
        role: "Technical Director – Technical & Regulatory, Paradigm Services Pvt. Ltd.",
        shortBio: "Food Safety, Quality and Regulatory specialist registered with QCI as HACCP/FSMS Consultant.",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
        education: [
            "M.Sc. (Agricultural & Food Technology), J.N.K.V.V., Jabalpur",
            "MBA (Operations Research & International Business Management), IMT, Delhi"
        ],
        qualifications: [
            "Technical Director – Technical & Regulatory, Paradigm Services Pvt. Ltd.",
            "QCI Registered HACCP/FSMS Consultant",
            "Qualified Lead Auditor for FSSC 22000, ISO 14001, and ISO 9001",
            "FSSAI-approved FoSTaC Train-the-Trainer for Manufacturing and Oil",
            "Six Sigma Green Belt"
        ],
        expertise: [
            "Heads the Food Safety, Quality, and Regulatory Services division at Paradigm.",
            "Covers GMP, GHP, HACCP, FSSC 22000, ISO 22000, ISO 9001, ISO 14001, BRCGS, and US FDA FSMA.",
            "Leads infrastructure gap assessments, documentation development, implementation, and audit readiness.",
            "Experienced in conducting audits, training, and building organizational compliance capabilities."
        ],
        leadershipFocus: [
            "Food Safety & Quality Management Systems",
            "GMP, GHP & HACCP Implementation",
            "FSSC 22000, BRCGS & ISO Management Systems",
            "Regulatory Compliance & Audit Readiness",
            "Food Safety Training & Capability Development",
            "Documentation, Internal Audits & Gap Assessments"
        ],
        milestones: ["QCI Registered Consultant", "FoSTaC Approved Trainer", "Audit & Compliance Expert"]
    },
    {
        name: "Dr. Siddheshwarr N. Rindhe",
        role: "CEO – Paradigm Law Associates | Technical Director – Paradigm Services Pvt. Ltd.",
        shortBio: "Senior food safety, regulatory and technical leader with nearly 20 years of experience across multinational companies and advisory.",
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
        education: [
            "M.V.Sc. (Veterinary Public Health), Bombay Veterinary College",
            "B.V.Sc. & A.H., Nagpur Veterinary College",
            "Currently pursuing LL.B."
        ],
        qualifications: [
            "CEO – Paradigm Law Associates",
            "Technical Director – Paradigm Services Pvt. Ltd.",
            "Former Food Safety & Quality Leader at Godrej Tyson Foods & Vista Processed Foods",
            "National Resource Person for FSSAI/FoSTaC programmes",
            "CII FACE National Food Safety Awards Assessor & Laboratory Assessor"
        ],
        expertise: [
            "Associated with Paradigm for over 7 years; leads Technical, Regulatory, and Governance functions.",
            "Core expertise in food safety and quality systems, hygienic design, risk assessments, and vendor development.",
            "Audited and implemented international standards: FSSC 22000, BRCGS, HACCP, SQF, and FAMI-QS.",
            "Combines technical food science expertise with a legal perspective to build robust regulatory compliance frameworks."
        ],
        leadershipFocus: [
            "Food Safety, Quality & ESG Systems",
            "Food Regulatory Affairs & Food Laws",
            "Technical Governance & Compliance Strategy",
            "FSSC 22000, BRCGS, HACCP, SQF & Global Standards",
            "Hygienic Design, Technical Due Diligence & Laboratory Systems",
            "Food Labelling & International Regulatory Compliance",
            "Training, Capability Building & Food Safety Culture",
            "Business Development & Strategic Growth Initiatives"
        ],
        milestones: ["CEO Paradigm Law", "20+ Years Quality Expert", "National Resource Person"]
    },
    {
        name: "Amol Thorat",
        role: "Partner – Paradigm Excellence Services LLP",
        shortBio: "Operational Excellence and Lean Transformation specialist with over 18 years of experience helping organisations improve productivity and quality.",
        img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
        education: [
            "Master in Supply Chain",
            "B.E. (Electronics & Telecommunication Engineering)"
        ],
        qualifications: [
            "Partner – Paradigm Excellence Services LLP",
            "Certified Lean Consultant | Six Sigma Black Belt & Green Belt",
            "Expert Faculty with Confederation of Indian Industry (CII)",
            "Qualified Master Trainer & Consultant under Ministry of MSME's ZED programme",
            "CII FACE Award Assessor"
        ],
        expertise: [
            "Over 18 years of experience in designing and implementing Operational Excellence and Lean programmes.",
            "Partnered with leading brands including Everest Spices, Bikaji Foods, Chitale Foods, and Capital Foods (Ching's).",
            "Expertise in Lean Manufacturing, Six Sigma, WCM, Kaizen, TPM, VSM, and supply chain optimisation.",
            "Drives the integration of digital transformation, Industry 4.0, and IoT-enabled smart manufacturing systems."
        ],
        leadershipFocus: [
            "Operational Excellence & Business Transformation",
            "Lean Manufacturing & Six Sigma",
            "World Class Manufacturing (WCM), Kaizen, TPM & Continuous Improvement",
            "Digital Transformation, Industry 4.0 & IoT-Enabled Smart Manufacturing",
            "Supply Chain & Process Optimisation",
            "Leadership Development & Capability Building"
        ],
        milestones: ["CII Expert Faculty", "Six Sigma Black Belt", "ZED Master Trainer"]
    }
];

export default function TeamPage() {
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
    useEffect(() => {
        if (selectedMember) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [selectedMember]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <div className="min-h-screen bg-paradigm-bg selection:bg-[#1A3013] selection:text-white pt-24 pb-32 font-afaca">
            <main className="max-w-[1440px] mx-auto px-6 lg:px-16">
 <section className="relative overflow-hidden bg-transparent py-8">
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />

      <div className="relative mx-auto max-w-7xl">
        {/* Flat Horizontal Ribbon */}
        <div className="w-full">
          <div className="animate-marquee-flat whitespace-nowrap py-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="mr-24 flex items-center gap-16"
              >
                {words.map((word, i) => (
                  <React.Fragment key={i}>
                    <span className="word-outlined text-2xl md:text-5xl font-black">
                      {word}
                    </span>
                    <span className="dot-outlined text-2xl md:text-5xl font-black">
                     ☙
                    </span>
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
                {/* SECTION 1: HERO */}
                <section className="py-20 md:py-32 space-y-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                    >

                        <h1 className="text-4xl md:text-5xl font-black text-[#1A3013] uppercase leading-[0.9] tracking-tighter font-black">
                            Our Team
                        </h1>
                        <div className="h-[2px] w-28 bg-[#1A3013]" />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl text-gray-600 leading-relaxed font-medium"
                    >
                       Our greatest strength is our people. Paradigm has built a multidisciplinary organisation comprising experienced engineers, architects, food technologists, regulatory specialists, legal professionals, project managers and operational excellence consultants who work together as one integrated team.
Our services are delivered through dedicated in-house teams with the qualifications, industry experience and practical expertise required to execute complex manufacturing projects. This integrated approach ensures consistency, accountability and seamless collaboration throughout every stage of project delivery.
Organised into specialised multidisciplinary practices, our professionals combine deep technical expertise with practical industry experience to support clients across the complete manufacturing lifecycle—from strategy and engineering to regulatory compliance, project execution and operational excellence.

                    </motion.p>
                </section>

                {/* SECTION 2: THE TITANS GRID */}
                <motion.section
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {team.map((member, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            onClick={() => setSelectedMember(member)}
                            className="bg-white rounded-[3rem] p-8 border border-black/5 shadow-lg group cursor-pointer transition-all duration-500 overflow-hidden relative flex flex-col h-full items-center justify-between"
                        >
                            <div className="space-y-6 flex flex-col h-full items-center w-full">
                                <div className="w-48 h-48 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 bg-gray-50 border-4 border-[#BAC291]/30 group-hover:border-[#1A3013] shadow-md relative flex-shrink-0">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-1000"
                                    />
                                </div>

                                <div className="space-y-3 flex-grow flex flex-col justify-center text-center">
                                    <h3 className="text-xl font-black text-[#1A3013] uppercase font-black tracking-tight leading-tight">{member.name}</h3>
                                    <div className="text-[10px] font-bold text-green-800 uppercase tracking-wider leading-relaxed max-w-[260px] mx-auto space-y-0.5">
                                        {member.role.split('|').slice(0, 2).map((r, i) => (
                                            <div key={i} className="line-clamp-1">{r.trim()}</div>
                                        ))}
                                        {member.role.split('|').length > 2 && (
                                            <div className="text-[9px] text-[#1A3013]/60 italic font-semibold">and more...</div>
                                        )}
                                    </div>
                                </div>

                                <div className="flex items-center justify-center gap-2 text-[#1A3013]/60 font-bold uppercase text-[10px] tracking-widest pt-4 border-t border-black/5 w-full">
                                    View More Details <ChevronRight className="w-3 h-3" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.section>

                {/* SECTION 3: THE DOSSIER MODAL */}
                <AnimatePresence>
                    {selectedMember && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 backdrop-blur-md bg-[#1A3013]/30"
                            onClick={() => setSelectedMember(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                                className="bg-paradigm-bg w-full max-w-6xl max-h-[90vh] rounded-[3rem] md:rounded-[4rem] shadow-[0_0_100px_rgba(0,0,0,0.2)] relative overflow-hidden flex flex-col"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedMember(null)}
                                    className="absolute top-6 right-6 z-[110] w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:rotate-90 transition-all group lg:bg-white/90"
                                >
                                    <X className="w-6 h-6 text-[#1A3013] group-hover:scale-110 transition-transform" />
                                </button>

                                {/* Scrollable Container for the whole Grid */}
                                <div className="w-full h-full overflow-y-auto custom-scrollbar-green [overscroll-behavior:contain]">
                                    <div className="grid grid-cols-1 lg:grid-cols-12 min-h-full">
                                        
                                        {/* Left: Visual Side */}
                                        <div className="lg:col-span-4 bg-[#1A3013] p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
                                            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                                            <div className="relative z-10 w-full aspect-[4/6] rounded-[2.5rem] overflow-hidden shadow-2xl">
                                                <img
                                                    src={selectedMember.img}
                                                    alt={selectedMember.name}
                                                    loading="lazy"
                                                    decoding="async"
                                                    className="w-full h-full object-cover object-top"
                                                />
                                            </div>
                                            <div className="relative space-y-4">
                                                {selectedMember.milestones.map((m, i) => (
                                                    <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md">
                                                        <Zap className="w-4 h-4 text-[#BAC291]" />
                                                        <span className="text-white font-bold text-[10px] uppercase tracking-widest">{m}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Right: Content Side */}
                                        <div className="lg:col-span-8 p-8 md:p-16">
                                            <div className="space-y-10">
                                                <div className="space-y-4">
                                                    <h2 className="text-4xl md:text-5xl font-black text-[#1A3013] uppercase font-black tracking-tighter leading-none">
                                                        {selectedMember.name}
                                                    </h2>
                                                    <div className="space-y-1">
                                                        {selectedMember.role.split('|').map((r, i) => (
                                                            <p key={i} className="text-sm md:text-base font-bold text-green-800 uppercase tracking-widest leading-snug">
                                                                {r.trim()}
                                                            </p>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                                    {/* Academics */}
                                                    <div className="space-y-6">
                                                        <h4 className="flex items-center gap-3 text-[#1A3013] font-black uppercase text-xs font-black tracking-widest border-b border-black/5 pb-4">
                                                            <GraduationCap className="w-5 h-5 text-[#BAC291]" /> Academic Pedigree
                                                        </h4>
                                                        <ul className="space-y-4">
                                                            {selectedMember.education.map((e, i) => (
                                                                <li key={i} className="text-gray-600 font-medium leading-relaxed text-sm md:text-base">{e}</li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {/* Qualifications */}
                                                    <div className="space-y-6">
                                                        <h4 className="flex items-center gap-3 text-[#1A3013] font-black uppercase text-xs font-black tracking-widest border-b border-black/5 pb-4">
                                                            <Award className="w-5 h-5 text-[#BAC291]" /> Professional Credentials
                                                        </h4>
                                                        <ul className="space-y-3">
                                                            {selectedMember.qualifications.map((q, i) => (
                                                                <li key={i} className="flex gap-3 text-gray-500 font-medium text-xs md:text-sm leading-snug">
                                                                    <Plus className="w-4 h-4 text-green-700 mt-0.5 flex-shrink-0" /> {q}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>

                                                {/* Deep Expertise */}
                                                <div className="space-y-8 bg-white/40 p-8 md:p-10 rounded-[2.5rem] border border-black/5">
                                                    <h4 className="flex items-center gap-3 text-[#1A3013] font-black uppercase text-xs font-black tracking-widest">
                                                        <Cog className="w-5 h-5 text-[#BAC291]" /> Industrial Mastery
                                                    </h4>
                                                    <div className="grid grid-cols-1 gap-6">
                                                        {selectedMember.expertise.map((exp, i) => (
                                                            <div key={i} className="flex items-start gap-4 group">
                                                                <div className="w-10 h-10 bg-[#1A3013]/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#1A3013] group-hover:text-white transition-all">
                                                                    <ShieldCheck className="w-5 h-5" />
                                                                </div>
                                                                <p className="text-gray-600 font-medium leading-relaxed text-sm">
                                                                    {exp}
                                                                </p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Leadership Focus */}
                                                {selectedMember.leadershipFocus && selectedMember.leadershipFocus.length > 0 && (
                                                    <div className="space-y-8 bg-white/40 p-8 md:p-10 rounded-[2.5rem] border border-black/5">
                                                        <h4 className="flex items-center gap-3 text-[#1A3013] font-black uppercase text-xs font-black tracking-widest">
                                                            <Target className="w-5 h-5 text-[#BAC291]" /> Leadership Focus
                                                        </h4>
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                            {selectedMember.leadershipFocus.map((lf, i) => (
                                                                <div key={i} className="flex items-start gap-3">
                                                                    <Plus className="w-4 h-4 text-green-700 mt-0.5 flex-shrink-0" />
                                                                    <span className="text-gray-600 font-medium text-sm">{lf}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <style jsx global>{`
                    .custom-scrollbar-green::-webkit-scrollbar {
                        width: 4px;
                    }
                    .custom-scrollbar-green::-webkit-scrollbar-track {
                        background: rgba(26, 48, 19, 0.05);
                    }
                    .custom-scrollbar-green::-webkit-scrollbar-thumb {
                        background: #1A3013;
                        border-radius: 10px;
                    }
                `}</style>
            </main>
        </div>
    );
}

