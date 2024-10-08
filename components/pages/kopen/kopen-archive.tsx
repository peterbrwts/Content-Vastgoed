"use client";

import { Kopen } from '@/types'
import Grid from '@/components/shared/ui/grid'
import Section from '@/components/shared/ui/section'
import Container from '@/components/global/container'
import KopenCard from '@/components/shared/kopen-card'
import Button from '@/components/shared/button'
import { useState } from 'react'
import { toTitleCase } from "@/utils/string";

type KopenGalleryProps = {
  showFilters?: boolean;
  kopen: Kopen[];
}

export default function KopenArchive({  
  kopen,
  showFilters = true,
}: KopenGalleryProps ) {
  
  const [activeCategory, setActiveCategory] = useState("Alle panden");

  const projectCategories = new Set(kopen.map((kopen) => kopen.typePand));
  const categories = Array.from(projectCategories);

  const filteredProjects =
    activeCategory === "Alle panden"
      ? kopen
      : kopen.filter(
          (kopen) =>
            kopen.typePand === activeCategory
        );


  return (
    <Section className='mt-10 mb-6 md:my-16'>
     
      <Container>
       
      {
        showFilters && (
          <div className="flex flex-wrap md:flex-row no-scrollbar justify-center md:justify-center mb-10 md:space-x-2">
          {["Alle panden", ...categories].map((category, index) => (
            <div key={`${category}-${index}`}>
                <button
                className={`border rounded my-1 py-1 px-3 text-sm font-medium ${
                  activeCategory === category
                    ? "text-primary bg-secundary border-primary"
                    : "text-primary bg-sand border-transparent"
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
          ...filteredProjects.map((kopen, index) => (
            <div
            key={`${kopen._id}-${index}`}>
               
          
            <li key={kopen._id}>
              <KopenCard kopen={kopen} />
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

