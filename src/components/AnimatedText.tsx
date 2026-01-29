"use client";

import { motion } from "framer-motion";
import { Variants } from "framer-motion";

type AnimatedTextProps = {
  text: string;
  className?: string;
  staggerDelay?: number;
  interactive?: boolean;
  once?: boolean;  // ← Solo animar una vez
};

export default function AnimatedText({
  text,
  className,
  staggerDelay = 0.045,
  interactive = false,
  once = true
}: AnimatedTextProps) {
  const letters = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  const letter: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      whileInView="visible"  // ← Animar cuando está en vista
      viewport={{ once }}     // ← Solo una vez o repetir
      className={className}
    >
      {letters?.map((char, index) => (
        <motion.span
          key={index}
          variants={letter}
          whileHover={interactive ? {
            y: -5,
            scale: 1.1,
            transition: { type: "spring", stiffness: 300 }
          } : undefined}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h1>
  );
}