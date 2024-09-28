"use client"

import React, { useEffect, useRef } from "react";

export default function UltraModernSVGGradientBg() {
  const gradientRef = useRef<SVGLinearGradientElement>(null);

  useEffect(() => {
    const animateGradient = () => {
      if (gradientRef.current) {
        const gradient = gradientRef.current;
        const stops = gradient.querySelectorAll('stop');
        const colors = [
          '#FF007F', // Rose
          '#FF1493', // Deep Pink
          '#FF4500', // Orange Red
          '#8A2BE2', // Blue Violet
          '#4169E1', // Royal Blue
          '#9400D3'  // Dark Violet
        ];
        let t = 0;

        const animate = () => {
          t += 0.003; // Slowed down the animation speed

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
    <div className="absolute inset-0 w-full h-screen overflow-hidden ">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="attractiveGradient" x1="0%" y1="0%" x2="100%" y2="100%" ref={gradientRef}>
            <stop offset="0%" stopColor="#FF007F" />
            <stop offset="20%" stopColor="#FF1493" />
            <stop offset="40%" stopColor="#FF4500" />
            <stop offset="60%" stopColor="#8A2BE2" />
            <stop offset="80%" stopColor="#4169E1" />
            <stop offset="100%" stopColor="#9400D3" />
          </linearGradient>
        </defs>
        <rect width="100" height="100" fill="url(#attractiveGradient)" />
      </svg>
    </div>
  );
}