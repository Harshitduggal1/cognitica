"use client"

import { motion, useScroll, useTransform } from 'framer-motion';

import GradualSpacing from "@/components/magicui/gradual-spacing";
import Link from 'next/link';
import React from 'react';

const Banner = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <motion.div 
      className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated background elements */}
      <motion.div className="absolute inset-0" style={{ y: y1, opacity }}>
        <motion.div 
          className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-indigo-600 opacity-30 blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/4 h-96 w-96 rounded-full bg-purple-500 opacity-30 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 h-96 w-96 rounded-full bg-pink-500 opacity-30 blur-3xl"
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center"
        style={{ y: y2, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <GradualSpacing
            className="text-3xl font-extrabold tracking-[-0.1em] text-white md:text-7xl md:leading-[5rem] lg:text-[4rem] xl:text-[5.75rem] max-w-4xl mx-auto text-center z-10"
            text="THE NEWSLETTER PLATFORM"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <GradualSpacing
            className="font-display text-center text-4xl font-bold tracking-[-0.1em] text-white md:text-7xl md:leading-[5rem]"
            text="BUILD FOR"
          />
        </motion.div>

        <motion.span 
          className="font-extrabold bg-gradient-to-b from-pink-400 to-rose-600 bg-clip-text text-transparent text-5xl md:text-7xl text-center justify-center mt-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
        >
          GROWTH.
        </motion.span>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Link href="/dashboard">
            <motion.button 
              className="relative overflow-hidden rounded-lg bg-white px-8 py-4 text-xl font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get Started</span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </Link>
        </motion.div>

        <motion.p
          className="mt-6 text-lg text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Start your 30-day free trial
        </motion.p>
      </motion.div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 h-3 w-3 rounded-full bg-indigo-400 shadow-lg shadow-indigo-400/50"
          animate={{ y: [0, 20, 0], opacity: [1, 0.5, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-3/4 right-1/4 h-4 w-4 rounded-full bg-purple-400 shadow-lg shadow-purple-400/50"
          animate={{ y: [0, -20, 0], opacity: [1, 0.5, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/2 h-5 w-5 rounded-full bg-pink-400 shadow-lg shadow-pink-400/50"
          animate={{ y: [0, 20, 0], opacity: [1, 0.5, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
};

export default Banner;