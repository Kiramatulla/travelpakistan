import ContactInfo from "./components/ContactInfo";
import Hero from "./components/Hero";
import CreateYourItinerary from "./components/homeCardComp/CreateYourItinerary";
import HomeCard from "./components/homeCardComp/HomeCard";
import ServicesOffered from "./components/homeServiceComp/ServicesOffered";
import TrekCardDetails from "./components/trekingComponents/TrekCardDetails";
import VehicleCard from "./components/vehicleComponent/VehicleCard";

export const metadata = {
  title: "Viola Tours Pakistan",
  description:
    "Top Pakistan tour packages to Hunza, Skardu, Fairy Meadows & more.",
};

const webSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.violatourspk.com//#website",
  url: "https://www.violatourspk.com/",
  name: "Viola Tours Pakistan",
  description:
    "Top Pakistan tour packages to Hunza, Skardu, Fairy Meadows & more.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.violatourspk.com/?s={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};
const TravelAgency = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": "https://www.violatourspk.com/",
  name: "Viola Tours Pakistan",
  url: "https://www.violatourspk.com/",
  logo: "https://www.violatourspk.com/viola_logo.png",
  image: "https://www.violatourspk.com/hunzavalley.webp",
  description:
    "Viola Tours Pakistan is a travel company based in Hunza Valley and Islamabad, offering unforgettable tours, treks, and cultural experiences across Pakistan. Our tours in Pakistan cover the entire country, from south to north, including Hunza Valley tours, Skardu, Fairy Meadows, Swat, and beyond. VPT is also specialized in offering outstanding adventure trekking across the Karakoram, Himalayas, and Hindu Kush Mountain ranges. K2 base camp, Gondogoro la, and Snow Lake are among the famous adventures we offer. The company organizes tours and trekking for both international and domestic tourists. Our team of professionals and local expert guides works closely with you from start until your journey ends to ensure an amazing trip to Pakistan.",
  priceRange: "USD 90 - USD 2500",
  telephone: "+92 341 2141 434",
  email: "info@violatourspk.com",
  openingHours: ["Mo-Sa 08:00-18:00", "Su 09:00-16:00"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Gulmit Gojal Hunza, Gulmit, 15750",
    addressLocality: "Hunza",
    addressRegion: "Gulmit Gojal Hunza",
    postalCode: "15750",
    addressCountry: "Pakistan",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "36.3870",
    longitude: "74.8582",
  },
  sameAs: [
    "https://web.facebook.com/profile.php?id=61575373047070&_rdc=1&_rdr#",
    "https://www.instagram.com/violatours.pk/",
    "https://www.tripadvisor.com/Attraction_Review-g317116-d33268823-Reviews-Viola_Tours_Pakistan-Gilgit_Gilgit_Baltistan.html",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+92-341-2141-434",
    contactType: "customer service",
    areaServed: ["PK", "US", "GB", "FR", "DE", "AU", "CA", "JP", "IT", "GB"],
    availableLanguage: ["English", "Urdu", "German", "Spanish", "French"],
  },
};

export default function Home() {
  return (
    <main className="">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(TravelAgency) }}
      />

      <section>
        <Hero />
      </section>
      <section className="container mx-auto px-4">
        <ContactInfo />
      </section>
      <section>
        <HomeCard />
      </section>
      <section className="container mx-auto px-4">
        <TrekCardDetails />
      </section>
      <section>
        <VehicleCard />
      </section>
      <section>
        <CreateYourItinerary />
      </section>
      <section>
        <ServicesOffered />
      </section>
    </main>
  );
}
