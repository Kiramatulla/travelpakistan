import { PortableText } from "next-sanity";
import { GiCommercialAirplane } from "react-icons/gi";
import { LuAlarmClockCheck } from "react-icons/lu";

const PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="font-bold mt-6 mb-2">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold mt-6 mb-2">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg font-serif text-slate-700 mt-5 mb-1">
        {children}
      </h3>
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
const TourOverviews = ({ tours }) => {
  return (
    <article className="px-6 text-justify lg:text-start mt-8 mb-6 lg:pl-8 lg:pr-8">
      <h1 className="font-bold text-2xl text-gray-800 font-serif mb-4">
        {tours.title}
      </h1>
      <section className="font-sans text-black text-justify lg:text-start px-4 lg:px-0 lg:text-sm lg:leading-7">
        <PortableText
          value={tours.tourOverviews}
          components={PortableTextComponents}
        />
      </section>
      <div className="flex gap-1 md:gap-6 text-sm text-green-800 font-sans py-2 text-start">
        <div className="flex items-center justify-center">
          <GiCommercialAirplane size={28} className="text-cyan-800 " />
          <span className="font-bold px-2"> Number of Days: </span> 7 Days
        </div>
        <div className="flex items-center justify-center">
          <LuAlarmClockCheck size={28} className="text-cyan-800 " />
          <span className="font-bold px-2"> Travel Mode: </span> {tours.travelMode}
        </div>
      </div>
    </article>
  );
};

export default TourOverviews;
