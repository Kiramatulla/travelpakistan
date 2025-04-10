import Link from "next/link";
import Image from "next/image";
import headerBg from "../assets/header-bg-color.png";
const navLinks = [
  { name: "Trekking", href: "/trekking" },
  { name: "Blogs", href: "/blogs" },
  { name: "Visa Info", href: "/visa-info" },
  { name: "Contact Us", href: "/contact" },
  { name: "About Us", href: "/about" },
];

const Navbar = () => {
  return (
    <header className="relative py-5 mt-3 shadow-2xl bg-slate-700  border mx-20 rounded-full">
      {/* Background Image */}
      <div className="absolute inset-x-0 top-0 w-full -z-10 translate-y-[-80%]">
        <Image src={headerBg} alt="Header Background" className="w-full" />
      </div>

      <nav
        className="mx-auto flex max-w-7xl items-center  text-white justify-between lg:px-8"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              className="h-9 w-auto"
              src=""
              alt="Company Logo"
              width={40}
              height={40}
            />
    
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex lg:gap-x-6 font-sans lg:text-sm ">
          <Link
            href="/"
            className=" text-white hover:text-orange-600 font-sans"
          >
            Home
          </Link>

          <div className="">
            <Link
              href="/tours"
              className="flex items-center gap-x-1  text-white hover:text-orange-600"
            >
              Tours
            </Link>
          </div>
          {/* Other Links */}
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className=" text-white hover:text-orange-600"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Contact Number */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
         <h2>
          Liscence No. 278
         </h2>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;