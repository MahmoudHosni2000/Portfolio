import Image from "next/image";
import bg from "../../public/background/home-background.png";
import  RenderModel  from "@/components/RenderModel";
import Wizard from "@/components/models/Wizard";
import Navigation from "@/components/navigation/index";
import FireFliesBG from "@/components/FireFliesBG";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative overflow-hidden">
      <FireFliesBG>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        className="-z-50 w-screen h-screen fixed top-0 left-0 object-cover object-center opacity-50 pointer-events-none"
      />
      </FireFliesBG>

      <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          <Wizard />
        </RenderModel>
      </div>
    </main>
  );
}