"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/contants";

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl text-center font-extrabold tracking-tighter">
          Beyond Expectations.
        </h2>
        <p className="text-3xl md:text-xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#ffffff] to-[#5409a4] tracking-tight mt-5 max-w-sm mx-auto">
          Our revolutionary COGNITICA LMS have transformed our clients&apos;
          strategies.
        </p>
        <div className="flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            initial={{
              translateX: "-50%",
            }}
            animate={{
              translateX: "0",
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-5 pr-5 flex-none"
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="p-6 md:p-10 border border-purple-700 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,0.3),black)] max-w-xs md:max-w-md flex-none"
              >
                <span className="text-lg md:text-2xl tracking-tight">
                  {testimonial.text}
                </span>
                <div className="flex items-center gap-3 mt-5">
                  <div className="relative after:content-[''] before:content-[''] after:absolute before:absolute after:inset-0 before:inset-0 after:bg-[rgb(140,69,255)] after:mix-blend-soft-light before:border before:border-pink-400 before:z-10 before:rounded-lg">
                    <Image
                      src={testimonial.avatarImg}
                      alt={`Avatar for ${testimonial.name}`}
                      className="size-11 rounded-lg grayscale"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span>{testimonial.name}</span>
                    <span className="text-sm text-white/50">
                      {testimonial.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};