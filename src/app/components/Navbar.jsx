"use client";
import Link from "next/link";
import Image from "next/image";
import headerBg from "../assets/header-bg-color.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import HunzaDropDown from "./NavbarComponents/HunzaDropDown";
import TrekDropDown from "./NavbarComponents/trekDropDown";
import CompanyPolicy from "./NavbarComponents/CompanyPolicy";

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);

  const handleClick = () => {
    setShowCart(!showCart);
  };

  return (
    <header className="relative py-5 mt-3 mx-5 md:mx-20 md:shadow-2xl md:bg-slate-700 md:border md:rounded-full">
      {/* Background Image */}
      <div className="absolute inset-x-0 top-0 w-full -z-10 translate-y-[-80%]">
        <Image src={headerBg} alt="Header Background" className="w-full" />
      </div>

      <nav
        className="mx-auto flex max-w-7xl items-center justify-between text-white lg:px-8"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex flex-1 justify-start">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              className="h-8 w-auto"
              src=""
              alt="Company Logo"
              width={40}
              height={40}
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex md:gap-x-6 lg:text-sm font-sans">
          <Link href="/" className="hover:text-orange-600">
            Home
          </Link>
          <HunzaDropDown />
          {/* <TrekDropDown /> */}

          <Link href="/trekking" className="hover:text-orange-600">
            Treks
          </Link>

          <Link href="/blogs" className="hover:text-orange-600">
            Blogs
          </Link>
          <Link href="/visainfo" className="hover:text-orange-600">
            Visa Info
          </Link>
          <Link href="/contact" className="hover:text-orange-600">
            Contact
          </Link>
         <CompanyPolicy/>
        </div>

        {/* Right Side */}
        <div className="flex flex-1 justify-end items-center gap-4">
          <span className="hidden md:inline">License No. 000</span>
          {/* Hamburger Menu - for Mobile */}
          <button
            className="md:hidden text-black text-2xl p-2"
            onClick={handleClick}
          >
            <GiHamburgerMenu />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden flex flex-col gap-4 py-10 px-10 fixed top-0 bottom-0 w-72 z-50 h-screen bg-slate-900 transition-all duration-500 ${showCart ? "right-0" : "-right-72"}`}
        >
          <div>
            <button
              className="absolute top-6 right-6 text-white cursor-pointer"
              onClick={handleClick}
            >
              <ImCross />
            </button>
          </div>
          <div className="flex flex-col gap-y-2 mt-14 font-sans text-white text-xl">
            <Link
              href="/"
              className="hover:text-orange-600"
              onClick={handleClick}
            >
              Home
            </Link>
            <Link
              href="/tours"
              className="hover:text-orange-600"
              onClick={handleClick}
            >
              Tours
            </Link>
            <Link
              href="/trekking"
              className="hover:text-orange-600"
              onClick={handleClick}
            >
              Treks
            </Link>
            <Link
              href="/blogs"
              className="hover:text-orange-600"
              onClick={handleClick}
            >
              Blogs
            </Link>
            <Link
              href="/visainfo"
              className="hover:text-orange-600"
              onClick={handleClick}
            >
              Visa Info
            </Link>
            <Link
              href="/about"
              className="hover:text-orange-600"
              onClick={handleClick}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-orange-600"
              onClick={handleClick}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
