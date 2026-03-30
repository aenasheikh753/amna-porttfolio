"use client";
import { useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    title: "Scoova",
    subtitle: "School Marketplace & Ed-Tech Platform",
    desc: "A scalable educational ecosystem with a modular architecture. Developed the core frontend using Next.js 16, featuring a complex School Comparison Engine and dynamic survey modules with high performance and SEO optimization.",
    emoji: "🏫",
    tags: ["Next.js 16", "Tailwind CSS v4", "TypeScript", "App Router"],
    tagColors: ["blue", "cyan", "violet", "emerald"],
    gradient: "from-sky-900/40 via-blue-900/20 to-transparent",
    glow: "rgba(56,189,248,0.08)",
    featured: true,
    github: "#",
    live: "https://scoova-website-latest.vercel.app", // Aapka live link yahan aayega
  },
  {
    id: 2,
    title: "Street 10 Mazad",
    subtitle: "Car Auction & E-commerce Marketplace",
    desc: "A high-traffic marketplace specializing in real-time car auctions. Built interactive layouts for live bidding and secure KYC verification modules using Next.js 16 and Radix UI for accessibility.",
    emoji: "🏎️",
    tags: ["Next.js 16", "TypeScript", "Tailwind CSS", "Radix UI"],
    tagColors: ["rose", "blue", "cyan", "violet"],
    gradient: "from-rose-900/40 via-pink-900/20 to-transparent",
    glow: "rgba(244,114,182,0.08)",
    featured: false,
    github: "#",
    live: "https://street10.vercel.app/",
  },
  {
    id: 3,
    title: "Tabeer",
    subtitle: "Career Guidance & Mentorship",
    desc: "An educational management platform featuring multi-role dashboards for Admins, Mentors, and Aspirants. Engineered specialized modules for Scholarship Tracking and Direct Admission engines.",
    emoji: "🎓",
    tags: ["React 19", "Vite", "Tailwind CSS 4", "Framer Motion"],
    tagColors: ["violet", "cyan", "rose", "emerald"],
    gradient: "from-violet-900/40 via-purple-900/20 to-transparent",
    glow: "rgba(167,139,250,0.08)",
    featured: false,
    github: "#",
    live: "https://tabeeer-fr.vercel.app/",
  },
  {
    id: 4,
    title: "Potolo",
    subtitle: "Multi-Service Digital Ecosystem",
    desc: "A unified platform integrating Super Market, Restaurants, and Grocery services. Developed a modular UI using Bootstrap to ensure brand consistency and seamless navigation across the entire ecosystem.",
    emoji: "🛒",
    tags: ["Bootstrap", "HTML5", "CSS3", "JavaScript", "Laravel"],
    tagColors: ["emerald", "amber", "rose", "blue", "violet"],
    gradient: "from-emerald-900/40 via-teal-900/20 to-transparent",
    glow: "rgba(52,211,153,0.08)",
    featured: false,
    github: "#",
    live: "https://potolo.com/",
  },
  {
    id: 5,
    title: "Barwaaqo Agri Group",
    subtitle: "Agricultural Solutions Platform",
    desc: "A specialized digital platform designed to streamline agricultural operations and enhance the online presence of the Agri-business sector. Developed a custom, high-performance interface to facilitate seamless communication between stakeholders, while ensuring a secure and responsive user experience for large-scale organizational data and resource management.",
    emoji: "📊",
    tags: ["Next.js", "TypeScript", "Tailwind", "Github"],
    tagColors: ["blue", "blue", "violet", "cyan", "rose"],
    gradient: "from-indigo-900/40 via-blue-900/20 to-transparent",
    glow: "rgba(99,102,241,0.08)",
    featured: false,
    github: "#",
    live: "https://barwaqoagri.vercel.app/",
    // figma: "#",
  },
];

