import { PortableText } from 'next-sanity'

const PortableTextComponents = {

  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mt-6 mb-2">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold mt-6 mb-2">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg font-serif text-slate-700 mt-5 mb-1">{children}</h3>
    ),
    normal: ({ children }) => (
      <div className="mb-4 ">{children}</div>
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
    bullet: ({ children }) => (
      <li className="mb-1">{children}</li>
    ),
    number: ({ children }) => (
      <li className="mb-1">{children}</li>
    ),
  },
};
const TourOverviews = ({tours}) => {
  return (
    <article className="px-6 text-justify lg:text-start mt-8 mb-8 lg:pl-8 lg:pr-8">
         <h1 className="font-bold text-2xl text-gray-800 font-serif mb-4">{tours.title}</h1>
          <section className="font-sans text-black text-justify lg:text-start px-4 lg:px-0 lg:text-sm lg:leading-7">
            <PortableText value={tours.tourOverviews} components={PortableTextComponents}/>
          </section>
        </article>
  )
}

export default TourOverviews