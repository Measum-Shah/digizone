"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

const cn = (...inputs) => twMerge(clsx(inputs));

const SectionHeading = ({ title, subtitle, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true, amount: 0.1 }}
    className={cn("mb-12", className)}
  >
    <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-cyan-400 mb-2">
      {subtitle}
    </h2>
    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
      {title}
    </h1>
  </motion.div>
);

const InputField = ({
  label,
  id,
  type = "text",
  required = false,
  isTextarea = false,
  value,
  onChange,
}) => (
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
        className="w-full p-4 text-white bg-[#1a2033] border border-slate-700 rounded-lg shadow-inner focus:ring-2 focus:ring-cyan-500 transition-all placeholder:text-slate-500"
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
        className="w-full p-4 text-white bg-[#1a2033] border border-slate-700 rounded-lg shadow-inner focus:ring-2 focus:ring-cyan-500 transition-all placeholder:text-slate-500"
        placeholder={`Enter your ${label.toLowerCase()}`}
      />
    )}
  </div>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", message: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissionStatus("loading");
    resetForm();

    setTimeout(() => {
      console.log("Form submitted");
      if (formData.name && formData.email && formData.message) {
        setSubmissionStatus("success");
      } else {
        setSubmissionStatus("error");
      }
    }, 2000);
  };

  const statusMessage = () => {
    if (submissionStatus === "loading")
      return <span className="text-cyan-400">Sending message...</span>;
    if (submissionStatus === "success")
      return <span className="text-emerald-400">Sent successfully!</span>;
    if (submissionStatus === "error")
      return <span className="text-red-500">Please complete all fields</span>;
    return null;
  };

  return (
    <section id="contact" className="relative py-32 px-6 bg-[#0B0F19] overflow-hidden min-h-screen">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-sky-600/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-[#0B0F19]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19] via-transparent to-[#0B0F19]" />
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* LEFT */}
        <div className="lg:sticky lg:top-32">
          <SectionHeading title="Let's Build Something Revolutionary" subtitle="Get In Touch" className="text-left max-w-lg" />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-6 text-slate-400 text-lg max-w-lg leading-relaxed"
          >
            Describe your idea or reach out instantly on WhatsApp.
          </motion.p>

          <div className="mt-8 space-y-4 text-slate-300">
            {/* EMAIL */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 p-4 border border-slate-700 rounded-lg bg-[#10141e]"
            >
              <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>digizonesolutionsx@gmail.com</span>
            </motion.div>

            {/* WHATSAPP */}
            <motion.a
              href="https://wa.me/923191744839?text=Lets%20discuss%20your%20project"
              target="_blank"
              onClick={resetForm}
              className="flex items-center justify-center gap-3 px-6 py-3 rounded-xl border border-slate-700 bg-[#10141e] text-emerald-400 font-semibold hover:text-emerald-300 hover:border-emerald-500 transition-all shadow-lg"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163A11.946 11.946 0 010 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12a11.95 11.95 0 01-5.837-1.512L.057 24z" />
              </svg>
              Chat on WhatsApp
            </motion.a>
          </div>
        </div>

        {/* RIGHT → MAP */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl bg-[#10141e]/80 border border-slate-700 backdrop-blur-xl shadow-2xl shadow-black/40"
        >
          {/* MAP TITLE */}
          <div className="mb-6 flex items-center gap-3">
            <svg className="w-7 h-7 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2c-3.9 0-7 3.1-7 7 0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7z"></path>
              <circle cx="12" cy="9" r="2.5"></circle>
            </svg>
            <h3 className="text-2xl font-bold text-white tracking-tight">Visit Digizone Solutions</h3>
          </div>

          {/* MAP FRAME */}
          <motion.div
            whileHover={{ scale: 1.025 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl overflow-hidden border border-slate-600 shadow-lg hover:shadow-cyan-500/20 transition-all"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55267.40279104169!2d72.25628077983855!3d30.03075587081455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393ceb0034ee7695%3A0x1685f93f15fa39f!2sDoctors%20Hub!5e0!3m2!1sen!2s!4v1764522995148!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.15] hover:grayscale-0 transition-all"
            ></iframe>
          </motion.div>

          {/* MAP LABEL */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-5 text-slate-400 text-sm flex items-start gap-2 max-w-xl"
          >
            <span className="mt-[2px]"><span className="inline-block w-2 h-2 bg-cyan-400 rounded-full animate-pulse" /></span>
            <p>
             Doctors Hub, Digizone Solutions, Taj City, Vehari.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* FORM (Below both on mobile, right empty for spacing, or you can place under map) */}
      <div className="relative z-30 w-full max-w-3xl mx-auto mt-20 lg:col-span-2">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true, amount: 0.1 }}
          className="p-8 rounded-2xl bg-[#10141e]/75 border border-slate-700/50 backdrop-blur-xl shadow-xl shadow-black/30"
        >
          <SectionHeading title="Send Your Idea" subtitle="Contact Form" className="text-center" />

          <InputField label="Full Name" id="name" type="text" required value={formData.name} onChange={handleChange} />
          <InputField label="Email Address" id="email" type="email" required value={formData.email} onChange={handleChange} />
          <InputField label="Message" id="message" isTextarea required value={formData.message} onChange={handleChange} />

          <motion.button
            type="submit"
            onClick={resetForm}
            disabled={submissionStatus === "loading"}
            whileHover={{ scale: 1.02 }}
            className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-3 rounded-xl font-semibold transition-all w-full shadow-[0_0_18px_-4px_rgba(6,182,212,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submissionStatus === "loading" ? "Processing..." : "Send Message"}
          </motion.button>

          {submissionStatus && (
            <div className="mt-4 text-center text-sm font-medium">
              {statusMessage()}
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
