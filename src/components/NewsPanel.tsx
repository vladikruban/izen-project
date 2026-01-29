"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function NewsPanel() {
  const [isOpen, setIsOpen] = useState(false);

  const newsItems = [
    {
      title: "Подписание меморандума о взаимопонимании между IZEN",
      date: "2025-10-02",
      image: "/images/content-1.jpg",
    },
    {
      title: "IZEN IMPLANT Мастер-класс 2025",
      date: "2025-08-11",
      image: "/images/content-2.jpg",
    },
    {
      title: "IZEN APAC РОАДШОУ 2025",
      date: "2025-08-08",
      image: "/images/content-3.png",
    },
  ];

  return (
    <div className={`news-panel ${isOpen ? "open" : ""}`}>
      <button
        type="button"
        className="news-header w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold">Новости IZEN IMPLANT</h3>
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>

      <div className="p-4">
        <div className="space-y-4 mb-4">
          {newsItems.map((item, index) => (
            <Link
              key={`news-${item.date}-${index}`}
              href="#news"
              className="flex gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={60}
                height={60}
                className="w-15 h-15 object-cover rounded"
              />
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-800 truncate">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1">{item.date}</p>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="#news"
          className="flex items-center justify-center gap-2 text-[#286ca0] text-sm font-medium hover:underline"
        >
          Читать больше
          <Image
            src="/icons/arrow-small.png"
            alt=""
            width={16}
            height={16}
          />
        </Link>
      </div>
    </div>
  );
}