"use client";

import GradualSpacing from "./magicui/gradual-spacing";
import RetroGrid from "@/components/magicui/retro-grid";

export function RetroGri() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <GradualSpacing
      className="font-display text-center text-3xl font-extrabold   md:text-7xl md:leading-[5rem] pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text  leading-none tracking-tighter text-transparent"
      text="WANNA KNOW MORE ABOUT US?"
    />

      <RetroGrid />
    </div>
  );
}
export default  RetroGri;
