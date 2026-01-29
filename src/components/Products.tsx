"use client";

import Image from "next/image";
import Link from "next/link";

export default function Products() {
  return (
    <section className="product-section py-20 bg-[#101011]" id="products">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="order-2 lg:order-1">
            <div className="mb-4">
              <span className="text-[#286ca0] text-sm font-semibold uppercase tracking-widest">
                Превосходя ожидания
              </span>
              <span className="text-gray-500 text-sm ml-4 italic">
                ПРОДУКЦИЯ
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              ИМПЛАНТАТЫ
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Имплантаты ZENEX MULTI и ZENEX PLUS производятся с применением
              инновационных технологий и строгих принципов контроля качества,
              обеспечивая результаты, превосходящие ожидания.
            </p>

            <Link href="/products" className="btn-primary inline-flex text-base py-3 px-8 rounded-lg">
              Подробнее
              <Image
                src="/icons/arrow-right.png"
                alt=""
                width={16}
                height={16}
                className="ml-2"
              />
            </Link>
          </div>

          <div className="order-1 lg:order-2 w-full">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-gray-800 shadow-2xl shadow-[#286ca0]/10 group">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source
                  src="/videos/main-backgr.mp4"
                  type="video/mp4"
                />
              </video>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
            </div>

            <div className="absolute -top-8 -right-8 w-32 h-32 border border-[#286ca0]/20 rounded-full -z-10 hidden lg:block" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 border border-[#286ca0]/10 rounded-full -z-10 hidden lg:block" />
          </div>
          
        </div>
      </div>
    </section>
  );
}