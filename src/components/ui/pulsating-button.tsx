"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface PulsatingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pulseColor?: string;
  duration?: string;
  href?: string; // Add href prop
}

export default function PulsatingButton({
  className,
  children,
  pulseColor = "#0096ff",
  duration = "1.5s",
  href, // Destructure href
  ...props
}: PulsatingButtonProps) {
  const buttonClass = cn(
    "relative text-center font-extrabold cursor-pointer flex justify-center items-center rounded-lg text-white dark:text-white bg-indigo-500 dark:bg-indigo-500 px-4 py-2",
    className
  );

  const commonStyles = {
    "--pulse-color": pulseColor,
    "--duration": duration,
  } as React.CSSProperties;

  // Conditional rendering based on href prop
  if (href) {
    return (
      <a
        className={buttonClass}
        style={commonStyles}
        href={href} // Use href for the anchor tag
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        <div className="relative z-10">{children}</div>
        <div className="absolute top-1/2 left-1/2 size-full rounded-lg bg-inherit animate-pulse -translate-x-1/2 -translate-y-1/2" />
      </a>
    );
  }

  return (
    <button
      className={buttonClass}
      style={commonStyles}
      {...props}
    >
      <div className="relative z-10">{children}</div>
      <div className="absolute top-1/2 left-1/2 size-full rounded-lg bg-inherit animate-pulse -translate-x-1/2 -translate-y-1/2" />
    </button>
  );
}