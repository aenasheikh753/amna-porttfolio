# Amna — Frontend Developer Portfolio

A stunning, production-ready portfolio built with **Next.js 14** and **Tailwind CSS**.

## ✨ Features

- 🌌 Animated star canvas background
- 🖱️ Custom magnetic cursor with hover states
- ✍️ Typing animation cycling through roles
- 🎞️ Smooth scroll-reveal animations on all sections
- 🌈 Gradient shimmer buttons and glow effects
- 📱 Fully responsive (mobile → desktop)
- ⚡ Optimized with Next.js App Router + Google Fonts
- 🎨 Dark space-themed aesthetic with aurora accents

## 📁 Project Structure

```
amna-portfolio/
├── app/
│   ├── globals.css       # Tailwind + custom CSS animations
│   ├── layout.tsx        # Root layout + Google Fonts
│   └── page.tsx          # Main page
├── components/
│   ├── CustomCursor.tsx  # Magnetic cursor
│   ├── Navbar.tsx        # Sticky nav with active states
│   ├── Hero.tsx          # Hero + typing effect + stars
│   ├── About.tsx         # About section
│   ├── Skills.tsx        # Skills with animated bars
│   ├── Projects.tsx      # Projects grid
│   ├── Experience.tsx    # Timeline experience
│   ├── Contact.tsx       # Contact section
│   └── Footer.tsx        # Footer
├── tailwind.config.ts    # Custom colors, fonts, animations
└── package.json
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open in browser
http://localhost:3000
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Fonts**: Cormorant Garamond + DM Sans + JetBrains Mono
- **Animations**: CSS Keyframes + Intersection Observer API
- **Deployment**: Vercel (recommended)

## 🎨 Customization

1. Update personal info in each component
2. Replace project data in `components/Projects.tsx`
3. Update experience in `components/Experience.tsx`
4. Change colors in `tailwind.config.ts`
5. Replace email in `components/Contact.tsx`

## 📦 Deploy to Vercel

```bash
npm install -g vercel
vercel
```
