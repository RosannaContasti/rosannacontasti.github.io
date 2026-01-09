export default function ProjectsCoverPage() {
//   const t = useTranslations("HomePage");
//   const router = useRouter();
//   const locale = useLocale();

//   const changeLanguage = (locale: "en" | "es") => {
//     document.cookie = `locale=${locale}; path=/`;
//     router.refresh();
//   };

  return (
    <section className="w-screen flex flex-col items-center justify-around text-6xl bg-[#fcb9c0]  text-black font-semibold p-8">
              <div className="flex w-screen justify-between pr-26 pl-26 text-[clamp(1rem,1.5vw,2rem)]">
                <span>Rosanna Contasti</span>
                <span>3</span>
              </div>
              <div
                className=" flex flex-col  items-center  text-[clamp(4rem,10vw,16rem)]  relative z-10
    leading-none
    tracking-normal
    md:tracking-[-0.08em]
    lg:tracking-[-0.15em] "
              >
                <span>PROYECTOS</span>
                <span>DESTACADOS</span>
              </div>
              <div className="flex w-screen  justify-between pr-26 pl-26 text-[clamp(1rem,1.5vw,2rem)]">
                <span>{`${"<3"}`}</span>
                <span>{`${":)"}`}</span>
              </div>
            </section>


  )
}