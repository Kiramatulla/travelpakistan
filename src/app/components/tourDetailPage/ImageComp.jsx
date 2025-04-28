"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const ImageComp = ({ tours }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!tours?.images || tours.images.length === 0) return null; // Prevent errors

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % tours.images.length);
    }, 7000); 

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [tours.images.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % tours.images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + tours.images.length) % tours.images.length);
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
          className="absolute left-5 z-10 bg-white/70 p-2 rounded-full shadow hover:bg-white"
        >
          ◀️
        </button>

        {/* Main Image */}
        <figure className="w-full flex justify-center items-center">
          <Image
            src={urlFor(tours.images[currentIndex]).url()}
            alt={tours.title || "Tour Image"}
            width={700}
            height={300}
            className="w-full sm:h-[20rem] lg:h-[25rem] px-2 lg:px-10 lg:rounded-xl object-cover"
            priority
          />
        </figure>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-5 z-10 bg-white/70 p-2 rounded-full shadow hover:bg-white"
        >
          ▶️
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 mt-6 overflow-x-auto px-4">
        {tours.images.map((img, index) => (
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

export default ImageComp;





// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";

// const ImageComp = ({ tours }) => {
//   if (!tours?.images || tours.images.length === 0) return null; // Prevent errors

//   return (
//     <figure className="mx-auto flex justify-center items-center mt-10">
//       <Image
//         src={urlFor(tours.images[0]).url()}
//         alt={tours.title || "Tour Image"}
//         width={700} // Keeps original width for Next.js optimization
//         height={300} // Keeps original height for Next.js optimization
//         className="w-full  sm:h-[20rem] lg:h-[25rem] px-2 lg:px-10 lg:rounded-xl object-cover"
//         priority // Ensures fast loading
//       />
//     </figure>
//   );
// };

// export default ImageComp;
