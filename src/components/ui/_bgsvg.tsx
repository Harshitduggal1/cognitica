"use client";

import React, { useEffect, useRef } from "react";

export default function CurvyBottomGradientButtonBg() {
  const gradientRef = useRef<SVGLinearGradientElement>(null);

  useEffect(() => {
    const animateGradient = () => {
      if (gradientRef.current) {
        const gradient = gradientRef.current;
        const stops = gradient.querySelectorAll('stop');
        const colors = [
          '#4A90E2', // Bright Blue
          '#4B0082', // Dark Purple
          '#F5A623', // Bright Orange
          '#9013FE', // Bright Purple
          '#FF2D55', // Vivid Pink
          '#FF4500'  // Dark Orange
        ];
        
        let t = 0;

        const animate = () => {
          t += 0.02; // Adjusted for a smoother transition
          stops.forEach((stop, i) => {
            const color1 = colors[i % colors.length];
            const color2 = colors[(i + 1) % colors.length];
            const interpolatedColor = interpolateColors(color1, color2, Math.sin(t + i / stops.length * Math.PI * 2) * 0.5 + 0.5);
            stop.setAttribute('stop-color', interpolatedColor);
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
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  };

  return (
    <div className="absolute inset-0 w-full h-screen overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="buttonGradient" x1="0%" y1="0%" x2="100%" y2="100%" ref={gradientRef}>
            <stop offset="0%" stopColor="#4A90E2" />  {/* Bright Blue */}
            <stop offset="20%" stopColor="#4B0082" /> {/* Dark Purple */}
            <stop offset="40%" stopColor="#F5A623" /> {/* Bright Orange */}
            <stop offset="60%" stopColor="#9013FE" /> {/* Bright Purple */}
            <stop offset="80%" stopColor="#FF2D55" /> {/* Vivid Pink */}
            <stop offset="100%" stopColor="#FF4500" /> {/* Dark Orange */}
          </linearGradient>
        </defs>

        <path
          d="M0,0 H100 V70 Q50,100 0,70 Z"
          fill="url(#buttonGradient)"
        />
      </svg>
    </div>
  );
}
