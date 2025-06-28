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
          <div className="bg-white shadow-2xl p-6 md:p-2 lg:p-6 rounded-xl flex md:flex-col lg:flex-row items-start md:items-center lg:items-center space-x-4 md:space-x-0 lg:space-x-4 hover:shadow-xl transition">
            <CiLocationOn size={32} className="text-teal-600 mt-1" />
            <div className="">
              <h3 className="text-lg font-semibold mb-1 md:text-center lg:text-start">
                Visit Us
              </h3>
              <p className="text-sm text-gray-600 md:text-center lg:text-start">
                Aliabad Hunza, 56000, Pakistan
              </p>
            </div>
          </div>

          {/* Card: Call Us */}
          <div className="bg-white shadow-2xl p-6 md:p-2 lg:p-6 space-x-4 md:space-x-0 lg:space-x-4 flex md:flex-col lg:flex-row items-start md:items-center lg:items-center rounded-xl hover:shadow-xl transition">
            <IoCallOutline size={28} className="text-teal-600 mt-1" />
            <div>
              <h3 className="text-lg font-semibold mb-1 md:text-center lg:text-start">
                Call Us
              </h3>
              <p className="text-sm text-gray-600 md:text-center lg:text-start">
                +92 341 2141434
              </p>
            </div>
          </div>

          {/* Card: Working Hours */}
          <div className="bg-white p-6 md:p-2 lg:p-6 space-x-4 md:space-x-0 lg:space-x-4 flex md:flex-col lg:flex-row items-start md:items-center lg:items-center shadow-2xl rounded-xl hover:shadow-xl transition">
            <GoClock size={28} className="text-teal-600 mt-1" />
            <div>
              <h3 className="text-lg font-semibold mb-1 md:text-center lg:text-start">
                Working Hours
              </h3>
              <p className="text-sm text-gray-600 md:text-center lg:text-start">
                24/7 Customer Support
              </p>
            </div>
          </div>

          {/* Card: Email Us */}
          <div className="bg-white p-6 md:p-2 lg:p-6 space-x-4 md:space-x-0 lg:space-x-4 flex md:flex-col lg:flex-row items-start md:items-center lg:items-center shadow-2xl rounded-xl hover:shadow-xl transition">
            <MdOutlineEmail size={26} className="text-teal-600 mt-1" />
            <div>
              <h3 className="text-lg font-semibold mb-1 md:text-center lg:text-start">
                Email Us
              </h3>
              <p className="text-sm text-gray-600 md:text-center lg:text-start">
                info@violatourspk.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
