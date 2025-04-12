import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { BiLogoTripAdvisor } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r font-sans from-gray-100 via-[#bce1ff] to-gray-100">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap- lg:grid-cols-3">
          <div>
            {/* <Image src=" " width={200} height={200} className="mr-5 h-6 sm:h-9" alt="logo" /> */}
            <div className="text-sm text-gray-500 space-y-2">
              <p>
                
                <span className="font-bold">Email: </span> 
                travelpaksitan@gmail.com
              </p>
              <p>
                
                <span className="font-bold">Whatsapp:</span> +92 342 5952863
              </p>
              <p>
                
                <span className="font-bold">Main Office:</span> Kargil-Skardu Rd,
                Hussainabad, Skardu, 16400
              </p>
              <p>
                
                <span className="font-bold">Branch Office: </span> Noor Plaza, Near
                Serena Hotel, Gilgit City
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-medium">Company</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <Link className="hover:opacity-75" href="/about">
                  About
                </Link>
                <Link className="hover:opacity-75" href="/visa-info">
                  Visa Informations
                </Link>
                <Link className="hover:opacity-75" href="/tours">
                  Tours
                </Link>
                <Link className="hover:opacity-75" href="/trekking">
                  Treks
                </Link>
              </nav>
            </div>

            <div>
              <p className="font-medium">Helpful Links</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <Link className="hover:opacity-75" href="/contact">
                  Contact
                </Link>

                <Link className="hover:opacity-75" href="livechat">
                  Live Chat
                </Link>
              </nav>
            </div>
            <div>
              <p className="font-medium">Legal</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <Link className="hover:opacity-75" href="/privacypolicy">
                  Privacy Policy
                </Link>
                <Link className="hover:opacity-75" href="/refundpolicy">
                  Refund Policy
                </Link>
                
              </nav>
            </div>
           

            <div>
              <h2 className="font-medium">We are Social</h2>
              <p className="max-w-xs text-sm mt-4 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, accusantium.
              </p>
              <div className="flex mt-8 space-x-6 text-gray-600">
                <Link className="hover:opacity-75" href="www.facebook.com">
                  <span className="sr-only"> Facebook </span>
                  <FaFacebook size={30} className="text-blue-600" />
                </Link>
                <Link className="hover:opacity-75" href="www.instagram.com">
                  <span className="sr-only"> Instagram </span>
                  <FaInstagram size={30} className="text-red-700" />
                </Link>
                <Link className="hover:opacity-75" href="www.linkdin.com">
                  <span className="sr-only"> Twitter </span>
                  <FaLinkedin size={30} className="text-blue-700" />
                </Link>

                <Link className="hover:opacity-75" href="www.tripadvisor.com">
                  <span className="sr-only"> Trip Adviser </span>
                  <BiLogoTripAdvisor size={30} className="text-green-600" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs text-gray-800">© 2022 Comany Name</p>
      </div>
    </footer>
  );
};

export default Footer;
