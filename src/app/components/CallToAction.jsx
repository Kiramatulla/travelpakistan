import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="bg-slate-200 mb-4 font-sans rounded-2xl  py-8 px-2 ">
      <div className=" mx-auto text-center space-y-6">
        {/* Original Heading */}
        <h2 className="font-bold text-2xl">
          DESIGN YOUR TOUR
        </h2>
        <p className="text-gray-800 text-base sm:text-lg">
        Customize your adventure—your way
        </p>
        <Link
          href="/contact"
          className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-3 rounded-2xl transition duration-300 shadow-md"
        >
          Contact Us
        </Link>

      </div>
    </section>
  );
}
