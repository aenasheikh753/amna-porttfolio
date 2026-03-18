"use client";
import { useEffect, useRef } from "react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    const els = sectionRef.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative z-10 py-28 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Image side */}
        <div className="reveal-left relative">
          {/* Frame */}
          <div className="relative w-full max-w-sm mx-auto md:mx-0">
            {/* Corner accents */}
            <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-accent-blue z-20" />
            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-accent-violet z-20" />

            {/* Card */}
            <div className="relative aspect-[3/4] bg-[#080e1f] border border-white/[0.07] rounded-sm overflow-hidden">
              {/* Grid texture */}
              <div className="absolute inset-0 bg-grid-pattern bg-grid-28 opacity-30" />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 via-transparent to-accent-violet/10" />
              {/* Avatar emoji */}
              <div className="absolute inset-0 flex items-center justify-center text-[8rem]">
                👩‍💻
              </div>
              {/* Bottom shimmer */}
              <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-[#04070f] to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-[#080e1f] border border-white/10 px-5 py-4 rounded-sm shadow-2xl animate-float">
              <div className="font-display text-3xl gradient-text font-semibold">2+</div>
              <div className="font-mono text-[0.68rem] text-slate-500 tracking-[0.1em] mt-0.5 uppercase">
                Years Exp.
              </div>
            </div>

            {/* Side badge */}
            <div className="absolute -top-5 -right-5 bg-[#080e1f] border border-accent-rose/20 px-4 py-3 rounded-sm shadow-xl">
              <div className="font-mono text-[0.65rem] text-accent-rose tracking-widest">
                ✓ Available
              </div>
            </div>
          </div>
        </div>

        {/* Text side */}
        <div className="reveal-right">
          <div className="flex items-center gap-3 font-mono text-xs text-accent-violet tracking-[0.2em] uppercase mb-4">
            <span className="w-6 h-px bg-accent-violet" />
            About Me
          </div>

          <h2 className="font-display font-semibold text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.1] mb-6">
            Turning ideas into{" "}
            <span className="font-display italic gradient-text-rose">digital reality</span>
          </h2>

          <div className="space-y-4 font-body text-slate-400 leading-relaxed text-[1.02rem]">
            <p>
              Hi! I&apos;m <span className="text-white font-medium">Amna</span>, a passionate Frontend Developer with 2 years of hands-on experience building modern, responsive web applications that people love to use.
            </p>
            <p>
              I specialize in{" "}
              <span className="text-accent-blue">Next.js</span>,{" "}
              <span className="text-accent-violet">React</span>, and{" "}
              <span className="text-accent-emerald">Tailwind CSS</span> — creating interfaces that are not just visually stunning, but fast, accessible, and maintainable.
            </p>
            <p>
              My design background in{" "}
              <span className="text-accent-rose">Figma</span> helps me bridge the gap between design and code seamlessly, while{" "}
              <span className="text-white">GitHub</span> keeps my workflow clean and collaborative.
            </p>
          </div>

          {/* Info grid */}
          <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/[0.06]">
            {[
              { label: "Location", value: "Islamabad, Pakistan" },
              { label: "Focus", value: "Frontend Dev" },
              { label: "Experience", value: "2 Years" },
              { label: "Status", value: "Open to Roles ✓" },
            ].map(({ label, value }) => (
              <div key={label}>
                <div className="font-mono text-[0.65rem] tracking-[0.15em] text-accent-violet uppercase mb-1">
                  {label}
                </div>
                <div className="font-body text-sm text-white">{value}</div>
              </div>
            ))}
          </div>

          {/* Social links */}
          <div className="flex flex-wrap gap-3 mt-8">
            {[
              { name: "GitHub", href: "https://github.com/aenasheikh753" },
              { name: "LinkedIn", href: "http://www.linkedin.com/in/amna-sheikhh12" },
              { name: "Portfolio", href: "https://amna-porttfolio.vercel.app/" },
              { name: "Email", href: "mailto:amnaaena12@gmail.com" },
            ].map(({ name, href }) => (
              <a
                key={name}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="hoverable px-3 py-2 font-mono text-[0.65rem] tracking-[0.1em] uppercase text-slate-500
                border border-white/[0.07] rounded-sm hover:border-accent-blue/40 hover:text-accent-blue transition-all duration-300"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
