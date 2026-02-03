
"use client";
import { LibrariesCard } from "@/src/components/librariesCard";
import { skills } from "../mocks/libraries";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

const LibrariesPage = () => {
  const t = useTranslations("TechnologiesPage");

  return (
    <section className="relative min-h-screen shrink-0 w-screen flex flex-col bg-[#fcb9c0] text-black font-semibold overflow-hidden isolate lg:p-34  md:p-24 p-12">

      {/* Header - Mobile First con padding responsivo */}
      <div className="flex w-full justify-between px-6 md:px-16 lg:px-26 py-6 md:py-8 text-[clamp(0.875rem,1.5vw,2rem)]">
        <span className="lowercase">{t.raw("coverTitle")}</span>
        <span>{8}</span>
      </div>

      {/* Estrella decorativa - posicionada mejor para mobile */}
      <motion.div
        initial={{ scale: 0, rotate: -180, opacity: 0 }}
        whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 1,
          ease: "easeOut"
        }}
        className="absolute top-12 right-4 md:top-20 md:right-10 lg:top-32 lg:right-20 w-[clamp(2.5rem,8vw,8rem)] h-[clamp(2.5rem,8vw,8rem)] opacity-20 md:opacity-30 z-0 pointer-events-none"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="w-full h-full"
        >
          <Image
            src="/star.png"
            alt=""
            fill
            className="object-contain"
          />
        </motion.div>
      </motion.div>

      {/* Grid de cards - Mobile First con padding y spacing */}
      <div className="flex-1 w-full px-4 md:px-8 lg:px-0 lg:py-12 py-8 md:py-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          className="mx-auto w-full max-w-7xl grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 z-10"
        >
          {skills?.map((skill) => (
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
                    ease: [0.22, 1, 0.36, 1]
                  }
                }
              }}
            >
              <LibrariesCard
                items={skill.items}
                title={skill.category}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Footer - Mobile First con padding responsivo */}
      <div className="flex w-full justify-between px-6 md:px-16 lg:px-26  py-6 md:py-8 text-[clamp(0.875rem,1.5vw,2rem)]">
        <span>{"<3"}</span>
        <span>{":)"}</span>
      </div>
    </section>
  );
};

export default LibrariesPage;