import React, { useEffect, useRef } from "react";

export default function SquareGradientBackground() {
  const gradientRef = useRef<SVGLinearGradientElement | null>(null);

  useEffect(() => {
    const animateGradient = () => {
      if (gradientRef.current) {
        const gradient = gradientRef.current;
        const stops = gradient.querySelectorAll("stop");
        const colors = [
          "#87CEEB", // Sky Blue
          "#1E90FF", // Dodger Blue
          "#0000CD", // Medium Blue
          "#4B0082", // Indigo (Purple)
          "#FFB6C1", // Light Pink
        ];
        let t = 0;
        const animate = () => {
          t += 0.02;
          stops.forEach((stop, i) => {
            const color1 = colors[i % colors.length];
            const color2 = colors[(i + 1) % colors.length];
            const interpolatedColor = interpolateColors(
              color1,
              color2,
              Math.sin(t + (i / stops.length) * Math.PI * 2) * 0.5 + 0.5
            );
            stop.setAttribute("stop-color", interpolatedColor);
          });
          requestAnimationFrame(animate);
        };
        animate();
      }
    };
    animateGradient();
  }, []);

  const interpolateColors = (color1: string, color2: string, factor: number) => {
    const r1 = parseInt(color1.substring(1, 3), 16);
    const g1 = parseInt(color1.substring(3, 5), 16);
    const b1 = parseInt(color1.substring(5, 7), 16);
    const r2 = parseInt(color2.substring(1, 3), 16);
    const g2 = parseInt(color2.substring(3, 5), 16);
    const b2 = parseInt(color2.substring(5, 7), 16);
    const r = Math.round(r1 + factor * (r2 - r1));
    const g = Math.round(g1 + factor * (g2 - g1));
    const b = Math.round(b1 + factor * (b2 - b1));
    return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
  };

  return (
    <div className="absolute inset-x-0 top-0 w-full h-[50vh] overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="squareGradient" x1="0%" y1="0%" x2="100%" y2="100%" ref={gradientRef}>
            <stop offset="0%" stopColor="#87CEEB" /> {/* Sky Blue */}
            <stop offset="25%" stopColor="#1E90FF" /> {/* Dodger Blue */}
            <stop offset="50%" stopColor="#0000CD" /> {/* Medium Blue */}
            <stop offset="75%" stopColor="#4B0082" /> {/* Indigo (Purple) */}
            <stop offset="100%" stopColor="#FFB6C1" /> {/* Light Pink */}
          </linearGradient>
        </defs>
        <rect
          x="0"
          y="0"
          width="100"
          height="100"
          fill="url(#squareGradient)"
        />
      </svg>
    </div>
  );
}
