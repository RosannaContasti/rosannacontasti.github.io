import { LibrariesCard } from "@/src/components/librariesCard";
import { skills } from "../mocks/libraries";

const LibrariesPage = () => (
  <section className="
  min-h-screen 
  shrink-0 
  w-screen 
  flex 
  flex-col 
  items-center  
  text-6xl 
  bg-[#fcb9c0] 
  justify-between
   text-black 
  font-semibold 
  p-8    
  overflow-hidden
  md:items-center
  lg:items-center
  ">
    <div
      className="
        mx-auto
        grid
        w-full
        max-w-7xl
        grid-cols-1
        gap-8
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
      "
    >
      {skills.map((skill) => (
        <LibrariesCard
          key={skill.category}
          items={skill.items}
          title={skill.category}
        />
      ))}
    </div>
  </section>
);

export default LibrariesPage;
