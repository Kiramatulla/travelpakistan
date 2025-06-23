import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { GoClock } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";

export const metadata = {
  title: "Contact Us",
};

const ContactInfo = () => {
  return (
    <section className="font-sans py-10 bg-gradient-to-br from-blue-100 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-gray-800">
          {/* Card: Visit Us */}
          <div className="bg-white shadow-2xl p-6 rounded-xl flex items-start space-x-4 hover:shadow-xl transition">
            <CiLocationOn size={32} className="text-teal-600 mt-1" />
            <div>
              <h3 className="text-lg font-semibold mb-1">Visit Us</h3>
              <p className="text-sm text-gray-600">
                Noor Plaza, Near Serena Hotel, Gilgit
              </p>
            </div>
          </div>

          {/* Card: Call Us */}
          <div className="bg-white shadow-2xl p-6 rounded-xl flex items-start space-x-4 hover:shadow-xl transition">
            <IoCallOutline size={28} className="text-teal-600 mt-1" />
            <div>
              <h3 className="text-lg font-semibold mb-1">Call Us</h3>
              <p className="text-sm text-gray-600">+92 341 2141434</p>
            </div>
          </div>

          {/* Card: Working Hours */}
          <div className="bg-white shadow-2xl p-6 rounded-xl flex items-start space-x-4 hover:shadow-xl transition">
            <GoClock size={28} className="text-teal-600 mt-1" />
            <div>
              <h3 className="text-lg font-semibold mb-1">Working Hours</h3>
              <p className="text-sm text-gray-600">24/7 Customer Support</p>
            </div>
          </div>

          {/* Card: Email Us */}
          <div className="bg-white shadow-2xl p-6 rounded-xl flex items-start space-x-4 hover:shadow-xl transition">
            <MdOutlineEmail size={26} className="text-teal-600 mt-1" />
            <div>
              <h3 className="text-lg font-semibold mb-1">Email Us</h3>
              <p className="text-sm text-gray-600">info@violatourspk.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
