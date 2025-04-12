import CallToAction from "../CallToAction";
import Blogs from "./Blogs";
import CostPerPerson from "./CostPerPerson";
import ImageComp from "./ImageComp";
import IncAndExc from "./IncAndExc";
import Itinerary from "./Itinerary";
import OverView from "./Overview";
import RelatedTours from "./RelatedTours";
import UserGuide from "./UserGuide";
import VisaAndRefund from "./VisaAndRefund";



const TourDetailPage =  ({ tours, relatedTours, relatedBlogs }) => {
  return (
    <section className="lg:flex lg:flex-row lg:ml-16">
      {/* Main Tour Content */}
      <section className="lg:w-[65%] lg:pl-2 lg:ml-8 pb-20 rounded-lg">
        <section>
          <ImageComp tours={tours} />
        </section>
        <section>
          <OverView tours={tours} />
        </section>
        <section>
          <CostPerPerson tours={tours} />
        </section>
        <section>
          <Itinerary tours={tours} />
        </section>
        <section>
          <RelatedTours relatedTours={relatedTours} />
        </section>
        <section>
          <IncAndExc tours={tours} />
        </section>
        <section>
          <VisaAndRefund />
        </section>
      </section>

      {/* Sidebar Section */}
      <aside className="p-8 lg:w-[27%] lg:p-8 lg:sticky lg:top-8 lg:mt-34">
        <UserGuide />
        <CallToAction/>
        <Blogs relatedBlogs={relatedBlogs} />
      </aside>
    </section>
  );
};

export default TourDetailPage;
