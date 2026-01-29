"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Image from "next/image";

export default function SurgicalKitPage() {
  const pdfUrl = "/images/pdf/guide.pdf";

  return (
    <main className="bg-[#101011] min-h-screen text-white">
      <Header />

      <section className="pt-32 pb-16 relative">
        <div className="container mx-auto px-6 text-center z-10 relative">
          <span className="text-[#286ca0] text-sm font-semibold uppercase tracking-widest mb-4 block">
            Хирургия
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Навигационный набор <br/> <span className="text-[#286ca0]">Guide Kit</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Полный протокол для навигационной хирургии. Точность и удобная цветовая кодировка.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-6">
          
          <div className="flex flex-col-reverse md:flex-row gap-12 items-center mb-16">
            <div className="w-full md:w-1/2">
               <h3 className="text-2xl font-bold mb-6 text-white">Особенности системы</h3>
               <div className="grid grid-cols-1 gap-6">
                  <div className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800">
                     <h4 className="text-[#286ca0] font-bold mb-2">Цветовая кодировка</h4>
                     <p className="text-gray-400 text-sm mb-2">Для легкой идентификации диаметра:</p>
                     <div className="flex gap-3 text-sm font-mono">
                        <span className="px-2 py-1 bg-yellow-500/20 text-yellow-500 rounded">Yellow</span>
                        <span className="px-2 py-1 bg-green-500/20 text-green-500 rounded">Green</span>
                        <span className="px-2 py-1 bg-red-500/20 text-red-500 rounded">Red</span>
                     </div>
                  </div>
                  <div className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800">
                     <h4 className="text-white font-bold mb-2">Полный цикл сверления</h4>
                     <ul className="text-gray-400 text-sm space-y-2 list-disc list-inside">
                        <li>Мукотом</li>
                        <li>Выравнивающее сверло</li>
                        <li>Пилотное и Спиральное сверла</li>
                        <li>Кортикальное сверло</li>
                     </ul>
                  </div>
               </div>
            </div>

            <div className="w-full md:w-1/2 relative">
               <div className="relative aspect-[4/3] bg-[#1a1a1a] rounded-2xl border border-gray-800 flex items-center justify-center overflow-hidden">
                  <Image src="/images/guide.png" fill className="object-contain p-4" alt="Guide Kit" />
               </div>
            </div>
          </div>

          <div className="text-center">
            <a 
              href={pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-[#286ca0] text-white font-bold rounded hover:bg-[#1e5580] transition-colors"
            >
              Скачать протокол Guide Kit (PDF)
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}