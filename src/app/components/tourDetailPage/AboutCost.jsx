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
      <ul className="list-disc pl-4 md:pl-10 mb-4 text-gray-700 marker:pr-2 space-y-2">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-4 md:pl-10 mb-4 text-gray-700 space-y-2">
        {children}
      </ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => <li className="mb-1 ">{children}</li>,
    number: ({ children }) => <li className="mb-1 gap-x-4 ">{children}</li>,
  },

  marks: {
    link: ({ children, value }) => {
      const href = value?.href || "#";

      const isRelativeInternal = href.startsWith("/");

      const isAbsoluteInternal = href.startsWith(
        "https://www.violatourspk.com"
      );

      if (isRelativeInternal || isAbsoluteInternal) {
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

const AboutCost = ({ tours }) => {
  return (
    <div>
      <section className="md:mx-1 text-justify text-sm lg:text-start px-2 lg:px-0 lg:leading-7">
        <PortableText
          value={tours.aboutCost}
          components={PortableTextComponents}
        />
      </section>
    </div>
  );
};

export default AboutCost;
