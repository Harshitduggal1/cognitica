import { AnimatedBeamDemo } from "./_components/integrationcomp/integration1";
import BentoGridThird from "./_components/Bento-grid";
import BoxRevealDemo  from "./_components/textanimation";
/* eslint-disable react/jsx-no-undef */
import CallToAction from "./_components/call-to-action";
import CardHoverEffect from "@/components/_hovercards";
import FAQ  from "./_components/FAQ";
import FeaturedBlogs from "@/components/Blog/FeaturedBlogs";
import {Features}   from "./_components/Cards";
import Footer from "@/components/Footer";
import { HeroScrollDemo } from "./_components/HeroScroll";
import { MeteorDemo } from "./_components/integrationcomp/integration3";
import PricingComponent from "./_components/pricing";
import { Testimonials } from "./_components/reviews";

export default function Home() {
  return (
    <main className="w-full h-screen overflow-x-hidden">
      <div className="flex flex-col w-full">
        <div className="h-screen">
          <CallToAction />
        </div>
        <HeroScrollDemo />
        <CardHoverEffect />
        <AnimatedBeamDemo />

        <Features/>
        <Testimonials />
        <BentoGridThird/>
        <PricingComponent />
        <FAQ/>
        <BoxRevealDemo/>
        <MeteorDemo />

        <FeaturedBlogs />
      
     
      
   

        <Footer />
      </div>
    </main>
  );
}
