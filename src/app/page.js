import Image from "next/image";
import bg from "../../public/background/home-background.png";
import Navigation from "@/components/navigation/index";
import LazyFirefliesBG from "@/components/lazy/LazyFirefliesBG";
import LazyThreeModelScene from "@/components/lazy/LazyThreeModelScene";

export default function Home() {
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
        <Navigation />
        <LazyThreeModelScene model="Wizard" />
      </div>
    </main>
  );
}
