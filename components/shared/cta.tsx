"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Divider from "./divider";
import GhostButton from "./ghostButton";


export default function PreFooterSection() {
  const pathName = usePathname();

  if (pathName == "/contact") return <Divider />;

  return (
    <div className="text-white bg-pre-footer bg-cover">
      <div className="py-20 bg-primary">
        <div className="max-w-6xl mx-auto px-6 flex flex-col text-center md:text-start items-center md:items-start gap-y-3">
          
            <h2 className='text-3xl font-bold'>
            Ik hoop om je te kunnen bijstaan in al je woonbehoeften.
            </h2>
          
          
            <p className="mb-2">
              guy content, iedereen content
            </p>
         
            
              <GhostButton 
                href="/contact"
                variant="default"
                size="default">
                Neem contact
              </GhostButton>
           
        
        </div>
      </div>
    </div>
  );
}
