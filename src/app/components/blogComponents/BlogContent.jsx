import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Image from "next/image";

const PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="my-6 flex justify-center">
          <Image 
            src={urlFor(value).url()} 
            alt={value.alt || "Blog Image"}
            width={800} // Keeps original width for Next.js optimization
            height={300} // Keeps original height for Next.js optimization
            className="w-full sm:h-[20rem] lg:h-[25rem]  lg:rounded-xl object-cover"
          />
        </div>
      );
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mt-6 mb-2">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold mt-6 mb-2">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold mt-5 mb-1">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="mb-4 text-gray-700">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 mb-4 text-gray-700">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 mb-4 text-gray-700">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="mb-1">{children}</li>
    ),
    number: ({ children }) => (
      <li className="mb-1">{children}</li>
    ),
  },
};

const BlogContent = ({ blogs }) => {
  return (
    <section className="mx-2 lg:mx-0 lg:pl-8 lg:pr-8 font-sans">
      <h2 className="bg-cyan-600 py-4 rounded mb-4 text-white shadow-xl font-bold pl-2 lg:pl-2">
        Blog Details
      </h2>
      <section className="font-sans text-justify lg:text-start px-4 lg:px-0 lg:text-sm lg:leading-6">
        <PortableText value={blogs.blogContent} components={PortableTextComponents}/>
      </section>
    </section>
  );
};

export default BlogContent;
