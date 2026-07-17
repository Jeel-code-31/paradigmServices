"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, Globe, Instagram, Linkedin, Facebook, CheckCircle, X } from "lucide-react";

// Theme Colors — neutralized to white/black
const COLORS = {
  primary: "#000000", // black for text/buttons
  accent: "#FFFFFF",  // white for backgrounds/highlights
};

export default function ContactUs() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // <--- New state for success card

  // Prevent background scrolling when success card is open
  useEffect(() => {
    if (isSubmitted) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isSubmitted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormState({ name: "", email: "", subject: "", message: "" });
      setIsSubmitted(true); // <--- Trigger the success card
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-white selection:bg-gray-300/30 relative">
      
      {/* THEMED HEADER BAR */}
      <div className="w-full py-4 px-10 shadow-sm relative z-10 bg-white">
        <h1 className="text-sm font-black uppercase tracking-[0.3em] text-black">
          Connect with us
        </h1>
      </div>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-24 px-6 bg-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gray-100 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white leading-tight mb-6"
          >
            Let's Start a <br />
            <span className="text-black">Conversation.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-black/80 font-afaca"
          >
            Whether you're looking for technical consultancy or just want to say hello, our multidisciplinary team is ready to help you reach excellence.
          </motion.p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-5 gap-16">
          
          {/* LEFT: CONTACT INFO */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-12"
          >
            {/* Office Info Block */}
            <div>
              <h3 style={{ color: COLORS.primary }} className="text-2xl font-black uppercase tracking-widest mb-8">
                Paradigm Services Pvt. Ltd.
              </h3>
              
              <div className="space-y-8">
                {/* Location */}
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-gray-100 group-hover:scale-110 transition-transform">
                    <MapPin style={{ color: COLORS.primary }} size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A3013] uppercase text-sm tracking-widest mb-1">Location</h4>
                    <p className="text-gray-600 leading-relaxed font-afaca">
                      307, Center Point, Andheri- Kurla Rd,<br />
                      Andheri East, Mumbai<br/>
                      Maharashtra 400059
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-gray-100 group-hover:scale-110 transition-transform">
                    <Mail style={{ color: COLORS.primary }} size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A3013] uppercase text-sm tracking-widest mb-1">Email</h4>
                    <p className="text-gray-600 font-afaca">Example@paradigmquality.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-gray-100 group-hover:scale-110 transition-transform">
                    <Phone style={{ color: COLORS.primary }} size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A3013] uppercase text-sm tracking-widest mb-1">Phone</h4>
                    <p className="text-gray-600 font-afaca">+91 (0)22 28395651/52</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SOCIALS */}
            <div>
              <h4 style={{ color: COLORS.primary }} className="font-black uppercase text-sm tracking-[0.3em] mb-6">Reach us in</h4>
              <div className="flex gap-4">
                {[Linkedin, Instagram, Facebook, Globe].map((Icon, i) => (
                  <button key={i} className="w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all text-black">
                    <Icon size={20} />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT: CONTACT FORM */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white border border-gray-100 p-8 md:p-12 rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)]"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Your Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Enter full name"
                    className="w-full bg-gray-100/50 border-0 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-gray-300 outline-none transition-all text-black"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Email Address</label>
                  <input 
                    required
                    type="email" 
                    placeholder="example@mail.com"
                    className="w-full bg-gray-100/50 border-0 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-gray-300 outline-none transition-all text-black"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Subject</label>
                <input 
                  required
                  type="text" 
                  placeholder="How can we help?"
                  className="w-full bg-[#F7F9EF]/50 border-0 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#BAC291] outline-none transition-all text-[#1A3013]"
                  value={formState.subject}
                  onChange={(e) => setFormState({...formState, subject: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Message</label>
                <textarea 
                  required
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full bg-gray-100/50 border-0 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-gray-300 outline-none transition-all resize-none text-black"
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                />
              </div>

              <button
                disabled={isSubmitting}
                style={{ backgroundColor: COLORS.primary }}
                className="w-full md:w-auto px-12 py-5 rounded-full text-white font-black uppercase tracking-widest hover:bg-gray-800 transition-all flex items-center justify-center gap-3 group shadow-xl"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>


      {/* =========================================
         NEW: THEMED SUCCESS CARD OVERLAY
         ========================================= */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
          >
            {/* Standard Success Card */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ borderColor: COLORS.primary }}
              className="relative bg-white p-10 md:p-14 rounded-[2rem] shadow-2xl border-4 text-center max-w-lg w-full"
            >
              {/* Close Button on Card */}
              <button
                onClick={() => setIsSubmitted(false)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/5 transition-colors"
                aria-label="Close success message"
              >
                <X size={24} style={{ color: COLORS.primary }} />
              </button>

              {/* Success Check Icon */}
                <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl bg-black">
                  <CheckCircle size={56} style={{ color: COLORS.accent }} />
                </div>

              {/* Success Text */}
                <h3 className="text-4xl font-black mb-4 uppercase tracking-wider text-black">
                  Message Sent!
              </h3>
                <p className="text-xl opacity-80 mb-10 font-afaca leading-relaxed text-black">
                  Thank you for reaching out to Paradigm. Our multidisciplinary team has received your message and will get back to you shortly.
              </p>

              {/* Close Button Bottom */}
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-10 py-4 rounded-full text-white font-black uppercase tracking-widest hover:scale-105 transition-all shadow-md bg-black"
              >
                Close Message
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}