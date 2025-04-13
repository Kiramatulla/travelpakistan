import { client } from "@/sanity/lib/client";
import TrekPagCard from "../components/trekingComponents/TrekPagCard";


const page = async() => {
  const treks = await client.fetch(`*[_type == "treks"]`);
  return (
   <section>
    <p className="text-3xl font-bold mt-10 text-center underline font-sans">
        ALL OF OUR TREKS
      </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:mx-32 mt-6 gap-4">
        {treks.map((trek, index) => (
          <TrekPagCard key={index} trek={trek} />
        ))}
      </div>
   </section>
  )
}

export default page