"use client";

export default function Hero() {
  return (
    <section className="hero-video-container relative w-full h-screen overflow-hidden bg-[#101011]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-video absolute top-0 left-0 w-full h-full object-cover"
        poster="/images/hero-1.png" 
      >
        <source src="/videos/product-video.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay absolute inset-0 bg-black/40" />

      <div className="hero-content relative z-10 flex items-center justify-center h-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white text-center leading-tight animate-fade-in-up px-4">
          Совершенство всегда
          <br />
          рождается из простого
        </h1>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/60 text-sm">Прокрутите вниз</span>
          <svg
            className="w-6 h-6 text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}