"use client";
import { useTranslations } from "next-intl";
import CoverTitle from "@/src/components/CoverTitle";


export default function ProjectsCoverPage() {
  const t = useTranslations("ProjectsPage");
  return (
    <section className="relative h-screen shrink-0 w-screen flex flex-col items-center justify-around text-6xl bg-[#fcb9c0] text-black font-semibold p-8 overflow-hidden isolate">
      <div className="flex w-screen justify-between pr-26 pl-26 text-[clamp(1rem,1.5vw,2rem)]">
        <span>Rosanna Contasti</span>
        <span>3</span>
      </div>


      <CoverTitle lines={t.raw("coverTitle")} />

      <div className="flex w-screen  justify-between pr-26 pl-26 text-[clamp(1rem,1.5vw,2rem)]">
        <span>{`${"<3"}`}</span>
        <span>{`${":)"}`}</span>
      </div>
    </section>
  );
}
