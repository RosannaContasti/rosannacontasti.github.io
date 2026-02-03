"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import TitlePage from "./title/page";
import AboutSection from "./about/page";
import ProjectsCoverPage from "./projects/page";
import SirenasAppPage from "./projects/sirenasapp/page";
import SirenasWebAppPage from "./projects/sirenasWebApp/page";
import CRMSirenasPage from "./projects/crmSirenas/page";
import TechnologiesCover from "./technologies/page";
import LibrariesPage from "./technologies/libraries/librariesPage";
import ContactCover from "./contact/page";
import ContactInfoPage from "./contact/contactInfo/page";
import useIsMobile from "../hooks/useIsMobile";

const SECTIONS = 10;

export default function HomePage() {
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll progress para desktop (horizontal)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transformación horizontal directa sin spring (más preciso)
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vw", `-${(SECTIONS - 1) * 100}vw`]
  );

  // Barra de progreso
  const progressBar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // 🔹 MOBILE → scroll vertical aesthetic
  if (isMobile) {
    return (
      <>
        {/* Barra de progreso aesthetic */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 z-50 origin-left shadow-lg shadow-purple-500/50"
          style={{ scaleX: progressBar }}
        />

        <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth scrollbar-hide">
          <section className="h-screen snap-start snap-always">
            <TitlePage />
          </section>
          <section className="min-h-screen snap-start">
            <AboutSection />
          </section>
          <section className="h-screen snap-start snap-always">
            <ProjectsCoverPage />
          </section>
          <section className="min-h-screen snap-start">
            <SirenasAppPage />
          </section>
          <section className="min-h-screen snap-start">
            <SirenasWebAppPage />
          </section>
          <section className="min-h-screen snap-start">
            <CRMSirenasPage />
          </section>
          <section className="h-screen snap-start snap-always">
            <TechnologiesCover />
          </section>
          <section className="min-h-screen snap-start">
            <LibrariesPage />
          </section>
          <section className="h-screen snap-start snap-always">
            <ContactCover />
          </section>
          <section className="h-screen snap-start snap-always">
            <ContactInfoPage />
          </section>
        </main>
      </>
    );
  }

  // 🔹 DESKTOP → scroll horizontal aesthetic (reconstruido)
  return (
    <>
      {/* Barra de progreso aesthetic para desktop */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-black via-gray-500 to-white z-50 origin-left shadow-lg shadow-purple-500/30"
        style={{ scaleX: progressBar }}
      />

      {/* Contenedor de scroll con altura controlada */}
      <div
        ref={containerRef}
        className="relative bg-black"
        style={{
          height: `${(SECTIONS - 1) * 100}vh`
        }}
      >
        {/* Contenedor sticky que mantiene todo en viewport */}
        <div className="sticky top-0 h-screen w-screen overflow-hidden">
          {/* Contenedor horizontal con todas las secciones */}
          <motion.div
            className="flex h-full"
            style={{
              width: `${SECTIONS * 100}vw`,
              x,
            }}
          >
            {/* Secciones - cada una debe ser exactamente 100vw */}
            <section className="w-screen h-screen shrink-0">
              <TitlePage />
            </section>
            <section className="w-screen h-screen shrink-0">
              <AboutSection />
            </section>
            <section className="w-screen h-screen shrink-0">
              <ProjectsCoverPage />
            </section>
            <section className="w-screen h-screen shrink-0">
              <SirenasAppPage />
            </section>
            <section className="w-screen h-screen shrink-0">
              <SirenasWebAppPage />
            </section>
            <section className="w-screen h-screen shrink-0">
              <CRMSirenasPage />
            </section>
            <section className="w-screen h-screen shrink-0">
              <TechnologiesCover />
            </section>
            <section className="w-screen h-screen shrink-0">
              <LibrariesPage />
            </section>
            <section className="w-screen h-screen shrink-0">
              <ContactCover />
            </section>
            <section className="w-screen h-screen shrink-0">
              <ContactInfoPage />
            </section>
          </motion.div>
        </div>
      </div>
    </>
  );
}
