import { PortableText } from "next-sanity";
const PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mt-6 mb-2 text-cyan-700">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold mt-6 mb-2 text-cyan-600">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold mt-5 mb-1 text-cyan-500">{children}</h3>
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
