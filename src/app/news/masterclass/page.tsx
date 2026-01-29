"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Link from "next/link";

export default function MasterclassPage() {
  return (
    <main className="bg-white min-h-screen text-gray-800">
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          
          <Link 
            href="/#news" 
            className="inline-flex items-center text-gray-500 hover:text-[#286ca0] mb-8 transition-colors text-sm font-medium"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Назад к новостям
          </Link>

          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 leading-tight">
              Мастер-класс IZEN IMPLANT 2025 совместно с OMDC и Cobra Dental
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                11 августа 2025
              </span>
              <span className="text-gray-300">|</span>
              <span>19:47</span>
            </div>
          </div>

          <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-10 shadow-lg bg-black">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/HjIk_KcUUZ8" 
              title="2025 IZEN IMPLANT Masterclass" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              className="absolute inset-0"
            />
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p className="font-medium text-black text-lg">
              С 10 по 14 июля мы имели удовольствие принимать пять профессиональных и замечательных врачей из OMDC (Индонезия) для незабываемого путешествия по Корее.
            </p>
            
            <p>
              Программа началась с экскурсии по штаб-квартире IZEN в Хвасоне, за которой последовал трехдневный семинар в Чонджу, организованный при поддержке клиники Seoul S Dental Clinic, и культурный визит в деревню Ханок. Завершилась поездка ярким знакомством с Сеулом.
            </p>

            <p>
              Мы имели честь запечатлеть не только профессиональные моменты, но и яркие улыбки, увлекательные беседы и общие воспоминания, которые сделали этот визит по-настоящему особенным.
            </p>

            <p>
              Выражаем искреннюю благодарность Cobra Dental, OMDC, DENCO и Seoul S Dental Clinic за возможность проведения этого мастер-класса, а нашим гостям — говорим «до новых встреч»!
            </p>
            
            <div className="mt-8 p-6 bg-gray-50 rounded-lg border-l-4 border-[#286ca0]">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-gray-900 min-w-[100px]">Дата:</span>
                  <span>10–14 июля 2025</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-gray-900 min-w-[100px]">Локации:</span>
                  <span>Хвасон, Чонджу, Сеул (Корея)</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </main>
  );
}