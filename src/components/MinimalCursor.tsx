"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function MinimalCursor() {
  const [isHovering, setIsHovering] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const cursorXSpring = useSpring(cursorX, { damping: 25, stiffness: 300 });
  const cursorYSpring = useSpring(cursorY, { damping: 25, stiffness: 300 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", moveCursor);
    
    const interactiveElements = document.querySelectorAll("a, button");
    interactiveElements.forEach(el => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        * { cursor: none !important; }
      `}</style>

      {/* Círculo exterior */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%"
        }}
      >
        <motion.div
          className="w-10 h-10 rounded-full border-2 border-pink-400"
          animate={{
            scale: isHovering ? 1.5 : 1,
            borderColor: isHovering ? "#fcb9c0" : "#f472b6"
          }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </motion.div>

      {/* Punto interior */}
      <motion.div
        className="fixed w-2 h-2 bg-pink-400 rounded-full z-[9999] pointer-events-none"
        style={{
          left: cursorX,
          top: cursorY,
          translateX: "-50%",
          translateY: "-50%"
        }}
      />
    </>
  );
}