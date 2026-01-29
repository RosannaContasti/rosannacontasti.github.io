
"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("AboutPage");
  return (
    <section className="
      relative
      w-screen
      min-h-screen
      flex
      flex-col
      lg:flex-row
      shrink-0
      bg-white
      overflow-hidden
      isolate
    ">
      {/* Texto */}
      <div className="
        bg-[#1b1b1b]
        w-full
        lg:w-1/2
         min-h-0 lg:min-h-screen  
        px-6
        py-12 lg:py-20 
        flex
        flex-col
          gap-6 lg:gap-8 
        text-white
      ">
        <div
          className="
            relative
            text-[clamp(2.5rem,8vw,16rem)]
            tracking-[-0.04em]
            lg:tracking-[-0.15em]
            leading-none
            text-justify
            lg:pb-10
          "
        >
          <span>{t("greeting")}</span>
          <br />
          <span className="relative inline-block">
            {t("name")}
            <Image
              src="star.png"
              alt=""
              width={160}
              height={160}
              className="
             absolute
      top-1/2
      left-full
      -translate-y-1/2
      translate-x-2 lg:translate-x-6
      z-20
      w-[clamp(2.5rem,8vw,14rem)] origin-left
      h-auto
      pointer-events-none
              "
            />
          </span>
        </div>

        <span className="
          text-[clamp(1rem,3.8vw,1.4rem)]
          leading-relaxed
          whitespace-pre-line
          lg:pr-50
          text-justify
        ">
          {t("bio")}
        </span>
      </div>

      {/* Imagen */}
      <div className="
        w-full
        lg:w-1/2
        h-[60vh]
        lg:h-screen
        relative
        overflow-hidden
      ">
        <Image
          src="retrato.jpg"
          alt="Rosanna"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
    </section>
  );
}
