"use client";

import { Aanbod } from '@/types'
import Grid from '@/components/shared/ui/grid'
import Section from '@/components/shared/ui/section'
import Container from '@/components/global/container'
import AanbodCard from '@/components/shared/aanbod-card'
import Button from '@/components/shared/button'
import { useState } from 'react'
import { toTitleCase } from "@/utils/string";

type AanbodGalleryProps = {
  showFilters?: boolean;
  aanbod: Aanbod[];
}

export default function AanbodArchive({  
  aanbod,
  showFilters = true,
}: AanbodGalleryProps ) {
  
  const [activeCategory, setActiveCategory] = useState("Alle");

  const projectCategories = new Set(aanbod.map((aanbod) => aanbod.type));
  const categories = Array.from(projectCategories);

  const filteredProjects =
    activeCategory === "Alle"
      ? aanbod
      : aanbod.filter(
          (aanbod) =>
            aanbod.type === activeCategory
        );


  return (
    <Section className='mt-10 mb-6 md:my-16'>
     
      <Container>
       
      {
        showFilters && (
          <div className="flex flex-wrap md:flex-row no-scrollbar justify-center md:justify-center mb-10 md:space-x-2">
          {["Alle", ...categories].map((category, index) => (
            <div key={`${category}-${index}`}>
                <button
                className={`border rounded my-1 py-1 px-3 text-sm font-medium ${
                  activeCategory === category
                    ? "text-primary bg-tertiary border-primary"
                    : "text-primary bg-tertiary border-transparent"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            </div>
            
            
          ))}
        </div>
        )
      }
       <Grid className='md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
          ...filteredProjects.map((aanbod, index) => (
            <div
            key={`${aanbod._id}-${index}`}>
               
          
            <li key={aanbod._id}>
              <AanbodCard aanbod={aanbod} />
            </li>
          
        
            </div>
          )

          )
        }
        </Grid>
      </Container>
    </Section>
  )
}

