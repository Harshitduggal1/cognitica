"use client";

import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
// React
import { FC } from "react";
// Next
import Image from "next/image";
// Font
import { Lexend } from "next/font/google";
// Animation
import { motion } from "framer-motion";
// Styles
import s from "./FAQ.module.scss";

const font = Lexend({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const FAQ: FC = ({}) => {
  const FAQ_DATA = [
    {
      card: [
        {
          title: "Does TaxPal handle VAT?",
          text: "Well no, but if you move your company offshore you can probably ignore it.",
        },
        {
          title: "Can I pay for my subscription via purchase order?",
          text: "Absolutely, we are happy to take your money in all forms.",
        },
        {
          title: "How do I apply for a job at TaxPal?",
          text: "We only hire our customers, so subscribe for a minimum of 6 months and then let's talk.",
        },
      ],
    },
    {
      card: [
        {
          title: "What was that testimonial about tax fraud all about?",
          text: "TaxPal is just a software application, ultimately your books are your responsibility.",
        },
        {
          title: "TaxPal sounds horrible but why do I still feel compelled to purchase?",
          text: "This is the power of excellent visual design. You just can't resist it, no matter how poorly it actually functions.",
        },
        {
          title: "I found other companies called TaxPal, are you sure you can use this name?",
          text: "Honestly not sure at all. We haven't actually incorporated or anything, we just thought it sounded cool and made this website.",
        },
      ],
    },
    {
      card: [
        {
          title: "How do you generate reports?",
          text: "You just tell us what data you need a report for, and we get our kids to create beautiful charts for you using only the finest crayons.",
        },
        {
          title: "Can we expect more inventory features?",
          text: "In life it's really better to never expect anything at all.",
        },
       
      ],
    },
  ];

  // Animation
  const animation = {
    hidden: {
      y: -20,
      opacity: 0,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.1, duration: 0.3, ease: "easeOut" },
    }),
  };

  return (
    <BackgroundGradientAnimation>
      <section id="faq" className={`${s.faq} relative overflow-hidden bg-slate-50`}>
        <Image
          src={"/bgFaq.svg"}
          width={1500}
          height={1000}
          alt="Bg"
          className="absolute left-1/2 top-0 max-w-none -translate-y-1/5 translate-x-[-30%]"
        />
        <div className="container">
          <section className={`${s.wrapper} relative z-10 py-20 sm:py-32`}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              className={`${s.header} text-left mb-20`}
            >
              <motion.h2
                custom={1}
                variants={animation}
                style={font.style}
                className="bg-clip-text text-transparent bg-gradient-to-b from-pink-700 via-indigo-700 to-purple-800 mb-5 tracking-tight text-9xl font-extrabold md:text-7xl" // Adjusted size here
              >
                Frequently asked questions
              </motion.h2>
              <motion.p
                custom={2}
                variants={animation}
                className="text-lg max-w-screen-sm leading-6 font-extrabold text-slate-800 tracking-tight" // Adjusted size here
              >
                If you cant find what youre looking for, email our support team
                and if youre lucky someone will get back to you.
              </motion.p>
            </motion.div>

            <div className="mx-auto mt-8 grid max-w-xs grid-cols-1 gap-2 sm:gap-3 lg:mt-12 lg:max-w-none lg:grid-cols-2">
              {FAQ_DATA.map((card, i) => (
                <motion.li
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.2, once: true }}
                  custom={i}
                  variants={animation}
                  key={i}
                  className="flex flex-col gap-y-8"
                >
                  {card.card.map((data, i) => (
                    <article key={i} className={`${s.card}`}>
                      <h5 className="text-slate-800 font-semibold text-base"> {/* Adjusted size here */}
                        {data.title}
                      </h5>
                      <p className="text-slate-700 mt-3 text-sm">{data.text}</p> {/* Adjusted size here */}
                    </article>
                  ))}
                </motion.li>
              ))}
            </div>
          </section>
        </div>
      </section>
    </BackgroundGradientAnimation>
  );
};

export default FAQ;