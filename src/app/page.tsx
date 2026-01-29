"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
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

const SECTIONS = 3.7;
const SCROLL_SPEED = 5;

export default function HomePage() {
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll progress para desktop (horizontal)
  const { scrollYProgress: desktopProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Scroll progress para mobile (vertical)
  const { scrollYProgress: mobileProgress } = useScroll();

  // Desktop: transformación horizontal con spring suave
  const x = useSpring(
    useTransform(
      desktopProgress,
      [0, 1],
      ["0%", `-${(SECTIONS - 1) * 100}%`]
    ),
    {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
      mass: 0.5
    }
  );

  // Barra de progreso aesthetic para ambos
  const progressBar = useSpring(
    isMobile ? mobileProgress : desktopProgress,
    {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    }
  );

  // 🔹 MOBILE → scroll vertical aesthetic
  if (isMobile) {
    return (
      <>
        {/* Barra de progreso aesthetic */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 z-50 origin-left shadow-lg shadow-purple-500/50"
          style={{ scaleX: progressBar }}
        />

        {/* Indicadores laterales (opcional) */}
        <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-white/30 backdrop-blur-sm"
              whileHover={{ scale: 1.5, backgroundColor: "rgba(255,255,255,0.8)" }}
              transition={{ type: "spring", stiffness: 400 }}
            />
          ))}
        </div>

        <main className="
          h-screen
          overflow-y-scroll
          snap-y snap-mandatory
          scroll-smooth
          scrollbar-hide
        ">
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
          <section className="h-screen snap-start snap-always">
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

  // 🔹 DESKTOP → scroll horizontal aesthetic
  return (
    <>
      {/* Barra de progreso aesthetic para desktop */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 z-50 origin-left shadow-lg shadow-purple-500/30"
        style={{ scaleX: progressBar }}
      />
      <section
        ref={containerRef}
        className="relative bg-black"
        style={{ height: `${(SECTIONS - 1) * SCROLL_SPEED * 100}vh` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div
            className="flex h-full"
            style={{
              width: `${SECTIONS * 100}vw`,
              x,
              // Suavizado adicional
              willChange: "transform"
            }}
          >
            <TitlePage />
            <AboutSection />
            <ProjectsCoverPage />
            <SirenasAppPage />
            <SirenasWebAppPage />
            <CRMSirenasPage />
            <TechnologiesCover />
            <LibrariesPage />
            <ContactCover />
            <ContactInfoPage />
          </motion.div>
        </div>
      </section>
    </>
  );
}