"use client";

import { useState, useEffect } from "react";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import Image from "next/image";

export default function ImageCompCard({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [images.length]);

  if (!images || images.length === 0) return null;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Banner Image */}
      <div className="relative w-full flex justify-center items-center mt-8">
        {/* Prev Button */}
        <button
          onClick={handlePrev}
          className="absolute left-2 md:left-5 z-10 bg-white/70 p-2 rounded-full shadow hover:bg-white"
        >
          <FiArrowLeftCircle size={24} />
        </button>

        {/* Main Image */}
        <figure className="w-full flex justify-center items-center">
          <Image
            src={images[currentIndex].url}
            alt={images[currentIndex].alt || title || "Tour Image"}
            width={700}
            height={300}
            className="w-full sm:h-[20rem] md:h-[26rem] lg:h-[26rem] px-2 lg:px-10 lg:rounded-xl object-cover"
            loading="lazy"
          />
        </figure>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 md:right-5 z-10 bg-white/70 p-2 rounded-full shadow hover:bg-white"
        >
          <FiArrowRightCircle size={24} />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="hidden md:flex gap-2 mt-2 overflow-x-auto px-4">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`cursor-pointer border-2 ${
              currentIndex === index ? "border-blue-500" : "border-transparent"
            } rounded-lg overflow-hidden`}
          >
            <Image
              src={img.url}
              alt={`Thumbnail ${index + 1}`}
              width={100}
              height={60}
              className="object-cover w-24 h-16"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
