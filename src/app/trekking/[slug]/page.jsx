import TrekDetailPage from "@/app/components/trekingComponents/TrekDetailPage";
import { client } from "@/sanity/lib/client";

export const dynamicParams = true;
export const revalidate = 0;

export async function generateStaticParams() {
  const query = `*[_type == "treks"]{ "slug": slug.current }`;
  const treks = await client.fetch(query);

  return treks.map((trek) => ({
    slug: trek.slug,
  }));
}

export async function generateMetadata({ params }) {
  const query = `*[_type == "treks" && slug.current == $slug][0]{
    title,
    Metadescription,
    mainImage {
      asset-> {
        url
      }
    }
  }`;

  const treks = await client.fetch(query, { slug: params.slug });

  if (!treks) {
    return {
      title: "Trek not found",
      description: "This trek does not exist or has been removed.",
    };
  }

  return {
    title: treks.title,
    description: treks.Metadescription,
    openGraph: {
      title: treks.title,
      description: treks.Metadescription,
      images: [
        {
          url: treks.mainImage?.asset?.url || 'https://yourwebsite.com/default-og.jpg',
          width: 1200,
          height: 630,
          alt: `${treks.title} - Cover Image`,
        },
      ],
    },
  };
}


const page = async ({params}) => {
    const treks = await client.fetch(
        `*[_type == "treks" && slug.current == '${params.slug}'][0]`
      );
    
      const relatedTreks = await client.fetch(
        `*[_type == "treks" && category._ref == '${treks.category._ref}' && slug.current != '${params.slug}']`
      );
    
      const relatedBlogs = await client.fetch(
        `*[_type =="blogs" && category._ref == '${treks.category._ref}']`
      );
    
      return (
        <div className=" mt-5 mb-20">
          <TrekDetailPage
            treks={treks}
            relatedTreks={relatedTreks}
            relatedBlogs={relatedBlogs}
          />
        </div>
      );
}

export default page