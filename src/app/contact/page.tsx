"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import CoverTitle from "@/src/components/CoverTitle";

const ContactCover = () => {
  const t = useTranslations("ContactPage");

  return (
    <section className="relative h-screen shrink-0 w-screen flex flex-col items-center justify-around text-6xl bg-white text-black font-semibold p-8 overflow-hidden isolate">
      <div className="flex w-screen justify-between pr-26 pl-26 text-[clamp(1rem,1.5vw,2rem)]">
        <span>Rosanna Contasti</span>
        <span>9</span>
      </div>

      {/* Texto + estrella */}
      <div className="relative flex flex-col items-center">
        {/* Estrella con animación de entrada */}

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          // animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(4rem,20vw,15rem)] h-[clamp(4rem,20vw,15rem)] z-10"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="w-full h-full"
          >
            <Image
              src="star.png"
              alt="Star"
              fill
              className="object-contain"
            />
          </motion.div>
        </motion.div>

        {/* Texto con animación escalonada */}
        <motion.div
          className="relative text-[clamp(3rem,10vw,16rem)] leading-none tracking-normal md:tracking-[-0.08em] lg:tracking-[-0.15em] flex flex-col items-center"
        >
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.5,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            {t("coverTitle.0")}
          </motion.span>

          <motion.span
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.5,
              delay: 0.6,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            {t("coverTitle.1")}
          </motion.span>


        </motion.div>
      </div>

      <div className="flex w-screen justify-between pr-26 pl-26 text-[clamp(1rem,1.5vw,2rem)]">
        <span>{`${"<3"}`}</span>
        <span>{`${":)"}`}</span>
      </div>
    </section>
  );
};

export default ContactCover;