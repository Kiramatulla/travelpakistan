import ContactInfo from "./components/ContactInfo";
import Hero from "./components/Hero";
import HomeCard from "./components/homeCardComp/HomeCard";
import ServicesOffered from "./components/homeServiceComp/ServicesOffered";
import TrekCardDetails from "./components/trekingComponents/TrekCardDetails";
import VehicleCard from "./components/vehicleComponent/VehicleCard";

export default function Home() {
  return (
  <main>
    <section>
      <Hero/>
    </section>
    <section className="container mx-auto px-4">
        <ContactInfo />
      </section>
    <section>
      <HomeCard/>
    </section>
    <section className="container mx-auto px-4">
        <TrekCardDetails />
      </section>
      <section>
        <VehicleCard />
      </section>
      <section>
        <ServicesOffered />
      </section>
  </main>
  );
}
