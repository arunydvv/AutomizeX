import { ContainerScroll } from "@/components/Global/Container-Scroll-Animation";
import { HeroParallax } from "@/components/Global/hero-parallax";
import { InfiniteMovingCards } from "@/components/Global/InfiniteCards";
import Navbar from "@/components/Global/Navbar";
import { Button } from "@/components/ui/button";
import {  products } from "@/Constants/parallax-products";
import { testimonials } from "@/Constants/statics";


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
                <h1 className="text-5xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-slate-50 to-neutral-600 font-sans font-bold pb-5">
                  Automate Your Work With AutomizeX
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
      <HeroParallax products={products} />
      



    </main>
   
  );
}

