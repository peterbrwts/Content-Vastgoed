import { Section } from "@/types";
import Image from "next/image";

interface SectionsProps {
    section: Section;

}

export function SectionComponent({ section }: SectionsProps) {
    const imageSection = (
      <div
        className={`w-full py-0 md:py-0 md:w-1/2 ${
          section.showOnLeft ? "md:pr-10" : "md:pl-10"
        }`}
      >
       
          <Image
            src={section.image}
            width={400}
            height={400}
            alt=""
            className="w-full h-auto shadow-lg rounded-sm"
          />
       
      </div>
    );
  
    const textSection = (
      <div className="w-full md:w-1/2 pt-4">
       
          <h2
            className='text-primary -ml-1 text-2xl md:text-3xl font-light leading-none text-left pb-4'
          >
            {section.title}
          </h2>
       
          <p className="text-base text-primary text-left">{section.description}</p>
        
      </div>
    );
  
    return (
      <div
        className={`max-w-6xl mx-auto px-6 py-12 flex gap-y-3 text-center md:text-start ${
          section.showOnLeft
            ? "md:flex-row md:justify-between justify-center"
            : "md:flex-row-reverse md:justify-between justify-center"
        } flex-wrap items-center`}
      >
        {imageSection}
        {textSection}
      </div>
    );
  }
  