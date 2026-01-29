"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800 pt-16 pb-8 text-sm">
      <div className="container mx-auto px-6">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Logo & Description */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/icons/logo-footer.png"
                alt="IZEN Logo"
                width={120} 
                height={40}
                className="w-auto h-8 object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-gray-500 leading-relaxed mb-6">
              Инновационные решения в области дентальной имплантологии. 
              Сочетание передовых технологий и многолетнего клинического опыта.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Компания</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about/manufacturing" className="text-gray-500 hover:text-[#286ca0] transition-colors">
                  Производство
                </Link>
              </li>
              <li>
                <Link href="/about/business" className="text-gray-500 hover:text-[#286ca0] transition-colors">
                  Глобальное присутствие
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-500 hover:text-[#286ca0] transition-colors">
                  Новости
                </Link>
              </li>
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Продукция</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/products" className="text-gray-500 hover:text-[#286ca0] transition-colors">
                  Каталог систем
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.izenimplant.com/visual3d/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#286ca0] transition-colors flex items-center gap-1"
                >
                  3D Библиотеки
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Контакты</h4>
            <ul className="space-y-4">
              
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#286ca0] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400 leading-relaxed">
                  Россия, г. Москва<br />
                  ул. Маломосковская 22 стр 1,<br />
                  Офис 323
                </span>
              </li>

              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#286ca0] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+79031252405" className="text-white font-medium hover:text-[#286ca0] transition-colors">
                  +7 (903) 125-24-05
                </a>
              </li>

              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#286ca0] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                <a 
                  href="https://t.me/Rogatyuk_Sergey" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white font-medium hover:text-[#286ca0] transition-colors"
                >
                  Написать в Telegram
                </a>
              </li>

            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} IZEN Implant. Все права защищены.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-600 hover:text-white text-xs transition-colors">
              Политика конфиденциальности
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}