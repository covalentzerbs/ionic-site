"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [visible, setVisible] = useState(false);
  const isTouchDevice = useRef(false);

  const mouseX = useMotionValue(-20);
  const mouseY = useMotionValue(-20);

  const x = useSpring(mouseX, { damping: 25, stiffness: 250, mass: 0.5 });
  const y = useSpring(mouseY, { damping: 25, stiffness: 250, mass: 0.5 });

  useEffect(() => {
    // Hide custom cursor on touch devices
    isTouchDevice.current =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice.current) return;

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    document.addEventListener("mousemove", move);
    return () => document.removeEventListener("mousemove", move);
  }, [mouseX, mouseY, visible]);

  if (!visible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-[9999] h-[10px] w-[10px] rounded-full bg-white"
      style={{
        left: x,
        top: y,
        x: "-50%",
        y: "-50%",
        mixBlendMode: "difference",
      }}
    />
  );
}
