import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
  title: "IZEN IMPLANT | Глобальный поставщик комплексных решений для стоматологии",
  description: "Основанная в 2016 году разработчиками и исследователями...",
  icons: { icon: "https://ext.same-assets.com/3537791040/1107733934.ico" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Merriweather:wght@300;400;700&display=swap" rel="stylesheet" />
      </head>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}