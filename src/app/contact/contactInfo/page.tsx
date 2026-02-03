"use client";
import { useTranslations } from "next-intl";
import AnimatedText from "@/src/components/AnimatedText";
import { motion } from "framer-motion";

export default function ContactInfoPage() {
  const t = useTranslations("ContactPage");

  return (
    <section className="relative h-screen shrink-0 w-screen flex flex-col items-center justify-around text-6xl bg-[#000000] text-black font-semibold p-8 overflow-hidden isolate">
      <div
        className="flex 
        flex-col 
        items-start 
        z-10
        text-[#fcb9c0]"
      >
        {/* Texto animado letra por letra con hover */}
        <AnimatedText
          text={t("contactTitle")}
          className="text-[clamp(3rem,10vw,16rem)] leading-none tracking-normal md:tracking-[-0.08em] lg:tracking-[-0.15em]"
          interactive={true}
          staggerDelay={0.05}
          once={true}
        />

        {/* Links con animación */}
        <motion.span
          onClick={() => window.open("https://github.com/RosannaContasti", "_blank")}

          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ x: 10, color: "#ffffff" }}
          className="text-[clamp(1.5rem,3vw,3rem)] cursor-pointer transition-colors"
        >
          {t("github")}
        </motion.span>

        <motion.span
          onClick={() => window.open("https://www.linkedin.com/in/rosanna-contasti/", "_blank")}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          whileHover={{ x: 10, color: "#ffffff" }}
          className="text-[clamp(1.5rem,3vw,3rem)] cursor-pointer transition-colors"
        >
          {t("linkedin")}
        </motion.span>
      </div>
    </section>
  );
}