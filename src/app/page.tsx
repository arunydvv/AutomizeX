"use client"

import { SparklesPreview } from "@/components/Global/Hero";
// import { ContainerScroll } from "@/components/Global/Container-Scroll-Animation";
import { InfiniteMovingCards } from "@/components/Global/InfiniteCards";
import Navbar from "@/components/Global/Navbar";
import { DarkPricing } from "@/components/Global/Pricing";
import { testimonials } from "@/Constants/statics";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="h-screen w-full  bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center  antialiased">
        <div className="absolute inset-0  h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]">
          
          <SparklesPreview />

        </div>
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          
        </div>
      </section>


      <InfiniteMovingCards
        className="md:my-[28rem] mt-[-100px]"
        items={testimonials}
        direction="right"
        speed="slow"
      />

      {/* <HeroParallax products={products} /> */}

     
      <DarkPricing></DarkPricing>
      



    </main>
   
  );
}

