import TrekDetailPage from "@/app/components/trekingComponents/TrekDetailPage";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export const dynamicParams = true;

export async function generateStaticParams() {
  const query = `*[_type == "treks"]{ "slug": slug.current }`;
  const treks = await client.fetch(query);

  return treks.map((trek) => ({
    slug: trek.slug,
  }));
}

export async function generateMetadata(props) {
  const params = await props.params;
  const query = `*[_type == "treks" && slug.current == $slug][0]{
    title,
    Metadescription,
   images
  }`;

  const treks = await client.fetch(query, { slug: params.slug });

  return {
    title: treks.title,
    description: treks.Metadescription,
    openGraph: {
      images: [
        {
          url: urlFor(treks.images && treks.images[0]).url(),
        },
      ],
    },
  };
}

const page = async (props) => {
  const params = await props.params;
  const treks = await client.fetch(
    `*[_type == "treks" && slug.current == '${params.slug}'][0]`
  );

  if (!treks) return "No Treks Found";

  const relatedTreks = await client.fetch(
    `*[_type == "treks" && category._ref == '${treks.category._ref}' && slug.current != '${params.slug}']`
  );

  const relatedBlogs = await client.fetch(
    `*[_type =="blogs" && category._ref == '${treks.category._ref}']`
  );

  return (
    <main className=" mt-5 mb-20">
      <TrekDetailPage
        treks={treks}
        relatedTreks={relatedTreks}
        relatedBlogs={relatedBlogs}
      />
    </main>
  );
};

export default page;
