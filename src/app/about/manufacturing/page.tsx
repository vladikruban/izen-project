"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Image from "next/image";

export default function ManufacturingPage() {
  const steps = [
    {
      id: "01",
      title: "Материалы",
      description: "Имплантаты и абатменты ZENEX Multi и ZENEX Plus изготовлены из чистого титана, сертифицированного по международному стандарту ASTM.",
      image: "/images/manufacturing/step-1.jpg"
    },
    {
      id: "02",
      title: "Подготовка",
      description: "Сырье проходит тщательную проверку и подготовку перед началом производственного процесса, чтобы исключить любые дефекты на старте.",
      image: "/images/manufacturing/step-2.jpg"
    },
    {
      id: "03",
      title: "ЧПУ Обработка",
      description: "Системы имплантации ZENEX Multi и ZENEX Plus изготавливаются на высокоточных станках с ЧПУ (CNC) в строгом соответствии с уникальным дизайном каждого изделия.",
      image: "/images/manufacturing/step-3.jpg"
    },
    {
      id: "04",
      title: "Пескоструйная обработка",
      description: "Физическое увеличение шероховатости поверхности имплантата путем обработки оксидом алюминия. Это создает макро-структуру SLA-поверхности, необходимую для надежной остеоинтеграции.",
      image: "/images/manufacturing/step-4.jpg"
    },
    {
      id: "05",
      title: "Травление",
      description: "Химическое увеличение шероховатости поверхности методом кислотного травления. Это создает микро-поры, увеличивая площадь контакта кости с имплантатом.",
      image: "/images/manufacturing/step-5.jpg"
    },
    {
      id: "06",
      title: "TiN Покрытие",
      description: "Для цветовой кодировки и улучшения эстетических свойств (маскировка металла под десной) на некоторые виды абатментов наносится золотистое покрытие из нитрида титана (TiN) электрохимическим методом.",
      image: "/images/manufacturing/step-6.jpg"
    },
    {
      id: "07",
      title: "Очистка",
      description: "Финишная ультразвуковая очистка для полного удаления любых загрязнений проводится в стерильной «чистой комнате» (Clean Room). После этого выполняется строгий контроль качества.",
      image: "/images/manufacturing/step-7.jpg"
    },
    {
      id: "08",
      title: "Упаковка",
      description: "Процесс упаковки полностью автоматизирован и проходит в стерильных условиях, что исключает попадание внешних загрязнений и человеческий фактор.",
      image: "/images/manufacturing/step-10.jpg"
    },
    {
      id: "09",
      title: "Стерилизация",
      description: "Вся продукция стерилизуется гамма-излучением. Специальный индикатор на упаковке меняет цвет после прохождения процесса, гарантируя стерильность изделия.",
      image: "/images/manufacturing/step-8.jpg"
    }
  ];

  return (
    <main className="bg-[#101011] min-h-screen text-white">
      <Header />

      <section className="pt-32 pb-16 relative">
        <div className="container mx-auto px-6 text-center">
          <span className="text-[#286ca0] text-sm font-semibold uppercase tracking-widest mb-4 block">
            Контроль качества
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Производство IZEN
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Наш производственный процесс — это сочетание передовых технологий, 
            строжайшего контроля качества и внимания к каждой детали для создания 
            надежных имплантационных систем.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div 
                key={step.id}
                className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-video rounded-xl overflow-hidden border border-gray-800 shadow-2xl group">
                    <div className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur px-3 py-1 text-[#286ca0] font-bold border border-[#286ca0]/30 rounded">
                      {step.id}
                    </div>
                    
                    <div className="bg-gray-900 w-full h-full absolute inset-0 flex items-center justify-center text-gray-700">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  </div>
                </div>

                <div className="w-full md:w-1/2 space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                    {step.title}
                    <div className="h-px bg-[#286ca0] flex-grow ml-4 opacity-50"></div>
                  </h2>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}