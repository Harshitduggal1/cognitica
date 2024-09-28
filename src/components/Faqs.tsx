import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const FAQS = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const controls = useAnimation();
  const sectionRef = useRef(null);

  const faqs = [
    {
      question: 'How do I update my billing information?',
      answer: 'Access the “Billing & Payments” section in your account dashboard to securely update your billing information with enterprise-grade encryption.',
    },
    {
      question: 'How can I reach customer support?',
      answer: 'You can connect with our 24/7 global support team via the “Help Center” or reach out through live chat, email, or phone support for immediate assistance.',
    },
    {
      question: 'How do I modify my profile information?',
      answer: 'Navigate to your “Account Settings” and update your profile details. Our system syncs your information across all devices instantly.',
    },
    {
      question: 'Where can I view my purchase history?',
      answer: 'Go to the “Order History” tab in your account to track past purchases, invoices, and subscription details with advanced filtering options.',
    },
    {
      question: 'How do I reset my password?',
      answer: 'To reset your password, click on "Forgot Password" on the login page and follow the security verification steps to securely create a new one.',
    },
    {
      question: 'Can I customize the LMS features for my team?',
      answer: 'Yes, our platform offers extensive customization options. Contact your dedicated account manager to set up bespoke workflows, templates, and learning paths tailored to your business needs.',
    },
    {
      question: 'How does the AI-powered learning system work?',
      answer: 'Our AI engine personalizes learning paths by analyzing learner data and performance, providing predictive content recommendations for optimized learning outcomes.',
    },
    {
      question: 'Is there a way to integrate third-party apps?',
      answer: 'Yes, we offer seamless API integration with major third-party applications to ensure a unified experience across your enterprise tools and systems.',
    },
    
   
    
  ];
  

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const titleAnimation = gsap.to(".faq-title", {
      duration: 3,
      backgroundImage: "linear-gradient(45deg, #ff00ff, #00ffff, #ff00ff, #00ffff)",
      backgroundSize: "300% 300%",
      backgroundClip: "text",
      color: "transparent",
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });

    gsap.to(".accordion-group", {
      scrollTrigger: {
        trigger: ".accordion-group",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      backdropFilter: "blur(10px)",
      borderRadius: "20px",
      boxShadow: "0 0 30px rgba(255, 0, 255, 0.3)",
    });

    return () => {
      titleAnimation.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
    }));
  }, [controls]);

  return (
    <section ref={sectionRef} className="py-24 bg-black min-h-screen flex items-center justify-center overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16"
        >
          <h1 className="faq-title text-6xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-b from-purple-400 via-pink-500 to-red-500">
            FAQs
          </h1>
          <motion.h2 
            className="text-4xl font-manrope text-center font-extrabold text-white leading-[3.25rem]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h2>
        </motion.div>

        <motion.div 
          className="accordion-group space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              custom={index}
              initial={{ opacity: 0, x: -100 }}
              animate={controls}
              className="accordion rounded-2xl overflow-hidden"
            >
              <motion.button
                className="accordion-toggle group flex items-center justify-between w-full p-6 text-left 
                           bg-gradient-to-b from-purple-800 to-indigo-900 text-white hover:from-pink-600 hover:to-purple-700
                           transition-all duration-300 ease-in-out transform hover:scale-105"
                onClick={() => toggleAccordion(index)}
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255, 0, 255, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <h5 className="text-xl font-bold">{faq.question}</h5>
                <motion.svg
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </motion.button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="accordion-content p-6 bg-gradient-to-b from-blue-800 via-violet-600 to-purple-400
                    shadow-lg shadow-blue-700 backdrop-blur-sm border border-fuchsia-600 rounded-lg"
                  >
                    <motion.p 
                      className="text-lg text-white font-medium leading-7"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {faq.answer}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQS;