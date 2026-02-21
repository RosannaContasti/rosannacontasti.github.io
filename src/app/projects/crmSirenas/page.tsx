"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CRMSirenasPage() {
  const t = useTranslations("ProjectsPage.crmSirenas");

  return (
    <section className="
      relative
      flex flex-col lg:flex-row
      w-full
      min-h-screen
      bg-white
      overflow-hidden
      isolate
    ">
      {/* Decoración de fondo */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#fcb9c0]/10 rounded-full blur-3xl opacity-50 pointer-events-none" />

      {/* Contenedor de texto */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="
          relative z-10
          flex flex-col
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
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 w-fit"
        >
          <div className="flex gap-1.5">
            <span className="h-2 w-2 bg-[#fcb9c0] rounded-full animate-pulse" />
            <span className="h-2 w-2 bg-[#fcb9c0]/70 rounded-full animate-pulse delay-75" />
            <span className="h-2 w-2 bg-[#fcb9c0]/50 rounded-full animate-pulse delay-150" />
          </div>
          <span className="text-[#fcb9c0] text-xs font-medium tracking-[0.2em] uppercase">
            Web Platform
          </span>
        </motion.div>

        {/* Título */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
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
              text-black
              drop-shadow-2xl
            "
          >
            {t("title").split('\n').map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </motion.h1>
        </motion.div>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="
            text-neutral-600
            text-[clamp(0.82rem,1.5vw,1.1rem)]
            leading-relaxed
            font-light
            max-w-xl
          "
        >
          {t("description")}
        </motion.p>
      </motion.div>

      {/* Contenedor de imágenes */}
      <div className="relative z-10 flex-1 w-full lg:w-auto overflow-hidden">

        {/* MOBILE y TABLET: imágenes apiladas */}
        <div className="flex lg:hidden flex-col gap-6 px-5 sm:px-8 pb-12 pt-4">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <div className="bg-white p-3 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
              <Image
                src="/crm1.png"
                alt="CRM Sirenas Dashboard"
                width={800}
                height={1000}
                className="w-full h-auto rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="mt-2 flex justify-between items-center px-1">
                <div className="flex gap-1.5">
                  <span className="h-1.5 w-1.5 bg-black/20 rounded-full" />
                  <span className="h-1.5 w-1.5 bg-black/20 rounded-full" />
                  <span className="h-1.5 w-1.5 bg-black/20 rounded-full" />
                </div>
                <span className="text-[9px] text-black/30 tracking-wider uppercase font-medium">Dashboard</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <div className="bg-white p-3 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
              <Image
                src="/crm3.png"
                alt="CRM Sirenas Interface"
                width={800}
                height={1000}
                className="w-full h-auto rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="mt-2 flex justify-between items-center px-1">
                <div className="flex gap-1.5">
                  <span className="h-1.5 w-1.5 bg-black/20 rounded-full" />
                  <span className="h-1.5 w-1.5 bg-black/20 rounded-full" />
                  <span className="h-1.5 w-1.5 bg-black/20 rounded-full" />
                </div>
                <span className="text-[9px] text-black/30 tracking-wider uppercase font-medium">Interface</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* DESKTOP: imágenes superpuestas */}
        <div className="hidden lg:block relative w-full h-full min-h-screen">
          {/* Imagen 1 - Arriba izquierda */}
          <motion.div
            initial={{ opacity: 0, y: -50, rotate: -3 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, rotate: 1, transition: { duration: 0.3 } }}
            className="absolute top-[8%] left-[6%] w-[55%] drop-shadow-2xl group cursor-pointer"
          >
            <div className="bg-white p-4 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] group-hover:shadow-[0_25px_70px_rgba(0,0,0,0.2)] transition-all duration-300">
              <Image
                src="/crm1.png"
                alt="CRM Sirenas Dashboard"
                width={800}
                height={1000}
                className="w-full h-auto rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="mt-3 flex justify-between items-center px-2">
                <div className="flex gap-1.5">
                  <span className="h-1.5 w-1.5 bg-black/20 rounded-full" />
                  <span className="h-1.5 w-1.5 bg-black/20 rounded-full" />
                  <span className="h-1.5 w-1.5 bg-black/20 rounded-full" />
                </div>
                <span className="text-[10px] text-black/30 tracking-wider uppercase font-medium">Dashboard</span>
              </div>
            </div>
          </motion.div>

          {/* Imagen 2 - Abajo derecha */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotate: 3 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, rotate: -1, transition: { duration: 0.3 } }}
            className="absolute bottom-[6%] right-[4%] w-[55%] drop-shadow-2xl group cursor-pointer"
          >
            <div className="bg-white p-4 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] group-hover:shadow-[0_25px_70px_rgba(0,0,0,0.2)] transition-all duration-300">
              <Image
                src="/crm3.png"
                alt="CRM Sirenas Interface"
                width={800}
                height={1000}
                className="w-full h-auto rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="mt-3 flex justify-between items-center px-2">
                <div className="flex gap-1.5">
                  <span className="h-1.5 w-1.5 bg-black/20 rounded-full" />
                  <span className="h-1.5 w-1.5 bg-black/20 rounded-full" />
                  <span className="h-1.5 w-1.5 bg-black/20 rounded-full" />
                </div>
                <span className="text-[10px] text-black/30 tracking-wider uppercase font-medium">Interface</span>
              </div>
            </div>
          </motion.div>

          {/* Elemento decorativo flotante */}
          <motion.div
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 right-1/4 w-32 h-32 border-2 border-neutral-200/30 rounded-full -z-10"
          />
        </div>
      </div>
    </section>
  );
}