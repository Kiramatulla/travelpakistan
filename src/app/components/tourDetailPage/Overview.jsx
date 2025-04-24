import { PortableText } from "next-sanity";
const PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mt-6 mb-2">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold mt-6 mb-2">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold mt-5 mb-1 ">{children}</h3>
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
}


const OverView = ({ tours }) => {
    return (
      <section className="px-6 text-justify lg:text-start mt-12 mb-8 lg:pl-8 lg:pr-8">
        <h1 className="font-bold text-2xl text-gray-800 font-sans mb-4">{tours.title}</h1>
        <div className=" font-sans text-sm lg:leading-7 ">
           <PortableText value={tours.tourOverview} components={PortableTextComponents}/>
        </div>
      </section>
    );
  };
  
  export default OverView;

