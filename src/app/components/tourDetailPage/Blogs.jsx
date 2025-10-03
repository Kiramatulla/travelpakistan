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
              <article className="rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-blue-100 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 p-4">
                {/* Blog Title */}
                <h3 className="text-base font-semibold text-gray-700">
                  {relatedBlog.title}
                </h3>

                {/* Read More Button */}
                <button className="mt-2 inline-block text-xs px-3 py-1.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                  View Details
                </button>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
