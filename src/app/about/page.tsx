// "use client";
// import Image from "next/image";

// export default function AboutSection() {
//   return (
//     <section className="w-screen h-screen flex shrink-0 flex-row items-center justify-center text-white text-6xl bg-white">
//       <div className="bg-[#1b1b1b] w-1/2 h-full p-20 flex items-start justify-evenly flex-col ">
//         <div
//           className="
//     relative
//     text-[clamp(4rem,10vw,16rem)]
//     tracking-[-0.1em]
//     lg:tracking-[-0.15em]
//     align-middle
//   "
//         >
//           <span>HOLA, SOY</span>
//           <br />

//           {/* Contenedor SOLO de ROSANNA */}
//           <span className="relative inline-block">
//             ROSANNA
//             {/* Estrella */}
//             <Image
//               src="/star.png"
//               alt=""
//               width={200}
//               height={200}
//               className="
//       absolute
//       top-1/2
//       -right-6
//   md:-right-10
//   lg:-right-25
//       -translate-y-1/2
//       z-20
//       w-[clamp(3rem,6vw,20rem)]
//       h-auto
//     "
//               priority
//             />
//           </span>
//         </div>
//         <span className="text-[clamp(1rem,1.4vw,1.5rem)] leading-12">
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industry's standard dummy text ever
//           since the 1500s, when an unknown printer took a galley of type and
//           scrambled it to make a type specimen book. It has survived not only
//           five centuries, but also the leap into electronic typesetting,
//           remaining essentially unchanged. It was popularised in the 1960s with
//           the release of Letraset sheets containing Lorem Ipsum passages, and
//           more recently with desktop publishing software like Aldus PageMaker
//           including versions of Lorem Ipsum.
//         </span>
//       </div>

//       <div className="w-1/2 h-full relative bg-black overflow-hidden">
//         <Image
//           src="/retrato.jpg"
//           alt="Rosanna"
//           fill
//           className="object-cover object-center"
//           priority
//         />
//       </div>
//     </section>
//   );
// }

"use client";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="
      w-screen
      min-h-screen
      flex
      flex-col
      lg:flex-row
      shrink-0
      bg-white
    ">
      {/* Texto */}
      <div className="
        bg-[#1b1b1b]
        w-full
        lg:w-1/2
        min-h-screen
        px-6
        py-12
        flex
        flex-col
        gap-8
        text-white
      ">
        <div
          className="
            relative
            text-[clamp(2.5rem,8vw,16rem)]
            tracking-[-0.04em]
            lg:tracking-[-0.15em]
            leading-none
          "
        >
          <span>HOLA, SOY</span>
          <br />
          <span className="relative inline-block">
            ROSANNA
            <Image
              src="star.png"
              alt=""
              width={160}
              height={160}
              className="
                absolute
                top-1/2
                right-[-1rem]
                lg:right-[-3rem]
                -translate-y-1/2
                z-20
                w-[clamp(2.5rem,10vw,20rem)]
                h-auto
              "
              priority
            />
          </span>
        </div>

        <span className="
          text-[clamp(1rem,3.8vw,1.4rem)]
          leading-relaxed
        ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </span>
      </div>

      {/* Imagen */}
      <div className="
        w-full
        lg:w-1/2
        h-[60vh]
        lg:h-screen
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
