import { useTranslations } from "next-intl";
import CoverTitle  from "@/src/components/CoverTitle";


export default function ProjectsCoverPage() {
     const t = useTranslations("HomePage");
  //   const router = useRouter();
  //   const locale = useLocale();

  //   const changeLanguage = (locale: "en" | "es") => {
  //     document.cookie = `locale=${locale}; path=/`;
  //     router.refresh();
  //   };

  const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    y: 60,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};


  return (
    <section className=" h-screen shrink-0 w-screen flex flex-col items-center justify-around text-6xl bg-[#fcb9c0]  text-black font-semibold p-8">
      <div className="flex w-screen justify-between pr-26 pl-26 text-[clamp(1rem,1.5vw,2rem)]">
        <span>Rosanna Contasti</span>
        <span>3</span>
      </div>


<CoverTitle lines={["PROYECTOS", "DESTACADOS"]} />

      <div className="flex w-screen  justify-between pr-26 pl-26 text-[clamp(1rem,1.5vw,2rem)]">
        <span>{`${"<3"}`}</span>
        <span>{`${":)"}`}</span>
      </div>
    </section>
  );
}
