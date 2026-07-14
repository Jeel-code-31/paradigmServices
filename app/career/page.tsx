"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  MapPin, 
  Clock, 
  ChevronRight, 
  X, 
  Upload, 
  CheckCircle,
  ArrowRight,
  ListChecks,
  Target,
  Gift
} from "lucide-react";

const COLORS = {
  primary: "#1A3013",
  accent: "#BAC291",
  bgSecondary: "#F7F9EF"
};

// --- DATA TYPES ---
type Job = {
  id: string;
  title: string;
  dept: string;
  loc: string;
  type: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  benefits: string[];
};

// --- REALISTIC JOB DATA ---
const JOBS: Job[] = [
  { 
    id: "1", 
    title: "Quality Assurance Lead", 
    dept: "Operations", 
    loc: "Bikaner, Rajasthan", 
    type: "Full-Time",
    description: "We are looking for a QA Lead to oversee our industrial food safety audits. You will be responsible for ensuring that all client facilities meet international BRC and US FDA standards.",
    responsibilities: [
      "Lead on-site audits for food processing units.",
      "Develop and implement robust HACCP plans for clients.",
      "Conduct training sessions for client staff on hygiene protocols.",
      "Review and approve technical documentation for regulatory compliance."
    ],
    qualifications: [
      "Master’s degree in Food Science, Microbiology, or related field.",
      "5+ years of experience in QA/QC within the food or pharma industry.",
      "Certified Lead Auditor (ISO 22000 or FSSC 22000).",
      "Strong understanding of Indian and International food laws."
    ],
    benefits: [
      "Competitive performance-based bonuses.",
      "Comprehensive health insurance for family.",
      "Travel allowances for site visits.",
      "Professional certification sponsorship."
    ]
  },
  { 
    id: "2", 
    title: "Senior Food Technologist", 
    dept: "R&D", 
    loc: "Nagpur, Maharashtra", 
    type: "Full-Time",
    description: "Join our R&D collective to help clients innovate their product lines. You will bridge the gap between culinary creativity and industrial feasibility.",
    responsibilities: [
      "Formulate new products based on client requirements.",
      "Optimize existing recipes for better shelf-life and nutritional value.",
      "Coordinate with the production team for pilot-scale trials.",
      "Analyze raw material quality and source sustainable alternatives."
    ],
    qualifications: [
      "B.Tech/M.Tech in Food Technology.",
      "Proven track record of successful product launches.",
      "Expertise in sensory evaluation and ingredient functionality.",
      "Excellent project management skills."
    ],
    benefits: [
      "Modern R&D lab access.",
      "Flexible working hours.",
      "Annual wellness retreats.",
      "Participation in global food expos."
    ]
  }
];

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.body.style.overflow = selectedJob || isSuccess ? "hidden" : "unset";
  }, [selectedJob, isSuccess]);

  const filteredJobs = JOBS.filter(j => j.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <main className="min-h-screen bg-white text-[#1A3013]">
      
      {/* 1. HEADER */}
      <div style={{ backgroundColor: COLORS.accent }} className="w-full py-3 px-10">
        <p className="text-xs font-bold uppercase tracking-[0.2em]">Careers // Paradigm Quality Consultancy</p>
      </div>

      {/* 2. HERO */}
      <section className="relative h-[40vh] flex items-center bg-[#1A3013] px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#BAC291] rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Work with <span style={{ color: COLORS.accent }}>Impact.</span></h1>
          <p className="text-white/60 font-afaca text-2xl max-w-2xl">Working at Paradigm Means Working in a network of state-of-the-art Facilities and passsionate people who deliver superior service to industry.</p>
        </div>
      </section>

      {/* 3. JOB BOARD */}
      <section className="py-24 max-w-6xl mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <h2 className="text-4xl font-black uppercase">Open Roles</h2>
            <div className="relative w-full md:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                    type="text" 
                    placeholder="Filter positions..." 
                    className="w-full pl-12 pr-6 py-3 rounded-full border border-gray-200 outline-none focus:ring-2 focus:ring-[#BAC291]"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
        </div>

        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <motion.div 
              key={job.id}
              whileHover={{ x: 10 }}
              onClick={() => setSelectedJob(job)}
              className="p-8 border border-gray-100 rounded-[2rem] flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer hover:bg-[#F7F9EF] transition-all group"
            >
              <div>
                <h4 className="text-2xl font-bold mb-2">{job.title}</h4>
                <div className="flex gap-4 text-sm font-bold text-gray-400 uppercase tracking-widest">
                  <span className="flex items-center gap-2"><MapPin size={14} /> {job.loc}</span>
                  <span className="flex items-center gap-2"><Clock size={14} /> {job.type}</span>
                </div>
              </div>
              <div className="mt-6 md:mt-0 flex items-center gap-3 text-[#1A3013] font-bold uppercase text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                View Details <ArrowRight size={18} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. EXPANDED JOB DETAIL MODAL */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
              className="bg-white w-full max-w-5xl h-[90vh] overflow-hidden rounded-[3rem] flex flex-col md:flex-row shadow-2xl"
            >
              {/* LEFT: JOB CONTENT (Scrollable) */}
              <div className="flex-1 overflow-y-auto p-8 md:p-16 border-r border-gray-50">
                <button onClick={() => setSelectedJob(null)} className="md:hidden absolute top-6 right-6 p-2 bg-gray-100 rounded-full">
                    <X size={24} />
                </button>

                <div className="mb-12">
                  <span style={{ color: COLORS.accent }} className="font-black uppercase tracking-widest text-xs mb-2 block">Job Description</span>
                  <h3 className="text-4xl md:text-5xl font-black mb-4">{selectedJob.title}</h3>
                  <div className="flex gap-4 text-gray-400 font-bold uppercase text-xs">
                    <span>{selectedJob.dept}</span> • <span>{selectedJob.loc}</span> • <span>{selectedJob.type}</span>
                  </div>
                </div>

                {/* Role */}
                <div className="mb-10">
                   <div className="flex items-center gap-3 mb-4 text-[#1A3013]">
                      <Target size={24} />
                      <h5 className="text-xl font-bold uppercase tracking-tight">The Role</h5>
                   </div>
                   <p className="text-gray-600 leading-relaxed text-lg font-afaca">{selectedJob.description}</p>
                </div>

                {/* Responsibilities */}
                <div className="mb-10">
                   <div className="flex items-center gap-3 mb-4 text-[#1A3013]">
                      <ListChecks size={24} />
                      <h5 className="text-xl font-bold uppercase tracking-tight">Key Responsibilities</h5>
                   </div>
                   <ul className="space-y-3">
                      {selectedJob.responsibilities.map((item, i) => (
                        <li key={i} className="flex gap-3 text-gray-600 font-afaca">
                           <span style={{ color: COLORS.accent }} className="font-bold">•</span> {item}
                        </li>
                      ))}
                   </ul>
                </div>

                {/* Qualifications */}
                <div className="mb-10">
                   <div className="flex items-center gap-3 mb-4 text-[#1A3013]">
                      <CheckCircle size={24} />
                      <h5 className="text-xl font-bold uppercase tracking-tight">Qualifications</h5>
                   </div>
                   <ul className="space-y-3">
                      {selectedJob.qualifications.map((item, i) => (
                        <li key={i} className="flex gap-3 text-gray-600 font-afaca">
                           <span style={{ color: COLORS.accent }} className="font-bold">•</span> {item}
                        </li>
                      ))}
                   </ul>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                   <div className="flex items-center gap-3 mb-4 text-[#1A3013]">
                      <Gift size={24} />
                      <h5 className="text-xl font-bold uppercase tracking-tight">What We Offer</h5>
                   </div>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedJob.benefits.map((item, i) => (
                        <div key={i} className="bg-[#F7F9EF] p-4 rounded-xl text-sm font-bold text-[#1A3013]">
                           {item}
                        </div>
                      ))}
                   </div>
                </div>
              </div>

              {/* RIGHT: QUICK APPLY SIDEBAR (Desktop) */}
              <div style={{ backgroundColor: COLORS.bgSecondary }} className="w-full md:w-96 p-8 md:p-12 flex flex-col justify-center relative">
                <button onClick={() => setSelectedJob(null)} className="hidden md:block absolute top-10 right-10 text-gray-400 hover:text-black">
                    <X size={32} />
                </button>

                <h4 className="text-2xl font-black mb-8">Ready to apply?</h4>
                <form onSubmit={(e) => { e.preventDefault(); setIsSuccess(true); setSelectedJob(null); }} className="space-y-4">
                  <input required type="text" placeholder="Full Name" className="w-full p-4 rounded-xl border-0 bg-white shadow-sm outline-none focus:ring-2 focus:ring-[#BAC291]" />
                  <input required type="email" placeholder="Email Address" className="w-full p-4 rounded-xl border-0 bg-white shadow-sm outline-none focus:ring-2 focus:ring-[#BAC291]" />
                  
                  <label className="block w-full border-2 border-dashed border-gray-300 rounded-xl p-6 text-center cursor-pointer hover:bg-white/50 transition-colors">
                    <Upload className="mx-auto mb-2 text-gray-400" size={24} />
                    <span className="text-xs font-bold text-gray-500 uppercase">Upload CV (PDF)</span>
                    <input type="file" required className="hidden" />
                  </label>

                  <button style={{ backgroundColor: COLORS.primary }} className="w-full py-5 rounded-xl text-white font-bold uppercase tracking-widest hover:brightness-125 shadow-xl transition-all">
                    Send Application
                  </button>
                  <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest mt-4">By clicking send, you agree to our privacy policy.</p>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SUCCESS OVERLAY */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-[110] bg-[#1A3013] flex items-center justify-center text-center p-6">
            <div className="max-w-sm">
                <CheckCircle size={80} style={{ color: COLORS.accent }} className="mx-auto mb-6" />
                <h3 className="text-white text-4xl font-black mb-4">Application Sent.</h3>
                <p className="text-white/60 mb-10 font-afaca">We have received your application. Our recruitment team will review it and get back to you within 3-5 business days.</p>
                <button onClick={() => setIsSuccess(false)} style={{ backgroundColor: COLORS.accent }} className="w-full py-4 rounded-full font-bold uppercase tracking-widest">Return to Careers</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}