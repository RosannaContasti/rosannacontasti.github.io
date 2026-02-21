"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function SirenasAppPage() {
  const t = useTranslations("ProjectsPage.sirenasApp");

  return (
    <section className="
      relative
      flex
      flex-col
      lg:flex-row
      w-full
      min-h-screen
      bg-black
      overflow-hidden
      isolate
    ">

      {/* Contenedor de texto */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="
          relative z-10
          flex
          flex-col
          w-full lg:w-1/2
          px-5 sm:px-8 md:px-12 lg:px-16
          pt-10 sm:pt-14 lg:pt-0
          pb-6 sm:pb-8 lg:pb-0
          justify-center
          gap-4 sm:gap-6 lg:gap-8
        "
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 w-fit"
        >
          <div className="flex gap-1.5">
            <span className="h-2 w-2 bg-white rounded-full animate-pulse" />
            <span className="h-2 w-2 bg-white/70 rounded-full animate-pulse delay-75" />
            <span className="h-2 w-2 bg-white/50 rounded-full animate-pulse delay-150" />
          </div>
          <span className="text-white/90 text-xs font-medium tracking-[0.2em] uppercase">
            Mobile App
          </span>
        </motion.div>

        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="
            text-[clamp(2.5rem,8vw,12rem)]
            font-bold
            leading-[0.85]
            tracking-[-0.04em]
            sm:tracking-[-0.06em]
            md:tracking-[-0.08em]
            lg:tracking-[-0.12em]
            text-white
            drop-shadow-2xl
          "
        >
          {t("title").split('\n').map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </motion.h1>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="
            text-gray-400
            text-[clamp(0.82rem,1.5vw,1.1rem)]
            leading-relaxed
            font-light
            max-w-xl
          "
        >
          {t("description")}
        </motion.p>
      </motion.div>

      {/* Contenedor de video */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="
          relative z-10
          flex
          w-full lg:w-1/2
          min-h-[50vw] sm:min-h-[55vw] md:min-h-[60vw]
          lg:min-h-screen
          items-center
          justify-center
          py-8 lg:p-12
        "
      >
        {/* Glow effect */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-2/3 h-2/3 bg-gray-500/20 rounded-full blur-3xl" />
        </div>

        {/* Frame del teléfono */}
        <div className="
          relative
          w-[55%]
          sm:w-[45%]
          md:w-[38%]
          lg:w-[65%]
          xl:w-[55%]
          max-w-[260px]
          lg:max-w-[320px]
          xl:max-w-[360px]
          aspect-[9/19.5]
          bg-gradient-to-br from-gray-900 to-black
          rounded-3xl
          p-2
          shadow-2xl
          shadow-black/50
        ">
          {/* Notch simulado */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 sm:h-6 bg-black rounded-b-2xl z-20" />

          {/* Video */}
          <video
            src="sirenasapp.mov"
            className="
              w-full
              h-full
              object-cover
              rounded-2xl
              relative z-10
            "
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </motion.div>
    </section>
  );
}