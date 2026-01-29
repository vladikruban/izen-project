"use client";

import Image from "next/image";
import Link from "next/link";

export default function Visualization() {
  return (
    <section className="bg-gradient-to-b from-[#101011] to-[#0a0a0a] py-20 lg:py-32" id="3d">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="aspect-square max-w-lg mx-auto bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden relative shadow-2xl shadow-[#286ca0]/10">
              <Image
                src="/images/izen-3d.png"
                alt="3D Визуализация IZEN"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>

            <div className="absolute -inset-4 bg-[#286ca0]/20 blur-3xl -z-10 rounded-full opacity-40" />
          </div>

          <div>
            <span className="text-[#286ca0] text-sm font-semibold uppercase tracking-widest mb-4 block">
              Интерактивные технологии
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              3D Визуализация
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Используйте наш инструмент 3D визуализации для детального изучения
              имплантатов IZEN. Вращайте, масштабируйте и исследуйте каждый элемент
              наших продуктов в интерактивном режиме.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-gray-300">
                <svg className="w-5 h-5 text-[#286ca0] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Полный обзор конструкции имплантата на 360°
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <svg className="w-5 h-5 text-[#286ca0] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Детализированная визуализация поверхности
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <svg className="w-5 h-5 text-[#286ca0] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Сравнение различных моделей имплантатов
              </li>
            </ul>
            
            <Link 
              href="https://www.izenimplant.com/visual3d/" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex rounded-lg items-center gap-2"
            >
              Открыть 3D просмотр
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}