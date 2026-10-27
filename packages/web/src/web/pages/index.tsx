import { useRef } from "react";
import { usePageMotion } from "../hooks/use-page-motion";
import { Header } from "../components/site/Header";
import { Hero } from "../components/site/Hero";
import { Intro } from "../components/site/Intro";
import { Courses } from "../components/site/Courses";
import { Platform } from "../components/site/Platform";
import { Journey } from "../components/site/Journey";
import { Why } from "../components/site/Why";
import { Pricing } from "../components/site/Pricing";
import { Faq } from "../components/site/Faq";
import { Footer, FinalCta } from "../components/site/Footer";

function Index() {
  const ref = useRef<HTMLDivElement>(null);
  usePageMotion(ref);

  return (
    <div ref={ref} className="min-h-screen overflow-x-clip bg-[#070B14] text-[#F8FAFC] antialiased">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-[#3B82F6] focus:px-4 focus:py-2"
      >
        Перейти к содержанию
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Intro />
        <Courses />
        <Platform />
        <Journey />
        <Why />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

export default Index;
