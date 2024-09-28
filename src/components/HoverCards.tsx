import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffect() {
  return (
    <div className="max-w-5xl mx-auto px-8 gap-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Affiliate Program🚀",
    description:
      "Join our affiliate program and help others discover our AI-driven Learning Management System. Earn as you grow with us!",
    link: "/affiliate",
  },
  {
    title: "Explore Solutions✨",
    description:
      "Check out our full suite of AI-powered learning solutions tailored for businesses of all sizes. Whether you’re scaling or just getting started, we have something for you.",
    link: "/solutions",
  },
  {
    title: "Help Center?",
    description:
      "Have questions? Our Help Center is here to guide you through getting started, troubleshooting, and maximizing your experience with our AI LMS platform.",
    link: "/help-center",
  },
];

export default CardHoverEffect;
