"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Image from "next/image";
import Link from "next/link";

export default function MouSigningPage() {
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
              Церемония подписания меморандума о взаимопонимании (MOU) между IZEN IMPLANT и KAID
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                25 октября 2025
              </span>
              <span className="text-gray-300">|</span>
              <span>16:33</span>
            </div>
          </div>

          <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-10 shadow-lg bg-gray-100">
            <Image
              src="/images/memo.png"
              alt="Подписание меморандума"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p className="font-medium text-black text-lg">
              1 октября компания IZEN IMPLANT и Корейская академия имплантологии (KAID) подписали Меморандум о взаимопонимании (MOU).
            </p>
            
            <p>
              Компания IZEN IMPLANT, представляющая комплексную систему имплантации, оптимизированную для цифровых решений и пользующуюся высокой популярностью за рубежом, в рамках этого соглашения обязалась приложить совместные усилия для укрепления позиций на внутреннем рынке и расширения международного экспорта.
            </p>

            <p>
              В KAID ожидают, что использование международной сети продаж IZEN IMPLANT заложит основу для повышения академической ценности академии и глобального статуса корейской имплантологии (K-Implant).
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#286ca0] my-8">
              <p className="italic text-gray-600 m-0">
                «Благодаря этому партнерству обе стороны планируют использовать соглашение как трамплин: IZEN IMPLANT — для становления в качестве компании, предоставляющей комплексные решения, а обе организации — для долгосрочного взаимовыгодного сотрудничества в качестве мировых лидеров в области имплантологии».
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