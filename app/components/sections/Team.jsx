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
  { id: 1, name: "Huzaif Ihsan", role: "Chief Executive Officer",
    imageUrl: "/images/team/huzaifa.jpeg",
    bio: "Drives company vision, oversees product direction, and leads strategic partnerships to scale the business."
  },
  { id: 2, name: "Shazim Ali Tahir", role: "Frontend Web Developer",
    imageUrl: "/images/team/Shazim.jpeg",
    bio: "Builds responsive user interfaces, optimizes frontend performance, and maintains design system consistency using modern JS frameworks."
  },
  { id: 3, name: "Sarmad Rafique", role: "Marketing Manager",
    imageUrl: "/images/team/sarmad.jpeg",
    bio: "Plans brand campaigns, manages digital presence, analyzes market trends, and improves customer engagement through data-driven strategies."
  },
  { id: 4, name: "Measum Shah", role: "Full Stack Developer",
    imageUrl: "/images/team/measum.jpeg",
    bio: "Develops end-to-end features across frontend and backend, integrates APIs, manages databases, and ensures smooth deployment."
  },
  { id: 5, name: "Rafay Ali", role: "Web Specialist",
    imageUrl: "/images/team/rafay.png",
    bio: "Handles website optimization, server configuration, security audits, domain management, and ensures 99%+ uptime with scalable hosting."
  },
  { id: 6, name: "Sheheryar", role: "Full-Stack Developer",
    imageUrl: "/images/team/sheheryar.jpg",
    bio: "Implements secure backend logic, builds dynamic UIs, writes efficient queries, and delivers seamless cross-platform web solutions."
  },
  { id: 7, name: "Anas Asghar", role: "Mobile App Developer",
    imageUrl: "/images/team/anas.jpg",
    bio: "Develops Android & iOS applications, manages app state, ensures API connectivity, and publishes stable builds to app stores."
  },
  { id: 8, name: "Saad Riaz", role: "Software Quality Assurance Eng.(Tester)",
    imageUrl: "/images/team/saad.png",
    bio: "Designs test cases, executes manual & automated testing, tracks bugs, verifies fixes, and ensures product reliability before release."
  }
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
                        src={member.imageUrl}
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