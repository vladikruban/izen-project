"use client";

import Image from "next/image";
import Link from "next/link";

export default function Education() {
  const resources = [
    {
      id: 1,
      title: "Сравнение MULTI vs PLUS",
      description: "Подробный анализ двух флагманских систем. Узнайте, какой дизайн резьбы и шейки лучше подходит для ваших клинических задач.",
      link: "/comparison",
      image: "/images/multivsplus.png", 
    },
    {
      id: 2,
      title: "Хирургический набор",
      description: "Навигационный набор Guide Kit. Полный протокол сверления, цветовая кодировка и инструменты для предсказуемой хирургии.",
      link: "/kits/surgical",
      image: "/images/guide.png",
    },
    {
      id: 3,
      title: "Ортопедический набор",
      description: "Комплексный набор для протезирования. Динамометрические ключи, отвертки и инструменты для всех видов абатментов.",
      link: "/kits/orthopedic",
      image: "/images/orto.png",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#0a0a0a] to-[#101011] py-20 lg:py-32" id="resources">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="text-[#286ca0] text-sm font-semibold uppercase tracking-widest mb-4 block">
            Поддержка
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Полезные материалы и Инструменты
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Вся необходимая информация о протоколах, инструментарии и технических особенностях систем IZEN (ZENEX).
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="group block bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-[#286ca0] transition-all duration-300 hover:shadow-2xl hover:shadow-[#286ca0]/10"
            >
              <div className="relative h-64 overflow-hidden bg-black/40"> 
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-6 left-6 flex items-center text-[#286ca0] font-medium text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  Подробнее
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              <div className="p-8 relative">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent group-hover:via-[#286ca0] transition-colors duration-500" />
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#286ca0] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}