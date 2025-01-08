"use client"
import { ContainerScroll } from "@/components/Global/Container-Scroll-Animation";
import { HeroParallax } from "@/components/Global/hero-parallax";
import { InfiniteMovingCards } from "@/components/Global/InfiniteCards";
import { LampContainer } from "@/components/Global/LampEffect";
import Navbar from "@/components/Global/Navbar";
import { SparklesCore } from "@/components/Global/Particles";
import { DarkPricing } from "@/components/Global/Pricing";
import { Button } from "@/components/ui/button";
import {  products } from "@/Constants/parallax-products";
import { testimonials } from "@/Constants/statics";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="h-screen w-full  bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center  antialiased">
        <div className="absolute inset-0  h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          <ContainerScroll
            titleComponent={
              <div className="flex items-center flex-col">
                <Button
                  size={'lg'}
                  className="p-6 mb-8 md:mb-0 text-xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
                    Start For Free Today
                  </span>
                </Button>
                <h1 className="text-5xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-slate-50 to-neutral-600 font-sans font-bold pb-5">
                  Streamline Your Workflow with AutomizeX
                </h1>
              </div>
            }
          />
        </div>
      </section>


      <InfiniteMovingCards
        className="md:my-[28rem] mt-[-100px]"
        items={testimonials}
        direction="right"
        speed="slow"
      />

      {/* <HeroParallax products={products} /> */}

      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl"
        >
          Plans that fit you  <br />   the Best
        </motion.h1>
        
      </LampContainer>
      <DarkPricing></DarkPricing>
      



    </main>
   
  );
}

