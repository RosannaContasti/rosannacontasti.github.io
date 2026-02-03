
"use client";
import { motion } from "framer-motion";

export const LibrariesCard = ({
  items,
  title,
}: {
  items: string[];
  title: string;
}) => (
  <motion.div
    whileHover={{ 
      y: -8, 
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeOut" }
    }}
    className="bg-white flex flex-col justify-between p-8 min-h-[22rem] transition-shadow duration-300 hover:shadow-2xl group"
  >
    {/* Items con animación al hacer hover */}
    <div className="flex flex-col gap-4">
      {items.map((item, index) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.4, 
            delay: index * 0.1,
            ease: "easeOut" 
          }}
          className="text-center text-2xl group-hover:text-[#fcb9c0] transition-colors duration-300"
        >
          {item}
        </motion.div>
      ))}
    </div>

    {/* Title con underline animado */}
    <div className="flex flex-col items-center pt-8 gap-2">
      <h2 className="text-3xl font-bold tracking-tight md:tracking-[-0.08em] lg:tracking-[-0.15em]">
        {title.toUpperCase()}
      </h2>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: "60%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="h-1 bg-[#fcb9c0]"
      />
    </div>
  </motion.div>
);