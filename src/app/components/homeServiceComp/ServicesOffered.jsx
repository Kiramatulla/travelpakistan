import { FaCcVisa } from "react-icons/fa6";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdOutlineEmojiTransportation } from "react-icons/md";
const ServicesOffered = () => {
  return (
    <>
      <section className="py-14 font-sans bg-slate-300 lg:mt-8">
        <div className="container mx-auto px-3">
          <h2 className="text-4xl mb-6 font-bold text-center">
            EveryThing you Need For a Smooth Journey
          </h2>
          <p className="max-w-xs mx-auto text-center text-gray-400 md:max-w-md">
            We help in providing essential documents for visa processing to
            reliable local experienced guides, comfortable accommodation and
            transportation
          </p>
        </div>
      </section>

      {/* <!-- Feature Box Section --> */}
      <section className="pb-24 font-sans bg-slate-300">
        <div className="relative container flex flex-col items-start px-12 lg:px-24 mx-auto lg:flex-row md:space-x-7">
          
          {/* <!-- Vertical Line --> */}
          {/* <div className="absolute w-2 left-1/2 h-full -ml-1 bg-cyan-700 md:hidden"></div> */}

          {/* <!-- Box 1 --> */}
          <div className="relative flex flex-col p-6 space-y-4 bg-white rounded-lg md:w-72 lg:w-1/3">
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
              We offer visa helps, by providing supporting documents including,
              invitaion letter, Itinerary on companies letterhead and other
              supporting documents
            </p>
          </div>

          {/* <!-- Box 2 --> */}
          <div className="relative flex flex-col mt-24 p-6 bg-white space-y-4 rounded-lg md:mt-8 md:w-72 lg:w-1/3">
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
              Our accomodations and Vehicle are choosen based on prioritizing
              our clients preferences. we offer Luxury hotels and also Local
              experiences like staying with host families
            </p>
          </div>

          {/* <!-- Box 3 --> */}
          <div className="relative flex flex-col mt-24 p-6 space-y-4 bg-white rounded-lg md:mt-16 md:w-72 lg:w-1/3">
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
              For in-depth knowledge we only hire local guides and local drivers
              who knows the area inside out, ensuring a hassle-free travel.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesOffered;
