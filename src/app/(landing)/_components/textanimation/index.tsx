"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

import BoxReveal from "@/components/ui/box-reveal";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { gsap } from 'gsap';

const GradientBackground = () => (
  <div className="absolute inset-0 bg-gradient-to-b from-purple-950 to-purple-600  opacity-70 animate-gradient" />
);

const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(100)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-3 h-3 bg-white rounded-full opacity-30 shadow-lg"
        initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%" }}
        animate={{
          x: Math.random() * 100 + "%",
          y: Math.random() * 100 + "%",
          scale: [1, 1.5, 1],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{ duration: 12 + Math.random() * 20, repeat: Infinity }}
      />
    ))}
  </div>
);

const EnhancedBoxReveal = ({ children, boxColor, duration }: { children: React.ReactElement; boxColor: string; duration: number }) => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ y: 0, opacity: 1 });
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={controls}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <BoxReveal boxColor={boxColor} duration={duration}>
        {children}
      </BoxReveal>
    </motion.div>
  );
}

export function EnhancedBoxRevealDemo() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gsap-animate", {
        duration: 1.2,
        y: 150,
        opacity: 0,
        stagger: 0.3,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden text-white">
      <GradientBackground />
      <FloatingParticles />
      <div
        ref={containerRef}
        className="relative z-10 max-w-3xl mx-auto px-6 py-20 sm:px-8 lg:px-10 flex flex-col items-center"
      >
        <EnhancedBoxReveal boxColor="#8b5cf6" duration={0.7}>
          <h1 className="gsap-animate text-7xl font-extrabold tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-400 to-pink-600">
            EXPLORE OUR WORLD<span className="text-indigo-300">.</span>
          </h1>
        </EnhancedBoxReveal>

        <EnhancedBoxReveal boxColor="#8b5cf6" duration={0.7}>
          <h2 className="gsap-animate mt-8 text-2xl font-semibold text-center">
            Become a part of our{" "}
            <a 
  href="/affiliate-program" 
  className="text-indigo-400 hover:text-emerald-600 hover:underline"
>
  Affiliate Program
</a>
          </h2>
        </EnhancedBoxReveal>

        <EnhancedBoxReveal boxColor="#8b5cf6" duration={0.7}>
          <div className="gsap-animate mt-10 space-y-5 text-lg">
            <p className="flex items-center">
              <span className="mr-2 text-indigo-400">→</span>
              Elevate your learning experience with Cognitica AI:
            </p>
            <ul className="space-y-3 pl-6">
              {[
                { text: 'User-friendly dashboard', link: '/group/create' },
                { text: '24/7 personalized support', link: '/group/create' },
                { text: 'Free white-label analytics 🎉', link: '/group/create' },
                { text: 'Higher commissions with personalized dashboard', link: '/group/create' },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="font-semibold text-indigo-300 hover:underline"
                  whileHover={{ scale: 1.1, color: '#ff63a5' }} // Change color on hover
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href={item.link}>{item.text}</a>
                </motion.li>
              ))}
            </ul>
            <p className="flex items-center">
              <span className="mr-2 text-indigo-400">→</span>
              JOIN US AND TRANSFORM YOUR LMS EXPERIENCE
            </p>
          </div>
        </EnhancedBoxReveal>

        <EnhancedBoxReveal boxColor="#8b5cf6" duration={0.7}>
          <div className="gsap-animate mt-12 flex justify-center">
            <RainbowButton>
              Get Access Now
            </RainbowButton>
          </div>
        </EnhancedBoxReveal>
      </div>
    </div>
  );
}

export default EnhancedBoxRevealDemo;