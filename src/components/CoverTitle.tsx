"use client";
import { motion } from "motion/react";
import { Variants } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: {
    y: 60,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const CoverTitle = ({ lines }: { lines: string[] }) => (
  <motion.div
    variants={container}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.6 }}
    className="flex flex-col items-center   
    text-[clamp(3rem,10vw,16rem)]
    leading-none
    md:tracking-[-0.08em]
    lg:tracking-[-0.15em]"
  >
    {lines?.map((line) => (
      <motion.span key={line} variants={item}>
        {line}
      </motion.span>
    ))}
  </motion.div>
);

export default CoverTitle;
