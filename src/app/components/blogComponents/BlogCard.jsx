import { client } from "@/sanity/lib/client";
import BlogImageCard from "./BlogImageCard";


const BlogCards = async () => {
  const blogs = await client.fetch(`*[_type == "blogs"]`);

  return (
    <section className=" pb-10 lg:pb-20 lg:mt-10 font-sans">
      <div className="container">
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto lg:mb-10 max-w-[510px]">
              <h2
                className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
              >
                Our Recent Blogs
              </h2>
              <p className="text-sm text-body-color">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3">
          {blogs?.map((blog, index) => (
            
              <BlogImageCard blog={blog} key={index}/>
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCards;
