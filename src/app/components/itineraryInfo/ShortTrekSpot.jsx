"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { useState } from "react";

export default function ShortTrekSpot({ spot }) {
  const { title, images = [], description, overview } = spot;

  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mainImage = images[mainImageIndex];
  if (!spot) return null;
  return (
    <div className="w-full bg-white border border-slate-200 shadow-sm overflow-hidden mb-10 transition hover:shadow-md">
      {/* Layout: Content left + Image right */}
      <div className="flex flex-col md:flex-row-reverse">
        {/* Right: Main Image */}
        <div
          className="md:w-1/2 w-full aspect-[3/2] relative cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          {mainImage && (
            <Image
              src={urlFor(mainImage).url()}
              alt={`${title} main image`}
              fill
              className="object-cover w-full h-full"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          )}
          <div className="absolute bottom-2 right-2 bg-white/80 text-xs px-2 py-1 rounded-md text-slate-700 shadow">
            Click to enlarge
          </div>
        </div>

        {/* Left: Textual Content */}
        <div className="md:w-1/2 w-full p-6 md:p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">{title}</h2>

            {/* Overview */}
            {overview && (
              <div className="prose prose-sm md:prose-base text-slate-700 max-w-none mb-6">
                <PortableText value={overview} />
              </div>
            )}
          </div>

          {/* Tags / Description */}
          {description?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {description.map((point, idx) => (
                <span
                  key={idx}
                  className="bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 text-xs font-medium rounded-full"
                >
                  {point}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="flex gap-2 p-3 bg-slate-50 border-t border-slate-200 overflow-x-auto">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setMainImageIndex(idx)}
              className={`relative w-24 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition ${
                idx === mainImageIndex
                  ? "border-blue-600"
                  : "border-transparent hover:border-blue-300"
              }`}
            >
              <Image
                src={urlFor(img).url()}
                alt={`${title} thumbnail ${idx + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Fullscreen Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl max-h-[90vh] flex items-center justify-center">
            {/* Left Arrow */}
            <button
              onClick={() =>
                setMainImageIndex(
                  (mainImageIndex - 1 + images.length) % images.length
                )
              }
              className="absolute left-4 text-white bg-black/40 hover:bg-black/60 p-2 rounded-full text-xl z-10"
              aria-label="Previous image"
            >
              ◀
            </button>

            {/* Fullscreen Image */}
            <Image
              src={urlFor(images[mainImageIndex]).url()}
              alt={`${title} full screen`}
              width={1200}
              height={800}
              className="object-contain w-full h-auto max-h-[80vh] rounded-lg"
            />

            {/* Right Arrow */}
            <button
              onClick={() =>
                setMainImageIndex((mainImageIndex + 1) % images.length)
              }
              className="absolute right-4 text-white bg-black/40 hover:bg-black/60 p-2 rounded-full text-xl z-10"
              aria-label="Next image"
            >
              ▶
            </button>

            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-white bg-black/50 hover:bg-black/70 p-2 rounded-full text-lg z-20"
              aria-label="Close fullscreen"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
