"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function HorizontalSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Mueve el contenido horizontalmente
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[300vh] bg-black"
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <motion.div
          style={{ x }}
          className="flex gap-32 px-32"
        >
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="w-[420px] h-[280px] rounded-3xl bg-neutral-800 text-white flex items-center justify-center text-4xl font-bold"
            >
              Project {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
