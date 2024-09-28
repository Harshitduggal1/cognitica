"use client"

import { AnimatePresence, motion } from "framer-motion";
import { Button, Icon, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";

import { CallToAction } from "@/components/Cta";
import CardHoverEffect from "@/components/HoverCards";
import ConfettiComponent from "@/components/ui/confetticomponent";
import { ConfettiRef } from "@/components/ui/confetti";
import FAQS from "@/components/Faqs";
import Footer from "@/components/Footer";
import  { LogoTicker } from "@/components/BrandSlide";
import { LuCheck } from "react-icons/lu";
import Navbar from "@/components/_navbar";
import PricingComparisonTable from "@/components/PricingTable";
import RetroGri from "@/components/Retrogrid";
import { Spotlight } from "@/components/ui/spotlight";
import Testimonials from "@/components/Testimonials";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const NumberTransition = ({ value }: { value: number }) => {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    let start = value > displayValue ? displayValue : value;
    const end = value;
    const duration = 300; // Animation duration in milliseconds
    const increment = (end - start) / (duration / 16); // 60 FPS

    let timer: number;
    const animate = () => {
      start += increment;
      setDisplayValue(Math.floor(start));
      if (increment > 0 ? start < end : start > end) {
        timer = requestAnimationFrame(animate);
      } else {
        setDisplayValue(end);
      }
    };
    timer = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(timer);
  }, [value]);

  return <span>{displayValue}</span>;
};

