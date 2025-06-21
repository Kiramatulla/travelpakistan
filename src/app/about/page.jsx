import { client } from "@/sanity/lib/client";
import AboutUs from "../components/aboutComp/AboutUs";
import AboutIntro from "../components/aboutComp/AboutIntro";
import AboutServices from "../components/aboutComp/AboutServices";
import AboutContact from "../components/aboutComp/AboutContact";

export const metadata = {
  title: "About",
};

const page = async () => {
  const privacy = await client.fetch(`*[_type == "sitePolicies"][0]`);

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white">
      <AboutIntro />
      <AboutUs />
      <AboutServices />
      <AboutContact />
    </section>
  );
};

export default page;
