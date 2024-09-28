"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

import AiButton from '@/components/special-button';
import AnimatedGridPattern from '@/components/magicui/animated-grid-pattern';
import CurvyBottomGradientButtonBg from '@/components/ui/_bgsvg';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ShinyButton from '@/components/magicui/shiny-button';
import SparklesText from '@/components/magicui/sparkles-text';
import SquareGradientBackground from '../FeatureCard/bgsvg';
import UltraModernSVGGradientBg from '@/components/ui/_bgsvg';
import { cn } from '@/lib/utils';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const CallToAction = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const buttonRef = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.main-content',
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
    });

    tl.fromTo('.animate-text', 
      { opacity: 0, y: 100, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, stagger: 0.2, duration: 1, ease: "elastic.out(1, 0.3)" }
    );

    gsap.to('.background-animation', {
      backgroundPosition: '100% 100%',
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });

    gsap.to('.neon-effect', {
      boxShadow: '0 0 30px rgba(255,255,255,0.8), 0 0 50px rgba(255,255,255,0.6), 0 0 70px rgba(255,255,255,0.4)',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, rotateX: 90 },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: { 
        type: 'spring',
        damping: 10,
        stiffness: 100
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      opacity: 1,
      rotate: 0,
      transition: { 
        type: 'spring',
        damping: 5,
        stiffness: 100,
        delay: 1
      }
    },
    hover: { 
      scale: 1.1, 
      boxShadow: "0 0 25px rgba(255,255,255,0.8)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95, rotate: 5 }
  };

  return (
    <div className="relative h-screen"> {/* Ensure this div takes full height */}
    <SquareGradientBackground /> 
    <div/>
      <motion.nav
        className="absolute top-0 left-0 right-0 flex justify-between items-center p-6 z-10 neon-effect"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div
          whileHover={{ scale: 1.05, rotate: [0, 5, -5, 0] }}
        >
          <SparklesText
            text="Cognitica AI"
            className="text-4xl font-bold inline-block text-transparent bg-clip-text text-white"
          />
        </motion.div>
        <div className="space-x-4">
          {['sign in', 'Sign Up'].map((text, index) => (
            <motion.a
              key={text}
              href={`/${text.toLowerCase().replace(' ', '-')}`}
              className={`px-6 py-3 text-lg font-semibold rounded-full transition-colors duration-300 ${
                index === 0
                  ? "text-white border-2 border-white hover:bg-white hover:text-purple-500"
                  : "bg-gradient-to-b from-purple-500 to-indigo-800 text-white hover:from-purple-800 hover:to-pink-400"
              }`}
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
            >
              {text}
            </motion.a>
          ))}
        </div>
      </motion.nav>
      <div className="h-screen w-full flex items-center justify-center main-content">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.h1
            className="font-display text-7xl md:text-9xl font-bold tracking-tighter text-white mb-8"
            variants={itemVariants}
          >
           
          </motion.h1>
          <SparklesText
            text="Next Gen LMS Platform⚡️"
            className="text-4xl font-extrabold inline-block text-transparent bg-clip-text text-indigo-600 mt-32"
          />
          <motion.div
            className="space-y-4 mb-12"
            variants={itemVariants}
          >
            {["Redefining Education", "with AI for the", "Connected World"].map((text, index) => (
              <motion.div
                key={index}
                className="animate-text font-display text-center text-5xl md:text-7xl font-bold tracking-tight text-white hover:animate-pulse"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                {text}
              </motion.div>
            ))}
          </motion.div>
          <motion.p
            className="mt-6 text-3xl bg-clip-text text-transparent bg-gradient-to-b from-[#d8cdff] to-[#5409a4] max-w-3xl mx-auto font-extrabold"
            variants={itemVariants}
          >
            Unlock unparalleled solutions designed for a smarter, more connected educational ecosystem.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12"
            variants={containerVariants}
          >
            <motion.div variants={buttonVariants}>
            
            </motion.div>
            <motion.div variants={buttonVariants}>
           
            <ShinyButton 
            href="/sign-up">
            Explore More</ShinyButton>
          
           </motion.div>
           <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12" variants={containerVariants}>
 
          </motion.div>
          </motion.div>
        </motion.div>
     </div>
    </div>
  );
};export default CallToAction;