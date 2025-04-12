import Image from "next/image";
import bgImage from "../../assets/background.jpg";
import Link from "next/link";

const ContactHomeComp = () => {
  return (
    <div className=" bg-slate-300 ">
      <div className="relative h-64 max-w-4xl mx-auto sm:h-80 md:h-72 ">
        <Image
          src={bgImage}
          alt="Tour Banner"
          className="object-cover w-full h-full rounded-t-3xl "
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-4  rounded-t-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Plan Your Custom Tour
          </h2>
          <p className="mt-2 text-sm sm:text-base max-w-xl pb-4">
            Fill out the form below and we will get back to you with a
            personalized itinerary.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-3 rounded-2xl transition duration-300 shadow-md"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactHomeComp;
