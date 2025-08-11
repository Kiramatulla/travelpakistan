import CallToAction from "../CallToAction";
import AboutTour from "./AboutTour";
import ActivityList from "./ActivityList";
import Blogs from "./Blogs";
import CostPerPerson from "./CostPerPerson";
import FaqSection from "./FaqSection";
import ImageComp from "./ImageComp";
import ImportantDistances from "./ImportantDistances";
import Inclusions from "./Inclusions";
import Itinerary from "./Itinerary";
import RelatedTours from "./RelatedTours";
import SocialShare from "./SocialShare";
import TourCustomItinerary from "./TourCustomItinerary";
import TourGallery from "./TourGallery";
import TourHighlights from "./TourHighlights";
import TourOverviews from "./TourOverviews";
import UserGuide from "./UserGuide";

const TourDetailPage = ({ tours, relatedTours, relatedBlogs }) => {
  return (
    <div className="lg:flex lg:flex-row lg:ml-16 ">
      {/* Main Tour Content */}
      <div className="lg:w-[65%] lg:pl-2 lg:ml-8 md:pb-20 rounded-lg bg-gradient-to-br from-blue-50 to-white">
        <section>
          <ImageComp tours={tours} />
        </section>
        {/* <section>
          <OverView tours={tours} />
        </section> */}
        <section>
          <TourOverviews tours={tours} />
        </section>
        <section>
          <CostPerPerson tours={tours} />
        </section>
        <section>
          <RelatedTours relatedTours={relatedTours} />
        </section>
        <section>
          <Inclusions />
        </section>
        <section>
          {tours?.gallery?.length > 0 && <TourGallery tours={tours} />}
        </section>
        <section>
          <TourCustomItinerary />
        </section>
        <section>
          <Itinerary tours={tours} />
        </section>

        <section>
          {tours?.distance?.length > 0 && <ImportantDistances tours={tours} />}
        </section>
        <section>
          <AboutTour tours={tours} />
        </section>
        <section>
          {tours?.activitiesList?.length > 0 && <ActivityList tours={tours} />}
        </section>

        <section>
          {tours?.highlights?.length > 0 && <TourHighlights tours={tours} />}
        </section>
        <section>
          {tours?.faqs?.length > 0 && <FaqSection tours={tours} />}
        </section>

        <section>
          <SocialShare tours={tours} />
        </section>
      </div>

      {/* Sidebar Section */}
      <aside className="p-8 lg:w-[27%] lg:p-8 lg:sticky lg:top-8 lg:mt-34">
        <UserGuide />
        <CallToAction />
        <Blogs relatedBlogs={relatedBlogs} />
      </aside>
    </div>
  );
};

export default TourDetailPage;
