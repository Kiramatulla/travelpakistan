import Image from "next/image";
import img1 from "@/app/assets/background.jpg";

import {
  FaMapMarkedAlt,
  FaHandsHelping,
  FaUsers,
  FaLeaf,
  FaCogs,
} from "react-icons/fa";

export default function AboutServices() {
  return (
    <div className="py-16 px-6 md:mx-24 flex flex-col-reverse lg:flex-row items-start gap-12">
      {/* LEFT TEXT CONTENT */}
      <div className="lg:w-1/2 space-y-6">
        <p className="text-gray-400 uppercase tracking-wide text-sm font-semibold">
          Why Travel With Us?
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Experience Authentic Pakistan With Experts
        </h2>
        <ul className="space-y-4 mt-6">
          <li className="flex items-start gap-4">
            <FaMapMarkedAlt size={40} className="text-teal-600 text-xl mt-1" />
            <p>
              <span className="font-semibold text-gray-800">
                Local Expertise
              </span>{" "}
              – Were based in Pakistan and know the terrain, culture, and people
              like the back of our hand.
            </p>
          </li>
          <li className="flex items-start gap-4">
            <FaCogs size={40} className="text-teal-600 text-xl mt-1" />
            <p>
              <span className="font-semibold text-gray-800">
                Authentic Experiences
              </span>{" "}
              – No cookie-cutter tours here. Everything is designed for real,
              raw, memorable moments.
            </p>
          </li>
          <li className="flex items-start gap-4">
            <FaUsers size={40} className="text-teal-600 text-xl mt-1" />
            <p>
              <span className="font-semibold text-gray-800">
                Trusted & Transparent
              </span>{" "}
              – From pricing to policies, we keep things clear and honest.
            </p>
          </li>
          <li className="flex items-start gap-4">
            <FaHandsHelping size={40} className="text-teal-600 text-xl mt-1" />
            <p>
              <span className="font-semibold text-gray-800">
                Personalized Service
              </span>{" "}
              – Every traveler is different, and we make sure your journey
              reflects that.
            </p>
          </li>
          <li className="flex items-start gap-4">
            <FaLeaf size={40} className="text-teal-600 text-xl mt-1" />
            <p>
              <span className="font-semibold text-gray-800">
                Sustainable Tourism
              </span>{" "}
              – We promote responsible travel that supports local communities
              and preserves nature.
            </p>
          </li>
        </ul>
      </div>

      {/* RIGHT IMAGE GRID */}
      <div className="lg:w-1/2 grid grid-cols-2 gap-4 md:pt-10 ">
        <div className="rounded-xl overflow-hidden">
          <Image
            src={img1}
            alt="travel1"
            className="object-cover h-52 w-full"
          />
        </div>
        <div className="rounded-xl overflow-hidden">
          <Image
            src={img1}
            alt="travel2"
            className="object-cover h-52 w-full"
          />
        </div>
        <div className="rounded-xl overflow-hidden">
          <Image
            src={img1}
            alt="travel3"
            className="object-cover h-52 w-full"
          />
        </div>
        <div className="rounded-xl overflow-hidden">
          <Image
            src={img1}
            alt="travel4"
            className="object-cover h-52 w-full"
          />
        </div>
      </div>
    </div>
  );
}
