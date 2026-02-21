"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vw", `-${(SECTIONS - 1) * 100}vw`]
  );

  const progressBar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const stickyRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartScroll = useRef(0);
  const lastX = useRef(0);
  const lastTime = useRef(0);
  const velocity = useRef(0);
  const momentumRaf = useRef<number>(0);

  useEffect(() => {
    if (isMobile) return;
    const el = stickyRef.current;
    if (!el) return;

    const getScrollRatio = () =>
      (document.body.scrollHeight - window.innerHeight) /
      (window.innerWidth * (SECTIONS - 1));

    const stopMomentum = () => {
      if (momentumRaf.current) {
        cancelAnimationFrame(momentumRaf.current);
        momentumRaf.current = 0;
      }
    };

    const startMomentum = () => {
      const decel = 0.95;
      const minVelocity = 0.5;
      const ratio = getScrollRatio();

      const tick = () => {
        velocity.current *= decel;
        if (Math.abs(velocity.current) < minVelocity) return;
        window.scrollBy(0, -velocity.current * ratio);
        momentumRaf.current = requestAnimationFrame(tick);
      };
      momentumRaf.current = requestAnimationFrame(tick);
    };

    const onPointerDown = (e: PointerEvent) => {
      if (
        (e.target as HTMLElement).closest(
          "a, button, input, textarea, [role='button']"
        )
      )
        return;

      stopMomentum();
      isDragging.current = true;
      dragStartX.current = e.clientX;
      dragStartScroll.current = window.scrollY;
      lastX.current = e.clientX;
      lastTime.current = Date.now();
      velocity.current = 0;

      el.setPointerCapture(e.pointerId);
      document.documentElement.style.scrollBehavior = "auto";
      document.body.style.cursor = "grabbing";
      document.body.style.userSelect = "none";
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();

      const now = Date.now();
      const dt = now - lastTime.current;
      const dx = e.clientX - lastX.current;

      if (dt > 0) {
        velocity.current = (dx / dt) * 16;
      }

      lastX.current = e.clientX;
      lastTime.current = now;

      const totalDelta = dragStartX.current - e.clientX;
      const ratio = getScrollRatio();
      window.scrollTo(0, dragStartScroll.current + totalDelta * ratio);
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!isDragging.current) return;
      isDragging.current = false;

      el.releasePointerCapture(e.pointerId);
      document.documentElement.style.scrollBehavior = "";
      document.body.style.cursor = "";
      document.body.style.userSelect = "";

      if (Math.abs(velocity.current) > 1) {
        startMomentum();
      }
    };

    const onDragStart = (e: Event) => e.preventDefault();

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", onPointerUp);
    el.addEventListener("pointercancel", onPointerUp);
    el.addEventListener("dragstart", onDragStart);

    return () => {
      stopMomentum();
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("pointercancel", onPointerUp);
      el.removeEventListener("dragstart", onDragStart);
    };
  }, [isMobile]);

  // MOBILE → scroll vertical
  if (isMobile) {
    return (
      <main className="h-screen overflow-y-scroll snap-y snap-proximity scrollbar-hide">
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
    );
  }

  // DESKTOP → scroll horizontal
  return (
    <>
      {/* Barra de progreso */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-black via-gray-500 to-white z-50 origin-left shadow-lg shadow-purple-500/30"
        style={{ scaleX: progressBar }}
      />

      {/* Contenedor de scroll */}
      <div
        ref={containerRef}
        className="relative bg-black scrollbar-hide"
        style={{ height: `${(SECTIONS - 1) * 100}vh` }}
      >
        {/* 
          FIX: w-full en lugar de w-screen.
          w-screen = 100vw que incluye el ancho de la scrollbar del sistema,
          generando overflow horizontal. w-full respeta el ancho real del contenedor.
        */}
        <div
          ref={stickyRef}
          className="sticky top-0 h-screen w-full overflow-hidden cursor-grab active:cursor-grabbing touch-none"
        >
          <motion.div
            className="flex h-full"
            style={{
              width: `${SECTIONS * 100}vw`,
              x,
            }}
          >
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
