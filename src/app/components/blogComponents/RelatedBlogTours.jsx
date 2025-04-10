import Link from "next/link";


const RelatedBlogTours = ({ relatedBlogTours }) => {
  const sortedTours = relatedBlogTours.sort((a, b) => {
    const daysA = parseInt(a.title.match(/\d+/)?.[0] || "0", 10);
    const daysB = parseInt(b.title.match(/\d+/)?.[0] || "0", 10);
    return daysA - daysB;
  });
  return (
    <section className="lg:pl-8 lg:pr-8 py-8">
      <h3 className="bg-cyan-600 text-white font-semibold text-sm font-sans py-4 rounded lg:pl-2">
        Other Similar and Related Tours
      </h3>
      <p className=" text-xs pt-4  pl-4 font-sans">
        <span className="font-bold">Note:</span> Below in the related Tours the
        prices mentioned at Standard and Premium blocks are calculated keeping 2
        persons in mind. To get the price for more than two Pax please visit
        their relative pages by simply clicking on them
      </p>
      <div className="my-4 bg-gray-200 border-2 border-black rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <table className="w-full text-sm font-sans">
          <thead>
            <tr className="bg-cyan-600 text-white">
              <th className="p-4 text-left">Tour Name</th>
              <th className="p-4 text-left">Standard Price</th>
              <th className="p-4 text-left">Premium Price</th>
            </tr>
          </thead>

          <tbody>
            {sortedTours.map((relatedTour) => (
              <tr
                key={relatedTour._id}
                className="border-t text-xs font-semibold"
              >
                <td className="p-4 transition-transform  hover:scale-95 hover:text-blue-700 text-blue-600">
                  <Link href={`/tours/${relatedTour.slug.current}`}>
                    {relatedTour.title}
                  </Link>
                </td>
                <td className="p-4">${relatedTour.tourPriceStandardHotels}</td>
                <td className="p-4">${relatedTour.tourPriceBestHotels}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default RelatedBlogTours;
