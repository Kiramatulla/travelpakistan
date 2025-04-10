import BlogDetailComponent from "@/app/components/blogComponents/BlogDetailComponent";
import { client } from "@/sanity/lib/client";

const page = async ({ params }) => {
  const blogs = await client.fetch(
    `*[_type =="blogs" && slug.current == '${params.slug}'][0]`
  );
  const relatedTours = await client.fetch(
    `*[_type == "tour" && category._ref == '${blogs.category._ref}']`
  );
  const relatedBlogs = await client.fetch(
    `*[_type =="blogs" && category._ref == '${blogs.category._ref}']`
  );
  return (
    <div className=" mt-5 lg:mt-2 mb-20">
      <BlogDetailComponent
        blogs={blogs}
        relatedTours={relatedTours}
        relatedBlogs={relatedBlogs}
      />
    </div>
  );
};

export default page;
