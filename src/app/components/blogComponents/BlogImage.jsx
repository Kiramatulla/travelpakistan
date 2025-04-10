import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";


const BlogImage = ({ blogs }) => {

  return (
    <figure className="mx-auto flex justify-center items-center mt-10">
      <Image
        src={urlFor(blogs.featuredImage && blogs.featuredImage).url()}
        alt={blogs.title || "Tour Image"}
        width={700} // Keeps original width for Next.js optimization
        height={300} // Keeps original height for Next.js optimization
        className="w-full sm:h-[20rem] lg:h-[25rem] px-2 lg:px-10 lg:rounded-xl object-cover"
        priority // Ensures fast loading
      />
    </figure>
  );
};

export default BlogImage;