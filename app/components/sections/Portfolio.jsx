"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

// --- UTILS ---
const cn = (...inputs) => twMerge(clsx(inputs));

// --- MOCK COMPONENT for Self-Containment (Replaces '../ui/SectionHeading') ---
const SectionHeading = ({ title, subtitle, className }) => (
    <div className={cn("mb-4", className)}>
        <h2 className="text-xl md:text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">
            {subtitle || "Our Work"}
        </h2>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {title || "Portfolio"}
        </h1>
    </div>
);

// --- DATA (Enhanced with detailed Unsplash queries for realistic image placeholders) ---
const allProjects = [
  { 
    id: 1, 
    title: "FusionFlow SaaS Platform", 
    description: "Built a fully scalable, multi-tenant SaaS application integrating next-gen AI for automated workflow generation.", 
    tags: ["Next.js", "AI/ML", "Prisma", "AWS"],
    imageQuery: "futuristic-dashboard-ui", // Unsplash keyword
    featured: true,
  },
  { 
    id: 2, 
    title: "Apex FinTech App", 
    description: "A secure, modern mobile application providing real-time investment tracking and algorithmic trading insights.", 
    tags: ["React Native", "TypeScript", "Microservices"],
    imageQuery: "mobile-banking-app",
    featured: false,
  },
  { 
    id: 3, 
    title: "Aura Design Agency", 
    description: "High-performance, visually stunning corporate website utilizing custom animations and a headless CMS.", 
    tags: ["Next.js", "Framer Motion", "Contentful"],
    imageQuery: "abstract-geometric-design",
    featured: false,
  },
  { 
    id: 4, 
    title: "EcoSense Wellness", 
    description: "Developed a cross-platform health tracking app focusing on intuitive UX and seamless data visualization.", 
    tags: ["Flutter", "GraphQL", "Data Viz"],
    imageQuery: "health-app-interface",
    featured: false,
  },
  { 
    id: 5, 
    title: "DevOps Automation", 
    description: "Internal tools built to automate deployment pipelines, reducing release cycles by 40%.", 
    tags: ["Python", "Kubernetes", "CI/CD"],
    imageQuery: "cloud-server-technology",
    featured: false,
  },
  { 
    id: 6,
    title: "Quantum E-Commerce", 
    description: "High-speed custom API layer for global e-commerce operations, focused on latency and redundancy.", 
    tags: ["Go", "Kafka", "PostgreSQL"],
    imageQuery: "coding-screen-dark",
    featured: false,
  },
  // New Project Added
  {
    id: 7,
    title: "Sentinel Security AI",
    description: "Real-time threat detection system using edge computing and custom machine learning models for industrial IoT.",
    tags: ["Edge AI", "TensorFlow", "Go", "IoT"],
    imageQuery: "security-camera-network",
    featured: false,
  },
];

// --- COMPONENT: TAG PILL (Better contrast and glass effect) ---
const TagPill = ({ text }) => (
  <span className="text-[10px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-sky-600/10 text-sky-200 border border-sky-500/30 backdrop-blur-sm transition-colors">
    {text}
  </span>
);

