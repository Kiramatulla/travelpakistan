import TourDetailsPage from "@/app/components/tourDetailPage/TourDetailsPage";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { toPlainText } from "@portabletext/react";

export const dynamicParams = true;

// ✅ This will generate static pages for each tour at build time
export async function generateStaticParams() {
  const query = `*[_type == "tour"]{ "slug": slug.current }`;
  const tours = await client.fetch(query);

  return tours.map((tour) => ({
    slug: tour.slug,
  }));
}

export async function generateMetadata(props) {
  const params = await props.params;
  const query = `*[_type == "tour" && slug.current == $slug][0]{
    metaTitle,
    Metadescription,
    images
  }`;
  const tour = await client.fetch(query, { slug: params.slug });

  return {
    title: tour.metaTitle,
    description: tour.Metadescription,
    openGraph: {
      images: [
        {
          url: urlFor(tour.images && tour.images[0]).url(),
        },
      ],
    },
  };
}

const page = async (props) => {
  const params = await props.params;
  const query = `*[_type == "tour" && slug.current == '${params.slug}'][0]`;
  const tours = await client.fetch(query);

  if (!tours) return "No Tours Found";

  const relatedQuery = `{
    "relatedTours": *[_type == "tour" && category._ref == '${tours.category._ref}' && slug.current != '${params.slug}'],
    "relatedBlogs": *[_type =="blogs" && category._ref == '${tours.category._ref}']
  }`;

  const { relatedTours, relatedBlogs } = await client.fetch(relatedQuery);

  const plainDescription = toPlainText(tours.tourOverviews || []);
  const plainItinerary = toPlainText(tours.itinerary || []);
  const images = tours.images?.map((img) => urlFor(img).url()) || [];
  const plainAbout = toPlainText(tours.regionHistory || []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tours.title,
    description:
      plainDescription || tours.tourOverviews || tours.Metadescription || "",
    touristType: "Adventure",
    image: images,
    brand: {
      "@type": "Organization",
      name: "Viola Tours Pakistan",
    },
    offers: {
      "@type": "Offer",
      price: tours.International5Persons || "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      validFrom: new Date().toISOString().split("T")[0],
    },
    areaServed: {
      "@type": "Country",
      name: "Pakistan",
    },
    itinerary: [
      {
        "@type": "TouristAttraction",
        name: "Tour Itinerary",
        description: plainItinerary,
      },
    ],
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "About the Region",
        value: plainAbout,
      },
      {
        "@type": "PropertyValue",
        name: "Related Tours",
        value:
          relatedTours?.map((t) => t.title).join(", ") ||
          "See related packages",
      },
    ],
  };
  return (
    <main className="mt-5 mb-20 ">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      ></script>
      <TourDetailsPage
        tours={tours}
        relatedTours={relatedTours}
        relatedBlogs={relatedBlogs}
      />
    </main>
  );
};

export default page;
