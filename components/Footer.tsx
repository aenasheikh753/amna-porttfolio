export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.05] py-6 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="font-mono text-[0.72rem] text-slate-600 tracking-[0.1em]">
          © 2024 <span className="text-slate-400">Amna</span>. All rights reserved.
        </span>
        <span className="font-mono text-[0.72rem] text-slate-600 tracking-[0.1em]">
          Built with{" "}
          <span className="text-accent-rose">♥</span>{" "}
          using{" "}
          <span className="text-white">Next.js</span> +{" "}
          <span className="text-accent-blue">Tailwind CSS</span>
        </span>
        <a
          href="#home"
          className="font-mono text-[0.7rem] text-slate-600 tracking-[0.12em] hover:text-accent-blue transition-colors duration-300 hoverable"
        >
          ↑ Back to top
        </a>
      </div>
    </footer>
  );
}