// --- COMPONENT: 3D PROJECT CARD (Core UI Enhancement) ---
const ProjectCard3D = ({ item, index }) => {
  const cardRef = useRef(null);
  const isFeatured = item.featured;
  
  // Motion Values for Tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Adjusted sensitivity for larger cards
  const rotateX = useTransform(mouseY, [-300, 300], [4, -4]); 
  const rotateY = useTransform(mouseX, [-300, 300], [-4, 4]);
  const shineX = useTransform(mouseX, [-300, 300], [-100, 100]);
  const shineY = useTransform(mouseY, [-300, 300], [-100, 100]);

  // Dynamic Image Source (Unsplash)
  const imageUrl = `https://source.unsplash.com/random/800x600/?${item.imageQuery}&${item.id}`;
  // Fallback image using a generic, dark code scene
  const fallbackImage = `https://images.unsplash.com/photo-1542831371-29b0f74f9d13?auto=format&fit=crop&q=80&w=800&h=600`; 

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", bounce: 0.3, duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.1 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: "1200px",
      }}
      className={cn(
        "group relative rounded-3xl overflow-hidden",
        // ENHANCED STYLE: Darker BG, Cyan Accent Border, Enhanced Hover Shadow
        "bg-[#1a2033]/80 border border-cyan-500/20 backdrop-blur-md", 
        "transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-cyan-500/40",
        isFeatured ? "md:col-span-2 lg:h-[580px] flex flex-col lg:flex-row" : "h-[480px] flex flex-col"
      )}
    >
        {/* --- DYNAMIC SHINE EFFECT --- */}
        <motion.div
            style={{ x: shineX, y: shineY, background: "radial-gradient(600px circle at center, rgba(255,255,255,0.08), transparent 40%)" }}
            className="absolute inset-0 z-20 pointer-events-none"
        />

        {/* --- IMAGE SECTION --- */}
        <div className={cn(
            "relative overflow-hidden z-0",
            isFeatured ? "lg:w-3/5 h-64 lg:h-full" : "h-56 shrink-0"
        )}>
            {/* Gradient Overlay to blend image into card content */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent z-10 opacity-70" />
            
            <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                src={imageUrl} 
                alt={item.title}
                onError={(e) => { e.target.src = fallbackImage }}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
            />
        </div>

        {/* --- CONTENT SECTION --- */}
        <div className={cn(
            "relative z-10 p-8 flex flex-col justify-between h-full",
            isFeatured ? "lg:w-2/5 lg:py-12" : ""
        )}>
            <div>
                <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, i) => <TagPill key={i} text={tag} />)}
                </div>

                <h3 className={cn("font-extrabold text-white leading-tight mb-3 tracking-tight", isFeatured ? "text-4xl" : "text-2xl")}>
                    {item.title}
                </h3>
                
                <p className="text-slate-300/80 text-base leading-relaxed">
                    {item.description}
                </p>
                {/* Removed the Link / CTA section as requested */}
            </div>
        </div>
    </motion.div>
  );
};


// --- MAIN PORTFOLIO SECTION (FINAL) ---
export default function Portfolio() {
    
    const featuredProject = allProjects.find(p => p.featured);
    const gridProjects = allProjects.filter(p => !p.featured);

    return (
        <section id="portfolio" className="relative py-32 px-6 bg-[#0B0F19] overflow-hidden min-h-screen">
            
            {/* ---------------------------------------------------------- */}
            {/* 1. ATMOSPHERIC BACKGROUND (SYNCED WITH HERO COMPONENT) */}
            {/* ---------------------------------------------------------- */}
            <div className="absolute inset-0 pointer-events-none">
                {/* 1. BACKGROUND GRID PATTERN (Subtle Tech Feel) */}
                <div 
                    className="absolute inset-0 opacity-[0.03]" 
                    style={{ 
                        backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, 
                        backgroundSize: '40px 40px' 
                    }} 
                />

                {/* 2. AMBIENT GLOWS */}
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-sky-600/10 rounded-full blur-[120px] pointer-events-none" />

                {/* Radial Fade / Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-[#0B0F19]" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19] via-transparent to-[#0B0F19]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-20">
                
                {/* --- HEADING (MOVED TO RIGHT CORNER) --- */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.6 }} 
                    viewport={{ once: true }}
                    className="flex justify-end mb-16" // Aligns content to the right
                >
                    <div className="max-w-md text-right"> 
                        <SectionHeading 
                            title="Our Elite Portfolio" 
                            subtitle="Defining Excellence Through Custom Engineering" 
                            className="text-right" 
                        />
                    </div>
                </motion.div>
                
                {/* --- PROJECTS LAYOUT --- */}
                <div className="flex flex-col gap-8">
                    {/* Featured Project */}
                    {featuredProject && <ProjectCard3D item={featuredProject} index={0} />}

                    {/* Grid Projects (Renders all projects) */}
                    <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence>
                            {gridProjects.map((item, i) => (
                                <ProjectCard3D key={item.id} item={item} index={i + 1} />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>

                <div className="mt-16 h-8" /> 

            </div>
        </section>
    );
}