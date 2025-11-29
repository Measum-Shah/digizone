"use client";
import React from "react";
import { motion } from "framer-motion";

const FacebookIcon = (p) => (
  <svg {...p} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.67 3.21 8.58 7.55 9.65v-6.84H7.07V12h2.48V9.8c0-2.46 1.49-3.82 3.66-3.82.64 0 1.31.05 1.48.08v2.05H16.9c-1.05 0-1.25.5-1.25 1.24V12h2.12l-.28 2.8h-1.84v7.05C18.8 20.59 22 16.67 22 12c0-5.52-4.48-10-10-10z"/>
  </svg>
);

const LinkedInIcon = (p) => (
  <svg {...p} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M6.94 5a2 2 0 11-4 .002A2 2 0 016.94 5zM3 9h4v12H3zM9 9h3.77v1.68h.05A4.14 4.14 0 0116.64 9C20 9 20 11.2 20 14.05V21h-4v-6.2c0-1.5-.03-3.4-2.07-3.4-2.08 0-2.4 1.63-2.4 3.3V21H9z"/>
  </svg>
);

const GithubIcon = (p) => (
  <svg {...p} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.8.61-3.39-1.2-3.39-1.2a2.67 2.67 0 00-1.12-1.47c-.92-.63.07-.62.07-.62a2.1 2.1 0 011.53 1.03 2.15 2.15 0 002.93.84 2.16 2.16 0 01.64-1.35c-2.24-.26-4.6-1.12-4.6-4.97a3.9 3.9 0 011.03-2.7 3.64 3.64 0 01.1-2.66s.84-.27 2.75 1.02a9.5 9.5 0 015 0c1.91-1.3 2.75-1.02 2.75-1.02a3.64 3.64 0 01.1 2.66 3.9 3.9 0 011.03 2.7c0 3.86-2.36 4.71-4.6 4.96a2.4 2.4 0 01.68 1.86v2.76c0 .26.18.57.69.47A10 10 0 0015.16 2.5"/>
  </svg>
);

export default function Footer() {
  return (
    <motion.footer
      className="py-3 px-4 bg-[#060B1E] border-t border-slate-800/40 text-slate-400/50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">

        <div className="text-sm font-bold text-white">
          <span>Digizone</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r text-gray-400 ml-0.5">
             Solutions.
          </span>
        </div>

        <div className="flex gap-4">
          <a href="#" className="hover:text-cyan-400"><FacebookIcon className="transition-all"/></a>
          <a href="#" className="hover:text-cyan-400"><LinkedInIcon className="transition-all"/></a>
          <a href="#" className="hover:text-cyan-400"><GithubIcon className="transition-all"/></a>
        </div>

        <p className="text-[9px] text-slate-400/40">
          © {new Date().getFullYear()} DigiZone Studio.
        </p>

      </div>
    </motion.footer>
  );
}
