"use client";

import WordPullUp from "./magicui/word-pull-up";
import acmelogo from "@/assets/logo-acme.png";
import apexLogo from "@/assets/logo-apex.png";
import celestialLogo from "@/assets/logo-celestial.png";
import echoLogo from "@/assets/logo-echo.png";
import { motion } from "framer-motion";
import pulseLogo from "@/assets/logo-pulse.png";
import quantumLogo from "@/assets/logo-quantum.png";

export const LogoTicker = () => {
  return (
    <section className="w-[90%] m-auto md:container h-[40vh] flex flex-col items-center justify-center">
      {/* Text is centered and pushed down slightly */}
      <WordPullUp
  className="
    text-2xl 
    mt-10 
    font-extrabold 
    tracking-[-0.02em] 
    bg-gradient-to-b from-[#ff6ec4] via-[#9d00ff] to-[#00d4ff] 
    bg-clip-text 
    text-transparent 
    md:text-7xl 
    md:leading-[5rem] 
    text-center 
    w-full 
    mb-4 
    relative 
    neon-effect
  "
  words="COMPANIES THAT TRUST US✨"
/>


      {/* Animation Div */}
      <div className="w-full flex items-center mt-4 overflow-hidden">
        <div className="flex flex-1 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] overflow-hidden">
          <motion.div
            initial={{ translateX: "-100%" }}
            animate={{
              translateX: "0%",
              transition: {
                repeat: Infinity,
                ease: "linear",
                duration: 20,
              },
            }}
            className="flex gap-10"
          >
            {[
              acmelogo,
              apexLogo,
              celestialLogo,
              quantumLogo,
              pulseLogo,
              echoLogo,
              acmelogo,
              apexLogo,
              celestialLogo,
              quantumLogo,
              pulseLogo,
              echoLogo,
            ].map((logo) => (
              <img
                src={logo.src}
                alt={`Logo for ${logo.src}`}
                key={logo.src}
                className="w-auto h-12"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
