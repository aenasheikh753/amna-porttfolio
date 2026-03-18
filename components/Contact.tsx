"use client";
import { useEffect, useRef } from "react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.15 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="relative z-10 py-28 px-6 md:px-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-accent-violet/[0.04] to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid-28 opacity-20 pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="reveal">
          <div className="flex items-center justify-center gap-3 font-mono text-xs text-accent-violet tracking-[0.2em] uppercase mb-6">
            <span className="w-6 h-px bg-accent-violet" />
            Get In Touch
            <span className="w-6 h-px bg-accent-violet" />
          </div>

          <h2 className="font-display font-semibold text-[clamp(2.8rem,6vw,5rem)] leading-[1.1] mb-6">
            Let&apos;s build something{" "}
            <span className="font-display italic gradient-text-rose">amazing</span>{" "}
            together
          </h2>

          <p className="font-body text-slate-400 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
            I&apos;m currently open to new opportunities. Whether you have a project in mind or just want to connect — my inbox is always open!
          </p>
        </div>

        {/* Main CTA */}
        <div className="reveal mb-10">
          <a
            href="mailto:amna@example.com"
            className="inline-block btn-shimmer px-10 py-4 text-white font-body font-medium text-lg rounded-sm
            shadow-[0_0_40px_rgba(56,189,248,0.2)] hover:shadow-[0_0_60px_rgba(167,139,250,0.3)]
            transition-shadow duration-300 hoverable"
          >
            Say Hello ✉️
          </a>
        </div>

        {/* Social links grid */}
        <div className="reveal grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { icon: "🐙", label: "GitHub", handle: "@amna-dev", href: "#" },
            { icon: "💼", label: "LinkedIn", handle: "Amna Dev", href: "#" },
            { icon: "🎨", label: "Figma", handle: "@amna.ui", href: "#" },
            { icon: "🐦", label: "Twitter / X", handle: "@amna_codes", href: "#" },
          ].map(({ icon, label, handle, href }) => (
            <a
              key={label}
              href={href}
              className="glow-card bg-[#080e1f] p-5 rounded-sm text-center group hoverable"
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {icon}
              </div>
              <div className="font-body text-sm text-slate-300 group-hover:text-white transition-colors">
                {label}
              </div>
              <div className="font-mono text-[0.6rem] text-slate-600 mt-0.5 tracking-wide">
                {handle}
              </div>
            </a>
          ))}
        </div>

        {/* Email */}
        <div className="reveal mt-8">
          <a
            href="mailto:amna@example.com"
            className="font-mono text-sm text-slate-400 hover:text-accent-blue transition-colors duration-300 tracking-wide hoverable"
          >
            amna@example.com
          </a>
        </div>
      </div>
    </section>
  );
}
