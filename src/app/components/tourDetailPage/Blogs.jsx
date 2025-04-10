import Link from "next/link"
import {FaArrowRightLong} from "react-icons/fa6"

const Blogs = ({ relatedBlogs }) => {
  return (
    <aside className="font-sans">
      <h2 className="text-center text-3xl lg:text-2xl font-semibold px-4">
        Explore More About Your Destination
      </h2>

      <ul>
        {relatedBlogs.map((relatedBlog) => (
          <li
            key={relatedBlog._id}
            className="my-5 border-b-2 border-spacing-2 px-4 cursor-pointer transition-transform hover:scale-105 text-center "
          >
            <article>
              <Link href={`/blogs/${relatedBlog.slug.current}`}>
                {/* Blog Title */}
                <h3 className="font-medium text-xl lg:text-sm mb-2">
                  {relatedBlog.title}
                </h3>
                {/* Read More Button */}
                <button className="font-medium lg:text-sm pb-2 hover:text-orange-500 inline-flex items-center">
                  Read Post <FaArrowRightLong className="pl-1 pt-1" />
                </button>
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Blogs


// import Link from "next/link";
// import { FaArrowRightLong } from "react-icons/fa6";

// const Blogs = ({ relatedBlogs }) => {
//   return (
//     <aside className="font-sans bg-white rounded-2xl shadow-sm p-5 mb-8">
//       <h2 className="text-xl font-bold text-center mb-4 text-gray-800">
//         Explore More About Your Destination
//       </h2>

//       <ul className="space-y-4">
//         {relatedBlogs.map((relatedBlog) => (
//           <li
//             key={relatedBlog._id}
//             className="group transition-all duration-300"
//           >
//             <Link href={`/blogs/${relatedBlog.slug.current}`}>
//               <article className="bg-gray-50 hover:bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
//                 {/* Blog Title */}
//                 <h3 className="text-base lg:text-sm font-semibold text-gray-700 group-hover:text-orange-500">
//                   {relatedBlog.title}
//                 </h3>

//                 {/* Read More Button */}
//                 <span className="inline-flex items-center text-sm text-gray-500 group-hover:text-orange-500 mt-2">
//                   Read Post <FaArrowRightLong className="ml-2 text-[14px]" />
//                 </span>
//               </article>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </aside>
//   );
// };

// export default Blogs;
