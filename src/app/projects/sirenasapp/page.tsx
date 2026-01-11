"use client"
export default function SirenasAppPage() {
  return (
    <section className="flex flex-row shrink-0 w-screen h-screen  justify-between bg-black">
      <div className="flex flex-col w-1/2 pl-10">
        <span
          className="text-[clamp(2rem,8vw,10rem)] text-white tracking-[-0.1em]
    lg:tracking-[-0.15em]"
        >
          PROYECTO <br /> SIRENAS <br /> APP
        </span>
        <span className="mr-20 text-white">
          La App de Proyecto Sirenas fue desarrollada para ofrecer a los
          usuarios una experiencia móvil fluida e intuitiva, facilitando el
          acceso a contenidos, funcionalidades y comunicaciones clave del
          proyecto.{" "}
        </span>
      </div>
      <div className="flex flex-col w-1/2 gap-6">
        {/* Imagen */}
        {/* <Image
                  src="/sirenas-app.avif"
                  alt="Proyecto Sirenas App"
                  width={1200}
                  height={800}
                  className="w-full h-auto "
                  priority
                /> */}

        {/* Video */}
        <video
          src="/sirenasapp.mov"
          className="w-full h-auto"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </section>
  );
}
