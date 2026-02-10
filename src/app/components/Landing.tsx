"use client";

import { motion } from "framer-motion";

const REPEAT_COUNT = 6;
const TEXT = "ionicpost.co";
const GAP = "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0";

export default function Landing() {
  const repeatedText = Array(REPEAT_COUNT).fill(TEXT).join(GAP);

  return (
    <main className="relative flex h-svh items-center overflow-hidden bg-white">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            duration: 240,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {[0, 1].map((i) => (
          <h1
            key={i}
            className="shrink-0 py-[10px] font-bold leading-none text-ionic-purple"
            style={{ fontSize: "calc(100svh - 20px)", letterSpacing: "-0.07em" }}
          >
            {repeatedText}
            {GAP}
          </h1>
        ))}
      </motion.div>
    </main>
  );
}
