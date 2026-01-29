"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Link from "next/link";
import Image from "next/image";

export default function IntroPage() {
  return (
    <main className="bg-[#101011] min-h-screen text-white selection:bg-[#286ca0] selection:text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="text-[#286ca0] text-sm font-bold uppercase tracking-[0.2em] mb-4 block animate-fade-in">
            О Компании
          </span>
          <h1 className="text-4xl md:text-6xl font-light mb-6 leading-tight">
            Совершенство рождается <br />
            <span className="font-bold">из простого</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Мы верим, что лучшие технологии не должны быть сложными. 
            IZEN создает интуитивные решения, которые позволяют хирургам сосредоточиться на главном — здоровье пациента.
          </p>
        </div>
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#286ca0] opacity-10 blur-[150px] -z-10" />
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Image */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-gray-800">
                 <Image 
                   src="/images/izen-team.jpg" 
                   alt="IZEN Team" 
                   fill
                   className="object-cover hover:scale-105 transition-transform duration-700"
                 />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#286ca0]" />
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Наша Миссия</h2>
              <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
                <p>
                  Компания <strong className="text-white">IZEN Implant Co., Ltd.</strong> была основана с одной целью: сделать передовую имплантологию доступной и предсказуемой.
                </p>
                <p>
                  Находясь в Южной Корее, сердце мировых инноваций, мы объединили многолетний клинический опыт с высокоточной инженерией. Наш подход "Zero Failure" (Ноль ошибок) означает, что каждая деталь системы разработана для минимизации рисков.
                </p>
                <p>
                  Мы не просто производим имплантаты — мы создаем экосистему поддержки, обучения и сервиса, чтобы каждый врач чувствовал уверенность в каждом кейсе.
                </p>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-800 flex items-center gap-4">
                <div className="flex flex-col">
                   <span className="text-white font-bold text-xl">Jusuk Kim</span>
                   <span className="text-[#286ca0] text-sm uppercase tracking-wide">CEO & Founder</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#101011]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Наши Ценности</h2>
            <div className="w-16 h-1 bg-[#286ca0] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Innovation */}
            <div className="p-8 bg-[#151516] rounded-xl border border-gray-800 hover:border-[#286ca0] transition-colors group">
              <div className="w-14 h-14 bg-[#286ca0]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#286ca0] transition-colors">
                <svg className="w-7 h-7 text-[#286ca0] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Инновации (R&D)</h3>
              <p className="text-gray-500 leading-relaxed">
                Собственный исследовательский центр непрерывно работает над улучшением дизайна резьбы и покрытия SLA для ускоренной остеоинтеграции.
              </p>
            </div>

            {/* Simplicity */}
            <div className="p-8 bg-[#151516] rounded-xl border border-gray-800 hover:border-[#286ca0] transition-colors group">
              <div className="w-14 h-14 bg-[#286ca0]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#286ca0] transition-colors">
                <svg className="w-7 h-7 text-[#286ca0] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Простота</h3>
              <p className="text-gray-500 leading-relaxed">
                "Simple is Best". Мы убрали всё лишнее из хирургического протокола. Меньше инструментов — меньше ошибок, быстрее результат.
              </p>
            </div>

            {/* Global Reach */}
            <div className="p-8 bg-[#151516] rounded-xl border border-gray-800 hover:border-[#286ca0] transition-colors group">
              <div className="w-14 h-14 bg-[#286ca0]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#286ca0] transition-colors">
                <svg className="w-7 h-7 text-[#286ca0] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Глобальность</h3>
              <p className="text-gray-500 leading-relaxed">
                Мы говорим на одном языке со стоматологами в 50+ странах мира, обеспечивая единый стандарт качества от Сеула до Москвы.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-gray-800 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light mb-8">Готовы узнать больше о продукции?</h2>
          <div className="flex justify-center gap-6">
            <Link href="/products" className="px-8 py-3 bg-[#286ca0] text-white font-medium rounded hover:bg-[#1e5580] transition-colors">
              Перейти в каталог
            </Link>
            <Link href="/about/business" className="px-8 py-3 border border-gray-600 text-gray-300 font-medium rounded hover:border-white hover:text-white transition-colors">
              География продаж
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}