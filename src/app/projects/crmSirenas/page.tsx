"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CRMSirenasPage() {
  const t = useTranslations("ProjectsPage.crmSirenas");

  return (
    <section className="relative flex flex-row shrink-0 w-screen h-screen justify-between bg-white overflow-hidden isolate">
      <div className="flex flex-col  items-start w-1/2 h-full text-[#fcb9c0]">
        <h1
          className="
          bg-clip-text
        md:tracking-[-0.08em]
        lg:tracking-[-0.12em]
        text-[clamp(3rem,10vw,16rem)]
        font-bold
        leading-[0.85]
        tracking-[-0.04em]
        text-[#fcb9c0] 
        drop-shadow-2xl
        "
        >
          CRM
        </h1>

        <h1
          className="
           bg-clip-text
         md:tracking-[-0.08em]
         lg:tracking-[-0.12em]
         text-[clamp(3rem,10vw,16rem)]
         font-bold
         leading-[0.85]
         tracking-[-0.04em]
         text-[#fcb9c0] 
         drop-shadow-2xl
         "
        >
          PROYECTO SIRENAS
        </h1>

        <span className="
            text-base lg:text-lg
            leading-relaxed
            max-w-xl
            font-light
            text-neutral-800
            text-justify
            lg:pr-10
            lg:pl-10
            lg:pt-30
            ">
          {t("description")}
        </span>
      </div>

      <div className="flex flex-col w-1/2 gap-16 p-16">
        <div className="w-[70%] self-start">
          <Image
            src="/crm1.png"
            alt="CRM Sirenas"
            width={800}
            height={1000}
            className="w-full h-auto  grayscale"
          />
        </div>

        <div className="w-[60%] self-end">
          <Image
            src="/crm3.png"
            alt="CRM Sirenas"
            width={800}
            height={1000}
            className="w-full h-auto grayscale"
          />
        </div>
      </div>


    </section>
  );
}
