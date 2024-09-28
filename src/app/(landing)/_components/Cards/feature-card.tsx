"use client";

import * as Icons from './icons'; // Ensure Icons.Ecosystem is defined in this file

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useEffect, useRef } from 'react';

import { BorderBeam } from '@/components/ui/border-beam';
import { Feature } from './features-list';

interface FeatureCardProps {
  feature: Feature;
  href: string; 
}

export function FeatureCard({ feature: { description, id, title } }: FeatureCardProps) {
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);

  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;

  const borderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!borderRef.current) return;

      const borderRect = borderRef.current.getBoundingClientRect();
      offsetX.set(e.clientX - borderRect.left);
      offsetY.set(e.clientY - borderRect.top);
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [offsetX, offsetY]);

  return (
    <div
      key={id}
      className="relative flex-1 rounded-xl border border-white/30 px-5 py-10 text-center"
    >
      <BorderBeam size={150} duration={12} delay={9} />
      <motion.div
        ref={borderRef}
        className="absolute inset-0 rounded-xl border-2 border-purple-400"
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        }}
      />
      <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-white text-black">
        <Icons.Ecosystem className="h-5 w-5" weight="bold" /> {/* Ensure this icon is correctly defined */}
      </div>
      <h3 className="mt-6 font-bold">{title}</h3>
      <p className="mt-2 text-white/70">{description}</p>
    </div>
  );
}

export default FeatureCard; // Make sure to export as default or named based on your usage