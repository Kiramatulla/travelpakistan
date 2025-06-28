import { FaCcVisa } from "react-icons/fa6";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdOutlineEmojiTransportation } from "react-icons/md";

const ServicesOffered = () => {
  return (
    <>
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-teal-100 font-sans text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Everything You Need for a Smooth Journey
          </h2>
          <p className="text-gray-600 text-base">
            From visa documentation and reliable guides to comfortable
            accommodation and transport — we have got it all covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white pb-24 px-4 font-sans">
        <div className="max-w-6xl mx-auto gap-y-20 grid gap-12 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {/* Card 1 */}
          <div className="relative bg-white shadow-xl rounded-xl pt-16 pb-8 px-6 text-center hover:shadow-2xl transition">
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-teal-600 flex items-center justify-center shadow-lg">
                <FaCcVisa size={48} className="text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Visa Processing
            </h3>
            <p className="text-gray-600 text-sm">
              We provide support with official documents including invitation
              letters, custom itineraries, and other essential paperwork to ease
              your visa process.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white shadow-xl rounded-xl pt-16 pb-8 px-6 text-center hover:shadow-2xl transition">
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-teal-600 flex items-center justify-center shadow-lg">
                <MdOutlineEmojiTransportation
                  size={48}
                  className="text-white"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Transport & Accommodation
            </h3>
            <p className="text-gray-600 text-sm">
              Enjoy curated stays at luxurious hotels or authentic local homes.
              Travel comfortably with our modern fleet, tailored to your
              comfort.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white shadow-xl rounded-xl pt-16 pb-8 px-6 text-center hover:shadow-2xl transition">
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-teal-600 flex items-center justify-center shadow-lg">
                <FaMapMarkedAlt size={48} className="text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Local Guide & Driver
            </h3>
            <p className="text-gray-600 text-sm">
              Our expert local guides and drivers know the region inside out,
              ensuring a seamless, informative, and safe journey throughout your
              tour.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesOffered;
