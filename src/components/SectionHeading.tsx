import React from 'react';

interface SectionHeadingProps {
  heading: string;
  subheading: string;
}

export default function SectionHeading({
  heading,
  subheading,
}: SectionHeadingProps) {
  return (
    <div className="mb-20 text-white">
      <h2 className="text-6xl mb-2 text-center font-extrabold bg-gradient-to-b from-[#FCD3ED] to-[#F690DF] bg-clip-text text-transparent ">
        {heading}
      </h2>
      <p className="mx-auto mb-8 w-[90%] text-center text-base font-semibold text-white lg:text-lg">
        {subheading}
      </p>
    </div>
  );
}