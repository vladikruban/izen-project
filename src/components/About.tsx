"use client";
import Link from "next/link";

export default function About() {
  return (
    <section className="bg-[#0a0a0a] py-20 lg:py-32" id="about">
      <div className="container mx-auto px-6">
        
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-[#286ca0] text-sm font-semibold uppercase tracking-widest mb-4 block">
            О Компании
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Глобальный поставщик комплексных решений для стоматологии
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Основанная экспертами с 20-летним опытом, компания объединяет передовые корейские технологии и научные исследования. 
            Мы создаем инновационные системы имплантации, гарантирующие предсказуемый результат и высочайшее качество лечения.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          <Link 
            href="/about/intro" 
            className="group p-8 border border-gray-800 rounded block hover:border-[#286ca0] hover:bg-[#286ca0]/5 transition-all duration-300"
          >
             <div className="flex justify-between items-start">
                <h3 className="text-white text-xl mb-2 font-bold group-hover:text-[#286ca0] transition-colors">
                  Введение
                </h3>
                <svg className="w-5 h-5 text-[#286ca0] opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
             </div>
             <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
               Узнайте больше о нашей миссии.
             </p>
          </Link>

          <Link 
            href="/about/manufacturing" 
            className="group p-8 border border-gray-800 rounded block hover:border-[#286ca0] hover:bg-[#286ca0]/5 transition-all duration-300"
          >
             <div className="flex justify-between items-start">
                <h3 className="text-white text-xl mb-2 font-bold group-hover:text-[#286ca0] transition-colors">
                  Производство
                </h3>
                <svg className="w-5 h-5 text-[#286ca0] opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
             </div>
             <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
               Высочайшие стандарты качества.
             </p>
          </Link>

          <Link 
            href="/about/business" 
            className="group p-8 border border-gray-800 rounded block hover:border-[#286ca0] hover:bg-[#286ca0]/5 transition-all duration-300"
          >
             <div className="flex justify-between items-start">
                <h3 className="text-white text-xl mb-2 font-bold group-hover:text-[#286ca0] transition-colors">
                  Бизнес
                </h3>
                <svg className="w-5 h-5 text-[#286ca0] opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
             </div>
             <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
               Глобальное присутствие.
             </p>
          </Link>

        </div>
      </div>
    </section>
  );
}