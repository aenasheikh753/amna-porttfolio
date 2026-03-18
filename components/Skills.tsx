"use client";
import { useEffect, useRef } from "react";

const skills = [
  { name: "React.js", icon: "⚛️", level: 0.93, color: "from-sky-400 to-blue-500" },
  { name: "Next.js", icon: "▲", level: 0.91, color: "from-white to-slate-400" },
  { name: "Tailwind CSS", icon: "🎨", level: 0.95, color: "from-cyan-400 to-teal-400" },
  { name: "Bootstrap", icon: "💜", level: 0.89, color: "from-violet-400 to-purple-500" },
  { name: "Figma", icon: "🖌️", level: 0.87, color: "from-pink-400 to-rose-400" },
  { name: "GitHub", icon: "🐙", level: 0.92, color: "from-slate-300 to-slate-500" },
  { name: "JavaScript", icon: "🟨", level: 0.90, color: "from-yellow-400 to-amber-400" },
  { name: "TypeScript", icon: "🔷", level: 0.80, color: "from-blue-400 to-indigo-500" },
  { name: "HTML / CSS", icon: "🌐", level: 0.97, color: "from-orange-400 to-red-400" },
  { name: "Redux", icon: "🔄", level: 0.82, color: "from-violet-400 to-purple-400" },
  { name: "Node.js", icon: "🟢", level: 0.72, color: "from-green-400 to-emerald-400" },
  { name: "Vercel / Netlify", icon: "🚀", level: 0.88, color: "from-slate-200 to-slate-400" },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible", "animated");
          }
        });
      },
      { threshold: 0.2 }
    );
    const els = sectionRef.current?.querySelectorAll(".reveal, .skill-card");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative z-10 py-28 px-6 md:px-16 bg-[#060b18]"
    >
      {/* Decorative line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-blue/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="reveal">
          <div className="flex items-center gap-3 font-mono text-xs text-accent-blue tracking-[0.2em] uppercase mb-4">
            <span className="w-6 h-px bg-accent-blue" />
            Tech Stack
          </div>
          <h2 className="font-display font-semibold text-[clamp(2.2rem,4vw,3.5rem)] leading-tight mb-4">
            Tools I{" "}
            <span className="font-display italic gradient-text">master</span>
          </h2>
          <p className="font-body text-slate-400 mb-14 max-w-lg">
            A curated set of technologies I use to build fast, beautiful, and accessible web experiences.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map(({ name, icon, level, color }) => (
            <div
              key={name}
              className="skill-card glow-card bg-[#080e1f] rounded-sm p-5 group transition-all duration-300 hoverable"
            >
              {/* Icon */}
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {icon}
              </div>

              {/* Name */}
              <div className="font-body text-sm text-slate-300 mb-3 group-hover:text-white transition-colors">
                {name}
              </div>

              {/* Bar */}
              <div className="w-full h-[2px] bg-white/[0.06] rounded-full overflow-hidden">
                <div
                  className={`skill-fill h-full rounded-full bg-gradient-to-r ${color}`}
                  style={{ "--scale": level } as React.CSSProperties}
                />
              </div>

              {/* Percentage */}
              <div className="font-mono text-[0.6rem] text-slate-600 mt-2 text-right">
                {Math.round(level * 100)}%
              </div>
            </div>
          ))}
        </div>

        {/* Bottom tag row */}
        <div className="reveal mt-14 flex flex-wrap gap-2">
          {["REST APIs", "Git", "Responsive Design", "Performance Optimization", "Component Libraries", "SSR / SSG", "Dark Mode", "Accessibility (a11y)"].map(tag => (
            <span
              key={tag}
              className="font-mono text-[0.7rem] tracking-[0.06em] px-3 py-1.5 rounded-sm
              border border-white/[0.07] text-slate-500 hover:border-accent-blue/30 hover:text-accent-blue transition-all duration-300 hoverable"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-violet/20 to-transparent" />
    </section>
  );
}
