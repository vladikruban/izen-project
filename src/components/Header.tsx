"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "О КОМПАНИИ", href: "/#about" },
    { name: "ПРОДУКЦИЯ", href: "/products" },
    { name: "МАТЕРИАЛЫ", href: "/#resources" }, 
    { name: "КОНТАКТЫ", href: "/#contacts" },
    { name: "3D ВИЗУАЛИЗАЦИЯ", href: "https://www.izenimplant.com/visual3d/" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHome ? "bg-[#101011]/95 backdrop-blur-md py-4 shadow-md" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        <Link href="/" className="relative z-50 flex items-center">
           <Image
             src="/icons/logo.png"
             alt="IZEN IMPLANT"
             width={120}
             height={45}
             className="h-8 md:h-10 w-auto object-contain"
             priority
           />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isExternal = link.href.startsWith("http");
            return (
              <Link
                key={link.name}
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors tracking-wide uppercase"
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <button 
          className="lg:hidden text-white ml-auto relative z-50 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-end gap-1.5">
            <span 
              className={`h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"
              }`} 
            />
            <span 
              className={`h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "w-0 opacity-0" : "w-4"
              }`} 
            />
            <span 
              className={`h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-6"
              }`} 
            />
          </div>
        </button>

      </div>

      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-[#101011] border-t border-gray-800 shadow-2xl overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen 
            ? "max-h-screen opacity-100 translate-y-0 visible" 
            : "max-h-0 opacity-0 -translate-y-4 invisible"
        }`}
      >
        <div className="flex flex-col gap-6 p-8 pb-20">
          {navLinks.map((link) => {
             const isExternal = link.href.startsWith("http");
             return (
              <Link
                key={link.name}
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="text-lg font-medium text-gray-300 hover:text-white uppercase transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>

    </header>
  );
}