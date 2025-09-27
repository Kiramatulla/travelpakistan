"use client";
import { FiArrowLeftCircle } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";
import { useState, useEffect } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const BlogImage = ({ blogs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % blogs.featuredImage.length
      );
    }, 7000);

    return () => clearInterval(interval);
  }, [blogs.featuredImage.length]);
  if (!blogs?.featuredImage || blogs.featuredImage.length === 0) return null;

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % blogs.featuredImage.length
    );
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + blogs.featuredImage.length) %
        blogs.featuredImage.length
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Banner Image */}
      <div className="relative w-full flex justify-center items-center mt-6">
        {/* Prev Button */}
        <button
          onClick={handlePrev}
          className="absolute left-2 md:left-5 z-10 bg-white/70 p-2 rounded-full shadow hover:bg-white"
        >
          <FiArrowLeftCircle size={24} />
        </button>

        {/* Main Image */}
        <figure className="w-full flex justify-center items-center">
          {blogs.featuredImage && blogs.featuredImage[currentIndex] ? (
            <Image
              src={urlFor(blogs.featuredImage[currentIndex]).url()}
              alt={blogs.title}
              width={700}
              height={300}
              className="w-full h-[20rem] lg:h-[25rem] px-2 lg:px-10 lg:rounded-xl"
            />
          ) : (
            <span>Blog Images</span> // You can also use a fallback image here if needed
          )}
        </figure>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 md:right-5 z-10 bg-white/70 p-2 rounded-full shadow hover:bg-white"
        >
          <FiArrowRightCircle size={24} />
        </button>
      </div>
    </div>
  );
};

export default BlogImage;
