import Image from "next/image";
import FireFliesBG from "@/components/FireFliesBG";
import  RenderModel  from "@/components/RenderModel";
import bg from "../../../../public/background/about-background.png";
import Hat from './../../../components/models/Hat';
import AboutDetails from './../../../components/about/index';

export default function Home() {
  
  return (
    <>
      <FireFliesBG>
      <Image
        src={bg}
        alt="bg-img"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />      
      </FireFliesBG>      
      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10 mx-auto">
        <RenderModel>
          <Hat />
        </RenderModel>
      </div>
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1 -translate-x-1/2">
          <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent">Mahmoud Hosni</h1>
          <p className="font-light text-lg text-foreground">Meet the wizard behind this portfolio!</p>
        </div>
      </div>
      <AboutDetails />
    </>
  );
}