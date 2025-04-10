import { PortableText } from "next-sanity";

const IncAndExc = ({ tours }) => {
  const portableTextComponents = {
    list: {
      bullet: ({ children }) => (
        <ul className="list-disc pl-16 pt-2 pb-2 leading-6">{children}</ul>
      ),
      number: ({ children }) => (
        <ol className="list-decimal pl-16 pt-2 pb-2 leading-6">{children}</ol>
      ),
    },
    listItem: {
      bullet: ({ children }) => <li>{children}</li>,
      number: ({ children }) => <li>{children}</li>,
    },
  };
  return (
    <section className="mx-2 lg:mx-0 mt-6 lg:pl-8 lg:pr-8">
      <h2 className="font-sans font-semibold lg:text-sm rounded bg-cyan-600 text-white py-4 pl-2 ">
        Services We Are Providing
      </h2>
      <section className="px-4 lg:mx-0 lg:p-2  text-justify font-sans lg:text-sm bg-slate-200 rounded-xl">
        <PortableText
          value={tours.inclusionExclusion}
          components={portableTextComponents}
        />
      </section>
    </section>
  );
};

export default IncAndExc;


