import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const BlogImageCard = ({ blog }) => {
  return (
    <Link href={`/blogs/${blog.slug.current}`}>
      <article className="w-full mx-auto mb-8 md:mb-10 transition-transform transform hover:-translate-y-1 hover:shadow-lg overflow-hidden bg-white">
        <div className="">
          <Image
            src={urlFor(blog.featuredImage && blog.featuredImage[0]).url()}
            alt={blog.title}
            height={300}
            width={300}
            className="object-cover w-full h-[16rem] md:h-[12rem]"
          />
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-slate-700 mb-2 line-clamp-2">
            {blog.title}
          </h3>
          <p className="text-sm text-cyan-700 hover:text-orange-500 font-medium inline-flex items-center group">
            Read Post
            <FaArrowRightLong className="ml-1 mt-[2px] transition-transform duration-150 group-hover:translate-x-1" />
          </p>
        </div>
      </article>
    </Link>
  );
};

export default BlogImageCard;
