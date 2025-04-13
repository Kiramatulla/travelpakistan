import { PortableText } from "next-sanity";
import Link from "next/link";

const PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mt-6 mb-2 text-cyan-700">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold mt-6 mb-2 text-cyan-600">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold mt-5 mb-1 text-cyan-500">
        {children}
      </h3>
    ),
    normal: ({ children }) => <p className="mb-4 text-gray-700">{children}</p>,
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
};
const VisaInfoComp = ({ privacy }) => {
  return (
    <section className="mx-2 lg:max-w-4xl lg:mx-auto py-10 lg:pl-8 lg:pr-8 font-sans bg-slate-100">
      <h2 className="bg-cyan-600 py-4 text-center text-3xl rounded mb-4 text-white shadow-xl font-bold pl-2">
        Visa Information and How to Apply?
      </h2>
      <section className="font-sans text-justify lg:text-start px-4 lg:px-0 text-sm leading-6">
        <PortableText
          value={privacy.visaInfo}
          components={PortableTextComponents}
        />
      </section>
      <Link
        href="https://visa.nadra.gov.pk/e-visa/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition duration-300">
          Apply Now
        </button>
      </Link>
    </section>
  );
};

export default VisaInfoComp;
