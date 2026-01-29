"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Image from "next/image";
import Link from "next/link";

export default function ProductsPage() {
  const products = [
    {
      id: "t-system",
      name: "IZEN-T System",
      subtitle: "Tapered Body / Standard",
      description: "Классический конический имплантат с V-образной резьбой. Обеспечивает высокую первичную стабилизацию и универсальное применение для всех типов кости.",
      features: [
        "Коническое тело (Tapered) для легкой установки",
        "V-образная резьба для стабильности",
        "Микрорезьба на шейке (Head Microthreads)",
        "Соединение: Internal Hex + Morse Taper"
      ],
      image: "/images/products/izen-t.png" 
    },
    {
      id: "r-system",
      name: "IZEN-R System",
      subtitle: "Reversed Taper / Esthetic",
      description: "Система с обратным конусом (Reversed Taper) в пришеечной части. Снижает нагрузку на кортикальную кость, предотвращая резорбцию. Идеален для эстетической зоны.",
      features: [
        "Дизайн Reversed Taper (снижение стресса на кость)",
        "Поверхность SLA для быстрой остеоинтеграции",
        "Сохранение объема маргинальной кости",
        "Оптимизирован для фронтальной группы зубов"
      ],
      image: "/images/products/izen-r.png"
    },
    {
      id: "i-system",
      name: "IZEN-I System",
      subtitle: "Deep Thread / Soft Bone",
      description: "Имплантат с глубокой агрессивной резьбой, разработанный специально для мягкой кости (типов D3 и D4) и случаев немедленной нагрузки.",
      features: [
        "Глубокая резьба для макро-фиксации",
        "Максимальная стабильность в слабой кости",
        "Возможность немедленной нагрузки",
        "Безопасная установка в сложных клинических случаях"
      ],
      image: "/images/products/izen-i.png"
    }
  ];

  return (
    <main className="bg-[#101011] min-h-screen text-white">
      <Header />

      <section className="pt-32 pb-12 relative">
        <div className="container mx-auto px-6 text-center">
          <span className="text-[#286ca0] text-sm font-semibold uppercase tracking-widest mb-4 block">
            Каталог
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Имплантационные Системы
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Инновационные решения IZEN для любых клинических случаев: от стандартной имплантации до сложных эстетических реставраций.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#286ca0] transition-colors duration-300 group flex flex-col"
              >
                <div className="relative h-72 bg-white/5 p-8 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute top-4 right-4 bg-[#286ca0] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {product.id.split('-')[0].toUpperCase()} Series
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#286ca0] transition-colors">
                      {product.name}
                    </h3>
                    <span className="text-gray-500 text-sm font-medium uppercase tracking-wider">
                      {product.subtitle}
                    </span>
                  </div>

                  <p className="text-gray-400 mb-6 leading-relaxed text-sm flex-grow">
                    {product.description}
                  </p>

                  <ul className="space-y-3 mb-8 border-t border-gray-700 pt-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-300">
                        <svg className="w-5 h-5 text-[#286ca0] mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href={`/catalog/${product.id}`}
                    className="w-full flex justify-center items-center bg-transparent border border-gray-600 text-white font-medium py-3 rounded-lg hover:bg-[#286ca0] hover:border-[#286ca0] transition-all uppercase text-sm tracking-widest mt-auto group-hover:shadow-lg"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Каталог
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="bg-[#151516] border border-gray-800 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 hover:border-[#286ca0] transition-all group">
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
              <div className="w-16 h-16 bg-[#286ca0]/10 rounded-xl flex items-center justify-center text-[#286ca0] group-hover:bg-[#286ca0] group-hover:text-white transition-all shrink-0">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Таблица совместимости</h3>
                <p className="text-gray-400 max-w-lg">
                  Полный перечень ортопедической совместимости систем IZEN с другими мировыми брендами.
                </p>
              </div>
            </div>

            <Link 
              href="/products/compatibility"
              className="px-8 py-4 bg-[#286ca0] text-white font-bold rounded-lg hover:bg-[#1e5580] hover:shadow-lg hover:shadow-[#286ca0]/20 transition-all flex items-center gap-3 shrink-0"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Смотреть
            </Link>

          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}