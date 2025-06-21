import Image from "next/image";
import {
  FaTrophy,
  FaUsers,
  FaMapMarkedAlt,
  FaHiking,
  FaLandmark,
  FaChalkboardTeacher,
} from "react-icons/fa";
import team from "@/app/assets/background.jpg";

export default function AboutPage() {
  return (
    <div className="y-8 px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col md:flex-row gap-12 items-center justify-center md:mx-20">
      {/* LEFT: Images + Experience */}
      <div className="md:w-1/2 flex flex-col gap-6 relative">
        <div className="grid grid-cols-2 gap-4 ">
          <div className="rounded-xl overflow-hidden">
            <Image
              src={team}
              alt="team1"
              className="object-cover w-full h-40"
            />
          </div>
          <div className="rounded-xl overflow-hidden">
            <Image
              src={team}
              alt="team2"
              className="object-cover w-full h-40"
            />
          </div>
        </div>
        <div className="rounded-xl overflow-hidden">
          <Image src={team} alt="team3" className="object-cover w-full h-44" />
        </div>
        <div className="absolute bottom-[-20px] left-0 bg-teal-600 text-white rounded-xl px-6 py-4 flex items-center gap-3 shadow-lg">
          <FaTrophy className="text-3xl" />
          <div>
            <p className="text-2xl font-bold">More than 3</p>
            <p className="text-sm">Years Of Experience</p>
          </div>
        </div>
      </div>

      {/* RIGHT: Textual Content */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          What We Do
        </h2>
        <p className="text-gray-600">
          We offer a wide range of travel services and experiences, including:
        </p>
        <ul className="space-y-6 text-gray-700">
          <li className="flex items-start gap-4">
            <FaUsers className="text-teal-600 text-xl mt-1" />
            <div>
              <p className="font-semibold text-gray-800">Group Tours</p>
              <p className="text-sm text-gray-600">
                Travel with like-minded explorers on guided group adventures
                across Pakistan.
              </p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <FaMapMarkedAlt className="text-teal-600 text-xl mt-1" />
            <div>
              <p className="font-semibold text-gray-800">Private Itineraries</p>
              <p className="text-sm text-gray-600">
                Fully customized trips tailored to your personal pace,
                interests, and schedule.
              </p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <FaHiking className="text-teal-600 text-xl mt-1" />
            <div>
              <p className="font-semibold text-gray-800">Trekking Adventures</p>
              <p className="text-sm text-gray-600">
                Challenge yourself with unforgettable hikes through majestic
                mountain trails.
              </p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <FaLandmark className="text-teal-600 text-xl mt-1" />
            <div>
              <p className="font-semibold text-gray-800">Cultural Trips</p>
              <p className="text-sm text-gray-600">
                Dive into Pakistan&apos;s rich heritage, traditions, and
                architectural wonders.
              </p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <FaChalkboardTeacher className="text-teal-600 text-xl mt-1" />
            <div>
              <p className="font-semibold text-gray-800">
                Corporate & Educational
              </p>
              <p className="text-sm text-gray-600">
                Specially crafted experiences for team building, learning, and
                exploration.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
