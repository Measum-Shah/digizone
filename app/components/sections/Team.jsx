"use client";

import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

// --- MOCK UTILS & DATA (Self-Contained for Sandbox Runnability) ---

// Utility for merging classes
const cn = (...inputs) => twMerge(clsx(inputs));

// Note: In a live Next.js app, this data would typically be imported:
// import { teamMembers } from "../../lib/data";
const teamMembers = [
    { id: 1, name: "Dr. Evelyn Reed", role: "Chief Technology Officer", imageQuery: "portrait, software engineer, dark background", bio: "Leads technical strategy and innovation for all core products." },
    { id: 2, name: "Mark O'Connell", role: "Lead Solutions Architect", imageQuery: "portrait, data analyst, blue lighting", bio: "Specializes in scalable cloud architectures and microservices." },
    { id: 3, name: "Aisha Khan", role: "Senior UX/UI Designer", imageQuery: "portrait, product designer, modern office", bio: "Focuses on user-centric design principles and interaction fluidity." },
    // Corrected data structure (removed duplicate 'role')
    { id: 4, name: "David Chen", role: "Machine Learning Engineer", imageQuery: "portrait, ai researcher, dark studio", bio: "Develops and deploys next-gen AI models for automated workflows." },
    { id: 5, name: "Sara Lopez", role: "DevOps Specialist", imageQuery: "portrait, devops engineer, server room", bio: "Manages CI/CD pipelines and infrastructure automation." },
    { id: 6, name: "Ethan Jones", role: "Full-Stack Developer", imageQuery: "portrait, developer, casual shirt", bio: "Expert in Next.js, Go, and high-performance database queries." },
];

// Combine the list multiple times for seamless, long-duration infinite scroll
const MARQUEE_COUNT = 3;
const allMembers = Array(MARQUEE_COUNT).fill(teamMembers).flat().map((member, index) => ({
    ...member,
    // Unique key for the repeated elements
    uniqueId: `${member.id}-${index}`, 
}));

// Configuration for the Marquee animation
const CARD_WIDTH_REM = 24; // w-96 is 24rem (384px). We will use this plus padding.
const CARD_SPACING_REM = 2; // p-8 is 2rem (32px).
const TOTAL_CARD_WIDTH_REM = CARD_WIDTH_REM + CARD_SPACING_REM * 2; // 28rem
const DURATION = 50; // Total duration in seconds for one full loop

// --- TEAM CARD COMPONENT ---
const TeamCard = ({ member }) => {
    // Dynamic Image URL using Unsplash
    const imageUrl = `https://source.unsplash.com/random/300x300/?${member.imageQuery}`;
    const fallbackImage = `https://placehold.co/300x300/1e293b/94a3b8?text=Team`;

    return (
        // The width of the card element must match the TOTAL_CARD_WIDTH_REM calculation
        <div 
            className="flex flex-col items-center justify-center p-8 shrink-0 h-full"
            style={{ width: `${TOTAL_CARD_WIDTH_REM}rem` }} // Fixed width for accurate calculation
        >
            <div className="flex flex-col items-center text-center rounded-3xl p-6 lg:p-8 w-full backdrop-blur-md bg-white/5 border border-white/10 transition-all duration-300 hover:border-sky-500/50 hover:shadow-2xl hover:shadow-sky-500/10 h-full">

                {/* Avatar */}
                <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-xl ring-4 ring-sky-500/30">
                    <img
                        src={imageUrl}
                        alt={member.name}
                        onError={(e) => { e.target.src = fallbackImage }}
                        className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-105"
                    />
                </div>

                {/* Info */}
                <h3 className="mt-6 text-xl font-bold tracking-tight text-white">
                    {member.name}
                </h3>

                <p className="text-sky-400 text-sm font-medium uppercase mt-1">
                    {member.role}
                </p>

                <p className="text-slate-400 text-base mt-4 italic leading-relaxed">
                    &ldquo;{member.bio}&rdquo;
                </p>
            </div>
        </div>
    );
};


// --- MAIN TEAM COMPONENT (Infinite Marquee) ---
export default function Team() {
    // Calculate the distance for one set of team members to scroll
    const distanceToScroll = teamMembers.length * TOTAL_CARD_WIDTH_REM;

    return (
        <section
            id="team"
            className="relative py-32 px-0 bg-[#0B0F19] overflow-hidden min-h-[700px] selection:bg-sky-500/30"
        >
            
            {/* ---------------------------------------------------------- */}
            {/* 1. ATMOSPHERIC BACKGROUND (SYNCED WITH HERO) */}
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
                <div className="absolute top-[10%] left-[50%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/2" />
                <div className="absolute bottom-[0%] right-[0%] w-[400px] h-[400px] bg-sky-600/10 rounded-full blur-[120px] pointer-events-none" />

                {/* Radial Fade / Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-[#0B0F19]" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19] via-transparent to-[#0B0F19]" />
            </div>


            <div className="relative z-20 w-full">
                
                {/* HEADING (Left Aligned, Custom Animated Style) */}
                <div className="max-w-7xl mx-auto px-6 mb-20">
                    <div className="mb-20">
                        {/* Subtitle / Divider */}
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 mb-4"
                        >
                            <div className="h-px w-8 bg-slate-600" />
                            <span className="text-slate-400 uppercase tracking-widest text-xs font-semibold">Our Expertise</span>
                        </motion.div>
                        
                        {/* Main Title */}
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
                </div>

                {/* MARQUEE TRACK (Cuts off content outside its bounds) */}
                <div className="w-full overflow-hidden">
                    {/* MOTION CONTENT (Moves infinitely) */}
                    <motion.div
                        className="flex flex-row items-center w-max h-full"
                        // Animation configuration for continuous loop
                        animate={{ x: [0, `-${distanceToScroll}rem`] }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: DURATION,
                                ease: "linear",
                            },
                        }}
                    >
                        {allMembers.map((member) => (
                            <TeamCard key={member.uniqueId} member={member} />
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}