"use client";
import { useEffect, useRef } from "react";

const experiences = [
  {
    date: "2024 — Present",
    role: "Frontend Developer Employee",
    company: "Alright Tech",
    type: "Full-time",
    color: "accent-blue",
    borderColor: "border-sky-500/30",
    dotColor: "bg-accent-blue",
    desc: "Building responsive web apps with Next.js and Tailwind CSS. Collaborating with designers via Figma and managing code with GitHub. Reduced page load time by 40% via code-splitting and lazy loading. Contributing to a design system used across 3 products.",
    skills: ["Next.js", "Tailwind CSS", "React.js", "TypeScript", "Deployment"],
  },
  {
    date: "2024 — 2024",
    role: "Frontend Developer Intern",
    company: "Alright Tech",
    type: "Internship",
    color: "accent-violet",
    borderColor: "border-violet-500/30",
    dotColor: "bg-accent-violet",
    desc: "Translated Figma mockups into pixel-perfect React + Bootstrap interfaces. Contributed to 4+ client websites, introduced reusable component library that cut dev time by 30%. Managed version control via GitHub throughout.",
    skills: ["Bootstrap", "Figma", "GitHub", "JavaScript" , "React"],
  },
  // {
  //   date: "2022",
  //   role: "UI/UX Design Freelancer",
  //   company: "Self-employed",
  //   type: "Freelance",
  //   color: "accent-rose",
  //   borderColor: "border-rose-500/30",
  //   dotColor: "bg-accent-rose",
  //   desc: "Designed user interfaces for 5+ startups using Figma. Delivered complete design systems, wireframes, and interactive prototypes. Built foundational understanding of user-centered design and responsive layouts.",
  //   skills: ["Figma", "UI Design", "Prototyping", "Design Systems"],
  // },
];

export default function Experience() {
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
    <section
      id="experience"
      ref={sectionRef}
      className="relative z-10 py-28 px-6 md:px-16 bg-[#060b18]"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-emerald/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="reveal">
          <div className="flex items-center gap-3 font-mono text-xs text-accent-emerald tracking-[0.2em] uppercase mb-4">
            <span className="w-6 h-px bg-accent-emerald" />
            Career
          </div>
          <h2 className="font-display font-semibold text-[clamp(2.2rem,4vw,3.5rem)] leading-tight mb-14">
            Work{" "}
            <span className="font-display italic gradient-text-emerald">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[11px] md:left-[calc(160px+11px)] top-2 bottom-2 w-px bg-gradient-to-b from-accent-blue/30 via-accent-violet/30 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="reveal sm:grid sm:grid-cols-[160px_1fr] gap-8 items-start"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                {/* Date */}
                <div className="hidden sm:flex items-center justify-end gap-4">
                  <span className="font-mono text-[0.72rem] tracking-[0.1em] text-slate-500 text-right">
                    {exp.date}
                  </span>
                  {/* Dot */}
                  <div className={`w-[10px] h-[10px] rounded-full ${exp.dotColor} ring-2 ring-current/30 flex-shrink-0 shadow-[0_0_10px_currentColor]`} />
                </div>

                {/* Card */}
                <div className={`glow-card bg-[#080e1f] rounded-sm p-6 md:p-8 border-l-2 ${exp.borderColor} hoverable`}>
                  {/* Mobile date */}
                  <div className="sm:hidden font-mono text-[0.68rem] tracking-[0.12em] text-slate-500 uppercase mb-2">
                    {exp.date}
                  </div>

                  <div className="flex flex-wrap items-start gap-3 mb-3">
                    <div>
                      <h3 className="font-display text-xl md:text-2xl font-semibold">{exp.role}</h3>
                      <div className="font-mono text-[0.72rem] text-slate-400 tracking-widest mt-0.5">
                        {exp.company}
                        <span className="ml-2 px-2 py-0.5 rounded-sm bg-white/5 text-slate-500 text-[0.6rem]">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="font-body text-sm text-slate-400 leading-relaxed mb-4">
                    {exp.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-[0.62rem] tracking-[0.06em] px-2.5 py-1 rounded-sm border border-white/[0.07] text-slate-500"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education note */}
        <div className="reveal mt-12 p-6 border border-dashed border-white/[0.08] rounded-sm">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🎓</span>
            <div>
              <div className="font-body text-sm text-white font-medium">Bachelor's in Software Engineering</div>
              <div className="font-mono text-[0.68rem] text-slate-500 tracking-widest mt-0.5">PMAS Arid Agriculture University Rawalpindi • 2020 – 2024</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-violet/20 to-transparent" />
    </section>
  );
}
