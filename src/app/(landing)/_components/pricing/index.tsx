"use client"

import { AnimatePresence, motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

import { gsap } from "gsap";

// Define TypeScript interfaces
interface Plan {
  name: string;
  price: number;
  features: string[];
  borderGradient?: string;
  href: string; // Add href property for the button link
}

const PricingComponent: React.FC = () => {
  const [currentBilling, setCurrentBilling] = useState<"monthly" | "annual">("monthly");
  const pricingRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fade in pricing section
    gsap.fromTo(
      pricingRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5, ease: "elastic.out(1, 0.5)" }
    );

    // Floating animation for pricing cards
    gsap.to(".pricing-card", {
      y: "random(-10, 10)",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.1,
    });

    // Pulsating glow effect for Premium and Enterprise cards
    gsap.to(".premium-card, .enterprise-card", {
      boxShadow: "0 0 30px rgba(0, 217, 245, 0.8), inset 0 0 20px rgba(0, 245, 160, 0.8)",
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  const handleToggle = () => {
    setCurrentBilling(prev => prev === "monthly" ? "annual" : "monthly");
    gsap.to(toggleRef.current, {
      x: currentBilling === "monthly" ? 28 : 0,
      duration: 0.3,
      ease: "power2.inOut",
    });
  };

  const plans: Plan[] = [
    {
      name: "Basic",
      price: currentBilling === "monthly" ? 0 : 0,
      features: [
        "Intuitive, user-friendly dashboard",
        "No affiliate links or hidden fees",
        "25 free AI trial credits",
        "Responsive customer service",
        "Access to limited templates",
        "Basic customization options",
        "Standard support",
        "1GB complimentary cloud storage",
        "Credit card required after 30-day trial",
      ],
      href: "/choose-basic", // Add href for the button
    },
    {
      name: "Premium",
      price: currentBilling === "monthly" ? 99 : 999,
      features: [
        "All Basic features, plus:",
        "AI-driven personalized learning paths",
        "Smart course recommendations",
        "Unlimited training simulations",
        "Real-time learner analytics",
        "Secure payment systems 🚀",
        "Customizable templates",
        "AI-powered content suggestions",
        "Priority support",
      ],
      borderGradient: currentBilling === "monthly"
        ? "linear-gradient(90deg, #4a00e0, #8e2de2)"
        : "linear-gradient(90deg, #f72585, #7209b7)",
      href: "/choose-premium", // Add href for the button
    },
    {
      name: "Enterprise",
      price: currentBilling === "monthly" ? 199 : 1449,
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
      href: "/choose-enterprise", // Add href for the button
    },
    {
      name: "Customized",
      price: 0,
      features: [
        "For large enterprises",
        "Unlimited course access",
        "AI-driven analytics",
        "Super custom workflows",
        "Dedicated support",
        "Contact us for pricing ⚡️",
      ],
      href: "/choose-customized", // Add href for the button
    },
  ];

  return (
    <motion.div
      ref={pricingRef}
      className="flex flex-col items-center justify-center min-h-48 py-24 px-4 bg-black text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h2
        className="text-7xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-900 to-purple-100"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Pricing plans✨
      </motion.h2>

      {/* New ultra-modern toggle */}
      <motion.div
        className="flex items-center mb-12 bg-indigo-500 p-2 rounded-full relative overflow-hidden"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-b from-fuchsia-600 to-purple-600 opacity-20 blur-md"
          style={{ filter: "blur(8px)" }}
        ></div>
        <button
          onClick={handleToggle}
          className={`px-6 py-3 rounded-full transition-all duration-600 relative z-10 ${
            currentBilling === "monthly" ? "text-white" : "text-gray-400"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={handleToggle}
          className={`px-6 py-3 rounded-full transition-all duration-300 relative z-10 ${
            currentBilling === "annual" ? "text-white" : "text-gray-400"
          }`}
        >
          Annual
        </button>
        <motion.div
          ref={toggleRef}
          className="absolute top-1 left-1 right-1 h-10 bg-gradient-to-b from-violet-950 to-purple-600 rounded-full"
          initial={{ x: 0 }}
          animate={{ x: currentBilling === "annual" ? 120 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        ></motion.div>
      </motion.div>

      <div className="grid grid-cols-5 md:grid-cols-2 lg:grid-cols-4 gap-3 w-full max-w-7xl">
        <AnimatePresence>
          {plans.map((plan, index) => (
            <motion.div
              key={`${plan.name}-${currentBilling}`}
              layout
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
                delay: index * 0.1,
              }}
              className={`pricing-card relative p-8 rounded-3xl bg-black shadow-2xl overflow-hidden
                ${
                  plan.name === "Premium" || plan.name === "Enterprise"
                    ? `border-4 border-transparent ${plan.name.toLowerCase()}-card`
                    : "border border-fuchsia-700"
                }`}
              style={{
                background: plan.borderGradient,
              }}
            >
              <motion.div
                className="absolute inset-0 opacity-20"
                initial={{ backgroundPosition: "0% 0%" }}
                animate={{ backgroundPosition: "100% 100%" }}
                transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
                style={{
                  backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0) 70%)",
                  backgroundSize: "100% 100%",
                }}
              ></motion.div>
              <motion.div
                className="relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <h3 className="text-2xl font-extrabold mb-4">{plan.name}</h3>
                <motion.div
                  className="text-5xl font-bold mb-6"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  ${plan.price}/{currentBilling === "monthly" ? "mo" : "yr"}
                </motion.div>
                <h4 className="text-lg mb-4">Features:</h4>
                <ul className="list-disc list-inside mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <a
                  href={plan.href} // Link to choose plan
                  className="bg-gradient-to-b from-fuchsia-500 to-purple-500 hover:from-fuchsia-600 hover:to-purple-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
                >
                  Choose Plan
                </a>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default PricingComponent;