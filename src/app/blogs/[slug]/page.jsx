import BlogDetailComponent from "@/app/components/blogComponents/BlogDetailComponent";
import { client } from "@/sanity/lib/client";

export const dynamicParams = true;
export const revalidate = 0;

const page = async ({ params }) => {
  const blogs = await client.fetch(
    `*[_type =="blogs" && slug.current == '${params.slug}'][0]`
  );
  const relatedTours = await client.fetch(
    `*[_type == "tour" && category._ref == '${blogs.category._ref}']`
  );
  const relatedBlogs = await client.fetch(
    `*[_type =="blogs" && category._ref == '${blogs.category._ref}' && slug.current != '${params.slug}']`
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
