"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useEffect, useState } from "react";
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

  // 🔹 MOBILE → scroll vertical normal
  if (isMobile) {
    return (
      <main className="flex flex-col">
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
      </main>
    );
  }

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
