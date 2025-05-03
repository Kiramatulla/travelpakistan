import BlogDetailComponent from "@/app/components/blogComponents/BlogDetailComponent";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export const dynamicParams = true;
export const revalidate = 0;

export async function generateMetadata(props){
  const params = await props.params;
  const query = `*[_type == "blogs" && slug.current == $slug][0]{
    title,
    Metadescription,
   images
  }`;

  const blogs = await client.fetch(query, { slug: params.slug });
  return {
      title: blogs.title,
      description: blogs.Metadescription,
      openGraph: {
        images: [
          {
            url: urlFor(blogs.images && blogs.images[0]).url(),
          },
        ],
      },
    };
}

const page = async props => {
  const params = await props.params;
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
