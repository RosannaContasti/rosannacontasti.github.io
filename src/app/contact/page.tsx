import Image from "next/image";

const ContactCover = () => (
  <section className=" h-screen shrink-0 w-screen flex flex-col items-center justify-around text-6xl bg-white  text-black font-semibold p-8">
    <div className="flex w-screen justify-between pr-26 pl-26 text-[clamp(1rem,1.5vw,2rem)]">
      <span>Rosanna Contasti</span>
      <span>9</span>
    </div>
    {/* Texto + estrella */}
    <div className="relative flex flex-col items-center">
      {/* Estrella */}
      <Image
        src="star.png"
        alt="Star"
        width={300}
        height={300}
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          z-10
        "
      />

      {/* Texto */}
      <div
        className="
          relative
          text-[clamp(4rem,10vw,16rem)]
          leading-none
          tracking-normal
          md:tracking-[-0.08em]
          lg:tracking-[-0.15em]
          flex
          flex-col
          items-center
        "
      >
        <span>¡TRABAJEMOS</span>
        <span>JUNTOS!</span>
      </div>
    </div>
    <div className="flex w-screen  justify-between pr-26 pl-26 text-[clamp(1rem,1.5vw,2rem)]">
      <span>{`${"<3"}`}</span>
      <span>{`${":)"}`}</span>
    </div>
  </section>
);

export default ContactCover;
