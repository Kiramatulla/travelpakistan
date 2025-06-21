import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function TravelTogetherSection() {
  return (
    <section className="py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        {/* LEFT TEXT CONTENT */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Let&apos;s Travel Together
          </h2>
          <p className="text-lg text-gray-700">
            Whether it&apos;s your first trip to the north or your tenth,
            we&apos;re here to make it unforgettable. Let&apos;s plan your next
            escape — full of stories, landscapes, and new friendships.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-teal-600 text-xl" />
              Phone:
              <span className="text-gray-800 font-medium">+92 341 2141434</span>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-teal-600 text-xl" /> WhatsApp:
              <span className="text-gray-800 font-medium">+92 341 2141434</span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-teal-600 text-xl" />
              <span className="text-gray-800 font-medium">
                info@violatourspk.com
              </span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-teal-600 text-xl" />
              <span className="text-gray-800 font-medium">
                karim@violatourspk.com
              </span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-teal-600 text-xl" />
              <span className="text-gray-800 font-medium">
                Gilgit Baltistan Pakistan
              </span>
            </div>
          </div>

          <Link
            href="/contact"
            className="mt-6 inline-block bg-teal-600 hover:bg-teal-700 text-white font-medium px-6 py-3 rounded-full shadow-md transition duration-300"
          >
            Plan Your Trip
          </Link>
        </div>

        {/* RIGHT: DECORATIVE CARD */}
        <div className="relative">
          <div className="rounded-3xl shadow-xl bg-white px-8 py-12 lg:px-12 lg:py-16 text-center border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Your Next Journey Starts Here
            </h3>
            <p className="text-gray-600">
              We design every trip with purpose — blending nature, culture, and
              connection. You dream it, we build it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
