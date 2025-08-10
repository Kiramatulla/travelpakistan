import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import karim from "@/app/assets/karim.jpg";

const AuthorByline = ({ tours }) => {
  return (
    <section
      className="flex flex-row items-center md:items-center gap-6 border-b pb-3 mb-3"
      itemScope
      itemType="https://schema.org/Person"
    >
      <div className="hidden md:block">
        <Image
          src={karim}
          alt={`${tours.author.authorName} profile photo`}
          width={30}
          height={30}
          className="rounded-full object-cover"
          priority
        />
      </div>

      {/* Author Details */}
      <div className="">
        <div className="md:flex md:items-center md:justify-center">
          <h2 className="font-semibold" itemProp="name">
            {tours.author.authorName}:
          </h2>

          <p className="text-sm text-gray-500 px-1" itemProp="description">
            {tours.author.authorDescription}
          </p>
          <time
            dateTime={tours.author.lastUpdated}
            className="text-sm text-gray-500"
            itemProp="dateModified"
          >
            {tours.author.lastUpdated} WEBSITE EDITED
          </time>
        </div>

        {/* Hardcoded Social Links */}
        <div className="flex gap-4 mt-2">
          <Link
            href="https://www.facebook.com/karimbari09"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            itemProp="sameAs"
          >
            <FaFacebookF
              className="text-blue-600 hover:text-blue-800"
              size={18}
            />
          </Link>
          {/* <Link
            href="https://twitter.com"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
            itemProp="sameAs"
          >
            <FaTwitter className="text-sky-500 hover:text-sky-700" size={18} />
          </Link> */}
          <Link
            href="https://www.instagram.com/karimbari_09/"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            itemProp="sameAs"
          >
            <FaInstagram
              className="text-pink-500 hover:text-pink-700"
              size={18}
            />
          </Link>
          {/* <Link
            href="https://linkedin.com"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            itemProp="sameAs"
          >
            <FaLinkedinIn
              className="text-blue-700 hover:text-blue-900"
              size={18}
            />
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default AuthorByline;
