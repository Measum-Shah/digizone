"use client";

import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

// --- MOCK UTILS & DATA (Self-Contained for Sandbox Runnability) ---

// Utility for merging classes
const cn = (...inputs) => twMerge(clsx(inputs));

// Mock Testimonials Data (More entries for a better grid display)
const testimonials = [
    { id: 1, name: "Jessica R.", company: "Apex Solutions", message: "The implementation was seamless and delivered ahead of schedule. Their team's expertise in cloud architecture is unmatched, leading to a 40% efficiency boost." },
    { id: 2, name: "Michael V.", company: "Digital Forge", message: "Truly transformative results. They customized our AI workflow perfectly, handling complex data pipelines with outstanding support and reliability." },
    { id: 3, name: "Sarah L.", company: "Synapse Systems", message: "Exceptional UI/UX design. They built a product that users genuinely love to use, perfectly aligning with our user-centric design principles." },
    { id: 4, name: "Ethan K.", company: "Global Transit", message: "Outstanding support and reliability. They handle complex DevOps pipelines with ease, ensuring 99.99% uptime and smooth continuous integration." },
    { id: 5, name: "Aisha M.", company: "Innovate Labs", message: "A true partnership. Their machine learning models gave us a competitive edge in market prediction, enabling smarter, faster business decisions." },
    { id: 6, name: "Alex P.", company: "Aura Dynamics", message: "The best integration experience we've ever had. Minimal downtime and maximum impact on our core services almost instantly." },
    { id: 7, name: "Nina B.", company: "Fusion Works", message: "Their deep knowledge of backend infrastructure solved persistent scaling issues that plagued us for months. Highly technical and incredibly fast." },
    { id: 8, name: "Raj S.", company: "Metric Global", message: "The data visualization dashboards they created are intuitive, powerful, and a game-changer for our executive reporting process." },
];

// --- FRAMER MOTION VARIANTS ---

const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { 
            type: "spring", 
            stiffness: 80, 
            damping: 12,
        } 
    },
};

const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

// --- TESTIMONIAL CARD COMPONENT (Unique Etched Look) ---
const TestimonialCard = ({ item }) => {
    return (
        <motion.div
            variants={cardVariants}
            className="h-full"
        >
            <motion.div 
                className="relative p-px rounded-2xl transition-all duration-300 h-full group"
                // Simulate a subtle cyan glowing border effect using box-shadow on hover
                whileHover={{ 
                    boxShadow: '0 0 20px rgba(6, 182, 212, 0.5), inset 0 0 10px rgba(6, 182, 212, 0.3)', // Using cyan-500
                }}
            >
                {/* Inner Card Content: Darker background, slightly etched look */}
                <div className="p-6 md:p-8 rounded-[calc(1rem-1px)] bg-[#10141e] border border-white/5 h-full flex flex-col justify-between cursor-default transition-transform duration-300 group-hover:bg-[#151927]">
                    
                    {/* Quote Icon */}
                    <svg 
                        className="text-cyan-400 text-3xl opacity-80 mb-4 w-8 h-8 group-hover:text-cyan-300 transition-colors"
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="1.5"
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                    >
                        <path d="M10 11C10 8.79086 8.20914 7 6 7V7C3.79086 7 2 8.79086 2 11V18C2 19.1046 2.89543 20 4 20H8C9.10457 20 10 19.1046 10 18V11Z"></path>
                        <path d="M22 11C22 8.79086 20.2091 7 18 7V7C15.7909 7 14 8.79086 14 11V18C14 19.1046 14.8954 20 16 20H20C21.1046 20 22 19.1046 22 18V11Z"></path>
                    </svg>

                    <p className="mt-2 text-slate-300 leading-relaxed italic text-base flex-grow">
                      &ldquo;{item.message}&rdquo;
                    </p>

                    <div className="mt-6 pt-4 border-t border-white/10">
                      <h4 className="text-white font-bold text-lg">
                        {item.name}
                      </h4>
                      <p className="text-cyan-400 text-sm font-medium">{item.company}</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};


// --- MAIN TESTIMONIALS COMPONENT (Animated Grid) ---
export default function Testimonials() {
    return (
        <section
            id="testimonials"
            className="relative py-32 px-6 bg-[#0B0F19] overflow-hidden min-h-screen selection:bg-cyan-500/30"
        >
            
            {/* ---------------------------------------------------------- */}
            {/* 1. ATMOSPHERIC BACKGROUND */}
            {/* ---------------------------------------------------------- */}
            <div className="absolute inset-0 pointer-events-none">
                {/* BACKGROUND GRID PATTERN (Subtle Tech Feel) */}
                <div 
                    className="absolute inset-0 opacity-[0.03]" 
                    style={{ 
                        backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, 
                        backgroundSize: '40px 40px'
                    }} 
                />

                {/* AMBIENT GLOWS (Cyan/Blue Theme) */}
                <div className="absolute top-[10%] left-[10%] w-[300px] h-[300px] bg-cyan-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px]" />

                {/* Radial Fade / Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-[#0B0F19]" />
            </div>


            <div className="relative z-20 w-full max-w-7xl mx-auto">
                
                {/* HEADING (Right Aligned, New Style) */}
                <div className="mb-20 flex justify-end">
                    <div className="text-right">
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 mb-4 justify-end"
                        >
                            <span className="text-slate-400 uppercase tracking-widest text-xs font-semibold">Client Validation</span>
                            <div className="h-px w-8 bg-slate-600" />
                        </motion.div>
                        
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
                        >
                            <span className="text-transparent bg-clip-text bg-gradient-to-r text-white">Endorsements.</span> <br className="md:hidden t"/>
                           <span className="text-gray-300"> Trusted </span>
                        </motion.h2>
                        
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-slate-400 leading-relaxed max-w-xl mt-6 text-base ml-auto"
                        >
                            We partner with industry leaders to deliver results that speak for themselves. Read what our valued clients have to say about our commitment to excellence.
                        </motion.p>
                    </div>
                </div>


                {/* TESTIMONIALS GRID (Animated) */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {testimonials.map((item) => (
                        <TestimonialCard key={item.id} item={item} />
                    ))}
                </motion.div>

            </div>
        </section>
    );
}