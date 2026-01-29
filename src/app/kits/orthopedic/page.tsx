"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Image from "next/image";

export default function OrthopedicKitPage() {
  const pdfUrl = "/images/pdf/ortho.pdf";

  return (
    <main className="bg-[#101011] min-h-screen text-white">
      <Header />

      <section className="pt-32 pb-16 relative">
        <div className="container mx-auto px-6 text-center z-10 relative">
          <span className="text-[#286ca0] text-sm font-semibold uppercase tracking-widest mb-4 block">
            Инструменты
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Ортопедический набор <br/> <span className="text-[#286ca0]">ZENEX Prosthetic Kit</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Комплексность, удобство и надежность. Все необходимое для протезирования в одном компактном кейсе.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            
            <div className="w-full md:w-1/2 relative">
               <div className="relative aspect-[4/3] bg-[#1a1a1a] rounded-2xl border border-gray-800 flex items-center justify-center overflow-hidden">
                  <Image src="/images/orto.png" fill className="object-contain p-8" alt="Ortho Kit" />
               </div>
            </div>

            <div className="w-full md:w-1/2">
               <h3 className="text-2xl font-bold mb-6 text-white">Состав набора</h3>
               <ul className="space-y-4 text-gray-400">
                 <li className="flex items-start">
                   <span className="w-2 h-2 mt-2 bg-[#286ca0] rounded-full mr-4 shrink-0" />
                   <div><strong className="text-white block">Динамометрический ключ (TW60B)</strong></div>
                 </li>
                 <li className="flex items-start">
                   <span className="w-2 h-2 mt-2 bg-[#286ca0] rounded-full mr-4 shrink-0" />
                   <div><strong className="text-white block">Шестигранные отвертки</strong></div>
                 </li>
                 <li className="flex items-start">
                   <span className="w-2 h-2 mt-2 bg-[#286ca0] rounded-full mr-4 shrink-0" />
                   <div><strong className="text-white block">Специальные отвертки</strong></div>
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
              Скачать каталог набора (PDF)
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}