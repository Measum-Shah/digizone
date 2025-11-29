"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Team", href: "#team" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 40);

      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );
      const offset = 120;

      sections.forEach((section, index) => {
        if (section) {
          const top = section.offsetTop - offset;
          const bottom = top + section.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            setActive(navLinks[index].name);
          }
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleNavClick(name, href) {
    setActive(name);
    setIsOpen(false);

    const section = document.querySelector(href);
    if (section) {
      const top = section.offsetTop - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out
        ${scrolled
          ? "bg-[#060b1e]/95 border-b border-sky-600/20 shadow-[0_4px_30px_rgba(30,144,255,0.15)] py-3"
          : "bg-transparent border-b border-transparent py-5"
        }
        backdrop-blur-xl
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8">

        {/* Logo Only (No Box, Bigger Size) */}
        <Link href="/" className="flex items-center gap-4 group">
          <Image
            src="/images/logo.jpeg"
            width={50}
            height={50}
            alt="DigiZone Logo"
            className="w-14 h-14 rounded-2xl object-contain transition-transform duration-300 group-hover:scale-105"
          />

          {/* Brand Text (Scaled Up) */}
          <div className="flex flex-col leading-none">
            <span className="font-extrabold text-[26px] text-white tracking-wide">
              DigiZone
            </span>
            <span className="text-[12px] uppercase font-semibold text-sky-400/90 pt-1 tracking-[0.18em]">
              Solutions.
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link, idx) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.name, link.href)}
              className={`
                relative px-4 py-2 text-sm font-medium uppercase tracking-widest
                transition-all duration-300 group rounded-lg
                ${active === link.name
                  ? "text-sky-100 bg-sky-500/20 shadow-inner shadow-sky-900/50"
                  : "text-slate-300/80 hover:text-sky-300 hover:bg-slate-800/50"
                }
              `}
            >
              {link.name}
              {active === link.name && (
                <span
                  className="
                    pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px]
                    bg-sky-400 rounded-t-full shadow-lg shadow-sky-500/80
                  "
                />
              )}
            </button>
          ))}

          {/* CTA */}
          <a
            href="#contact"
            className="
              ml-7 inline-flex items-center gap-3 rounded-full px-6 py-3
              text-[13px] font-bold uppercase tracking-[0.12em]
              bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600
              text-slate-50
              shadow-[0_12px_50px_rgba(56,189,248,0.7)]
              hover:shadow-[0_16px_65px_rgba(37,99,235,0.9)]
              transition-all duration-300 hover:-translate-y-1
            "
          >
            Let&apos;s Talk
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl text-slate-100 p-2 rounded-lg bg-sky-500/10 border border-sky-500/20 backdrop-blur-md transition-transform duration-200 active:scale-90"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${isOpen ? "max-h-[460px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div
          className="
            mt-3 mx-4 mb-4 rounded-xl border border-sky-600/30
            bg-[#05091a]/95 backdrop-blur-3xl px-6 py-6 space-y-3
            shadow-[0_24px_70px_rgba(15,23,42,0.99)]
          "
        >
          {navLinks.map((link, idx) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.name, link.href)}
              className={`
                w-full flex items-center justify-between px-3 py-2 rounded-lg
                text-sm font-semibold tracking-widest uppercase
                transition-all duration-300
                ${active === link.name
                  ? "text-sky-200 bg-sky-500/15 border border-sky-500/40"
                  : "text-slate-300/80 hover:text-sky-300 hover:bg-slate-800/50"
                }
              `}
              style={{ transitionDelay: `${idx * 20}ms` }}
            >
              <span>{link.name}</span>
              <svg className={`w-5 h-5 ${active === link.name ? 'text-sky-400' : 'text-slate-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}

          {/* Mobile CTA */}
          <div className="pt-4 border-t border-slate-700/60 mt-4">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="
                w-full inline-flex items-center justify-center gap-2
                rounded-xl px-4 py-3
                text-sm font-bold uppercase tracking-[0.12em]
                bg-gradient-to-r from-sky-500 to-blue-600
                text-slate-50
                shadow-[0_16px_45px_rgba(56,189,248,0.7)]
                active:scale-[0.98] transition-transform duration-200
              "
            >
              Start Project
            </a>
          </div>
        </div>
      </div>

    </nav>
  );
}
