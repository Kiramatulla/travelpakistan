import { PortableText } from "next-sanity";
const PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mt-6 mb-2">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-lg font-semibold mt-6 mb-2">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg text-slate-700 mt-5 mb-1">{children}</h3>
    ),
    normal: ({ children }) => (
      <div>
        <p className="mb-4 ">{children}</p>
      </div>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-9 mb-4 text-gray-700">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 mb-4 text-gray-700">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-1">{children}</li>,
    number: ({ children }) => <li className="mb-1">{children}</li>,
  },
};

const AboutCost = ({ tours }) => {
  return (
    <article>
      <section className="md:mx-1 text-justify lg:text-start px-4 lg:px-0 lg:text-sm lg:leading-6">
        <PortableText
          value={tours.aboutCost}
          components={PortableTextComponents}
        />
      </section>
    </article>
  );
};

export default AboutCost;
