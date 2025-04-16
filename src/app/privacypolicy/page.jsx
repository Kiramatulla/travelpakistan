
import { client } from '@/sanity/lib/client'
import PrivacyPolicy from '../components/aboutComp/PrivacyPolicy'


export const Metadata ={
  title:"Privacy Policy"
} 


const page = async() => {
  const privacy = await client.fetch(`*[_type == "sitePolicies"][0]`);
 
  return (
    <section>
      <PrivacyPolicy privacy={privacy}/>
    </section>
  )
}

export default page