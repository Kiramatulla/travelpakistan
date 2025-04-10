import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";


const TrekImage = ({ treks }) => {
  if (!treks?.images || treks.images.length === 0) return null; // Prevent errors

  return (
    <figure className="mx-auto flex justify-center items-center mt-10">
      <Image
        src={urlFor(treks.images[0]).url()}
        alt={treks.title || "Trek Image"}
        width={700} 
        height={300}  
        className="w-full  sm:h-[20rem] lg:h-[25rem] px-2 lg:px-10 lg:rounded-xl object-cover"
        priority 
      />
    </figure>
  );
};

export default TrekImage;
