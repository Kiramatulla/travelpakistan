import { client } from "@/sanity/lib/client";
import TrekCard from "./TrekCard";

const TrekCardDetails = async () => {
  const treks = await client.fetch(`*[_type == "treks" && featured == true]`);

  return (
    <section className="mt-2 pt-12  font-sans">
      {/* Section Header */}
      <header className="max-w-screen-md mx-auto text-center">
        <h2 className="mb-4 text-3xl font-bold  text-slate-600">
          Trekking the Karakoram, K2 Base Camp, Gondogoro La and Hidden Passes.
        </h2>
        <p className="text-gray-500 ">
          Explore Trekking adventures across Pakistan wildest Frontier in 2025 –
          challenge yourself via the Legendary K2 Base Camp to the exciting
          Gondogoro La, cross remote passes of Hisper La, Khurdopin and Lukpe
          La.
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
