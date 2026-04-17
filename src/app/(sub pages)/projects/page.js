import Image from "next/image";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import bg from "../../../../public/background/projects-background.png";
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
      <ProjectList projects={projectsData} />
      <div className="flex items-center justify-center fixed top-16 lg:top-20 lg:-left-10 h-screen  left-1/2 -translate-x-1/2 lg:translate-x-0 -z-10">
        <LazyThreeModelScene model="Staff" />
      </div>
    </>
  );
}
