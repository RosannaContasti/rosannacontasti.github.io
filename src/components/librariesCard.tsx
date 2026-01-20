export const LibrariesCard = ({
  items,
  title,
}: {
  items: string[];
  title: string;
}) => (
  <div
    className="
      bg-white
      w-1/4
      h-175
=      flex
      flex-col
      justify-between
      p-8
    "
  >
    {/* Skills arriba */}
    <div className="flex flex-col gap-4">
      {items.map((item) => (
        <div key={item} className="flex justify-center text-2xl">
          {item}
        </div>
      ))}
    </div>

    {/* Title abajo */}
    <div className="flex justify-center pt-6">
      <h2
        className="text-3xl font-bold  md:tracking-[-0.08em]
    lg:tracking-[-0.15em]"
      >
        {title.toLocaleUpperCase()}
      </h2>
    </div>
  </div>
);
