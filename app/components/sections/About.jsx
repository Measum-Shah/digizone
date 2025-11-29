"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading"; 

// --- ANIMATION VARIANTS ---
// Defined outside the component to ensure clean, static object references.
const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

// --- SVG ICONS ---
const RocketIcon = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
);
const LightbulbIcon = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6a3 3 0 016 0v13m-6 0h6m-6 0h.01M12 4a3 3 0 00-3 3v10a3 3 0 006 0V7a3 3 0 00-3-3z" /></svg>
);
const CheckShieldIcon = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 018.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
);


export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 lg:py-48 px-6 bg-[#0B0F19] overflow-hidden"
    >
      
      {/* ---------------------------------------------------------- */}
      {/* 1. SYNCED HERO BACKGROUND (Grid + Glows + Vignette) */}
      {/* ---------------------------------------------------------- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Infinite Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, 
            backgroundSize: '40px 40px' 
          }} 
        />
        
        {/* Ambient Glow Orbs */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-sky-600/10 rounded-full blur-[120px] pointer-events-none" />
        
        {/* Radial Fade / Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-[#0B0F19]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19] via-transparent to-[#0B0F19]" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-20"
      >

        {/* ------------------------------------------------------------------- */}
        {/* --- LEFT VISUAL: ELEGANT ROTATING NEURAL MESH --- */}
        {/* ------------------------------------------------------------------- */}
        <motion.div variants={fadeIn} className="relative w-full h-[550px] flex items-center justify-center">
          
          <div className="relative w-full h-full flex items-center justify-center">
            
            {/* Outer Ring/Halo (Rotates counter-clockwise, ambient) */}
            <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border border-sky-600/30 opacity-40 animate-[spin_50s_linear_infinite]" />
            
            {/* Inner Core (Rotates clockwise, more defined) */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="relative w-[300px] h-[300px] rounded-full border border-indigo-600/40 shadow-2xl shadow-indigo-800/50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm"
            >
                {/* Holographic Inner Mesh lines */}
                <div 
                    className="absolute inset-0 opacity-40"
                    style={{ 
                        backgroundImage: `repeating-linear-gradient(0deg, #3B82F6 0, transparent 1px, transparent 10%), repeating-linear-gradient(90deg, #3B82F6 0, transparent 1px, transparent 10%)`, 
                        backgroundSize: '10% 10%',
                        maskImage: 'radial-gradient(ellipse at center, white 50%, transparent 100%)',
                        WebkitMaskImage: 'radial-gradient(ellipse at center, white 50%, transparent 100%)',
                    }}
                />

                {/* Central Focus Node */}
                <div className="w-16 h-16 rounded-full bg-sky-500/80 shadow-[0_0_50px_rgba(56,189,248,0.8)] border border-white/40 flex items-center justify-center animate-pulse-slow">
                     <RocketIcon className="w-8 h-8 text-white" />
                </div>
            </motion.div>
            
             {/* Floating Code Snippet (Glassmorphism card) */}
             <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 right-0 w-64 bg-slate-900/90 backdrop-blur-xl border border-sky-500/30 p-4 rounded-xl text-xs font-mono text-slate-300 shadow-3xl transform rotate-3 hover:rotate-0 hover:scale-[1.05] transition-all duration-300 cursor-pointer"
             >
                <span className="text-purple-400">const</span> <span className="text-yellow-400">DigiZoneCore</span> = {'{'}
                <br/>
                &nbsp;&nbsp;scale: <span className="text-emerald-400">'enterprise'</span>,
                <br/>
                &nbsp;&nbsp;latency: <span className="text-fuchsia-400">42</span>,
                <br/>
                &nbsp;&nbsp;status: <span className="text-sky-400">'operational'</span>
                <br/>
                {'}'}
             </motion.div>

          </div>
        </motion.div>

        {/* ------------------------------------------------- */}
        {/* --- RIGHT CONTENT: Text (Structured & Clean) --- */}
        {/* ------------------------------------------------- */}
        <div className="lg:pl-10">
          <motion.div variants={fadeIn}>
            <SectionHeading title="Who We Are" subtitle="Driving Digital Innovation, One Insight at a Time" />
          </motion.div>

          <motion.div variants={fadeIn} className="mt-8">
            <p className="text-slate-200 leading-relaxed text-xl font-semibold">
              At DigiZone, we don't just build software; we engineer solutions that
              <span className="text-sky-400"> redefine efficiency</span> and <span className="text-indigo-400">unlock new possibilities</span>.
              Our expertise spans **full-stack development**, **scalable SaaS architectures**,
              and **intelligent workflow automation**.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="mt-10">
            <p className="text-slate-400 leading-loose text-lg border-l-4 border-slate-600/70 pl-6 italic">
              "Our mission is to empower ambitious founders and enterprises. We achieve this
              by meticulously crafting solutions through **deep structural analysis**,
              impeccable engineering, and deploying custom software built with the very latest technologies."
            </p>
          </motion.div>

          {/* Quick Pillars/Benefits List (Using professional SVG Icons) */}
          <motion.ul variants={staggerContainer} className="mt-12 space-y-5">
            
            <motion.li variants={fadeIn} className="flex items-start gap-4 text-slate-300">
              <div className="p-2 rounded-lg bg-sky-500/20 text-sky-400 shrink-0 mt-0.5">
                <CheckShieldIcon className="w-5 h-5" />
              </div>
              <span className="text-lg">
                <span className="font-bold text-white">Strategic Architecture:</span> We design robust systems that anticipate future growth and complex demands.
              </span>
            </motion.li>

            <motion.li variants={fadeIn} className="flex items-start gap-4 text-slate-300">
              <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400 shrink-0 mt-0.5">
                <LightbulbIcon className="w-5 h-5" />
              </div>
              <span className="text-lg">
                <span className="font-bold text-white">Insight-Driven Innovation:</span> Solving the *right* problem by combining foresight with cutting-edge tech.
              </span>
            </motion.li>
            
            <motion.li variants={fadeIn} className="flex items-start gap-4 text-slate-300">
              <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                <RocketIcon className="w-5 h-5" />
              </div>
              <span className="text-lg">
                <span className="font-bold text-white">Flawless Execution:</span> Delivering high-performance, intuitive software with a relentless focus on quality.
              </span>
            </motion.li>
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
}