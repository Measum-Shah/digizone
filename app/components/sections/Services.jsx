"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// --- UTILS ---
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// --- ICONS ---
const CodeIcon = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
);
const GearIcon = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.34 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);
const BotIcon = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904c-.708 0-1.39-.14-2.016-.412l-.636-.26a60.034 60.034 0 00-4.062 1.583.56.56 0 01-.418-.543c.19-.625.592-1.017 1.256-1.189.282-.07.575-.118.87-.149l.067-.008.003-.002A2.43 2.43 0 017.3 14.288c-.015-.411.092-.81.303-1.15.22-.36.564-.67.97-.9v-3c0-.663.537-1.2 1.2-1.2h3.6c.663 0 1.2.537 1.2 1.2v3c.406.23.75.54.97.9.21.34.318.739.303 1.15a2.43 2.43 0 01-1.35 2.502l.003.002.067.008c.295.03.588.08.87.15.664.172 1.065.564 1.256 1.189.14.457.067.925-.21 1.354a.63.63 0 01-.892.203 59.948 59.948 0 00-4.32-.82.63.63 0 01-.54-.627zM12 9.4c0-.22.18-.4.4-.4h3.2c.22 0 .4.18.4.4v2.2c0 .22-.18.4-.4.4h-3.2c-.22 0-.4-.18-.4-.4V9.4zM7.6 9.4c0-.22.18-.4.4-.4h3.2c.22 0 .4.18.4.4v2.2c0 .22-.18.4-.4.4h-3.2c-.22 0-.4-.18-.4-.4V9.4z" /></svg>
);
const ChartIcon = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
);
const MobileIcon = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
);
const LockIcon = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-4a2 2 0 00-2-2H6a2 2 0 00-2 2v4a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
</svg>
);

