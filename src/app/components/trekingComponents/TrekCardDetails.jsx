import { client } from "@/sanity/lib/client";
import TrekCard from "./TrekCard";


const TrekCardDetails = async () => {
  const treks = await client.fetch(`*[_type == "treks" && featured == true]`);

  return (
    <section className="mt-2 pt-12 dark:bg-slate-900 font-sans">
      {/* Section Header */}
      <header className="max-w-screen-md mx-auto text-center">
        <h2 className="mb-4 text-3xl font-bold dark:text-white text-slate-600">
          BASE CAMP TREKKING OPTIONS
        </h2>
        <p className="text-gray-500 dark:text-white">
          Webby is a PHP Framework built on top of Codeigniter 3 for easy PHP
          web application development using both HMVC and MVC patterns
        </p>
      </header>

      {/* Trek Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:mx-32 mt-6 gap-4">
        {treks.map((trek, index) => (
          <TrekCard key={index} trek={trek} />
        ))}
      </div>
    </section>
  );
};

export default TrekCardDetails;
