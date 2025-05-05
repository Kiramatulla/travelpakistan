import VisaAndRefund from "../tourDetailPage/VisaAndRefund";
import DepartureDates from "./DepartureDates";
import RelatedTreks from "./RelatedTreks";
import TrekImage from "./TrekImage";
import TrekInclusionAndExclusion from "./TrekInclusionAndExclusion";
import TrekItinerary from "./TrekItinerary";
import TrekkingBlogs from "./TrekkingBlogs";
import TrekOverview from "./TrekOverview";

const TrekDetailPage = ({ treks, relatedTreks, relatedBlogs }) => {
  return (
    <div className=" lg:flex lg:flex-row lg:ml-16">
      <div className=" lg:w-[65%] lg:pl-2 lg:ml-8 pb-20">
        <section>
          <TrekImage treks={treks} />
        </section>
        <section>
          <TrekOverview treks={treks} />
        </section>
        <section>
          <DepartureDates treks={treks} />
        </section>
        <section>
          <RelatedTreks relatedTreks={relatedTreks} />
        </section>
        <section>
          <TrekItinerary treks={treks} />
        </section>
        <section>
          <TrekInclusionAndExclusion treks={treks} />
        </section>
        <section>
          <VisaAndRefund />
        </section>
      </div>
      <div className="p-8 lg:w-[27%] lg:p-8 lg:sticky lg:top-8 lg:mt-34">
        <aside>
          <TrekkingBlogs relatedBlogs={relatedBlogs} />
        </aside>
      </div>
    </div>
  );
};

export default TrekDetailPage;
