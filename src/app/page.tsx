import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Education from "@/components/Education";
import News from "@/components/News";
import Visualization from "@/components/Visualization";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NewsPanel from "@/components/NewsPanel";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Products />
      <Education />
      <Visualization />
      <News />
      <Contact />
      <Footer />
      <NewsPanel />
      <ScrollToTop />
    </main>
  );
}