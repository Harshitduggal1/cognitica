'use client';

import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import React, { useState } from 'react';

import { cn } from "@/lib/utils";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        {/* Home MenuItem */}
        <MenuItem setActive={setActive} active={active} item="Home">
          <HoveredLink href="/">Home</HoveredLink> {/* Redirects to localhost:3000 */}
        </MenuItem>

        {/* Solutions MenuItem */}
        <MenuItem setActive={setActive} active={active} item="Solutions">
          <div className="flex flex-col space-y-4 font-bold text-blue-500 hover:text-purple-500 transition-colors duration-200">
            <HoveredLink href="/web-dev">AI Doctor</HoveredLink>
            <HoveredLink href="/interface-design">Hyperpersonalized Treatments</HoveredLink>
            <HoveredLink href="/seo">Laboratory-Free Tests 🎉</HoveredLink>
            <HoveredLink href="/branding">Personalized Supplements</HoveredLink>
          </div>
        </MenuItem>

        {/* Products MenuItem */}
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              key="1"
              title="Tailwind Master Kit"
              href="/tailwind-kit"
              src="/images/tailwind-kit.png"
              description="Production ready Tailwind CSS components for your next project"
            />
            <ProductItem
              key="2"
              title="Moonbeam"
              href="/moonbeam"
              src="/images/moonbeam.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              key="3"
              title="Rogue"
              href="/rogue"
              src="/images/rogue.png"
              description="Respond to government RFPs, RFIs, and RFQs 10x faster using AI"
            />
            <ProductItem
              key="4"
              title="Algochurn"
              href="/algochurn"
              src="/images/algochurn.png"
              description="Prepare for tech interviews like never before."
            />
          </div>
        </MenuItem>

        {/* Pricing MenuItem */}
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 font-bold">
            <HoveredLink href="/dashboard">Basic</HoveredLink>
            <HoveredLink href="/pricing">Premium</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
            <HoveredLink href="/customize">Customize ✨</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact Us⚡️">
        <div className="grid grid-cols-2 gap-4 p-4 font-bold">
          <HoveredLink href="/contactus">contact us</HoveredLink>
          <HoveredLink href="/newsletter">Newsletter</HoveredLink>
          <HoveredLink href="/affiliates">Affiliates</HoveredLink>
          <HoveredLink href="/help center">Help center</HoveredLink>
         </div>
         
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Blogs">
        <div className=" grid grid-cols-2 gap-4 p-4 font-bold">
        <HoveredLink href="/posts/top-10-lms-platforms">top lms platforms</HoveredLink>
        <HoveredLink href="/posts/How-AI-is-Revolutionizing-Enterprise-Learning-Management">revolutionizing LMS</HoveredLink>
        <HoveredLink href="/posts/create-succesful-online-course-2024">ai for online cources</HoveredLink>
        <HoveredLink href="/posts/ai-microlearning">ai microlearning</HoveredLink>
        <HoveredLink href="/posts/ai-in-Education">ai in education</HoveredLink>
        <HoveredLink href="/posts/create-succesful-online-course-2024">ai for online cources</HoveredLink>
        <HoveredLink href="/posts/future-online-learning-using-ai">ai future learning</HoveredLink>
        <HoveredLink href="/posts/ai-learning-analytics">learning insights</HoveredLink>
          <HoveredLink href="/posts/5-digital-marketing-mistakes">digital marketing</HoveredLink>
          <HoveredLink href="/posts/ai-lms-for-corporations">ai in LMS</HoveredLink>
          <HoveredLink href="/posts/top-5-ai-seo-tools-2024">Seo ranking</HoveredLink>
          <HoveredLink href="/posts/cybersecurity-threats-solutions-for-businesses">cybersecurity threats sols</HoveredLink>
          <HoveredLink href="/posts/ai-for-customer-service">ai customer-services</HoveredLink>
          <HoveredLink href="/posts/ai-for-small-businesses">ai for businesses</HoveredLink>
          <HoveredLink href="/posts/ai-future-jobs">future jobs</HoveredLink>
          <HoveredLink href="/posts/ai-in-healthcare">ai in healthcare</HoveredLink>
          <HoveredLink href="/posts/ai-professional-growth">professional growth</HoveredLink>
          <HoveredLink href="/posts/how-to-get-150k-usd-remote-jobs">remote jobs</HoveredLink>
          <HoveredLink href="/posts/top-5-ai-seo-tools-2024">seo tools </HoveredLink>
          <HoveredLink href="/posts/ethical-considerations-in-ai">ethical considerations</HoveredLink>
          <HoveredLink href="/posts/how-to-increase-personal-wealth">increase wealth</HoveredLink>
          </div>
         
         </MenuItem>
       </Menu>
     </div>
   );
 };
 
 export default Navbar;
 
       
          
        
          
         
        
         
          
          
         
         
       