// --- COLOR CONFIG ---
const colors = {
  sky: { base: "text-sky-400", bg: "bg-sky-500/10", border: "border-sky-500/50", glow: "shadow-sky-500/20", blob: "bg-sky-600/20", gradient: "from-sky-500/20" },
  indigo: { base: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/50", glow: "shadow-indigo-500/20", blob: "bg-indigo-600/20", gradient: "from-indigo-500/20" },
  emerald: { base: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/50", glow: "shadow-emerald-500/20", blob: "bg-emerald-600/20", gradient: "from-emerald-500/20" },
  yellow: { base: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/50", glow: "shadow-yellow-500/20", blob: "bg-yellow-600/20", gradient: "from-yellow-500/20" },
  fuchsia: { base: "text-fuchsia-400", bg: "bg-fuchsia-500/10", border: "border-fuchsia-500/50", glow: "shadow-fuchsia-500/20", blob: "bg-fuchsia-600/20", gradient: "from-fuchsia-500/20" },
  red: { base: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/50", glow: "shadow-red-500/20", blob: "bg-red-600/20", gradient: "from-red-500/20" },
};

// --- DATA ---
const services = [
  { id: 1, icon: CodeIcon, title: "Web Development", description: "Scalable, modern applications built with Next.js and robust backends.", color: "sky", features: ["Serverless Edge", "Headless CMS", "Database Design"] },
  { id: 2, icon: GearIcon, title: "SaaS Engineering", description: "Secure, multi-tenant architectures designed for high availability.", color: "indigo", features: ["Multi-Tenancy", "Microservices", "CI/CD Pipelines"] },
  { id: 3, icon: BotIcon, title: "Automation", description: "Replacing repetitive manual workflows with intelligent scripts.", color: "emerald", features: ["API Integration", "RPA Logic", "AI Flows"] },
  { id: 4, icon: ChartIcon, title: "Data Analytics", description: "Real-time dashboards that turn raw data into actionable insights.", color: "yellow", features: ["Live Streaming", "D3.js Viz", "Forecasting"] },
  { id: 5, icon: MobileIcon, title: "Mobile Apps", description: "Native-feel experiences for iOS and Android using Flutter/React Native.", color: "fuchsia", features: ["Offline Sync", "Device Access", "Cross-Platform"] },
  { id: 6, icon: LockIcon, title: "Cyber Security", description: "Comprehensive audits and hardening for enterprise compliance.", color: "red", features: ["Pen-Testing", "GDPR/HIPAA", "OAuth 2.0"] },
];

export default function ServicesSection() {
  const [activeId, setActiveId] = useState(2); // Default to second item active
  
  // Determine active color for the background blob
  const activeColor = services.find(s => s.id === activeId)?.color || "indigo";

  return (
    <section className="relative py-24 min-h-screen bg-[#0B0F19] overflow-hidden flex flex-col justify-center">
      
      {/* 1. SYNCED HERO BACKGROUND (Grid + Vignette) */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, 
            backgroundSize: '40px 40px' 
          }} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-[#0B0F19]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19] via-transparent to-[#0B0F19]" />
      </div>

      {/* 2. DYNAMIC AMBIENT LIGHTING */}
      {/* This blob changes color based on the active service card */}
      <motion.div 
        animate={{ backgroundColor: colors[activeColor].blob.replace('bg-', '').replace('/20', '') }} 
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 transition-colors duration-1000",
          colors[activeColor].blob
        )}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        
        {/* SECTION HEADER */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
             <div className="h-px w-8 bg-slate-600" />
             <span className="text-slate-400 uppercase tracking-widest text-xs font-semibold">Our Expertise</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
          >
            Engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-500">Excellence.</span>
          </motion.h2>
        </div>

        {/* --- THE ULTIMATE ACCORDION --- */}
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 h-auto lg:h-[500px]">
          {services.map((service) => {
            const isActive = activeId === service.id;
            const theme = colors[service.color];
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                layout // Crucial for smooth flex resizing
                onClick={() => setActiveId(service.id)}
                onMouseEnter={() => setActiveId(service.id)}
                className={cn(
                  "relative group cursor-pointer overflow-hidden rounded-3xl border transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]",
                  // Base Styles
                  "bg-slate-900/40 backdrop-blur-md", 
                  // Border Logic
                  isActive 
                    ? `border-opacity-100 ${theme.border} shadow-2xl` 
                    : "border-slate-800 border-opacity-50 hover:border-slate-600"
                )}
                // Animation Props
                initial={false}
                animate={{
                  flex: isActive ? 5 : 1,
                }}
              >
                {/* Internal Gradient for Active State */}
                <div 
                  className={cn(
                    "absolute inset-0 bg-gradient-to-b opacity-0 transition-opacity duration-500",
                    theme.gradient,
                    "to-transparent",
                    isActive ? "opacity-100" : "opacity-0"
                  )} 
                />

                <div className="relative h-full w-full p-6 flex flex-col justify-between isolate">
                  
                  {/* TOP: ICON & TITLE */}
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-0">
                    {/* Icon Container */}
                    <div className={cn(
                      "w-12 h-12 flex items-center justify-center rounded-xl border transition-all duration-500 z-10",
                      isActive 
                        ? `${theme.bg} ${theme.base} ${theme.border}` 
                        : "bg-slate-800/50 border-slate-700 text-slate-500 group-hover:text-slate-300"
                    )}>
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Desktop Vertical Text (When Inactive) */}
                    {!isActive && (
                      <div className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none">
                         <motion.span 
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           transition={{ delay: 0.2 }}
                           className="whitespace-nowrap -rotate-90 text-lg font-bold text-slate-500 tracking-wider"
                         >
                           {service.title}
                         </motion.span>
                      </div>
                    )}

                    {/* Mobile/Active Title */}
                    <motion.h3 
                      layout="position"
                      className={cn(
                        "font-bold text-2xl lg:ml-4 transition-all duration-300 z-10",
                        isActive ? "text-white opacity-100" : "text-slate-500 lg:opacity-0"
                      )}
                    >
                      {service.title}
                    </motion.h3>
                  </div>

                  {/* BOTTOM: CONTENT (Visible only when Active) */}
                  <div className="relative z-10">
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                          exit={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                        >
                          <p className="text-slate-300 text-lg leading-relaxed max-w-md mb-8">
                            {service.description}
                          </p>

                          {/* Features Grid */}
                          <div className="mb-8">
                            <h4 className={cn("text-xs font-bold uppercase tracking-widest mb-4 opacity-70", theme.base)}>
                              Capabilities
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {service.features.map((feature, i) => (
                                <span 
                                  key={i} 
                                  className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-slate-300"
                                >
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* CTA Button */}
                          <button className={cn(
                            "group flex items-center gap-2 text-sm font-bold transition-colors",
                            theme.base
                          )}>
                            Explore Service
                            <span className="block transition-transform group-hover:translate-x-1">→</span>
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}