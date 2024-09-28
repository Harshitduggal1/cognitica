"use client"

import React, { useEffect, useRef } from 'react';

import Meteors from "@/components/ui/meteors";
import { gsap } from "gsap";
import { motion } from "framer-motion";

export function MeteorDemo() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" }
    );

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.5, delay: 1, ease: "back.out(1.7)" }
    );

    // Neon effect animation
    gsap.to([titleRef.current, subtitleRef.current], {
      textShadow: "0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.8), 0 0 30px rgba(255,255,255,0.8)",
      repeat: -1,
      yoyo: true,
      duration: 2,
    });
  }, []);

  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-gradient-to-br from-black via-purple-900 to-indigo-900 md:shadow-xl">
      <Meteors number={30} />
      <motion.span
        ref={titleRef}
        className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-center text-8xl font-bold leading-none text-transparent"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        STILL CONFUSED?
      </motion.span>
      <motion.span
        ref={subtitleRef}
        className="pointer-events-none mt-4 whitespace-pre-wrap bg-gradient-to-b from-teal-400 to-blue-500 bg-clip-text text-center text-4xl font-semibold leading-tight text-transparent"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        Join our Newsletter now
        <br />
        to get the latest updates and insights on our AI-powered LMS solutions.
      </motion.span>

      <motion.a
        ref={buttonRef}
        href="/newsletter"
        className="mt-8 inline-block rounded-full bg-gradient-to-b from-pink-600 to-purple-600 px-8 py-4 text-xl font-bold text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:from-pink-500 hover:to-purple-500"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(255,0,255,0.5)",
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, delay: 1 }}
      >
        JOIN NEWSLETTER
      </motion.a>
    </div>
  );
}