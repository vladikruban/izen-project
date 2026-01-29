const fs = require('fs');
const path = require('path');

// Функция для создания файла с контентом
const createFile = (filePath, content) => {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filePath, content.trim());
  console.log(`✅ Created: ${filePath}`);
};

// --- ФАЙЛЫ ПРОЕКТА ---

const files = {
  // --- CONFIGS ---
  'package.json': `{
  "name": "nextjs-tailwind",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.475.0",
    "next": "15.1.7",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "tailwind-merge": "^3.3.0",
    "tailwindcss-animate": "^1.0.7"
  },
  "devDependencies": {
    "@types/node": "^20.17.50",
    "@types/react": "^18.3.22",
    "@types/react-dom": "^18.3.7",
    "eslint": "^9.27.0",
    "eslint-config-next": "15.1.7",
    "postcss": "^8.5.3",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.8.3"
  }
}`,

  'tsconfig.json': `{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./src/*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts", "src/**/*"],
  "exclude": ["node_modules"]
}`,

  'tailwind.config.ts': `import type { Config } from "tailwindcss";
export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
        // ... (остальные цвета из твоего конфига стандартные для shadcn, я их сократил для краткости, основные работать будут)
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;`,

  'postcss.config.mjs': `/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};
export default config;`,

  'next.config.js': `/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "source.unsplash.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "ext.same-assets.com" },
      { protocol: "https", hostname: "ugc.same-assets.com" },
    ],
  },
};
module.exports = nextConfig;`,

  // --- LIB ---
  'src/lib/utils.ts': `import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`,

  // --- APP STRUCTURE ---
  'src/app/globals.css': `@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --primary-blue: #286ca0;
  --dark-bg: #101011;
  --gray-text: #949494;
  --light-bg: #fafafa;
}

* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Montserrat', sans-serif; background-color: var(--dark-bg); color: white; overflow-x: hidden; }
html { scroll-behavior: smooth; }

/* Hero video background */
.hero-video-container { position: relative; width: 100%; height: 100vh; overflow: hidden; }
.hero-video { position: absolute; top: 50%; left: 50%; min-width: 100%; min-height: 100%; width: auto; height: auto; transform: translate(-50%, -50%); object-fit: cover; z-index: 0; }
.hero-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(to bottom, rgba(16, 16, 17, 0.4), rgba(16, 16, 17, 0.7)); z-index: 1; }
.hero-content { position: relative; z-index: 2; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; text-align: center; padding: 0 20px; }

/* Navigation styles */
.nav-link { position: relative; padding: 0.5rem 0; font-weight: 500; transition: color 0.3s ease; }
.nav-link::after { content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 2px; background-color: var(--primary-blue); transition: width 0.3s ease; }
.nav-link:hover::after { width: 100%; }
.nav-link:hover { color: var(--primary-blue); }

/* Side menu panel */
.side-menu { position: fixed; top: 0; right: -400px; width: 400px; height: 100vh; background: white; color: #333; transition: right 0.4s ease; z-index: 100; padding: 80px 40px; overflow-y: auto; }
.side-menu.open { right: 0; }
.side-menu-link { display: block; padding: 20px 0; font-size: 1.25rem; font-weight: 500; color: var(--primary-blue); border-bottom: 1px solid #eee; transition: all 0.3s ease; }
.side-menu-link:hover { padding-left: 10px; }

/* Product section */
.product-section { background: linear-gradient(135deg, #101011 0%, #1a1a1b 100%); min-height: 100vh; display: flex; align-items: center; }

/* News section */
.news-panel { position: fixed; bottom: 0; right: 20px; width: 350px; background: white; color: #333; border-radius: 8px 8px 0 0; transform: translateY(calc(100% - 50px)); transition: transform 0.4s ease; z-index: 50; box-shadow: 0 -4px 20px rgba(0,0,0,0.2); }
.news-panel.open { transform: translateY(0); }
.news-header { background: var(--primary-blue); color: white; padding: 15px 20px; cursor: pointer; border-radius: 8px 8px 0 0; display: flex; justify-content: space-between; align-items: center; }

/* Footer */
.footer { background: #0a0a0a; padding: 60px 0 30px; }
.footer-link { color: var(--gray-text); transition: color 0.3s ease; }
.footer-link:hover { color: white; }

/* Social icons */
.social-icon { width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; transition: transform 0.3s ease; }
.social-icon:hover { transform: scale(1.1); }

/* Scroll to top button */
.scroll-top { position: fixed; bottom: 100px; right: 20px; width: 50px; height: 50px; background: var(--primary-blue); border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; opacity: 0; transition: opacity 0.3s ease, transform 0.3s ease; z-index: 40; }
.scroll-top.visible { opacity: 1; }
.scroll-top:hover { transform: scale(1.1); }

/* Button styles */
.btn-primary { background: var(--primary-blue); color: white; padding: 12px 30px; font-weight: 600; transition: all 0.3s ease; display: inline-flex; align-items: center; gap: 10px; }
.btn-primary:hover { background: #1e5580; transform: translateX(5px); }

/* Responsive */
@media (max-width: 768px) {
  .side-menu { width: 100%; right: -100%; }
  .news-panel { width: calc(100% - 40px); left: 20px; }
}

/* Animations */
@keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
.animate-fade-in-up { animation: fadeInUp 0.8s ease forwards; }`,

  'src/app/ClientBody.tsx': `"use client";
import { useEffect } from "react";

export function ClientBody({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.body.className = "antialiased";
  }, []);
  return <body className="antialiased">{children}</body>;
}`,

  'src/app/layout.tsx': `import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
  title: "IZEN IMPLANT | Глобальный поставщик комплексных решений для стоматологии",
  description: "Основанная в 2016 году разработчиками и исследователями...",
  icons: { icon: "https://ext.same-assets.com/3537791040/1107733934.ico" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Merriweather:wght@300;400;700&display=swap" rel="stylesheet" />
      </head>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}`,

  'src/app/page.tsx': `import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Education from "@/components/Education";
import News from "@/components/News";
import Visualization from "@/components/Visualization";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NewsPanel from "@/components/NewsPanel";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Products />
      <Education />
      <Visualization />
      <News />
      <Contact />
      <Footer />
      <NewsPanel />
      <ScrollToTop />
    </main>
  );
}`,

  // --- COMPONENTS ---
  'src/components/About.tsx': `"use client";
import Link from "next/link";

export default function About() {
  return (
    <section className="bg-[#0a0a0a] py-20 lg:py-32" id="about">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-[#286ca0] text-sm font-semibold uppercase tracking-widest mb-4 block">О Компании</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Глобальный поставщик комплексных решений для стоматологии</h2>
          <p className="text-gray-400 text-lg leading-relaxed">Основанная в 2016 году разработчиками...</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-gray-800 rounded">
             <h3 className="text-white text-xl mb-2">Введение</h3>
             <p className="text-gray-400">Узнайте больше о нашей миссии.</p>
          </div>
          <div className="p-8 border border-gray-800 rounded">
             <h3 className="text-white text-xl mb-2">Производство</h3>
             <p className="text-gray-400">Высочайшие стандарты качества.</p>
          </div>
          <div className="p-8 border border-gray-800 rounded">
             <h3 className="text-white text-xl mb-2">Бизнес</h3>
             <p className="text-gray-400">Глобальное присутствие.</p>
          </div>
        </div>
      </div>
    </section>
  );
}`,

  'src/components/Contact.tsx': `"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.");
  };

  return (
    <section className="bg-[#101011] py-20 lg:py-32" id="contact">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 text-center">Контакты</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="text" placeholder="Имя" className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white" required onChange={(e) => setFormData({...formData, name: e.target.value})} />
            <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white" required onChange={(e) => setFormData({...formData, email: e.target.value})} />
            <textarea placeholder="Сообщение" rows={6} className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white" required onChange={(e) => setFormData({...formData, message: e.target.value})} />
            <button type="submit" className="btn-primary px-12 py-4 rounded-lg text-lg w-full">Отправить сообщение</button>
          </form>
        </div>
      </div>
    </section>
  );
}`,

  'src/components/Education.tsx': `"use client";
import Image from "next/image";
import Link from "next/link";

export default function Education() {
  const courses = [
    { id: 1, title: "Основы имплантологии", description: "Базовый курс", image: "https://ext.same-assets.com/3537791040/4185421862.jpeg" },
    { id: 2, title: "Хирургические протоколы", description: "Углубленный курс", image: "https://ext.same-assets.com/3537791040/264524728.jpeg" },
    { id: 3, title: "Продвинутые техники", description: "Мастер-класс", image: "https://ext.same-assets.com/3537791040/2383290178.png" },
  ];

  return (
    <section className="bg-gradient-to-b from-[#0a0a0a] to-[#101011] py-20" id="education">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Образовательные программы</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-800">
              <div className="relative h-48"><Image src={course.image} alt={course.title} fill className="object-cover" /></div>
              <div className="p-6"><h3 className="text-xl text-white mb-2">{course.title}</h3><p className="text-gray-400">{course.description}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,

  'src/components/Footer.tsx': `"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <Image src="https://ext.same-assets.com/3537791040/4079131857.png" alt="IZEN IMPLANT" width={150} height={50} className="mb-8" />
          <p className="text-gray-400 text-sm">Республика Корея, Пхёнтхэк-си</p>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between gap-6">
          <p className="text-gray-600 text-sm">© 2021 IZEN IMPLANT все права защищены</p>
        </div>
      </div>
    </footer>
  );
}`,

  'src/components/Header.tsx': `"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={\`fixed top-0 left-0 w-full z-50 transition-all duration-300 \${isScrolled ? "bg-[#101011]/95 backdrop-blur-sm py-3" : "bg-transparent py-5"}\`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/"><Image src="https://ext.same-assets.com/3537791040/3631543996.png" alt="Logo" width={120} height={45} className="h-10 w-auto" /></Link>
        <nav className="hidden lg:flex items-center gap-8">
          {["О Компании", "Продукция", "Обучение", "Новости", "Контакты"].map((item) => (
            <Link key={item} href={'#' + item} className="nav-link text-white text-sm uppercase">{item}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}`,

  'src/components/Hero.tsx': `"use client";
export default function Hero() {
  return (
    <section className="hero-video-container">
      <video autoPlay loop muted playsInline className="hero-video" poster="https://ext.same-assets.com/3537791040/4185421862.jpeg">
        <source src="https://ext.same-assets.com/3537791040/2334686913.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white text-center leading-tight animate-fade-in-up">
          Совершенство всегда<br />рождается из простого
        </h1>
      </div>
    </section>
  );
}`,

  'src/components/News.tsx': `"use client";
import Image from "next/image";
import Link from "next/link";

export default function News() {
  const newsItems = [
    { id: 1, title: "Подписание меморандума", date: "2025-10-02", image: "https://ext.same-assets.com/3537791040/4185421862.jpeg" },
    { id: 2, title: "Мастер-класс IZEN 2025", date: "2025-08-11", image: "https://ext.same-assets.com/3537791040/264524728.jpeg" },
    { id: 3, title: "IZEN APAC РОАДШОУ", date: "2025-08-08", image: "https://ext.same-assets.com/3537791040/2383290178.png" },
  ];

  return (
    <section className="bg-[#101011] py-20 lg:py-32" id="news">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8">Новости и объявления</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article key={item.id} className="group bg-gray-900/30 rounded-lg overflow-hidden border border-gray-800">
              <div className="relative h-48"><Image src={item.image} alt={item.title} fill className="object-cover" /></div>
              <div className="p-6">
                <time className="text-[#286ca0] text-sm">{item.date}</time>
                <h3 className="text-lg font-semibold text-white mt-2">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}`,

  'src/components/NewsPanel.tsx': `"use client";
import { useState } from "react";
import Image from "next/image";

export default function NewsPanel() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={\`news-panel \${isOpen ? "open" : ""}\`}>
      <button className="news-header w-full text-left" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="text-lg font-semibold">Новости IZEN IMPLANT</h3>
      </button>
      <div className="p-4">
        <p className="text-sm">Здесь последние новости...</p>
      </div>
    </div>
  );
}`,

  'src/components/Products.tsx': `"use client";
import Link from "next/link";

export default function Products() {
  return (
    <section className="product-section py-20" id="products">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">ИМПЛАНТАТЫ</h2>
            <p className="text-gray-400 text-lg mb-8">ZENEX MULTI и ZENEX PLUS.</p>
            <Link href="#implants" className="btn-primary inline-flex">Подробнее</Link>
          </div>
          <div className="order-1 lg:order-2 relative">
             <div className="relative aspect-square max-w-lg mx-auto bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center text-gray-500">
               Видео продукта
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}`,

  'src/components/ScrollToTop.tsx': `"use client";
import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const t = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", t);
    return () => window.removeEventListener("scroll", t);
  }, []);
  return (
    <button onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className={\`scroll-top \${isVisible ? "visible" : ""}\`}>
      ↑
    </button>
  );
}`,

  'src/components/Visualization.tsx': `"use client";
import Link from "next/link";

export default function Visualization() {
  return (
    <section className="bg-gradient-to-b from-[#101011] to-[#0a0a0a] py-20 lg:py-32" id="3d">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square bg-gray-900 rounded-lg flex items-center justify-center border border-gray-800">
            <span className="text-gray-500">3D Модель</span>
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">3D Визуализация</h2>
            <p className="text-gray-400 mb-6">Вращайте, масштабируйте и исследуйте каждый элемент.</p>
            <Link href="#3d-viewer" className="btn-primary inline-flex rounded-lg">Открыть 3D просмотр</Link>
          </div>
        </div>
      </div>
    </section>
  );
}`
};

// --- ЗАПУСК СОЗДАНИЯ ---

console.log('🚀 Starting project setup...');

Object.entries(files).forEach(([fileName, content]) => {
  createFile(path.join(__dirname, fileName), content);
});

console.log('\\n✅ Project structure created successfully!');
console.log('👉 Next steps:');
console.log('1. Run: npm install');
console.log('2. Run: npm run dev');