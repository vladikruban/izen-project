"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`scroll-top ${isVisible ? "visible" : ""}`}
      aria-label="Вернуться наверх"
    >
      <Image
        src="/icons/arrow-up.png"
        alt="Наверх"
        width={20}
        height={20}
      />
    </button>
  );
}