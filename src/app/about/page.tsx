"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("AboutPage");
  return (
    <section className="
      relative
      w-full
      min-h-screen
      flex
      flex-col
      lg:flex-row
      bg-[#1b1b1b]
      overflow-x-hidden
      isolate
    ">
      {/* Texto */}
      <div className="
        bg-[#1b1b1b]
        w-full
        lg:w-1/2
        flex
        flex-col
        justify-center
        gap-4
        sm:gap-6
        lg:gap-8
        px-5
        sm:px-8
        md:px-12
        lg:px-14
        xl:px-20
        py-10
        sm:py-14
        lg:py-16
        xl:py-20
        text-white
        flex-1
        lg:flex-none
      ">
        {/* Título */}
        <div className="
          relative
          text-[clamp(2.2rem,7vw,12rem)]
          tracking-[-0.03em]
          sm:tracking-[-0.05em]
          lg:tracking-[-0.1em]
          xl:tracking-[-0.15em]
          leading-none
          lg:pb-6
          xl:pb-10
        ">
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
                translate-x-1
                sm:translate-x-2
                lg:translate-x-4
                xl:translate-x-6
                z-20
                w-[clamp(1.8rem,5vw,10rem)]
                h-auto
                pointer-events-none
                origin-left
              "
            />
          </span>
        </div>

        {/* Bio */}
        <span className="
          text-[clamp(0.82rem,1vw,1rem)]
          leading-relaxed
          whitespace-pre-line
          text-justify
          w-full
          lg:pr-8
          xl:pr-16
        ">
          {t("bio")}
        </span>
      </div>

      {/* Imagen */}
      <div className="
        w-full
        lg:w-1/2
        h-[55vw]
        min-h-[300px]
        sm:h-[55vw]
        md:h-[50vw]
        lg:h-auto
        lg:flex-1
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