const tagColorMap: Record<string, string> = {
  blue: "bg-sky-500/10 text-sky-300 border-sky-500/20",
  cyan: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
  violet: "bg-violet-500/10 text-violet-300 border-violet-500/20",
  emerald: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  rose: "bg-rose-500/10 text-rose-300 border-rose-500/20",
  amber: "bg-amber-500/10 text-amber-300 border-amber-500/20",
};

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" ref={sectionRef} className="relative z-10 py-28 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="reveal">
          <div className="flex items-center gap-3 font-mono text-xs text-accent-rose tracking-[0.2em] uppercase mb-4">
            <span className="w-6 h-px bg-accent-rose" />
            Portfolio
          </div>
          <h2 className="font-display font-semibold text-[clamp(2.2rem,4vw,3.5rem)] leading-tight mb-14">
            Featured{" "}
            <span className="font-display italic gradient-text-rose">Projects</span>
          </h2>
        </div>

        {/* Featured project */}
        <div className="reveal mb-5">
          <div className={`glow-card bg-[#080e1f] rounded-sm overflow-hidden group hoverable`}
            style={{ boxShadow: `0 0 60px ${featured.glow}` }}>
            <div className="grid md:grid-cols-2 gap-0">
              {/* Visual side */}
              <div className={`relative h-56 md:h-auto bg-gradient-to-br ${featured.gradient} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-grid-pattern bg-grid-28 opacity-20" />
                <div className="absolute inset-0 bg-gradient-radial from-accent-blue/5 to-transparent" />
                <span className="text-8xl group-hover:scale-110 transition-transform duration-500 relative z-10">{featured.emoji}</span>
                {/* Featured label */}
                <div className="absolute top-4 left-4 font-mono text-[0.6rem] tracking-[0.15em] uppercase text-accent-blue
                  border border-accent-blue/30 px-2 py-1 rounded-sm bg-accent-blue/5">
                  ★ Featured
                </div>
              </div>
              {/* Text side */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {featured.tags.map((tag, i) => (
                    <span key={tag} className={`font-mono text-[0.65rem] px-2.5 py-1 rounded-sm border tracking-[0.06em] ${tagColorMap[featured.tagColors[i] || "blue"]}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-semibold mb-1">{featured.title}</h3>
                <div className="font-mono text-xs text-slate-500 tracking-widest uppercase mb-4">{featured.subtitle}</div>
                <p className="font-body text-sm text-slate-400 leading-relaxed mb-6">{featured.desc}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  <a href={featured.live} className="font-mono text-xs text-accent-blue tracking-[0.1em] hover:opacity-70 transition-opacity hoverable">↗ Live Demo</a>
                  <a href={featured.github} className="font-mono text-xs text-slate-400 tracking-[0.1em] hover:text-white transition-colors hoverable">⌥ GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rest of projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
          {rest.map((p, i) => (
            <div
              key={p.id}
              className="reveal glow-card bg-[#080e1f] rounded-sm overflow-hidden group hoverable"
              style={{ transitionDelay: `${i * 0.1}s`, boxShadow: `0 0 40px ${p.glow}` }}
            >
              {/* Visual */}
              <div className={`relative h-44 bg-gradient-to-br ${p.gradient} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-grid-pattern bg-grid-28 opacity-20" />
                <span className="text-6xl group-hover:scale-110 transition-transform duration-500 relative z-10">{p.emoji}</span>
              </div>
              {/* Body */}
              <div className="p-6">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.tags.map((tag, i) => (
                    <span key={tag} className={`font-mono text-[0.6rem] px-2 py-0.5 rounded-sm border tracking-[0.05em] ${tagColorMap[p.tagColors[i] || "blue"]}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-2xl font-semibold mb-0.5">{p.title}</h3>
                <div className="font-mono text-[0.65rem] text-slate-600 tracking-widest uppercase mb-3">{p.subtitle}</div>
                <p className="font-body text-[0.85rem] text-slate-400 leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-2 pt-3 border-t border-white/[0.04]">
                  <a href={p.live} className="font-mono text-[0.72rem] text-accent-blue tracking-[0.1em] hover:opacity-70 transition-opacity hoverable">↗ Live</a>
                  <a href={p.github} className="font-mono text-[0.72rem] text-slate-400 tracking-[0.1em] hover:text-white transition-colors hoverable">⌥ GitHub</a>
                  {p.figma && <a href={p.figma} className="font-mono text-[0.72rem] text-accent-rose tracking-[0.1em] hover:opacity-70 transition-opacity hoverable">🎨 Figma</a>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="reveal mt-10 text-center">
          <a href="https://github.com/aenasheikh753" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-sm text-slate-400 border border-white/[0.07] px-6 py-3 rounded-sm
            hover:border-accent-blue/40 hover:text-accent-blue transition-all duration-300 hoverable">
            🐙 View all projects on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
