import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import karim from "@/app/assets/karim.jpg";

const AuthorByline = ({ tours }) => {
  return (
    <section
      className="flex items-center gap-3 border-b border-gray-200 pb-2 mb-4 text-sm"
      itemScope
      itemType="https://schema.org/Person"
    >
      {/* Author Image */}
      <Image
        src={karim}
        alt={`${tours.author.authorName} profile photo`}
        width={36}
        height={36}
        className="rounded-full object-cover flex-shrink-0"
        priority
      />

      {/* Details + Social */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-x-2">
          <h2 className="font-medium text-gray-900" itemProp="name">
            {tours.author.authorName}
          </h2>
          <p className="text-gray-600 truncate" itemProp="description">
            {tours.author.authorDescription}
          </p>
        </div>

        <div className="flex items-center gap-2 mt-1">
          <time
            dateTime={tours.author.lastUpdated}
            className="text-xs text-gray-400"
            itemProp="dateModified"
          >
            Website last updated: {tours.author.lastUpdated}
          </time>

          {/* Socials */}
          <div className="flex gap-2 ml-auto">
            <Link
              href="https://www.facebook.com/karimbari09"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              itemProp="sameAs"
            >
              <FaFacebookF
                className="text-blue-600 hover:text-blue-800"
                size={14}
              />
            </Link>
            <Link
              href="https://x.com/KarimBari_09"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              itemProp="sameAs"
            >
              <FaTwitter
                className="text-sky-500 hover:text-sky-700"
                size={14}
              />
            </Link>
            <Link
              href="https://www.instagram.com/karimbari_09/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              itemProp="sameAs"
            >
              <FaInstagram
                className="text-pink-500 hover:text-pink-700"
                size={14}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorByline;
