"use client";

export default function SirenasWebAppPage() {
  return (
    <section className="flex flex-row shrink-0 w-screen h-screen  justify-between bg-[#fcb9c0]">
      <div className="flex flex-col w-1/3 h-screen justify-between p-8">
        {/* TOP */}
        <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </span>

        {/* BOTTOM */}
        <div
          className="
      flex flex-col
      text-[clamp(4rem,10vw,16rem)]
      leading-none
      tracking-normal
      md:tracking-[-0.08em]
      lg:tracking-[-0.15em]
      text-white
    "
        >
          <span>WEB APP</span>
          <span>SIRENAS.TV</span>
        </div>
      </div>

      <div className="relative flex-1  h-screen overflow-hidden">
        {/* Imagen arriba – izquierda */}
        <img
          src="webSirenas.jpeg"
          alt="Web Sirenas"
          className="
      absolute
      top-0
      left-20
      w-[75%]
      grayscale
    "
        />

        {/* Imagen abajo – derecha */}
        <img
          src="webSirenas1.jpeg"
          alt="Web Sirenas Detail"
          className="
      absolute
      bottom-50
      right-0
      w-[75%]
            grayscale

    "
        />
      </div>
    </section>
  );
}
