import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { RefObject, useEffect, useRef } from "react";
import {
  ValueAnimationTransition,
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";

import { ComponentPropsWithoutRef } from "react";
import {featuresTabs}  from "@/lib/contants"; // Ensure the correct path

// Type for each feature tab item
type FeatureTabProps = (typeof featuresTabs)[number] &
  ComponentPropsWithoutRef<"div"> & {
    selected: boolean;
  };


const FeatureTab = (props: FeatureTabProps) => {
  const tabRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);
  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black, transparent)`;

  useEffect(() => {
    if (!tabRef.current || !props.selected) {
      return;
    }
    xPercentage.set(0);
    yPercentage.set(0);

    const { height, width } = tabRef.current.getBoundingClientRect();
    const circumference = height * 2 + width * 2;

    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 - height) / circumference,
      1,
    ];

    const options: ValueAnimationTransition = {
      times,
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
    };

    animate(xPercentage, [0, 100, 100, 0, 0], options);
    animate(yPercentage, [0, 0, 100, 100, 0], options);
  }, [props.selected, xPercentage, yPercentage]);

  const handleTabHover = () => {
    if (lottieRef.current === null) {
      return;
    }
    lottieRef.current.goToAndPlay(0); // Restart the animation on hover
  };

  return (
    <div
      ref={tabRef}
      onMouseEnter={handleTabHover}
      onClick={props.onClick}
      className="relative flex gap-2.5 p-2.5 lg:flex-1 items-center border border-white/15 rounded-xl cursor-pointer"
    >
      {props.selected && (
        <motion.div
          style={{ maskImage: maskImage }}
          className="absolute inset-0 -m-px border border-[#A369FF] rounded-xl"
        />
      )}
      <div className="inline-flex justify-center items-center size-12 border border-white/15 rounded-lg">
        <Lottie
          lottieRef={lottieRef as RefObject<LottieRefCurrentProps>}
          animationData={props.icon} // Ensure `props.icon` is in the correct JSON format
          className="size-5"
          autoplay={false} // Disable autoplay to manually control it on hover
        />
      </div>
      <span className="font-medium">{props.title}</span>
      {props.isNew && (
        <span className="px-2 py-0.5 text-xs bg-[#8c44ff] text-black font-semibold rounded-full">
          new
        </span>
      )}
    </div>
  );
};

export default FeatureTab;
