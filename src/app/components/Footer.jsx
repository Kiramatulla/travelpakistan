import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { BiLogoTripAdvisor } from "react-icons/bi";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100 font-sans">
      <div className="max-w-screen-xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-800">Contact Us</h3>
            <div className="text-sm text-gray-600 space-y-2">
              <p>
                <span className="font-semibold">Email:</span> travelpakistan@gmail.com
              </p>
              <p>
                <span className="font-semibold">WhatsApp:</span> +92 342 5952863
              </p>
              <p>
                <span className="font-semibold">Main Office:</span> Kargil-Skardu Rd, Hussainabad, Skardu
              </p>
              <p>
                <span className="font-semibold">Branch Office:</span> Noor Plaza, Near Serena Hotel, Gilgit City
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-gray-800">Company</h4>
              <nav className="flex flex-col space-y-2 text-sm text-gray-600">
                <Link href="/about" className="hover:text-blue-700">About</Link>
                <Link href="/visainfo" className="hover:text-blue-700">Visa Info</Link>
                <Link href="/tours" className="hover:text-blue-700">Tours</Link>
                <Link href="/trekking" className="hover:text-blue-700">Treks</Link>
              </nav>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-gray-800">Helpful Links</h4>
              <nav className="flex flex-col space-y-2 text-sm text-gray-600">
                <Link href="/contact" className="hover:text-blue-700">Contact</Link>
                <Link href="/livechat" className="hover:text-blue-700">Live Chat</Link>
              </nav>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-gray-800">Legal</h4>
              <nav className="flex flex-col space-y-2 text-sm text-gray-600">
                <Link href="/privacypolicy" className="hover:text-blue-700">Privacy Policy</Link>
                <Link href="/refundpolicy" className="hover:text-blue-700">Refund Policy</Link>
              </nav>
            </div>
          </div>

          {/* Social & Description */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">We are Social</h3>
            <p className="text-sm text-gray-600 mb-4">
              For videos, images, and traveler reviews, follow us on our social media platforms:
            </p>
            <div className="flex items-center space-x-5">
              <Link href="https://www.facebook.com/profile.php?id=61575373047070" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={28} className="text-blue-600 hover:opacity-80" />
              </Link>
              <Link href="https://www.instagram.com/violatours.pk/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={28} className="text-pink-600 hover:opacity-80" />
              </Link>
              <Link href="https://pk.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={28} className="text-blue-700 hover:opacity-80" />
              </Link>
              <Link href="https://www.tripadvisor.com/" target="_blank" rel="noopener noreferrer">
                <BiLogoTripAdvisor size={30} className="text-green-600 hover:opacity-80" />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t pt-6 text-center text-xs text-gray-700">
          © {new Date().getFullYear()} Travel Pakistan. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
