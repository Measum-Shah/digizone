"use client";

import { useState, useEffect } from "react";
import FadeIn from "../animations/FadeIn";
import SlideUp from "../animations/SlideUp";
import Button from "../ui/Button";

// --- SVG ICONS (Inline for portability) ---
const CheckIcon = () => (
  <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const CodeIcon = () => (
  <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const GraphIcon = () => (
  <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

// --- COMPONENT ---
export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center bg-[#0B0F19] overflow-hidden selection:bg-sky-500/30">
      
      {/* 1. BACKGROUND GRID PATTERN (Subtle Tech Feel) */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, 
            backgroundSize: '40px 40px' 
          }} 
        />
        {/* Radial Fade for Grid */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-[#0B0F19]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19] via-transparent to-[#0B0F19]" />
      </div>

      {/* 2. AMBIENT GLOWS */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-sky-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 w-full pt-20 pb-12 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* --- LEFT COLUMN: TEXT CONTENT --- */}
          <div className="max-w-2xl">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/50 backdrop-blur-md mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                </span>
                <span className="text-xs font-medium text-slate-300 tracking-wide uppercase">
                  DigiZone Studio v2.0
                </span>
              </div>
            </FadeIn>
            
            <SlideUp delay={0.2}>
              {/* Reduced size from 7xl to 5xl/6xl for cleaner look */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-6">
                Turn Complex Logic into <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500">
                  Elegant Software.
                </span>
              </h1>
            </SlideUp>

            <SlideUp delay={0.3}>
              <p className="text-base md:text-lg text-slate-400 leading-relaxed mb-8 max-w-lg">
                We bridge the gap between heavy engineering and beautiful design. 
                Build scalable SaaS platforms, automated workflows, and 
                data-driven dashboards that your users will actually love.
              </p>
            </SlideUp>

            <SlideUp delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <a href="#contact">
                  <Button className="bg-sky-500 hover:bg-sky-400 text-white px-8 py-3 rounded-lg font-medium transition-all shadow-[0_0_20px_-5px_rgba(14,165,233,0.3)]">
                    Start Building
                  </Button>
                </a>
                <a href="#portfolio">
                  <button className="px-8 py-3 rounded-lg border border-slate-700 text-slate-300 font-medium hover:bg-slate-800/50 hover:text-white transition-all">
                    View Case Studies
                  </button>
                </a>
              </div>
            </SlideUp>

     
          </div>

          {/* --- RIGHT COLUMN: CREATIVE VISUAL (Layered Cards) --- */}
          <div className="relative hidden lg:block h-[500px]">
             <FadeIn delay={0.4}>
                {/* BACK LAYER: Code Window */}
                <div className="absolute top-0 right-0 w-[90%] h-[400px] bg-[#111625] rounded-xl border border-slate-800 shadow-2xl overflow-hidden opacity-90 rotate-3 translate-y-4">
                  <div className="h-8 bg-[#1a2033] border-b border-slate-800 flex items-center px-4 gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
                    <span className="ml-2 text-[10px] text-slate-500 font-mono">config.ts</span>
                  </div>
                  <div className="p-6 font-mono text-xs text-slate-400 leading-6">
                    <p><span className="text-purple-400">const</span> <span className="text-blue-400">App</span> = () <span className="text-purple-400">=&gt;</span> {'{'}</p>
                    <p className="pl-4"><span className="text-purple-400">return</span> (</p>
                    <p className="pl-8 text-slate-500">&lt;DigiZoneProvider&gt;</p>
                    <p className="pl-12 text-slate-500">&lt;Analytics mode="realtime" /&gt;</p>
                    <p className="pl-12 text-slate-500">&lt;Automation active={'{'}true{'}'} /&gt;</p>
                    <p className="pl-8 text-slate-500">&lt;/DigiZoneProvider&gt;</p>
                    <p className="pl-4">);</p>
                    <p>{'}'};</p>
                    <div className="mt-4 p-3 bg-sky-900/10 border border-sky-500/20 rounded text-sky-300">
                       &gt; Deployment Status: <span className="text-emerald-400">Success (54ms)</span>
                    </div>
                  </div>
                </div>

                {/* FRONT LAYER: Analytics Card */}
                <div className="absolute bottom-8 left-0 w-[320px] bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-indigo-500/20 p-2 rounded-lg">
                      <GraphIcon />
                    </div>
                    <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                      +12.5%
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-white">2,450</h3>
                    <p className="text-xs text-slate-400">Active Monthly Users</p>
                  </div>
                  <div className="mt-4 h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-indigo-500 to-sky-500 w-[70%]" />
                  </div>
                </div>

                {/* FLOATING BADGE */}
                <div className="absolute top-12 left-[-20px] bg-[#0B0F19] border border-slate-700 py-2 px-4 rounded-lg shadow-xl flex items-center gap-3 animate-bounce duration-[3000ms]">
                   <div className="bg-emerald-500/20 p-1 rounded-full">
                     <CheckIcon />
                   </div>
                   <div>
                     <p className="text-[10px] text-slate-400 uppercase">System Status</p>
                     <p className="text-xs font-bold text-emerald-400">All Systems Operational</p>
                   </div>
                </div>
             </FadeIn>
          </div>
        </div>
      </div>

  

    </section>
  );
}