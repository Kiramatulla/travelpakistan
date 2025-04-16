import { client } from "@/sanity/lib/client";
import RefundPolicy from "../components/aboutComp/RefundPolicy";
import {Metadata} from "next"

export const Metadata ={
  title:"Refund Policy"
} 


const page = async() => {
  const privacy = await client.fetch(`*[_type == "sitePolicies"][0]`);
   
    return (
      <section>
       <RefundPolicy privacy={privacy}/>
      </section>
    )
}

export default page