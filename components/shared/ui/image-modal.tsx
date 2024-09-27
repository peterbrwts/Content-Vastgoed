'use client'

import { useState } from 'react';
import Image from 'next/image';
import { IoClose, IoChevronBack, IoChevronForward } from 'react-icons/io5';

interface ImageModalProps {
  images: { url: string; alt: string }[];
  currentIndex: number;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ images, currentIndex, onClose }) => {
  const [current, setCurrent] = useState(currentIndex);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      {/* Close button */}
      <button onClick={onClose} className="absolute top-5 right-5 text-white text-3xl">
        <IoClose />
      </button>

      {/* Image Carousel */}
      <div className="relative max-w-4xl w-full px-4 flex items-center justify-center">
        <button onClick={prevSlide} className="absolute left-0 text-white text-3xl p-2 bg-black/50 rounded-full">
          <IoChevronBack />
        </button>
        
        <Image
          src={images[current].url}
          alt={images[current].alt}
          width={800}
          height={600}
          className="object-contain rounded-lg"
        />
        
        <button onClick={nextSlide} className="absolute right-0 text-white text-3xl p-2 bg-black/50 rounded-full">
          <IoChevronForward />
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
