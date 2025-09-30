import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { BiLogoTripAdvisor } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import viola_logo from "@/app/assets/viola_logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-50 via-white to-teal-100 font-sans">
      <div className="max-w-screen-xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-4 gap-10 text-gray-700">
          {/* Brand / Contact Info */}
          <div>
            <div className="">
              {/* <Image
                src={viola_logo}
                alt="viola tour logo"
                height={100}
                width={100}
              /> */}
              <h3 className="text-xl font-bold text-teal-600 mb-4">
                Viola Tours Pakisan
              </h3>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Bringing you the best of Pakistans beauty — from Skardu valleys to
              Hunza peaks. Start your journey with us.
            </p>
            <div className="text-sm space-y-1">
              <p>
                <span className="font-semibold">Email:</span>
                info@violatourspk.com
              </p>
              <p>
                <span className="font-semibold">WhatsApp:</span> +92 341 2141
                434
              </p>
              <p>
                <span className="font-semibold">Office:</span> Gulmit Gojal
                Hunza
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-teal-600 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/tours" className="hover:text-teal-600 transition">
                  Tours
                </Link>
              </li>
              <li>
                <Link
                  href="/trekking"
                  className="hover:text-teal-600 transition"
                >
                  Treks
                </Link>
              </li>
              <li>
                <Link
                  href="/visainfo"
                  className="hover:text-teal-600 transition"
                >
                  Visa Info
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">
              Support
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-teal-600 transition"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacypolicy"
                  className="hover:text-teal-600 transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/refundpolicy"
                  className="hover:text-teal-600 transition"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">
              Follow Us
            </h4>
            <p className="text-sm mb-4">
              See photos, reviews, and behind-the-scenes travel content:
            </p>
            <div className="flex space-x-5">
              <Link
                href="https://www.facebook.com/profile.php?id=61575373047070"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit us on Facebook"
              >
                <FaFacebook
                  size={24}
                  className="text-blue-600 hover:scale-110 transition-transform"
                />
              </Link>
              <Link
                href="https://www.instagram.com/violatours.pk/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit us on Instagram"
              >
                <FaInstagram
                  size={24}
                  className="text-pink-600 hover:scale-110 transition-transform"
                />
              </Link>
              <Link
                href="https://pk.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit us on LinkedIn"
              >
                <FaLinkedin
                  size={24}
                  className="text-blue-800 hover:scale-110 transition-transform"
                />
              </Link>
              <Link
                href="https://www.tripadvisor.com/Attraction_Review-g317116-d33268823-Reviews-Viola_Tours_Pakistan-Gilgit_Gilgit_Baltistan.html"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Check our reviews on TripAdvisor"
              >
                <BiLogoTripAdvisor
                  size={26}
                  className="text-green-600 hover:scale-110 transition-transform"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t pt-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Viola Tours Pakistan. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
