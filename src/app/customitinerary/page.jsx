import { client } from "@/sanity/lib/client";
import CustomItineraryPage from "../components/itineraryInfo/CustomItineraryPage";
export const dynamicParams = true;
export const revalidate = 0;

async function getRegions() {
  const query = `
    *[_type == "region"]{
      title,
      slug,
      subregions[]->{
        title,
        slug
      }
    }
  `;
  return await client.fetch(query);
}

export default async function CustomItinerary() {
  const regions = await getRegions();
  return <CustomItineraryPage initialRegions={regions} />;
}
