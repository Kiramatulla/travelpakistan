"use client";

import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useState } from "react";

const VehicleDetails = ({ vehicles }) => {
  const [selectedVehicle, setSelectedVehicle] = useState(vehicles[0]);
  return (
    <div>
      {/* Vehicle Links */}
      <nav className="flex flex-wrap gap-y-4 justify-center space-x-4 mb-8 font-semibold text-sm">
        {vehicles.map((vehicle) => (
          <button
            key={vehicle._id}
            onClick={() => setSelectedVehicle(vehicle)}
            className={`px-5 py-2 rounded-full border-2 border-amber-600 cursor-pointer ${
              selectedVehicle?._id === vehicle._id
                ? "bg-amber-500 text-slate-900 font-semibold lg:text-sm hover:bg-amber-600 hover:scale-105 shadow-md hover:shadow-lg"
                : "bg-white text-black border-amber-600"
            }`}
          >
            {vehicle.vehicleName}
          </button>
        ))}
      </nav>

      {/* Vehicle Image and Info Side by Side */}
      {selectedVehicle && (
        <div className=" flex flex-col pb-4  md:flex-row lg:flex-row items-center justify-center">
          {/* Left: Image */}
          <div className=" flex justify-center">
            <Image
              src={urlFor(selectedVehicle.vehicleImage).url()}
              alt={selectedVehicle.vehicleName}
              width={600}
              height={500}
              className="rounded-xl  "
            />
          </div>

          {/* Right: Vehicle Info */}
          <div className="space-y-4  text-slate-700">
            <h3 className="text-2xl font-bold">
              {selectedVehicle.vehicleName}
            </h3>
            <p>
              <strong>Model:</strong> {selectedVehicle.model}
            </p>
            <p>
              <strong>Seats:</strong> {selectedVehicle.seats}
            </p>
            <p>
              <strong>Price Per Day:</strong> PKR {selectedVehicle.pricePerDay}
            </p>
            <p>
              <strong>Air Condition:</strong>{" "}
              {selectedVehicle.airCondition ? "Yes" : "No"}
            </p>
            <p>
              <strong>Driver Included:</strong>{" "}
              {selectedVehicle.driverIncluded ? "Yes" : "No"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VehicleDetails;
