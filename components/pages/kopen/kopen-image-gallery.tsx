'use client'

import { useState } from 'react';
import Image from 'next/image';
import { Kopen } from '@/types';
import Grid from '@/components/shared/ui/grid';
import Section from '@/components/shared/ui/section';
import Container from '@/components/global/container';
import ImageModal from '@/components/shared/ui/image-modal';

export default function KopenImageGallery({ kopen }: { kopen: Kopen }) {
  const { imageGallery: images } = kopen;
  
  // State to control the modal visibility and current image index
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);

  // Function to open the modal and set the clicked image as the current one
  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  return (
    <Section className="my-16 md:my-32">
      <Container>
        <Grid className="grid-cols-2 gap-5 md:gap-16 max-w-4xl mx-auto">
          {images.map((image, index) => (
            <li key={image.url} onClick={() => openModal(index)} className="cursor-pointer">
              <Image
                src={image.url}
                width={550}
                height={500}
                alt={image.alt}
                className="w-full rounded-xl"
              />
            </li>
          ))}
        </Grid>
        
        {/* Modal for the image carousel */}
        {isOpen && currentImageIndex !== null && (
          <ImageModal 
            images={images} 
            currentIndex={currentImageIndex} 
            onClose={() => setIsOpen(false)} 
          />
        )}
      </Container>
    </Section>
  );
}
