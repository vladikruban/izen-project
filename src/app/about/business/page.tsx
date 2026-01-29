"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Image from "next/image";

export default function BusinessPage() {
  const stats = [
    { number: "50+", label: "Стран экспорта", desc: "Продукция IZEN представлена на всех континентах." },
    { number: "20+", label: "Лет опыта", desc: "Два десятилетия инноваций в дентальной имплантологии." },
    { number: "100%", label: "Сертификация", desc: "Соответствие стандартам FDA, CE, ISO 13485." },
    { number: "TOP", label: "Качество", desc: "Признание ведущими клиницистами мира." },
  ];

  return (
    <main className="bg-[#101011] min-h-screen text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <span className="text-[#286ca0] text-sm font-semibold uppercase tracking-widest mb-4 block">
            Глобальное присутствие
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Доверие профессионалов <br/> по всему миру
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            IZEN (ZENEX) — это не просто корейский производитель, а глобальный партнер для стоматологов. 
            Мы строим мосты между передовыми технологиями и клинической практикой в более чем 50 странах.
          </p>
        </div>
        
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#286ca0]/10 to-transparent -z-10 blur-3xl" />
      </section>

      {/* Статистика */}
      <section className="py-12 border-y border-gray-800 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-4">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-[#286ca0] font-bold text-sm uppercase tracking-wider mb-2">{stat.label}</div>
                <p className="text-gray-500 text-xs md:text-sm">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Блок доверия и сертификатов */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            <div className="w-full md:w-1/2">
               <h2 className="text-3xl font-bold mb-6 text-gray-900">Международные стандарты безопасности</h2>
               <p className="text-gray-600 mb-6 text-lg">
                 Наша продукция проходит строжайший контроль качества и сертифицирована ведущими мировыми регуляторами.
                 Мы гарантируем безопасность, стерильность и предсказуемость каждого установленного имплантата.
               </p>
               <ul className="space-y-4 font-medium text-gray-800">
                 <li className="flex items-center gap-3">
                   <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">✓</span>
                   US FDA (Food and Drug Administration)
                 </li>
                 <li className="flex items-center gap-3">
                   <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">✓</span>
                   CE Certification (Europe)
                 </li>
                 <li className="flex items-center gap-3">
                   <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">✓</span>
                   ISO 13485:2016 (Medical Devices)
                 </li>
                 <li className="flex items-center gap-3">
                   <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center">✓</span>
                   KFDA (Korea Food & Drug Administration)
                 </li>
                 <li className="flex items-center gap-3">
                   <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center">✓</span>
                   Clean Implant Foundation (Trusted Quality)
                 </li>
               </ul>
            </div>
            
            <div className="w-full md:w-1/2 flex justify-center">
               <Image 
                 src="/images/clean.jpg"
                 alt="Clean Implant Certificate" 
                 width={600} 
                 height={600}
                 unoptimized={true}
                 priority={true}
                 className="object-contain rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500" 
               />
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}