import { FaCcVisa } from "react-icons/fa6";
import {FaMapMarkedAlt} from "react-icons/fa"
import {MdOutlineEmojiTransportation} from "react-icons/md"
const ServicesOffered = () => {
  return (
    <>
      <section className="py-24 font-sans bg-slate-100 lg:mt-8">
        <div className="container mx-auto px-3">
          <h2 className="text-4xl mb-6 font-bold text-center">
            Services We Provide
          </h2>
          <p className="max-w-xs mx-auto text-center text-gray-400 md:max-w-md">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
      </section>

      {/* <!-- Feature Box Section --> */}
      <section className="pb-32 font-sans bg-slate-100">
        <div className="relative container flex flex-col items-start px-24  mx-auto  md:flex-row md:space-x-7">
          {/* <!-- Horizontal Line --> */}
          <div className="hidden absolute top-24 w-10/12 left-32 h-4 bg-cyan-600 md:block"></div>
          {/* <!-- Vertical Line --> */}
          <div className="absolute w-2 left-1/2 h-full -ml-1 bg-cyan-700 md:hidden"></div>

          {/* <!-- Box 1 --> */}
          <div className="relative flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3">
            {/* <!-- Image Positioning --> */}
            <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
              {/* <!-- Image Container For Background & Center --> */}
              <div className="flex items-center border-2 bg-cyan-600 justify-center w-24 h-24 p-4 rounded-full bg-veryDarkViolet">
                <FaCcVisa size={84} className="text-white " />
              </div>
            </div>
            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
              Visa Processing
            </h5>
            <p className="text-center text-gray-500 md:text-left lg:text-sm">
              Boost your brand recognition with each click. Generic links dont
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>

          {/* <!-- Box 2 --> */}
          <div className="relative flex flex-col mt-24 p-6 bg-white space-y-6 rounded-lg md:mt-8 md:w-1/3">
            {/* <!-- Image Positioning --> */}
            <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
              {/* <!-- Image Container For Background & Center --> */}
              <div className="flex items-center justify-center bg-cyan-600 w-24 h-24 p-4 rounded-full bg-veryDarkViolet">
                <MdOutlineEmojiTransportation
                  size={84}
                  className="text-white "
                />
              </div>
            </div>
            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
              Transport & Accomodation
            </h5>
            <p className="text-center text-gray-500 md:text-left lg:text-sm">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>

          {/* <!-- Box 3 --> */}
          <div className="relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:mt-16 md:w-1/3">
            {/* <!-- Image Positioning --> */}
            <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
              {/* <!-- Image Container For Background & Center --> */}
              <div className="flex items-center justify-center bg-cyan-600 w-24 h-24 p-4 rounded-full bg-veryDarkViolet">
                <FaMapMarkedAlt size={80} className="text-white" />
              </div>
            </div>
            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
              Local Guide and Driver
            </h5>
            <p className="text-center text-gray-500 md:text-left lg:text-sm">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesOffered;
