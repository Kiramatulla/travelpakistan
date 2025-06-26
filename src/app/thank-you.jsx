import Image from "next/image";
import notfound from "../app/assets/notfound.jpg";
import Link from "next/link";

const thankYou = () => {
  return (
    <div className="h-screen  flex items-center">
      <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
        <div className="max-w-md">
          <div className="text-5xl font-dark font-bold">404</div>
          <p className="text-2xl md:text-3xl font-light leading-normal">
            Thank You for Submitting the Form.{" "}
          </p>
          <p className="mb-8">
            One of our Tour Planner will get back to you with a detailed trip
            plan.
          </p>

          <Link
            href={"/"}
            className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700"
          >
            Back to homepage
          </Link>
        </div>
        <div>
          <Image
            src={notfound}
            alt="not found image"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default thankYou;
