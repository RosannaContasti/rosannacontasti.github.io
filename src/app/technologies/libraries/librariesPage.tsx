
"use client";
import { LibrariesCard } from "@/src/components/librariesCard";
import { skills } from "../mocks/libraries";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

const LibrariesPage = () => {
  const t = useTranslations("TechnologiesPage");

  return (
    <section className="relative min-h-screen shrink-0 w-screen flex flex-col justify-between bg-[#fcb9c0] text-black font-semibold overflow-hidden isolate lg:px-24 lg:py-8 md:p-16 p-6">

      {/* Decorative background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-96 h-96 bg-white rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 right-20 w-64 h-64 bg-pink-300 rounded-full blur-3xl"
        />
      </div>

      {/* Header */}
      <div className="flex w-full justify-between px-6 md:px-16 lg:px-2 py-6 md:py-8 text-[clamp(0.875rem,1.5vw,2rem)] z-10">
        <span className="lowercase">{t.raw("coverTitle")}</span>
        <span>{8}</span>
      </div>

      {/* Section title + star */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-0 z-10"
      >
        <div className="flex items-center gap-4">
          <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-bold leading-none tracking-[-0.04em] md:tracking-[-0.08em] lg:tracking-[-0.12em]">
            {t.raw("coverTitle")}
          </h2>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="relative w-[clamp(1.5rem,3vw,3rem)] h-[clamp(1.5rem,3vw,3rem)] shrink-0"
          >
            <Image
              src="/star.png"
              alt=""
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-0.5 bg-black/30 mt-4"
        />
      </motion.div>

      {/* Grid de cards */}
      <div className="flex-1 w-full px-4 md:px-8 lg:px-0 py-6 md:py-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="mx-auto w-full max-w-7xl grid grid-cols-1 gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3 z-10"
        >
          {skills?.map((skill, index) => (
            <motion.div
              key={skill.category}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            >
              <LibrariesCard
                items={skill.items}
                title={skill.category}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <div className="flex w-full justify-between px-6 md:px-16 lg:px-2 py-6 md:py-8 text-[clamp(0.875rem,1.5vw,2rem)] z-10">
        <span>{"<3"}</span>
        <span>{":)"}</span>
      </div>
    </section>
  );
};

export default LibrariesPage;
