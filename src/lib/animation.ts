import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

interface AnimationProps {
  [key: string]: any;
}

interface ScrollProps {
  trigger?: string | Element | null;
  toggleActions?: string;
  start?: string | number;
  [key: string]: any;
}

export const animateWithGsap = (
  target: string | Element | null,
  animationProps: AnimationProps,
  scrollProps: Partial<ScrollProps> = {} // Make scrollProps optional with default value
): void => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: "restart reverse restart reverse",
      start: "top 85%",
      ...scrollProps,
    },
  });
};