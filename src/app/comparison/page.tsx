"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Image from "next/image";

export default function ComparisonPage() {
  const pdfUrl = "/images/pdf/multiplus.pdf";

  return (
    <main className="bg-[#101011] min-h-screen text-white">
      <Header />

      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <span className="text-[#286ca0] text-sm font-semibold uppercase tracking-widest mb-4 block">
            Технологии
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Сравнение систем <span className="text-[#286ca0]">MULTI</span> и <span className="text-gray-400">PLUS</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Две философии дизайна, единый стандарт качества. Узнайте, какая система лучше подходит для вашего клинического случая.
          </p>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#286ca0] opacity-10 blur-[150px] -z-10" />
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-6">
          
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* MULTI */}
            <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800 hover:border-[#286ca0] transition-colors group">
              <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-wider">MULTI</h2>
              
              <div className="relative h-80 bg-white/5 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                 <Image src="/images/multi.png" fill className="object-contain p-4" alt="MULTI Implant" />
              </div>

              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-12 h-12 bg-[#286ca0]/10 rounded-full flex items-center justify-center shrink-0 text-[#286ca0] font-bold">1</div>
                  <div>
                    <h3 className="font-bold text-lg text-white mb-1">Открытая резьба</h3>
                    <p className="text-gray-400 text-sm">Обеспечивает оптимизированное глубокое размещение.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-12 h-12 bg-[#286ca0]/10 rounded-full flex items-center justify-center shrink-0 text-[#286ca0] font-bold">2</div>
                  <div>
                    <h3 className="font-bold text-lg text-white mb-1">Прямой верх (1 мм)</h3>
                    <p className="text-gray-400 text-sm">Гарантирует надежную первичную стабильность.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* PLUS */}
            <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800 hover:border-white transition-colors group">
              <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-wider">PLUS</h2>

              <div className="relative h-80 bg-white/5 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                 <Image src="/images/plus.png" fill className="object-contain p-4" alt="PLUS Implant" />
              </div>

              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0 text-white font-bold">1</div>
                  <div>
                    <h3 className="font-bold text-lg text-white mb-1">Микро-канавка</h3>
                    <p className="text-gray-400 text-sm">Уменьшает потерю костной массы.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0 text-white font-bold">2</div>
                  <div>
                    <h3 className="font-bold text-lg text-white mb-1">Reverse Taper</h3>
                    <p className="text-gray-400 text-sm">Защищает краевую кость от компрессии.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <a 
              href={pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-[#286ca0] text-white font-bold rounded hover:bg-[#1e5580] transition-colors"
            >
              Скачать брошюру сравнения (PDF)
            </a>
          </div>

        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}