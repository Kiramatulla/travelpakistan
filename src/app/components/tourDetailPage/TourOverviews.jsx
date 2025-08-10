import { PortableText } from "next-sanity";
import {
  FaCalendarAlt,
  FaChild,
  FaLanguage,
  FaStar,
  FaTools,
} from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { GiBinoculars, GiCommercialAirplane } from "react-icons/gi";
import { LuAlarmClockCheck } from "react-icons/lu";
import AuthorByline from "./AuthorByline";

const PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="font-bold mt-6 mb-2">{children}</h1>,
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
};
const TourOverviews = ({ tours }) => {
  return (
    <article className="px-6  lg:text-start mt-8 mb-6 lg:pl-8 lg:pr-8">
      <h1 className="font-bold text-2xl text-gray-800 font-sans mb-4">
        {tours.title}
      </h1>
      <div>
        {tours?.author?.authorName &&
          tours?.author?.lastUpdated &&
          tours?.author?.authorDescription && <AuthorByline tours={tours} />}
      </div>

      <section className="font-sans text-sm text-gray-800 text-justify lg:text-start px-2 lg:px-0 lg:text-sm lg:leading-7">
        <PortableText
          value={tours.tourOverviews}
          components={PortableTextComponents}
        />
      </section>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-white text-sm font-sans mt-6">
        {/* Highlights */}
        <div className="flex items-center gap-3 bg-blue-900/80 p-4 rounded-xl shadow-md">
          <GiBinoculars size={24} className="text-white" />
          <div>
            <p className="text-xs uppercase text-gray-300">Travel Mode</p>
            <p className="font-semibold">Travel {tours.travelMode}</p>
          </div>
        </div>

        {/* Guide Language */}
        <div className="flex items-center gap-3 bg-blue-900/80 p-4 rounded-xl shadow-md">
          <FaLanguage size={24} className="text-white" />
          <div>
            <p className="text-xs uppercase text-gray-300">Number of Days</p>
            <p className="font-semibold">Total Days {tours.numberOfDays}</p>
          </div>
        </div>

        {/* Family Friendly */}
        <div className="flex items-center gap-3 bg-blue-900/80 p-4 rounded-xl shadow-md">
          <FaChild size={24} className="text-white" />
          <div>
            <p className="text-xs uppercase text-gray-300">Suitability</p>
            <p className="font-semibold">Family Friendly</p>
          </div>
        </div>

        {/* Customizable */}
        <div className="flex items-center gap-3 bg-blue-900/80 p-4 rounded-xl shadow-md">
          <FaTools size={24} className="text-white" />
          <div>
            <p className="text-xs uppercase text-gray-300">Custom Option</p>
            <p className="font-semibold">Itinerary Flexible</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default TourOverviews;