export default function PricingPage() {
  const confettiRef = useRef<ConfettiRef>(null);
  const [currentBilling, setCurrentBilling] = useState("monthly");

  const plans = [
    {
      name: "Premium",
      price: currentBilling === "monthly" ? 99 : 999,
      features: [
        "All Basic features, plus:",
        "AI-driven learning paths",
        "Smart course recommendations",
        "Unlimited training simulations",
        "Real-time learner analytics",
        "Secure payment systems🚀",
        "Customizable templates",
        "AI-powered content suggestions",
        "Priority support",
      ],
      borderGradient: currentBilling === "monthly"
        ? "linear-gradient(90deg, #f72585, #7209b7)"
        : "linear-gradient(90deg, #4a00e0, #8e2de2)",
    },
    {
      name: "Enterprise",
      price: currentBilling === "monthly" ? 199 : 1449,
      originalPrice: 2388,
      features: [
        "Everything in Premium, plus:",
        "AI-powered diagnostics",
        "Full control over learning environments",
        "Unlimited access to AI models",
        "Global language support",
        "Exclusive course templates",
        "Dedicated account manager",
        "Affiliate program",
        "VIP Help Center access",
        "Exclusive newsletters",
      ],
      borderGradient: currentBilling === "monthly"
        ? "linear-gradient(90deg, #4a00e0, #8e2de2)"
        : "linear-gradient(90deg, #f72585, #7209b7)",
    },
    {
      name: "Customized",
      features: [
        "For large enterprises",
        "Unlimited course access",
        "AI-driven analytics",
        "Super Custom workflows",
        "Dedicated support",
        "Contact us for pricing⚡️",
      ],
      borderGradient: "linear-gradient(120deg, #ff0022, #0040ff)",
      contactLink: true, 
    },
];

  


  return (
    <div className="min-h-screen bg-gradient-to-br from-neon-blue via-neon-pink to-purple-700 overflow-hidden">
      <Navbar />
      
      <div className="relative">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen animate-pulse"
          fill="url(#gradient-neon)"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full animate-[pulse_2s_infinite]"
          fill="url(#gradient-neon)"
        />
        <Spotlight 
          className="left-80 top-28 h-[80vh] w-[50vw] animate-pulse-slow" 
          fill="url(#gradient-neon)"
        />

        <div className="absolute top-0 left-0 h-screen w-full flex items-center justify-center ">
          <div className="text-center text-white drop-shadow-2xl">
            <motion.h1
              className="text-7xl font-extrabold neon-text mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              Pricing Plans
            </motion.h1>

            <motion.div
              className="text-5xl font-bold neon-text mt-7"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Choose the plan that fits your needs
            </motion.div>
          </div>
        </div>
      </div>
     

      <motion.div
        className="container mx-auto px-4 py-16 mt-56"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className="flex justify-center mb-16"
          variants={itemVariants}
        >
         

          <div className="flex p-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-80">
            <Button
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                currentBilling === "monthly"
                  ? "bg-white text-purple-600 shadow-lg font-extrabold text-xl"
                  : "bg-transparent text-white hover:bg-white hover:bg-opacity-10 font-extrabold text-xl"
              }`}
              onClick={() => setCurrentBilling("monthly")}
            >
              Monthly
            </Button>
            <Button
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                currentBilling === "annual"
                  ? "bg-white text-purple-600 shadow-lg font-extrabold text-xl"
                  : "bg-transparent text-white hover:bg-white hover:bg-opacity-10 font-extrabold text-xl"
              }`}
              onClick={() => {
                setCurrentBilling("annual");
                confettiRef.current?.fire();
              }}
            >
              Annual
              <span className="ml-2 px-2 py-1 text-sm font-bold bg-gradient-to-r from-yellow-400 to-red-500 rounded-full animate-pulse">
                40% Off 🎉
              </span>
            </Button>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-5 text-white"
          variants={containerVariants}
        >
          <AnimatePresence>
          {plans.map((plan, index) => (
  <motion.div
    key={plan.name}
    className="relative overflow-hidden rounded-3xl"
    variants={itemVariants}
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div
      className="absolute inset-0 blur-lg opacity-50"
      style={{ background: plan.borderGradient }}
    ></div>
    <div
      className="relative bg-black bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-3xl p-8 flex flex-col h-full z-10 text-white"
      style={{ 
        border: `2px solid transparent`,
        backgroundClip: 'padding-box',
        boxShadow: `0 0 15px rgba(0,0,0,0.3), inset 0 0 15px ${plan.borderGradient.split(',')[1].trim()}`,
      }}
    >
      <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent" style={{ backgroundImage: plan.borderGradient }}>{plan.name}</h2>

      {/* Conditional rendering based on whether it's the Customized plan */}
      {plan.contactLink ? (
        <Button
          className="w-full py-4 rounded-full text-lg font-extarbold transition-all duration-300 transform hover:scale-105 text-white "
          style={{
            background: plan.borderGradient,
          }}
          onClick={() => window.location.href = '/contact'} // You can modify the link as per your contact page URL
        >
          Contact Us
        </Button>
      ) : (
        <>
          <div className="text-5xl font-extrabold mb-2">
            $<NumberTransition value={plan.price || 0} />
          </div>
          {currentBilling === "annual" && plan.originalPrice && (
            <div className="text-2xl text-gray-400 line-through mb-2">
              ${plan.originalPrice}
            </div>
          )}
          <Text className="text-gray-300 mb-8">
            Billed {currentBilling}
          </Text>
        </>
      )}

      <ul className="space-y-3 mb-8 flex-grow">
        {plan.features.map((feature, i) => (
          <motion.li
            key={i}
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Icon as={LuCheck} className="text-green-400" />
            <span>{feature}</span>
          </motion.li>
        ))}
      </ul>
      
      {!plan.contactLink && (
        <Button
          className="w-full py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105"
          style={{ 
            background: plan.borderGradient,
          }}
        >
          Get Started
        </Button>
      )}
    </div>
  </motion.div>
))}
        
          </AnimatePresence>
        </motion.div>
      </motion.div>

      <PricingComparisonTable/>
     

      <Testimonials />
      <LogoTicker />
      <FAQS/> 
      <RetroGri />
      <CallToAction />
      <CardHoverEffect/>
   
    
      <ConfettiComponent ref={confettiRef} />
      <Footer/>


      <svg width="0" height="0">
        <defs>
          <linearGradient id="gradient-neon" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#00E5FF", stopOpacity: 1 }} />
            <stop offset="30%" style={{ stopColor: "#FF00FF", stopOpacity: 1 }} />
            <stop offset="60%" style={{ stopColor: "#A100FF", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#FF5E00", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}