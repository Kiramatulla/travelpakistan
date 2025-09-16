import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

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
      <div>
        <p className="mb-4 text-gray-700">{children}</p>
      </div>
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
    bullet: ({ children }) => <li className="mb-1">{children}</li>,
    number: ({ children }) => <li className="mb-1">{children}</li>,
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href || "#";

      // 1. Internal relative path (starts with "/")
      const isRelativeInternal = href.startsWith("/");

      // 2. Absolute link but to your own domain
      const isAbsoluteInternal = href.startsWith(
        "https://www.violatourspk.com"
      );

      if (isRelativeInternal || isAbsoluteInternal) {
        // Strip domain for absolute internal links
        const cleanHref = isAbsoluteInternal
          ? href.replace("https://www.violatourspk.com", "")
          : href;

        return (
          <Link href={cleanHref} className="text-blue-600 underline">
            {children}
          </Link>
        );
      }

      // external fallback
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          {children}
        </a>
      );
    },
  },
};

const BlogContent = ({ blogs }) => {
  return (
    <article className="mx-2 lg:mx-0 lg:pl-8 lg:pr-8 ">
      <h2 className="bg-cyan-600 py-4 rounded mb-4 text-white shadow-xl font-bold pl-2 lg:pl-2">
        Blog Details
      </h2>
      <section className=" text-justify lg:text-start px-4 lg:px-0 lg:text-gray-700 lg:text-base lg:leading-8">
        <PortableText
          value={blogs.blogContent}
          components={PortableTextComponents}
        />
      </section>
    </article>
  );
};

export default BlogContent;
