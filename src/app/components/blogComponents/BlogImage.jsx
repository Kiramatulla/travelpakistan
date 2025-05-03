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
      <div className="relative w-full flex justify-center items-center mt-10">
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
              alt={blogs.title || "Blog Image"}
              width={700}
              height={300}
              className="w-full sm:h-[20rem] lg:h-[25rem] px-2 lg:px-10 lg:rounded-xl object-cover"
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

      {/* Thumbnails */}
      <div className="flex gap-2 mt-2 overflow-x-auto px-4">
        {blogs.featuredImage.map((img, index) => (
          <div
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`cursor-pointer border-2 ${
              currentIndex === index ? "border-blue-500" : "border-transparent"
            } rounded-lg overflow-hidden`}
          >
            <Image
              src={urlFor(img).url()}
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
};

export default BlogImage;

// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";

// const BlogImage = ({ blogs }) => {

//   return (
//     <figure className="mx-auto flex justify-center items-center mt-10">
//       <Image
//         src={urlFor(blogs.featuredImage && blogs.featuredImage).url()}
//         alt={blogs.title || "Tour Image"}
//         width={700}
//         height={300}
//         className="w-full sm:h-[20rem] lg:h-[25rem] px-2 lg:px-10 lg:rounded-xl object-cover"
//         priority
//       />
//     </figure>
//   );
// };

// export default BlogImage;
