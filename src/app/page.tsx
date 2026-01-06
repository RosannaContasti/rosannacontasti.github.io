"use client";

import TitlePage from "./title/page";
import HorizontalSection from "./horizontal/page";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll SOLO para esta página
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Movimiento horizontal total
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);

  return (
    <>
      {/* Scroll indicator */}
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

      {/* CONTENEDOR DE SCROLL */}
      <section
        ref={containerRef}
        className="relative h-[300vh] bg-black"
      >
        {/* STICKY */}
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex h-full w-[300vw]"
          >
            <TitlePage />
            <HorizontalSection />
            <section className="w-screen flex items-center justify-center text-white text-6xl">
              Otra sección
            </section>
          </motion.div>
        </div>
      </section>
    </>
  );
}
