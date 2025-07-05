import { client } from "@/sanity/lib/client";
import CustomItineraryPage from "../components/itineraryInfo/CustomItineraryPage";

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
