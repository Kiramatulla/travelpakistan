import { PortableText } from "next-sanity";

const PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mt-6 mb-2">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-gray-800 underline underline-offset-8 text-lg rounded pl-2 lg:pl-0">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-base text-green-900 mt-5 mb-1">{children}</h3>
    ),
    normal: ({ children }) => (
      <div>
        <p className="mb-4 ">{children}</p>
      </div>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-4 md:pl-7 mb-4 text-gray-700">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-4 md:pl-7 mb-4 text-gray-700">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-1">{children}</li>,
    number: ({ children }) => <li className="mb-1">{children}</li>,
  },
};

const Itinerary = ({ tours }) => {
  return (
    <article className="mx-2 lg:mx-0 lg:pl-8 lg:pr-8">
      <section className="font-sans text-sm text-justify lg:text-start px-4 lg:px-0 lg:leading-6">
        <PortableText
          value={tours.itinerary}
          components={PortableTextComponents}
        />
      </section>
    </article>
  );
};

export default Itinerary;
