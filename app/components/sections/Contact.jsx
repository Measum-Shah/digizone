"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

// --- MOCK UTILS & DATA (Self-Contained for Sandbox Runnability) ---

// Utility for merging classes
const cn = (...inputs) => twMerge(clsx(inputs));

// Mock Section Heading
const SectionHeading = ({ title, subtitle, className }) => (
    <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        viewport={{ once: true, amount: 0.1 }}
        className={cn("mb-12", className)}
    >
        <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-cyan-400 mb-2">
            {subtitle || "Let's Talk"}
        </h2>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {title || "Start Your Project Today"}
        </h1>
    </motion.div>
);

// Form Input Component
const InputField = ({ label, id, type = "text", required = false, isTextarea = false, value, onChange }) => (
    <div className="mb-6">
        <label htmlFor={id} className="block text-sm font-medium text-slate-300 mb-2">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        {isTextarea ? (
            <textarea
                id={id}
                name={id}
                rows="4"
                required={required}
                value={value}
                onChange={onChange}
                className="w-full p-4 text-white bg-[#1a2033] border border-slate-700 rounded-lg shadow-inner focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 placeholder:text-slate-500"
                placeholder={`Type your ${label.toLowerCase()} here...`}
            />
        ) : (
            <input
                type={type}
                id={id}
                name={id}
                required={required}
                value={value}
                onChange={onChange}
                className="w-full p-4 text-white bg-[#1a2033] border border-slate-700 rounded-lg shadow-inner focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 placeholder:text-slate-500"
                placeholder={`Enter your ${label.toLowerCase()}`}
            />
        )}
    </div>
);

// --- MAIN CONTACT COMPONENT ---
export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', 'loading'

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmissionStatus('loading');

        // --- Mock Submission Logic ---
        setTimeout(() => {
            // In a real app, you would send this data to an API endpoint
            console.log("Form Submitted:", formData); 
            
            if (formData.name && formData.email && formData.message) {
                setSubmissionStatus('success');
                setFormData({ name: "", email: "", message: "" }); // Clear form
            } else {
                setSubmissionStatus('error');
            }
        }, 2000);
    };

    const statusMessage = () => {
        switch (submissionStatus) {
            case 'loading':
                return <span className="text-cyan-400">Sending message...</span>;
            case 'success':
                return <span className="text-emerald-400">Success! We'll be in touch soon.</span>;
            case 'error':
                return <span className="text-red-500">Please fill out all required fields.</span>;
            default:
                return null;
        }
    };

    return (
        <section
            id="contact"
            className="relative py-32 px-6 bg-[#0B0F19] overflow-hidden min-h-screen selection:bg-cyan-500/30"
        >
            
            {/* ---------------------------------------------------------- */}
            {/* 1. ATMOSPHERIC BACKGROUND (Matching Hero Component) */}
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

                {/* 2. AMBIENT GLOWS (Re-added from Hero component) */}
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-sky-600/10 rounded-full blur-[120px] pointer-events-none" />
                
                {/* Radial Fade / Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-[#0B0F19]" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19] via-transparent to-[#0B0F19]" />
            </div>


            <div className="relative z-20 w-full max-w-7xl mx-auto">
                
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    
                    {/* --- LEFT COLUMN: HEADING & INFO --- */}
                    <div className="lg:sticky lg:top-32">
                        <SectionHeading 
                            title="Let's Build Something Revolutionary" 
                            subtitle="Get In Touch" 
                            className="text-left max-w-lg"
                        />
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 30 }} 
                            whileInView={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 0.8, delay: 0.2 }} 
                            viewport={{ once: true, amount: 0.1 }}
                            className="mt-6 text-slate-400 text-lg max-w-lg leading-relaxed"
                        >
                            Ready to discuss your next big idea? Fill out the form or reach out directly. We aim to respond to all inquiries within 24 hours.
                        </motion.p>

                        <div className="mt-8 space-y-4 text-slate-300 max-w-lg">
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }} 
                                whileInView={{ opacity: 1, x: 0 }} 
                                transition={{ duration: 0.5, delay: 0.4 }}
                                viewport={{ once: true, amount: 0.1 }}
                                className="flex items-center gap-4 p-4 border border-slate-700 rounded-lg bg-[#10141e]"
                            >
                                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                <span>hello@digizone.io</span>
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }} 
                                whileInView={{ opacity: 1, x: 0 }} 
                                transition={{ duration: 0.5, delay: 0.5 }}
                                viewport={{ once: true, amount: 0.1 }}
                                className="flex items-center gap-4 p-4 border border-slate-700 rounded-lg bg-[#10141e]"
                            >
                                <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                <span>Remote (Global availability)</span>
                            </motion.div>
                        </div>
                    </div>

                    {/* --- RIGHT COLUMN: CONTACT FORM --- */}
                    <motion.form 
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="p-8 lg:p-10 rounded-2xl bg-[#10141e]/70 border border-slate-700/50 backdrop-blur-xl shadow-2xl shadow-black/30 w-full"
                    >
                        <InputField 
                            label="Full Name" 
                            id="name" 
                            required 
                            value={formData.name} 
                            onChange={handleChange} 
                        />
                        <InputField 
                            label="Email Address" 
                            id="email" 
                            type="email" 
                            required 
                            value={formData.email} 
                            onChange={handleChange} 
                        />
                        <InputField 
                            label="Project Details" 
                            id="message" 
                            isTextarea 
                            required 
                            value={formData.message} 
                            onChange={handleChange} 
                        />
                        
                        <div className="flex flex-col gap-3 mt-8">
                            <button
                                type="submit"
                                disabled={submissionStatus === 'loading'}
                                className="w-full bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-[0_0_20px_-5px_rgba(6,182,212,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {submissionStatus === 'loading' ? 'Sending...' : 'Send Message'}
                            </button>
                            {submissionStatus && (
                                <div className="text-center text-sm font-medium h-4">
                                    {statusMessage()}
                                </div>
                            )}
                        </div>
                    </motion.form>
                </div>

            </div>
        </section>
    );
}