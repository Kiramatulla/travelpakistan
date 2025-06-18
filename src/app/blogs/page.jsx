import { client } from "@/sanity/lib/client";
import BlogCategory from "../components/blogComponents/BlogCategory";
import BlogImageCard from "../components/blogComponents/BlogImageCard";
import Link from "next/link";

const PAGE_SIZE = 12;

export const metadata = {
  title: "Pakistan Tour Packages 2025",
  description:
    "Looking for a once-in-a-lifetime adventure? Discover 20+ handpicked Pakistan tour packages for 2025, designed just for you. Whether you want to explore the mountains of Hunza, the deserts of Cholistan, or the culture of Lahore — weve got a trip that fits your style, budget, and time",
};

const page = async (props) => {
  const searchParams = await props.searchParams;
  const currentPage = parseInt(searchParams.page || "1");
  const start = (currentPage - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  // Fetch the tours for this specific page (using pagination)
  const blogs = await client.fetch(`*[_type == "blogs"][${start}...${end}]`);
  const category = await client.fetch(`*[_type == "category"]`);

  // Fetch the total number of tours (for pagination controls)
  const totalBlogs = await client.fetch(`count(*[_type == "blogs"])`);
  const totalPages = Math.ceil(totalBlogs / PAGE_SIZE);

  return (
    <main>
      <div className=" flex ">
        <section className="hidden md:flex">
          <BlogCategory category={category} blogs={blogs} />
        </section>
        <section className=" lg:p-4">
          <div className="py-12 lg:py-12 font-sans bg-white">
            <div className="max-w-7xl mx-auto px-4">
              {/* Header */}
              <header className="text-center mb-12">
                <h2 className="text-xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                  Our Recent Blogs
                </h2>
                <p className="text-gray-600 text-base md:text-sm max-w-2xl mx-auto">
                  Learn more about your favorite destinations in our blog
                  section — from history and tourist attractions to local
                  activities, travel distances, and drive times. We have got
                  everything covered.
                </p>
              </header>

              {/* Blog Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {blogs?.map((blog, index) => (
                  <BlogImageCard blog={blog} key={index} />
                ))}
              </div>
              {/* Pagination controls */}
              <div className="flex justify-center gap-4 mt-10 mb-20">
                {currentPage > 1 && (
                  <Link
                    href={`?page=${currentPage - 1}`}
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    Previous
                  </Link>
                )}

                {Array.from({ length: totalPages }, (_, i) => (
                  <Link
                    key={i}
                    href={`?page=${i + 1}`}
                    className={`px-4 py-2 rounded ${
                      i + 1 === currentPage
                        ? "bg-cyan-600 text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {i + 1}
                  </Link>
                ))}

                {currentPage < totalPages && (
                  <Link
                    href={`?page=${currentPage + 1}`}
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    Next
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default page;

//======================================Test Going on=================
// "use client";

// import { useEffect, useState } from "react";
// import { client } from "@/sanity/lib/client";
// import BlogCategory from "../components/blogComponents/BlogCategory";
// import BlogImageCard from "../components/blogComponents/BlogImageCard";

// const PAGE_SIZE = 12;

// export default function BlogPage() {
//   const [blogs, setBlogs] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);

//   // Fetch all blogs and categories when page loads
//   useEffect(() => {
//     const fetchData = async () => {
//       const allBlogs = await client.fetch(`*[_type == "blogs"]{
//       title,
//       slug,
//       category->{_id, title}
//     }`);
//       const allCategories = await client.fetch(
//         `*[_type == "category"]{_id, title}`
//       );

//       setBlogs(allBlogs);
//       setCategories(allCategories);
//       setSelectedCategory(allCategories[0]?._id || ""); // use _id as default
//     };

//     fetchData();
//   }, []);

//   const filteredBlogs = blogs.filter(
//     (blog) => blog.category?._id === selectedCategory._id
//   );
//   console.log(filteredBlogs);

//   const totalPages = Math.ceil(filteredBlogs.length / PAGE_SIZE);
//   const paginatedBlogs = filteredBlogs.slice(
//     (currentPage - 1) * PAGE_SIZE,
//     currentPage * PAGE_SIZE
//   );

//   return (
//     <main>
//       <div className="flex">
//         <section className="hidden md:flex">
//           <BlogCategory
//             category={categories}
//             selectedCategory={selectedCategory}
//             setSelectedCategory={(id) => {
//               setSelectedCategory(id);
//               setCurrentPage(1);
//             }}
//           />
//         </section>
//         <section className="lg:p-4">
//           <div className="max-w-7xl mx-auto px-4">
//             <h2 className="text-xl sm:text-4xl font-bold text-slate-800 mb-4">
//               Our Recent Blogs
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {paginatedBlogs.map((blog, i) => (
//                 <BlogImageCard key={i} blog={blog} />
//               ))}
//             </div>
//             {/* Pagination */}
//             <div className="flex justify-center mt-8 gap-3">
//               {Array.from({ length: totalPages }).map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setCurrentPage(i + 1)}
//                   className={`px-4 py-2 rounded ${
//                     i + 1 === currentPage
//                       ? "bg-blue-600 text-white"
//                       : "bg-gray-200"
//                   }`}
//                 >
//                   {i + 1}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }
