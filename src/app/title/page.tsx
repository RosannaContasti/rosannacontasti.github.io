"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedText from "@/src/components/AnimatedText";
import { useLocale } from "@/src/hooks/useLocale";

export default function TitlePage() {
  const t = useTranslations("HomePage");
  const { locale, setLocale } = useLocale();
  const text = "ROSANNA";
  const link = "https://rosannacontasti.github.io."


  return (
    <section className="relative w-screen p-8 flex shrink-0 flex-col h-screen justify-between bg-black text-white overflow-hidden isolate">
      <div className="flex w-full justify-between p-6 font-bold">
        {/* Language switch */}
        <div className="flex gap-2 items-center text-[clamp(1rem,1.5vw,1.5rem)]">
          <button
            onClick={() => setLocale("en")}
            className={`px-3 py-1 transition-all ${locale === "en"
              ? "text-white opacity-100"
              : "text-gray-400 opacity-40 hover:opacity-70"
              }`}
          >
            EN
          </button>
          <button
            onClick={() => setLocale("es")}
            className={`px-3 py-1 transition-all ${locale === "es"
              ? "text-white opacity-100"
              : "text-gray-400 opacity-40 hover:opacity-70"
              }`}
          >
            ES
          </button>
        </div>

        {/* Title */}
        <div className="text-[clamp(1.2rem,2vw,2.5rem)]">{t("title")}</div>
      </div>

      <div
        className="
  relative
  flex flex-col
  lg:flex-row
  items-center
  justify-center
  w-full
  font-semibold
  text-white
  gap-8
  lg:gap-24
"
      >
        <AnimatedText
          text={text}
          className="
    relative z-10
    leading-none
    text-[clamp(3rem,10vw,16rem)]
    md:tracking-[-0.08em]
    lg:tracking-[-0.15em]
    font-semibold
  "
        />

        {/* Star */}
        <motion.div
          initial={{ scale: 0, rotate: -90, opacity: 0 }}
          animate={{
            scale: 1,
            rotate: 360,
            opacity: 1,
          }}
          transition={{
            scale: {
              delay: 0.4,
              duration: 0.8,
              ease: "easeOut",
            },
            opacity: {
              delay: 0.4,
              duration: 0.4,
            },
            rotate: {
              delay: 0.4,
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          className="
    absolute
    w-[clamp(4rem,20vw,15rem)]
    h-[clamp(4rem,20vw,15rem)]
    z-10
  "
        >
          <Image
            src="star.png"
            alt=""
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        <AnimatedText
          text="CONTASTI"
          className="
    relative
    leading-none
    text-[clamp(3rem,10vw,16rem)]
    md:tracking-[-0.08em]
    lg:tracking-[-0.15em]
    font-semibold
  "
        />
      </div>
      <div className="flex w-full justify-end p-6 text-4xl font-bold">
        <span className="text-[clamp(1rem,1.5vw,2rem)]">
          {link}
        </span>
      </div>
    </section>
  );
}
