import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const ImageComp = ({ tours }) => {
  if (!tours?.images || tours.images.length === 0) return null; // Prevent errors

  return (
    <figure className="mx-auto flex justify-center items-center mt-10">
      <Image
        src={urlFor(tours.images[0]).url()}
        alt={tours.title || "Tour Image"}
        width={700} // Keeps original width for Next.js optimization
        height={300} // Keeps original height for Next.js optimization
        className="w-full  sm:h-[20rem] lg:h-[25rem] px-2 lg:px-10 lg:rounded-xl object-cover"
        priority // Ensures fast loading
      />
    </figure>
  );
};

export default ImageComp;
