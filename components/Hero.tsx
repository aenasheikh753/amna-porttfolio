"use client";
import { useEffect, useRef, useState } from "react";

const roles = [
  "Next.js Developer",
  "React Engineer",
  "UI/UX Designer",
  "Tailwind Expert",
  "Figma Craftsperson",
];

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Typing effect
  useEffect(() => {
    const current = roles[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && typed.length < current.length) {
      timeout = setTimeout(() => setTyped(current.slice(0, typed.length + 1)), 110);
    } else if (!deleting && typed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && typed.length > 0) {
      timeout = setTimeout(() => setTyped(current.slice(0, typed.length - 1)), 60);
    } else if (deleting && typed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [typed, deleting, roleIdx]);

  // Stars canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let animId: number;
    const stars: { x: number; y: number; r: number; a: number; speed: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    const init = () => {
      stars.length = 0;
      for (let i = 0; i < 200; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.2 + 0.2,
          a: Math.random(),
          speed: Math.random() * 0.004 + 0.001,
        });
      }
    };
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s) => {
        s.a += s.speed;
        if (s.a > 1) s.a = 0;
        ctx.globalAlpha = s.a * 0.75;
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    resize();
    init();
    draw();
    window.addEventListener("resize", () => { resize(); init(); });
    return () => { cancelAnimationFrame(animId); };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 md:px-16 overflow-hidden"
    >
      {/* Stars */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Mesh orbs */}
      <div className="orb w-[500px] h-[500px] bg-accent-blue/[0.05] -top-40 -right-40" style={{ animationDelay: "0s" }} />
      <div className="orb w-[400px] h-[400px] bg-accent-violet/[0.06] bottom-0 -left-32" style={{ animationDelay: "-4s" }} />
      <div className="orb w-[300px] h-[300px] bg-accent-rose/[0.04] top-1/3 right-1/4" style={{ animationDelay: "-7s" }} />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid-28 opacity-40 z-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full pt-24">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div
            className="flex items-center gap-3 font-mono text-sm text-accent-blue tracking-[0.2em] mb-8 opacity-0 animate-[fadeUp_0.8s_0.3s_ease_forwards]"
          >
            <span className="w-8 h-px bg-accent-blue" />
            Hello, World! 👋
          </div>

          {/* Heading */}
          <h1 className="font-display font-semibold leading-[1.05] mb-8 opacity-0 animate-[fadeUp_0.8s_0.5s_ease_forwards]">
            <span className="block text-[clamp(1rem,2vw,1.4rem)] font-body font-light text-slate-400 mb-2 tracking-widest uppercase font-mono">
              I&apos;m
            </span>
            <span className="block text-[clamp(3.5rem,8vw,6.5rem)] gradient-text">
              Amna.
            </span>
            <span className="block text-[clamp(2rem,5vw,4rem)] text-white/90 mt-1">
              <span className="italic text-accent-rose">{typed}</span>
              <span className="typing-cursor" />
            </span>
          </h1>

          {/* Description */}
          <p className="font-body text-lg text-slate-400 leading-relaxed max-w-xl mb-10 opacity-0 animate-[fadeUp_0.8s_0.7s_ease_forwards]">
            Crafting{" "}
            <span className="text-white">pixel-perfect</span> digital experiences with{" "}
            <span className="text-accent-blue">Next.js</span>,{" "}
            <span className="text-accent-violet">React</span>, and{" "}
            <span className="text-accent-emerald">Tailwind CSS</span> — where design intuition meets clean, scalable code.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 opacity-0 animate-[fadeUp_0.8s_0.9s_ease_forwards]">
            <a
              href="#projects"
              className="btn-shimmer relative px-7 py-3.5 rounded-sm text-white font-body font-medium tracking-wide hoverable
              shadow-[0_0_30px_rgba(56,189,248,0.25)] hover:shadow-[0_0_50px_rgba(56,189,248,0.4)]
              transition-shadow duration-300 text-sm"
            >
              View My Work →
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-sm border border-white/10 text-white font-body font-medium tracking-wide hoverable
              hover:border-accent-blue/50 hover:text-accent-blue transition-all duration-300 text-sm backdrop-blur-sm"
            >
              Let&apos;s Talk
            </a>
            <a
              href="#"
              className="px-7 py-3.5 rounded-sm border border-white/10 text-slate-400 font-body font-medium tracking-wide hoverable
              hover:border-accent-violet/50 hover:text-accent-violet transition-all duration-300 text-sm backdrop-blur-sm"
            >
              ↓ Resume
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-12 mt-16 opacity-0 animate-[fadeUp_0.8s_1.1s_ease_forwards]">
            {[
              { num: "2+", label: "Years Experience" },
              { num: "15+", label: "Projects Shipped" },
              { num: "8+", label: "Happy Clients" },
            ].map(({ num, label }) => (
              <div key={label}>
                <div className="font-display text-3xl md:text-4xl gradient-text font-semibold">{num}</div>
                <div className="font-mono text-xs text-slate-500 tracking-[0.12em] mt-1 uppercase">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-[fadeIn_1s_1.5s_ease_forwards]">
          <div className="w-px h-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-accent-blue animate-[scrollDown_2s_ease-in-out_infinite]" />
          </div>
          <span className="font-mono text-[0.6rem] text-slate-600 tracking-[0.2em] uppercase">scroll</span>
        </div>
      </div>
    </section>
  );
}
