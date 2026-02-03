"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CRMSirenasPage() {
  const t = useTranslations("ProjectsPage.crmSirenas");

  return (
    <section className="relative flex flex-col lg:flex-row shrink-0 w-screen min-h-screen lg:h-screen bg-white overflow-hidden isolate">

      {/* Contenedor de texto - Mobile First */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 flex flex-col w-full lg:w-1/2 p-6 py-8 lg:p-16 justify-center gap-6 lg:gap-8"
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

        {/* Título con animación de letras */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
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
          className="text-neutral-600 text-base lg:text-lg leading-relaxed max-w-xl font-light"
        >
          {t("description")}
        </motion.p>

        {/* Tags de tecnologías (opcional) */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mt-4"
        >
          {["React", "TypeScript", "Node.js", "PostgreSQL"].map((tech, i) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium text-[#fcb9c0] bg-[#fcb9c0]/10 rounded-full border border-[#fcb9c0]/20"
            >
              {tech}
            </span>
          ))}
        </motion.div> */}
      </motion.div>

      {/* Contenedor de imágenes - Mobile First con Layout Bento */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 flex flex-col lg:w-1/2 gap-6 lg:gap-8 p-6 lg:p-12 justify-center"
      >
        {/* Imagen 1 - Principal */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotate: 2 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02, rotate: -1 }}
          className="relative w-full lg:w-[75%] self-start group"
        >
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-[#fcb9c0]/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative overflow-hidden rounded-xl shadow-2xl shadow-black/10 border border-neutral-200">
            <Image
              src="/crm1.png"
              alt="CRM Sirenas Dashboard"
              width={800}
              height={1000}
              className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-500"
            />

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#fcb9c0]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </motion.div>

        {/* Imagen 2 - Secundaria */}
        <motion.div
          initial={{ opacity: 0, x: -50, rotate: -2 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02, rotate: 1 }}
          className="relative w-full lg:w-[65%] self-end group"
        >
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-[#fcb9c0]/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative overflow-hidden rounded-xl shadow-2xl shadow-black/10 border border-neutral-200">
            <Image
              src="/crm3.png"
              alt="CRM Sirenas Interface"
              width={800}
              height={1000}
              className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-500"
            />

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#fcb9c0]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </motion.div>
      </motion.div>

      {/* Decoración de fondo - Grid sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none" />

      {/* Gradient decorativo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#fcb9c0]/10 rounded-full blur-3xl opacity-50 pointer-events-none" />
    </section>
  );
}
