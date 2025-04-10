import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { FaIndent, FaOutdent } from "react-icons/fa6";
import parado from "../../assets/parado.jpg"
import VehicleDetails from "./VehicleDetails";


const VehicleCard = async () => {
  const vehicles = await client.fetch(`*[_type == "vehicle"]`);

  return (
    <section className="mt-16 font-sans lg:mt-20">
      {/* Section Header */}
      <header className="container mx-auto px-3 text-center">
        <h2 className="flex items-center justify-center text-3xl text-slate-600 mb-6 font-bold">
          <FaIndent className="pr-2 mr-2" />
          FIND YOUR VEHICLE
          <FaOutdent className="pl-2 ml-2" />
        </h2>
        <p className="max-w-xs mx-auto text-gray-400 md:max-w-md">
          Click on the vehicle links to discover the best daily rental rates,
          seating capacity, and model details.
        </p>
      </header>

      {/* Vehicle Links */}
     <div className="mt-10"> <VehicleDetails vehicles={vehicles}/> </div>

     
    </section>
  );
};

export default VehicleCard;
