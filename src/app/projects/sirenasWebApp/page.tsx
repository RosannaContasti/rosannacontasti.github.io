"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function SirenasWebAppPage() {
  const t = useTranslations("ProjectsPage.sirenasWeb");

  return (
    <section className="relative 
  flex 
  flex-col lg:flex-row     
  shrink-0 
  w-screen 
  h-auto lg:h-screen       
  justify-between 
  bg-[#fcb9c0] 
  overflow-hidden 
  isolate">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Círculos decorativos */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-32 -right-32 w-96 h-96 bg-white rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-0 left-20 w-64 h-64 bg-pink-300 rounded-full blur-3xl"
        />
      </div>

      {/* Contenedor de texto - lado izquierdo */}
      <div className="
        relative z-10
  flex 
  flex-col 
  w-full lg:w-1/3        
  h-auto lg:h-screen      
  justify-between 
  p-6 py-8 lg:p-12        
  gap-6 lg:gap-0  
      ">
        {/* Parte superior - Descripción */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Badge decorativo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-3 group"
          >
            <div className="flex gap-1.5">
              <span className="h-2 w-2 bg-white rounded-full animate-pulse" />
              <span className="h-2 w-2 bg-white/70 rounded-full animate-pulse delay-75" />
              <span className="h-2 w-2 bg-white/50 rounded-full animate-pulse delay-150" />
            </div>
            <span className="text-white/90 text-xs font-medium tracking-[0.2em] uppercase">
              Web Platform
            </span>
          </motion.div>

          {/* Descripción con estilo editorial */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="
              text-black/70
              text-base
              leading-loose
              font-light
              tracking-wide
              max-w-sm
            "
          >
            {t("description")}
          </motion.p>

          {/* Línea decorativa minimalista */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ delay: 0.7, duration: 1 }}
            className="h-[2px] bg-gradient-to-r from-white to-transparent"
          />
        </motion.div>

        {/* Parte inferior - Título grande */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-2"
        >
          <motion.h1
            className="
          text-[clamp(4rem,10vw,16rem)]
              font-bold
              leading-[0.85]
              tracking-[-0.04em]
              text-white
              drop-shadow-2xl
            "
          >
            <motion.span
              className="block"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              WEB
            </motion.span>
            <motion.span
              className="block"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              APP
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="h-[1px] w-8 bg-white" />
            <span className="
              text-white 
              text-lg 
              font-light 
              tracking-[0.3em] 
              uppercase
            ">
              Sirenas.TV
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Contenedor de imágenes - lado derecho */}
      <div className="
      relative
  flex-1
  h-auto lg:h-screen       
  min-h-[60vh] lg:min-h-0  
  overflow-hidden
  py-8 lg:py-0   
      ">
        {/* Grid decorativo de fondo */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(white 1px, transparent 1px),
                               linear-gradient(90deg, white 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        {/* Imagen 1 - Arriba izquierda con frame aesthetic */}
        <motion.div
          initial={{ opacity: 0, y: -50, rotate: -5 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{
            duration: 1,
            delay: 0.3,
            type: "spring",
            stiffness: 100
          }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.02,
            rotate: 1,
            transition: { duration: 0.3 }
          }}
          className="
            absolute
            top-16
            left-12
            w-[65%]
            drop-shadow-2xl
            group
            cursor-pointer
          "
        >
          {/* Frame blanco aesthetic */}
          <div className="
            bg-white 
            p-4 
            rounded-2xl
            shadow-[0_20px_60px_rgba(0,0,0,0.15)]
            transition-all
            duration-300
            group-hover:shadow-[0_25px_70px_rgba(0,0,0,0.2)]
          ">
            <img
              src="webSirenas.jpeg"
              alt="Web Sirenas"
              className="
                w-full
                h-auto
                rounded-xl
                grayscale
                group-hover:grayscale-0
                transition-all
                duration-500
              "
            />
            {/* Detalle minimalista */}
            <div className="mt-3 flex justify-between items-center px-2">
              <div className="flex gap-1.5">
                <span className="h-1.5 w-1.5 bg-black/20 rounded-full" />
                <span className="h-1.5 w-1.5 bg-black/20 rounded-full" />
                <span className="h-1.5 w-1.5 bg-black/20 rounded-full" />
              </div>
              <span className="text-[10px] text-black/30 tracking-wider uppercase font-medium">
                Dashboard
              </span>
            </div>
          </div>
        </motion.div>

        {/* Imagen 2 - Abajo derecha con frame aesthetic */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotate: 5 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{
            duration: 1,
            delay: 0.5,
            type: "spring",
            stiffness: 100
          }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.02,
            rotate: -1,
            transition: { duration: 0.3 }
          }}
          className="
            absolute
            bottom-12
            right-8
            w-[65%]
            drop-shadow-2xl
            group
            cursor-pointer
          "
        >
          {/* Frame blanco aesthetic */}
          <div className="
            bg-white 
            p-4 
            rounded-2xl
            shadow-[0_20px_60px_rgba(0,0,0,0.15)]
            transition-all
            duration-300
            group-hover:shadow-[0_25px_70px_rgba(0,0,0,0.2)]
          ">
            <img
              src="webSirenas1.jpeg"
              alt="Web Sirenas Detail"
              className="
                w-full
                h-auto
                rounded-xl
                grayscale
                group-hover:grayscale-0
                transition-all
                duration-500
              "
            />
            {/* Detalle minimalista */}
            <div className="mt-3 flex justify-between items-center px-2">
              <div className="flex gap-1.5">
                <span className="h-1.5 w-1.5 bg-black/20 rounded-full" />
                <span className="h-1.5 w-1.5 bg-black/20 rounded-full" />
                <span className="h-1.5 w-1.5 bg-black/20 rounded-full" />
              </div>
              <span className="text-[10px] text-black/30 tracking-wider uppercase font-medium">
                Interface
              </span>
            </div>
          </div>
        </motion.div>

        {/* Elemento decorativo flotante */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="
            absolute
            top-1/2
            right-1/4
            w-32
            h-32
            border-2
            border-white/30
            rounded-full
            -z-10
          "
        />
      </div>
    </section>
  );
}