import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Link from "next/link";
import { notFound } from "next/navigation";

const systems = {
  "t-system": {
    title: "IZEN-T System",
    description: "Классический конический имплантат.",
    fileName: "t-system.pdf",
  },
  "r-system": {
    title: "IZEN-R System",
    description: "Система с обратным конусом (Reversed Taper).",
    fileName: "r-system.pdf",
  },
  "i-system": {
    title: "IZEN-I System",
    description: "Имплантат для мягкой кости с глубокой резьбой.",
    fileName: "i-system.pdf",
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CatalogViewer({ params }: Props) {
  const { slug } = await params;
  
  // @ts-ignore
  const system = systems[slug];

  if (!system) {
    return notFound();
  }

  const pdfUrl = `/images/pdf/${system.fileName}`;

  return (
    <main className="bg-[#101011] min-h-screen text-white">
      <Header />

      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <Link 
            href="/products" 
            className="inline-flex items-center text-gray-500 hover:text-[#286ca0] transition-colors mb-6 text-sm uppercase tracking-wider"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Назад к системам
          </Link>

          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            {system.title}
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            {system.description}
          </p>
        </div>
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#286ca0] opacity-10 blur-[120px] -z-10" />
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
            
            <div className="bg-[#202022] px-6 py-4 flex items-center justify-between border-b border-gray-700">
              <div className="flex items-center gap-3">
                 <div className="w-3 h-3 rounded-full bg-red-500" />
                 <div className="w-3 h-3 rounded-full bg-yellow-500" />
                 <div className="w-3 h-3 rounded-full bg-green-500" />
                 <span className="ml-4 text-sm text-gray-400 font-mono hidden sm:inline">{system.fileName}</span>
              </div>
              
              <a 
                href={pdfUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#286ca0] hover:bg-[#1e5580] text-white text-sm font-bold rounded transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                ОТКРЫТЬ
              </a>
            </div>

            <div className="w-full h-[700px] relative bg-gray-900 flex items-center justify-center">
              <iframe 
                src={`${pdfUrl}#toolbar=0`} 
                className="w-full h-full"
                title={system.title}
              />
              
              <div className="absolute inset-0 pointer-events-none hidden md:hidden flex-col items-center justify-center text-gray-500">
                 <p>Предпросмотр</p>
              </div>
            </div>

            <div className="p-8 bg-[#151516] border-t border-gray-800 text-center">
               <h3 className="text-white text-xl font-bold mb-4">Открыть полный каталог</h3>
               <a 
                href={pdfUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold rounded hover:bg-gray-200 transition-colors uppercase tracking-wider"
              >
                Скачать PDF
              </a>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}