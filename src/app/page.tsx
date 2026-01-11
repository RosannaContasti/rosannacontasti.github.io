"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import TitlePage from "./title/page";
import AboutSection from "./about/page";
import ProjectsCoverPage from "./projects/page";
import SirenasAppPage from "./projects/sirenasapp/page";
import SirenasWebAppPage from "./projects/sirenasWebApp/page";
import CRMSirenasPage from "./projects/crmSirenas/page";

// Componentes adicionales para llegar a 11 páginas
const Page7 = () => (
  <div className="shrink-0 w-screen h-screen flex items-center justify-center bg-gradient-to-br from-emerald-900 to-lime-900">
    <h2 className="text-5xl font-bold text-white">Página 7</h2>
  </div>
);

const Page8 = () => (
  <div className="shrink-0 w-screen h-screen flex items-center justify-center bg-gradient-to-br from-lime-900 to-yellow-900">
    <h2 className="text-5xl font-bold text-white">Página 8</h2>
  </div>
);

const Page9 = () => (
  <div className="shrink-0 w-screen h-screen flex items-center justify-center bg-gradient-to-br from-yellow-900 to-orange-900">
    <h2 className="text-5xl font-bold text-white">Página 9</h2>
  </div>
);

const Page10 = () => (
  <div className="shrink-0 w-screen h-screen flex items-center justify-center bg-black">
    <h2 className="text-5xl font-bold text-white">Página 10</h2>
  </div>
);

const Page11 = () => (
  <div className="shrink-0 w-screen h-screen flex items-center justify-center bg-gradient-to-br from-red-900 to-pink-900">
    <h2 className="text-5xl font-bold text-white">Página Final</h2>
  </div>
);

const SECTIONS = 3.7;
const SCROLL_SPEED = 5;

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transformación suavizada con easing
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(SECTIONS - 1) * 100}%`],
    {
      clamp: true, // Evita que se pase del límite
    }
  );

  return (
    <>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          transformOrigin: "0%",
          backgroundColor: "#fcb9c0",
          zIndex: 50,
        }}
      />

      <section
        ref={containerRef}
        className="relative bg-black"
        style={{ height: `${(SECTIONS - 1) * SCROLL_SPEED * 100}vh` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div
            className="flex h-full"
            style={{ width: `${SECTIONS * 100}vw`, x }}
          >
            <TitlePage />
            <AboutSection />
            <ProjectsCoverPage />
            <SirenasAppPage />
            <SirenasWebAppPage />
            <CRMSirenasPage />
            <Page7 />
            <Page8 />
            <Page9 />
            <Page10 />
            <Page11 />
          </motion.div>
        </div>
      </section>
    </>
  );
}
