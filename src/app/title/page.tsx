"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function TitlePage() {
  const t = useTranslations("HomePage");
  const router = useRouter();

  const changeLanguage = (locale: "en" | "es") => {
    document.cookie = `locale=${locale}; path=/`;
    router.refresh();
  };

  return (
    <section className="p-8 flex flex-col h-screen justify-between bg-black text-white">
      <div className="flex gap-4  w-full justify-between p-6 text-4xl font-bold">
        <div className="flex gap-2">
          <span onClick={() => changeLanguage("es")}>{t("languages.es")}</span>
          <span>/</span>
          <span onClick={() => changeLanguage("en")}>{t("languages.en")}</span>
        </div>

        <div>{t("title")}</div>
      </div>

      <div className="relative flex items-center justify-center w-full text-9xl font-semibold text-white gap-24">
        <h1 className="relative z-10 tracking-[-0.15em] text-[16rem] leading-none">
          ROSANNA
        </h1>

        {/* Star */}
        <img
          src="/star.png"
          alt=""
          className="absolute z-20 w-60 h-60 -translate-x-1/2"
          style={{ left: "50%" }}
        />

        <h1 className="relative z-10 tracking-[-0.15em] text-[16rem] leading-none">
          CONTASTI
        </h1>
      </div>
      <div className="flex w-full justify-end p-6 text-4xl font-bold">
        <text>wwww.rosannacontasti.com</text>
      </div>
    </section>
  );
}
