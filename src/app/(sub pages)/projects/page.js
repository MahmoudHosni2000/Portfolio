import Image from "next/image";
import FireFliesBG from "@/components/FireFliesBG";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import Staff from '@/components/models/Staff';
import  RenderModel  from "@/components/RenderModel";
import bg from "../../../../public/background/projects-background.png";

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
      <ProjectList projects={projectsData} />
      <div className="flex items-center justify-center fixed top-16 lg:top-20 lg:-left-10 h-screen  left-1/2 -translate-x-1/2 lg:translate-x-0 -z-10">
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>
    </>
  );
}