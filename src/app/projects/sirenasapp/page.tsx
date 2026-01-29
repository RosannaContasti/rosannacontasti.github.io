"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function SirenasAppPage() {
  const t = useTranslations("ProjectsPage.sirenasApp");

  return (
    <section className="
     relative
  flex 
  flex-col lg:flex-row 
  shrink-0 
  w-screen 
  h-auto lg:h-screen       
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
  p-6 py-8 lg:p-16 
  justify-center
  gap-6 lg:gap-8  

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
            bg-clip-text
          md:tracking-[-0.08em]
          lg:tracking-[-0.12em]
          text-[clamp(3rem,10vw,16rem)]
          font-bold
          leading-[0.85]
          tracking-[-0.04em]
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
            text-base lg:text-lg
            leading-relaxed
            max-w-xl
            font-light
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
  h-auto lg:h-screen         
  items-center 
  justify-center
  py-8 lg:p-12  
      "
      >
        {/* Glow effect detrás del video */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2/3 h-2/3 bg-gray-500/20 rounded-full blur-3xl" />
        </div>

        {/* Video con frame aesthetic */}
        {/* Frame del video */}
        <div className="
  relative
  w-[85%] md:w-full  /* ← 85% del ancho en mobile */
  max-w-[250px] md:max-w-md
  aspect-[9/19.5]  /* ← Aspect ratio un poco menos alto */
  bg-gradient-to-br from-gray-900 to-black
  rounded-3xl
  p-2
  shadow-2xl
  shadow-black/50
">
          {/* Notch simulado (estilo iPhone) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-2xl z-20" />

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

          {/* Border gradient */}
          <div className="
            absolute inset-0
            rounded-3xl
            bg-black
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-500
            -z-10
            blur-xl
          " />
        </div>
      </motion.div>
    </section>
  );
}