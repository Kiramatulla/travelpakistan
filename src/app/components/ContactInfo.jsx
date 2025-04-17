import {CiLocationOn} from "react-icons/ci"
import { IoCallOutline } from "react-icons/io5";
import {GoClock} from "react-icons/go"
import { MdOutlineEmail } from "react-icons/md";

export const metadata ={
  title:"Contact Us",
}

const ContactInfo = () => {
  return (
    <div className="font-sans border-t md:mt-20 border-b-2  py-6  md:mx-28 md:mb-10 md:border-t-0 md:rounded-full md:border-8 border-[#3f9fac] md:shadow-2xl ">
      
      <div className="text-sm container grid grid-cols-2 gap-y-6 md:grid-cols-4 lg:mx-auto lg:pl-10 text-gray-800   ">
        {/* Visit Us */}
        <div className="flex items-center space-x-3 ">
          <CiLocationOn size={34} className="text-gray-600" />
          <div>
            <h3 className="font-semibold ">Visit Us</h3>
            <p className="lg:first-line:text-sm text-gray-500">
              Noor Plaza, Near Serena Gilgit
            </p>
          </div>
        </div>

        {/* Call Us */}
        <div className="flex items-center space-x-3">
          <IoCallOutline size={28} className="text-gray-600" />
          <div>
            <h3 className="font-semibold">Call Us</h3>
            <p className="text-sm text-gray-500">+92 342 5952863</p>
          </div>
        </div>

        {/* Working Hours */}
        <div className="flex items-center space-x-3">
          <GoClock size={28} className="text-gray-600" />
          <div>
            <h3 className="font-semibold">Working Hours</h3>
            <p className="text-sm text-gray-500">24/7 Customer Services</p>
          </div>
        </div>

        {/* Email Us */}
        <div className="flex items-center space-x-3">
          <MdOutlineEmail size={26} className="text-gray-600" />
          <div>
            <h3 className="font-semibold">Email Us</h3>
            <p className="text-sm text-gray-500">travelpakistan@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
