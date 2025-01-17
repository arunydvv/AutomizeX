"use client"

import { Footer } from "@/components/Hero/Footer";
import { SparklesPreview } from "@/components/Hero/Hero";
import { InfiniteMovingCards } from "@/components/Hero/InfiniteCards";
import Navbar from "@/components/Hero/Navbar";
import { DarkPricing } from "@/components/Hero/Pricing";
import { testimonials } from "@/Constants/statics";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="h-screen w-full  bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center  antialiased">
        <div className="absolute inset-0  h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]">
          
          <SparklesPreview />

        </div>
      </section>


      <InfiniteMovingCards
        className="md:my-[12rem] mt-[10px]"
        items={testimonials}
        direction="right"
        speed="slow"
      />

      {/* <HeroParallax products={products} /> */}

     
      <DarkPricing></DarkPricing>
      <Footer></Footer>
      



    </main>
   
  );
}

