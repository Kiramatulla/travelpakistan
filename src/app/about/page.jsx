import { client } from "@/sanity/lib/client";
import AboutUs from "../components/aboutComp/AboutUs"

const page = async() => {
  const privacy = await client.fetch(`*[_type == "sitePolicies"][0]`);
  
   return (
     <section>
      <AboutUs privacy={privacy}/>
     </section>
   )
}

export default page