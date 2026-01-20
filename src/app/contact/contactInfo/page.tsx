import { useTranslations } from "next-intl";

export default function ContactInfoPage() {
  const t = useTranslations("HomePage");
  //   const router = useRouter();
  //   const locale = useLocale();

  //   const changeLanguage = (locale: "en" | "es") => {
  //     document.cookie = `locale=${locale}; path=/`;
  //     router.refresh();
  //   };

  return (
    <section className=" h-screen shrink-0 w-screen flex flex-col items-center justify-around text-6xl bg-[#000000]  text-black font-semibold p-8">
      <div
        className=" flex 
        flex-col 
         items-start 
         z-10
     text-[#fcb9c0]
     "
      >
        <span
          className="text-[clamp(4rem,10vw,16rem)]     
          leading-none
    tracking-normal
    md:tracking-[-0.08em]
    lg:tracking-[-0.15em]"
        >
          CONTACTO
        </span>
        <span>githube</span>
        <span>linkedin</span>
      </div>
    </section>
  );
}
