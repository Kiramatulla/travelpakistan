import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const CallToAction = () => {
  return (
    <aside className="font-sans bg-gradient-to-r from-cyan-600 to-blue-500 text-white rounded-2xl p-6 shadow-lg space-y-4 mb-8">
      <h2 className="text-xl font-bold text-center">Need Help Planning?</h2>
      <p className="text-sm text-center">
        Reach out to our travel experts for custom itineraries, group deals, and more.
      </p>

      <div className="space-y-3">
        <Link
          href="/contact"
          className="block w-full text-center bg-white text-cyan-700 font-semibold py-2 rounded-xl hover:bg-gray-100 transition"
        >
          Get In Touch
        </Link>

        <div className="text-sm flex items-center gap-2 justify-center">
          <FaPhoneAlt className="text-white" />
          <span>+92 300 1234567</span>
        </div>
        <div className="text-sm flex items-center gap-2 justify-center">
          <MdOutlineMailOutline className="text-white text-lg" />
          <span>info@yourtour.com</span>
        </div>
      </div>
    </aside>
  );
};

export default CallToAction;
