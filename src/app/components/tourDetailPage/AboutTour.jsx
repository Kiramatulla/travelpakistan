import { PortableText } from "next-sanity";
import Link from "next/link";

const PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="font-bold mt-6 mb-2">{children}</h1>,
    h2: ({ children }) => (
      <h2 className="text-xl font-semibold font-serif md:font-sans mt-6 mb-2 text-slate-700">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg font-serif text-slate-700 mt-5 mb-1">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <div>
        <p className="mb-4">{children}</p>
      </div>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-4 md:pl-8 mb-4 text-gray-700">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-4 md:pl-8 mb-4 text-gray-700">
        {children}
      </ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => <li className="mb-1">{children}</li>,
    number: ({ children }) => <li className="mb-1">{children}</li>,
  },

  // ✅ Add link handling here
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

const AboutTour = ({ tours }) => {
  return (
    <article className="mx-2 lg:mx-0 lg:pl-8 lg:pr-8">
      <section className="text-justify lg:text-start px-4 lg:px-0 text-sm lg:leading-6">
        <PortableText
          value={tours.regionHistory}
          components={PortableTextComponents}
        />
      </section>
    </article>
  );
};

export default AboutTour;
