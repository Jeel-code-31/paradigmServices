"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

const MapPinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
);

const PhoneIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.28-2.28a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
);

const MailIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

const FacebookIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);

const YoutubeIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.42 5.58a2.78 2.78 0 0 0 1.94 2c1.71.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.42-5.58z" /><path d="m9.75 15.02 5.75-3.02-5.75-3.02v6.04z" /></svg>
);

const InstagramIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
);

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <footer className="footer-area !bg-paradigm-bg text-[#333333] pt-14 border-t border-black-500 font-afaca">
      <motion.div
        className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6 md:px-12 pb-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Column 1: Intro & Contact */}
        <motion.div className="flex flex-col gap-4" variants={itemVariants}>
          <div className="text-[#1a1a1a] mb-2 tracking-tight"><img src='/Logo.png' alt="Paradigm Logo" style={{ width: 'auto', height: '120px' }} /></div>
          
          <div className="flex items-start gap-4 mb-2 group">
            <span className="text-gray-600 mt-1 shrink-0"><MapPinIcon /></span>
            <span className="flex-1 group-hover:text-green-800 transition-colors text-sm md:text-base">
              <span className="font-numbers">307</span>, Center Point, Andheri–Kurla Rd, Andheri East, Mumbai, <span className="font-numbers">400059</span>
            </span>
          </div>
          <div className="flex items-start gap-4 mb-2 group">
            <span className="text-gray-600 mt-1 shrink-0"><PhoneIcon /></span>
            <span className="flex-1 group-hover:text-green-800 transition-colors text-sm md:text-base font-numbers">
              +91 (0)22 28395651 / 52
            </span>
          </div>
          <div className="flex items-start gap-4 mb-2 group">
            <span className="text-gray-600 mt-1 shrink-0"><MailIcon /></span>
            <span className="flex-1 group-hover:text-green-800 transition-colors text-sm md:text-base">office@paradigm.co.in</span>
          </div>
        </motion.div>

        {/* Column 2: Quick Links */}
        <motion.div className="flex flex-col" variants={itemVariants}>
          <h3 className="text-xl font-bold text-[#1a1a1a] mb-6 pb-2 border-b-2 border-gray-400 inline-block w-fit">Quick Links</h3>
          <ul className="flex flex-col gap-3 m-0 p-0 list-none">
            <li><Link href="/contact-us" className="text-[#555555] no-underline hover:text-green-800 hover:pl-2 transition-all duration-300 text-sm md:text-base">Contact Us</Link></li>
            <li><Link href="/articles" className="text-[#555555] no-underline hover:text-green-800 hover:pl-2 transition-all duration-300 text-sm md:text-base">Articles</Link></li>
            <li><Link href="/event-gallery" className="text-[#555555] no-underline hover:text-green-800 hover:pl-2 transition-all duration-300 text-sm md:text-base">Event Gallery</Link></li>
            <li><Link href="/food-safety-signages" className="text-[#555555] no-underline hover:text-green-800 hover:pl-2 transition-all duration-300 text-sm md:text-base">Safety Signages</Link></li>
             <li><Link href="/career" className="text-[#555555] no-underline hover:text-green-800 hover:pl-2 transition-all duration-300 text-sm md:text-base">Career</Link></li>
          </ul>
        </motion.div>

        {/* Column 3: Subscription & Socials */}
        <motion.div className="flex flex-col md:col-span-2 lg:col-span-1" variants={itemVariants}>
          <h3 className="text-xl font-bold text-[#1a1a1a] mb-6 pb-2 border-b-2 border-gray-400 inline-block w-fit">Subscribe</h3>
          <p className="text-[#555555] mb-4 text-sm md:text-base">Stay updated with our latest insights and news.</p>
          <form className="flex w-full mb-8 max-w-md" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email address" className="flex-1 min-w-0 p-2 md:p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-1 focus:ring-green-800 text-sm md:text-base" required />
            <button type="submit" className="text-black px-3 md:px-5 py-2 md:py-3 border border-black/50 rounded-2xl cursor-pointer transition-colors font-semibold whitespace-nowrap text-sm md:text-base">Subscribe</button>
          </form>

          <h3 className="text-xl font-bold text-[#1a1a1a] mb-4 lg:pt-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/company/paradigm-services-pvt-ltd/" target="_blank" rel="noreferrer" className="text-white bg-[#444444] p-2 rounded-full flex items-center justify-center hover:bg-green-800 hover:-translate-y-1 transition-all shadow-md"><LinkedinIcon /></a>
            <a href="https://www.facebook.com/paradigmservicespvtltd/" target="_blank" rel="noreferrer" className="text-white bg-[#444444] p-2 rounded-full flex items-center justify-center hover:bg-green-800 hover:-translate-y-1 transition-all shadow-md"><FacebookIcon /></a>
            <a href="https://www.youtube.com/channel/UCLafIavXg1cQbbCIEW7D5Og" target="_blank" rel="noreferrer" className="text-white bg-[#444444] p-2 rounded-full flex items-center justify-center hover:bg-green-800 hover:-translate-y-1 transition-all shadow-md"><YoutubeIcon /></a>
            <a href="https://www.instagram.com/paradigm_services?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="text-white bg-[#444444] p-2 rounded-full flex items-center justify-center hover:bg-green-800 hover:-translate-y-1 transition-all shadow-md"><InstagramIcon /></a>
          </div>
        </motion.div>
      </motion.div>

      {/* Footer Bottom */}
      <div className="w-full h-0.5 bg-[#1A3013] mx-auto rounded-full" />
      <div className="bg-green text-center p-6 mt-8">
        <p className="m-0 text-xs md:text-sm font-medium text-[#555555]"> &copy; 2026 Paradigm Service PVT.LTD | All Rights Reserved</p>
      </div>
    </footer>
  );
}
