"use client";
import React, { useState, useEffect } from 'react';

const slidesData = [
  {
    id: 0,
    type: 'main',
  },
  {
    id: 1,
    type: 'event',
    tag: "ВЫСТАВКА",
    title: "DENTAL SALON 2026",
    subtitle: "59-й Московский международный стоматологический форум и выставка",
    date: "21–24 апреля 2026 г.",
    location: "Москва, «Крокус Экспо»",
    description: "Приглашаем посетить стенд IZEN IMPLANT на одной из крупнейших стоматологических выставок.",
    details: [
      { label: "Стенд", value: "K63" },
      { label: "Расположение", value: "Павильон 2, Зал 7 (Залы 5, 7, 8)" }
    ],
    image: "/images/events/dental-salon.png",
  },
  {
    id: 2,
    type: 'event',
    tag: "ВЕБИНАР",
    title: "13-ый ВЕБИНАР IACE",
    subtitle: "Протоколы немедленной нагрузки. Использование имплантатов IZEN Clean",
    date: "16 апреля 2026 г. | 15:30 (МСК)",
    location: "Онлайн",
    description: "Откройте для себя передовые методы немедленной нагрузки в имплантологии. Клинические знания и протоколы для достижения предсказуемых результатов.",
    details: [
      { label: "Спикер", value: "Dr. Gaurav Ahuja" },
      { label: "Платформа", value: "Google Meet" }
    ],
    image: "/images/events/webinar-13.png",
  },
  {
    id: 3,
    type: 'event',
    tag: "КОНФЕРЕНЦИЯ",
    title: "CIS 2026 GEORGIA",
    subtitle: "Ежегодная конференция IZEN IMPLANT",
    date: "Май 2026",
    location: "Кахетия, Грузия",
    description: "Конференция объединит профессионалов в изысканной обстановке Кахетии. Содержательный обмен опытом и мощная образовательная программа.",
    details: [
      { label: "Спикер", value: "Dr. Тарас Юров" },
      { label: "Темы", value: "Тотальная реабилитация, All-on-4®, атрофия костной ткани" }
    ],
    image: "/images/events/georgia-conf.jpg",
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return; 
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
    }, 7000); 

    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <section 
      className="hero-video-container relative w-full h-screen overflow-hidden bg-[#101011]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-video absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000"
        style={{ opacity: currentSlide === 0 ? 1 : 0.3 }}
        poster="/images/hero-1.png"
      >
        <source src="/videos/product-video.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay absolute inset-0 bg-black/50" />

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 max-w-7xl mx-auto">
        
        <div 
          className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ease-in-out w-full px-4
            ${currentSlide === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'}`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extralight text-white text-center leading-tight mb-4">
            Совершенство всегда
            <br />
            <span className="font-light italic">рождается из простого</span>
          </h1>
          <p className="text-white/60 uppercase tracking-[3px] text-sm mb-12">Ближайшие события</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
            {slidesData.slice(1).map((event) => (
              <div
                key={event.id}
                onClick={() => setCurrentSlide(event.id)}
                className="group cursor-pointer rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6 transition-all hover:bg-white/10 hover:border-white/40"
              >
                <span className="text-[10px] uppercase tracking-[2px] text-blue-400 font-bold mb-2 block">
                  {event.tag}
                </span>
                <h3 className="text-xl font-medium text-white mb-1">{event.title}</h3>
                <p className="text-white/60 text-sm font-light">{event.date}</p>
              </div>
            ))}
          </div>
        </div>

        {slidesData.slice(1).map((slide) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out w-full px-4
              ${currentSlide === slide.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'}`}
          >
            <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl">
              <div className="p-8 md:p-12 flex-1 flex flex-col justify-center">
                <span className="text-xs uppercase tracking-[3px] text-blue-400 font-bold mb-4">{slide.tag}</span>
                <h2 className="text-3xl md:text-4xl font-medium text-white mb-2 leading-tight">{slide.title}</h2>
                <h3 className="text-lg text-white/80 font-light mb-6">{slide.subtitle}</h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8">{slide.description}</p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <p className="text-white/40 text-[10px] uppercase tracking-wider mb-1">Дата и Время</p>
                    <p className="text-white text-sm font-medium">{slide.date}</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] uppercase tracking-wider mb-1">Место</p>
                    <p className="text-white text-sm font-medium">{slide.location}</p>
                  </div>
                  {slide.details?.map((detail, idx) => (
                    <div key={idx} className={slide.details?.length === 1 ? "col-span-2" : ""}>
                      <p className="text-white/40 text-[10px] uppercase tracking-wider mb-1">{detail.label}</p>
                      <p className="text-white text-sm font-medium">{detail.value}</p>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 items-center">
                  <a 
                    href="https://t.me/Rogatyuk_Sergey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-white text-black text-[10px] uppercase tracking-widest font-bold rounded-full hover:bg-gray-200 transition-all inline-block"
                  >
                    Подробнее
                  </a>
                  <button 
                    onClick={() => setCurrentSlide(0)}
                    className="text-white/40 text-[10px] uppercase tracking-widest hover:text-white transition-colors"
                  >
                    В начало
                  </button>
                </div>
              </div>

              <div className="hidden md:block w-2/5 relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slidesData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="group relative flex h-1 w-12 md:w-20 cursor-pointer overflow-hidden rounded-full bg-white/20"
          >
            {currentSlide === index && (
              <div 
                key={`progress-${index}-${isHovered}`} 
                className="absolute left-0 top-0 h-full bg-white"
                style={{
                  animation: !isHovered ? 'progress-run 7s linear forwards' : 'none',
                  width: isHovered ? '100%' : '0%' 
                }}
              />
            )}
          </button>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes progress-run {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}} />
    </section>
  );
}