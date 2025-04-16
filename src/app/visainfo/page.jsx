import { client } from '@/sanity/lib/client';
import VisaInfoComp from '../components/aboutComp/VisaInfoComp';


export const Metadata ={
  title:"Visa Information"
} 


const page = async() => {
    const privacy = await client.fetch(`*[_type == "sitePolicies"][0]`);
  
  return (
    <div>
      <VisaInfoComp privacy={privacy}/>
    </div>
  )
}

export default page