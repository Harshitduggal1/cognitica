"use client";

// NextUI
import { Tab, Tabs } from "@nextui-org/react";

// React
import { FC } from "react";
// Next
import Image from "next/image";
// Font
import { Lexend } from "next/font/google";
import SquareGradientBackground from "./bgsvg";
// Animation
import { motion } from "framer-motion";
// Styles
import s from './Features.module.scss';

const font = Lexend({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const Features: FC = () => {
  const DATA_TABS = [
    {
      title: "Payroll",
      text: "Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported.",
      img: "/images/HomePage/",
    },
    {
      title: "Claim expenses",
      text: "All of your receipts organized into one place, as long as you don't mind typing in the data by hand.",
      img: "/Images/HomePage/features/Tab2.webp",
    },
    {
      title: "VAT handling",
      text: "We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need.",
      img: "/Images/HomePage/features/Tab3.webp",
    },
    {
      title: "Reporting",
      text: "Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it.",
      img: "/Images/HomePage/features/Tab4.webp",
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
    <section
      id="features"
      className={`${s.features} relative py-20 sm:py-32 overflow-hidden`}
    >
      <SquareGradientBackground />
      <div className={s.container}>
        <section className={`${s.wrapper} relative z-10`}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className={` text-left md:text-center mb-20`}
          >
            <motion.h2
              variants={animation}
              custom={1}
              style={font.style}
              className="text-white mb-5 tracking-tight text-3xl md:text-5xl "
            >
              Everything you need to run your books.
            </motion.h2>
            <motion.p
              variants={animation}
              custom={2}
              className="text-lg max-w-screen-md m-auto leading-8 text-white tracking-tight"
            >

              Well everything you need if you arent that picky about minor
              details like tax compliance.
            </motion.p>
          </motion.div>
          <Tabs
            classNames={{
              base: [
                "bg-white/10",
                "pt-2",
                "pb-7",
                "md:pt-10",
                "md:pb-12",
                "rounded-t-xl",
                "w-full",
                "justify-center",
                "overflow-hidden",
              ],
              panel: ["p-0", "bg-white/10", "rounded-b-xl"],
              tab: ["p-2", "md:p-5"],
              tabContent: [
                "text-white",
                "group-data-[selected=true]:text-blue",
                "text-md",
                "md:text-lg",
              ],
              tabList: [
                "grid",
                "grid-cols-2-auto",
                "gap-3",
                "md:gap-5",
                "md:grid-cols-4-auto",
                "rounded-none",
              ],
              cursor: "rounded-full",
            }}
            variant="light"
          >

            {DATA_TABS.map((tab: { title: string; text: string; img: string }, i: number) => (
              <Tab key={i} title={tab.title}>
                <p className="text-center pb-10 text-xs md:text-lg text-white max-w-2xl m-auto px-5 ">
                  {tab.text}
                </p>
                <Image
                  className="w-full rounded-lg md:rounded-2xl h-full"
                  src={tab.img}
                  width={2000}
                  height={2000}
                  alt={tab.title}
                />
              </Tab>
            ))}
          </Tabs>
        </section>
      </div>
    </section>
  );
};
export default Features;