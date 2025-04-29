import { client } from "@/sanity/lib/client";
import BlogImageCard from "./BlogImageCard";

const BlogCards = async () => {
  const blogs = await client.fetch(`*[_type == "blogs"]`);

  return (
    <section className="py-12 lg:py-12 font-sans bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Our Recent Blogs
          </h2>
          <p className="text-gray-600 text-base md:text-sm max-w-2xl mx-auto">
            Learn more about your favorite destinations in our blog section —
            from history and tourist attractions to local activities, travel distances,
            and drive times. We've got everything covered.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogs?.map((blog, index) => (
            <BlogImageCard blog={blog} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCards;
