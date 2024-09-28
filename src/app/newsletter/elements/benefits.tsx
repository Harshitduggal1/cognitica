"use client"

import WordPullUp from "@/components/magicui/word-pull-up";
import { motion } from "framer-motion";

const Benefits = () => {
  return (
    <div className="benefit-cover min-h-[90vh] relative flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-[63%] md:h-[320px] bg-[#F7F5FF] border-[2px] rounded border-fuchsia-700 p-2 shadow-2xl"
      >
        <WordPullUp
          className="text-2xl mt-10 font-bold tracking-[-0.02em] bg-gradient-to-b from-[#202864] to-[#e404d9] bg-clip-text  text-transparent md:text-7xl md:leading-[5rem] text-center w-full mb-4"
          words="EVERYTHING YOU NEED TO SUCCEED AVAILABLE IN A SINGLE PLATFOR✨"
        />

        <motion.p
          className="text-7xl md:text-2xl text-center text-indigo-700 mt-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 20px #00eaff, 0px 0px 30px #00eaff",
            filter: "blur(1px)",
            background:
              "linear-gradient(90deg, rgba(14,164,233,1) 0%, rgba(228,4,217,1) 100%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          No code needed. No complex integrations.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Benefits;
