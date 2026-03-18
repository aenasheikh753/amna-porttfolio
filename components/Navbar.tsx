"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["about", "skills", "projects", "experience", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 nav-blur ${
        scrolled
          ? "py-3 bg-[#04070f]/80 border-b border-white/[0.05]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="font-display text-2xl gradient-text font-semibold tracking-wide hoverable">
          amna.
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`font-mono text-xs tracking-[0.18em] uppercase transition-all duration-300 hoverable relative group ${
                  active === href.slice(1)
                    ? "text-accent-blue"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-accent-blue to-accent-violet transition-all duration-300 ${
                    active === href.slice(1) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Hire Me Button */}
        <a
          href="#contact"
          className="hidden md:block px-5 py-2 rounded-sm border border-accent-blue/30 text-accent-blue font-mono text-xs tracking-[0.12em] uppercase 
          hover:bg-accent-blue/10 hover:border-accent-blue/60 transition-all duration-300 hoverable"
        >
          Hire Me
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 w-7 hoverable"
          aria-label="menu"
        >
          <span className={`block h-px bg-slate-300 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-px bg-slate-300 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-px bg-slate-300 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-6 pb-6 pt-4 flex flex-col gap-4 border-t border-white/5 mt-3">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setMenuOpen(false)}
                className="font-mono text-xs tracking-[0.18em] uppercase text-slate-400 hover:text-accent-blue transition-colors duration-300"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
