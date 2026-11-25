import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import AboutDetails from './../../../components/about/index';
import LazyFirefliesBG from "@/components/lazy/LazyFirefliesBG";
import LazyThreeModelScene from "@/components/lazy/LazyThreeModelScene";

export default function Home() {

  return (
    <>
      <Image
        src={bg}
        sizes="100vw"
        alt="bg-img"
        className="-z-50 fixed top-0 left-0 w-screen h-screen object-cover object-center opacity-50 pointer-events-none"
      />
      <LazyFirefliesBG delayMs={500} />
      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-[42%] xs:top-1/2 -translate-y-1/2 left-0 z-0 mx-auto">
        <LazyThreeModelScene model="Hat" />
      </div>
      <div className="relative w-full min-h-[64vh] xs:min-h-[64vh] sm:h-screen flex flex-col items-center justify-center">
        <div className="absolute z-10 pointer-events-none flex flex-col items-center text-center top-[36vh] sm:top-[32vh] left-1/2 -translate-y-1/2 -translate-x-1/2 w-full px-4">
          <h1 className="font-bold text-5xl xs:text-6xl sm:text-8xl lg:text-9xl text-accent [text-shadow:0_2px_24px_rgba(0,0,0,0.85),0_0_6px_rgba(0,0,0,0.6)]">Mahmoud Hosny</h1>
          <p className="font-light text-lg text-foreground [text-shadow:0_1px_12px_rgba(0,0,0,0.9)]">Meet the wizard behind this portfolio!</p>
        </div>
      </div>
      <div className="w-[calc(100%+2rem)] -mx-4 xs:w-full xs:mx-0">
        <AboutDetails />
      </div>
    </>
  );
}
