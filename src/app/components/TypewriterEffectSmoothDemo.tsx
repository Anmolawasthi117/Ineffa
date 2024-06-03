"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Digital",
    },
    {
      text: "agency",
    },
    {
      text: "crafting",
    },
    {
      text: "🚀experience",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="  ">
      
      <TypewriterEffectSmooth words={words} />
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-2xl  ">
     for the brands 🌈 of tomorrow ✨
      </p>
      </div>
  );
}
