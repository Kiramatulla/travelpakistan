import TrekDetailPage from "@/app/components/trekingComponents/TrekDetailPage";
import { client } from "@/sanity/lib/client";



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