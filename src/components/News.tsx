"use client";

import Image from "next/image";
import Link from "next/link";

export default function News() {
  const newsList = [
    {
      id: 1,
      date: "2025-10-02",
      title: "Подписание меморандума между IZEN IMPLANT и KAID",
      excerpt: "Соглашение направлено на укрепление позиций на внутреннем рынке и расширение международного экспорта.",
      image: "/images/content-3.png",
      href: "/news/mou-signing"
    },
    {
      id: 2,
      date: "2025-09-20",
      title: "Международная выставка IZEN APAC ROADSHOW",
      excerpt: "Презентация передовых цифровых решений и новых продуктов IZEN на крупнейшем мероприятии в Азиатско-Тихоокеанском регионе.",
      image: "/images/content-2.jpg",
      href: "/news/apac-roadshow"
    },
    {
      id: 3,
      date: "2025-08-11",
      title: "Мастер-класс IZEN IMPLANT совместно с OMDC и Cobra Dental",
      excerpt: "Практические курсы и культурная программа для врачей из Индонезии: от посещения производства до клинических семинаров.",
      image: "/images/content-1.jpg",
      href: "/news/masterclass" 
    }
  ];

  return (
    <section className="py-20 bg-white" id="news">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#286ca0] text-sm font-semibold uppercase tracking-widest mb-4 block">
            События и пресс-релизы
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Новости Компании
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsList.map((item) => (
            <Link 
              href={item.href} 
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-[#286ca0]">
                  {item.date}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#286ca0] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                
                <div className="flex items-center text-[#286ca0] font-medium text-sm">
                  Читать далее
                  <svg 
                    className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}