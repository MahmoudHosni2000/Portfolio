import Image from "next/image";
import bg from "../../../public/background/home-background.png";
import Navigation from "@/components/navigation/index";
import LazyFirefliesBG from "@/components/lazy/LazyFirefliesBG";
import LazyThreeModelScene from "@/components/lazy/LazyThreeModelScene";
import LazySound from "@/components/lazy/LazySound";
import HomeBtn from "@/components/HomeBtn";

export const metadata = {
  title: "Mahmoud Hosny | 3D Experience",
  description: "Explore the full 3D wizard world - Mahmoud Hosny's interactive portfolio experience.",
};

export default function Wizard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative overflow-hidden">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        className="-z-50 w-screen h-screen fixed top-0 left-0 object-cover object-center opacity-50 pointer-events-none"
      />
      <LazyFirefliesBG delayMs={500} />

      <div className="w-full h-screen">
        <HomeBtn />
        <Navigation />
        <LazyThreeModelScene model="Wizard" />
      </div>
      <LazySound />
    </main>
  );
}
