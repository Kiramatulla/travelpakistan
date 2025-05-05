import { PortableText } from "next-sanity";


const TrekItinerary = ({ treks }) => {
  return (
    <article className="mx-2 lg:mx-0 lg:pl-8 lg:pr-8 font-sans">
      <h2 className="bg-cyan-600 py-4 rounded mb-4 text-white shadow-xl font-bold pl-2 lg:pl-2">
        Detailed Tour Plan
      </h2>
      <section className="font-sans text-justify lg:text-start px-4 lg:px-0 lg:text-sm lg:leading-6">
        <PortableText value={treks.itinerary} />
      </section>
    </article>
  );
};

export default TrekItinerary;