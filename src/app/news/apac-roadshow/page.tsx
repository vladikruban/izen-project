"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Link from "next/link";

export default function ApacRoadshowPage() {
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
              2025 IZEN APAC ROADSHOW
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                8 августа 2025
              </span>
              <span className="text-gray-300">|</span>
              <span>19:06</span>
            </div>
          </div>

          <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-10 shadow-lg bg-black">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/Aztq3omKOEQ" 
              title="2025 IZEN APAC ROADSHOW" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              className="absolute inset-0"
            />
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p className="font-medium text-black text-lg">
              Мы успешно завершили IZEN APAC ROADSHOW 2025!
            </p>
            
            <p>
              От Пномпеня до Тайбэя, Ханоя и Хошимина мы провели семинары и торжественные ужины, охватив каждый город вместе с нашими спикерами и партнерами.
            </p>

            <p>
              Спасибо всем, кто присоединился к нам. До встречи на следующей остановке!
            </p>
            
            <div className="mt-8 p-4 bg-gray-50 rounded-lg inline-block border-l-4 border-[#286ca0]">
              <p className="font-bold text-gray-900 m-0">
                Даты проведения: <span className="font-normal text-gray-700">20–24 июля 2025</span>
              </p>
            </div>
          </div>

        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </main>
  );
}