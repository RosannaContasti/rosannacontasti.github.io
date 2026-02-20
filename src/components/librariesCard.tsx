
"use client";
import { motion } from "framer-motion";

export const LibrariesCard = ({
  items,
  title,
  index,
}: {
  items: string[];
  title: string;
  index: number;
}) => (
  <motion.div
    whileHover={{
      y: -6,
      transition: { duration: 0.3, ease: "easeOut" },
    }}
    className="relative bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl flex flex-col p-6 lg:p-8 min-h-80 transition-all duration-300 hover:bg-white/55 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:border-white/80 group overflow-hidden"
  >
    {/* Subtle glow on hover */}
    <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

    {/* Card Header: number badge + category title */}
    <div className="flex items-center gap-3 mb-5">
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white text-xs font-bold shrink-0">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="text-lg lg:text-xl font-bold tracking-[-0.02em] uppercase">
        {title}
      </h3>
    </div>

    {/* Animated divider */}
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="h-px bg-black/10 mb-6"
    />

    {/* Items as pills */}
    <div className="flex flex-wrap gap-2">
      {items.map((item, i) => (
        <motion.span
          key={item}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            delay: i * 0.04,
            ease: "easeOut",
          }}
          className="px-3 py-1.5 text-sm font-medium bg-black/5 hover:bg-black/10 border border-black/8 hover:border-black/15 rounded-full transition-all duration-200 cursor-default"
        >
          {item}
        </motion.span>
      ))}
    </div>
  </motion.div>
);
