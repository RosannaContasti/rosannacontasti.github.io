"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useLocale } from "next-intl";

export default function TitlePage() {
  const t = useTranslations("HomePage");
  const router = useRouter();
  const locale = useLocale();

  const changeLanguage = (locale: "en" | "es") => {
    document.cookie = `locale=${locale}; path=/`;
    router.refresh();
  };

  return (
    <section className="w-screen p-8 flex shrink-0 flex-col h-screen justify-between bg-black text-white">
      <div className="flex w-full justify-between p-6 font-bold">
        {/* Language switch */}
        <div className="flex gap-2 items-center text-[clamp(1rem,1.5vw,1.5rem)]">
          {/* <button
            onClick={() => changeLanguage("es")}
            className="cursor-pointer transition-opacity hover:opacity-70"
          >
            {t("languages.es")}
          </button>

          <span className="opacity-60">/</span>

          <button
            onClick={() => changeLanguage("en")}
            className="cursor-pointer transition-opacity hover:opacity-70"
          >
            {t("languages.en")}
          </button> */}
          <button
            onClick={() => changeLanguage("es")}
            className={`transition-opacity ${
              locale === "es" ? "opacity-100" : "opacity-40 hover:opacity-70"
            }`}
          >
            {t("languages.es")}
          </button>
        </div>

        {/* Title */}
        <div className="text-[clamp(1.2rem,2vw,2.5rem)]">{t("title")}</div>
      </div>

      <div
        className="
  relative
  flex flex-col
  lg:flex-row
  items-center
  justify-center
  w-full
  font-semibold
  text-white
  gap-8
  lg:gap-24
"
      >
        <h1
          className="
    relative z-10
    leading-none
    tracking-normal
    text-[clamp(4rem,10vw,16rem)]
    md:tracking-[-0.08em]
    lg:tracking-[-0.15em]
  "
        >
          ROSANNA
        </h1>

        {/* Star */}
        <div
          className="
    absolute
    w-[clamp(4rem,20vw,15rem)]
    h-[clamp(4rem,20vw,15rem)]
    z-10
  "
        >
          <Image
            src="/star.png"
            alt=""
            fill
            className="object-contain"
            priority
            style={{ zIndex: 10 }}
          />
        </div>

        <h1
          className="
    relative
    leading-none
    tracking-normal
    text-[clamp(4rem,10vw,16rem)]
    md:tracking-[-0.08em]
    lg:tracking-[-0.15em]
  "
        >
          CONTASTI
        </h1>
      </div>
      <div className="flex w-full justify-end p-6 text-4xl font-bold">
        <text className="text-[clamp(1rem,1.5vw,2rem)]">
          wwww.rosannacontasti.com
        </text>
      </div>
    </section>
  );
}
