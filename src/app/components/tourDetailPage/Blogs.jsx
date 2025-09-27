import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const Blogs = ({ relatedBlogs }) => {
  return (
    <div className="font-sans bg-white rounded-2xl shadow-xl p-5 mb-8">
      <h2 className="text-xl font-bold text-center mb-4 text-gray-800">
        Explore More About Your Destination
      </h2>

      <ul className="space-y-4">
        {relatedBlogs.map((relatedBlog) => (
          <li
            key={relatedBlog._id}
            className="group transition-all duration-300"
          >
            <Link href={`/blogs/${relatedBlog.slug}`}>
              <article className="bg-gradient-to-br from-slate-300 to-white hover:bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
                {/* Blog Title */}
                <h3 className="text-base font-semibold text-gray-700">
                  {relatedBlog.title}
                </h3>

                {/* Read More Button */}
                <span className="inline-flex items-center text-sm text-gray-500 group-hover:text-orange-500 mt-2">
                  Read Post <FaArrowRightLong className="ml-2 text-[14px]" />
                </span>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
