"use client"

import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { FaChartLine, FaCog, FaLightbulb, FaQuestionCircle, FaRocket, FaUsers } from 'react-icons/fa';
import React, { useEffect, useRef, useState } from 'react';

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollTrigger);

type Project = {
  title: string;
  description: string;
  link: string;
  icon: React.ComponentType;
  gradient: string;
};

export const projects: Project[] = [
  {
    title: "AI-Powered Learning Paths 🚀",
    description: "Revolutionize education with our cutting-edge AI algorithms that create personalized learning journeys for each user.",
    link: "/ai-learning-paths",
    icon: FaRocket,
    gradient: "from-purple-400 to-purple-600"
  },
  {
    title: "Intelligent Content Creation ✨",
    description: "Harness the power of AI to generate engaging, adaptive content that evolves with learner progress.",
    link: "/content-creation",
    icon: FaLightbulb,
    gradient: "from-yellow-300 to-yellow-500"
  },
  {
    title: "Predictive Analytics Dashboard 📊",
    description: "Gain unparalleled insights into learner performance and course effectiveness with our AI-driven analytics.",
    link: "/analytics",
    icon: FaChartLine,
    gradient: "from-blue-400 to-blue-600"
  },
  {
    title: "Adaptive Assessment Engine ⚙️",
    description: "Utilize our state-of-the-art AI to create dynamic assessments that adapt in real-time to learner responses.",
    link: "/adaptive-assessments",
    icon: FaCog,
    gradient: "from-green-400 to-green-600"
  },
  {
    title: "AI Collaboration Hub 🤝",
    description: "Foster a new era of collaborative learning with our AI-facilitated group projects and peer-to-peer interactions.",
    link: "/collaboration",
    icon: FaUsers,
    gradient: "from-pink-400 to-pink-600"
  },
  {
    title: "24/7 AI Support Assistant 🤖",
    description: "Provide round-the-clock support to learners with our advanced AI chatbot, capable of answering complex queries.",
    link: "/ai-support",
    icon: FaQuestionCircle,
    gradient: "from-indigo-400 to-indigo-600"
  }
];

const CardHoverEffect: React.FC = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const titleRef = useRef<HTMLHeadingElement | null>(null);
    const controls = useAnimation();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
    useEffect(() => {
      const container = containerRef.current;
      const title = titleRef.current;
      if (!container || !title) return;
  
      // GSAP Timeline for initial load animation
      const tl = gsap.timeline();
  
      // Title animation
      tl.from(title, {
        duration: 1.5,
        opacity: 0,
        y: -100,
        rotationX: 90,
        ease: "elastic.out(1, 0.5)",
      });
  
      // Container background animation
      tl.to(container, {
        duration: 2,
        backgroundPosition: '100% 100%',
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      }, "-=1");
  
      // Card animations
      cardRefs.current.forEach((card, index) => {
        if (card) {
          tl.from(card, {
            duration: 0.8,
            opacity: 0,
            y: 100,
            rotationY: 90,
            scale: 0.5,
            ease: "back.out(1.7)",
          }, `-=${index * 0.1}`);
  
          // Continuous rotation
          gsap.to(card, {
            rotationY: 360,
            duration: 20,
            repeat: -1,
            ease: "none",
          });
  
          // Hover effect
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              scale: 1.1,
              boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.4)",
              duration: 0.3,
            });
          });
  
          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              scale: 1,
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
              duration: 0.3,
            });
          });
        }
      });
  
      // Scroll-triggered animations
      ScrollTrigger.batch(".card", {
        onEnter: (elements) => {
          gsap.from(elements, {
            opacity: 0,
            y: 50,
            stagger: 0.15,
            duration: 1,
            ease: "power3.out",
          });
        },
        onLeave: (elements) => {
          gsap.to(elements, {
            opacity: 0,
            y: -50,
            stagger: 0.15,
            duration: 1,
          });
        },
        onEnterBack: (elements) => {
          gsap.from(elements, {
            opacity: 0,
            y: -50,
            stagger: 0.15,
            duration: 1,
          });
        },
        onLeaveBack: (elements) => {
          gsap.to(elements, {
            opacity: 0,
            y: 50,
            stagger: 0.15,
            duration: 1,
          });
        },
      });
  
      return () => {
        tl.kill();
        ScrollTrigger.getAll().forEach(t => t.kill());
      };
    }, []);
  
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
        },
      },
    };
  
    const cardVariants = {
      hidden: { opacity: 0, y: 50, rotateX: -15 },
      visible: { 
        opacity: 1, 
        y: 0,
        rotateX: 0,
        transition: { 
          type: "spring", 
          stiffness: 300, 
          damping: 20,
          duration: 0.7
        }
      },
      hover: { 
        scale: 1.05, 
        rotateY: 15,
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
        transition: { 
          type: "spring", 
          stiffness: 500, 
          damping: 30 
        }
      }
    };
  
    const iconVariants = {
      hidden: { scale: 0, rotate: -180 },
      visible: { 
        scale: 1, 
        rotate: 0,
        transition: { 
          type: "spring", 
          stiffness: 260, 
          damping: 20 
        }
      },
      hover: { 
        scale: 1.2, 
        rotate: 360,
        transition: { duration: 0.3 }
      }
    };
  
    const glassEffect = {
      background: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(10px)",
      borderRadius: "15px",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)"
    };
  
    return (
      <motion.div 
        ref={containerRef} 
        className="max-w-7xl mx-auto px-8 py-16 bg-gradient-to-br from-orange-300 via-red-400 to-purple-600 bg-[length:400%_400%]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          ref={titleRef}
          className="text-6xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          AI-Powered LMS Solutions
        </motion.h1>
        <HoverEffect 
          items={projects.map((project, index) => ({
            title: project.title,
            description: project.description,
            link: project.link,
            icon: project.icon,
            custom: (
              <motion.div
                key={index}
                ref={(el: HTMLDivElement | null) => { cardRefs.current[index] = el; }}
                className={`card p-6 h-full bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                style={{
                  ...glassEffect
                }}
              >
                <AnimatePresence>
                  <motion.div
                    className="absolute inset-0 bg-white opacity-10"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                  />
                </AnimatePresence>
                <div className="relative z-10">
                  <motion.div
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                  >
                    {React.createElement(project.icon, { className: "text-5xl mb-4 text-white" } as React.SVGProps<SVGSVGElement>)}
                  </motion.div>
                  <motion.h3 
                    className="text-2xl font-bold mb-2 text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p 
                    className="text-white/90"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {project.description}
                  </motion.p>
                </div>
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      className="absolute inset-0 bg-white opacity-20"
                      initial={{ scale: 0, borderRadius: "100%" }}
                      animate={{ scale: 2, borderRadius: "0%" }}
                      exit={{ scale: 0, borderRadius: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            )
          }))} 
        />
      </motion.div>
    );
  };
  
  export default CardHoverEffect;