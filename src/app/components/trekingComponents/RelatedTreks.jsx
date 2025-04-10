import Link from "next/link";

const RelatedTreks = ({ relatedTreks }) => {
  const sortedTreks = relatedTreks.sort((a, b) => {
    const daysA = parseInt(a.title.match(/\d+/)?.[0] || "0", 10);
    const daysB = parseInt(b.title.match(/\d+/)?.[0] || "0", 10);
    return daysA - daysB;
  });
  return (
    <section className="mx-2 lg:mx-0 lg:pl-8 lg:pr-8 py-8">
      <h2 className="pl-2 bg-cyan-600 text-white shadow-xl font-semibold font-sans py-4 rounded lg:pl-2">
        Other Similar and Related Tours
      </h2>

      <div className="text-sm lg:text-xs pt-4 pl-4 font-sans">
        <p>
          <span className="font-bold">Note:</span> Below in the related Tours,
          the prices mentioned at Standard and Premium blocks are calculated
          keeping 2 persons in mind. To get the price for more than two Pax,
          please visit their relative pages by simply clicking on them.
        </p>
      </div>

      <div className="my-4 bg-slate-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <table className="w-full lg:text-sm font-sans">
          <thead>
            <tr className="bg-cyan-600 text-white">
              <th className="p-4 text-left">Tour Name</th>
              <th className="p-4 text-left">USD</th>
              <th className="p-4 text-left">EURO</th>
            </tr>
          </thead>

          <tbody>
            {sortedTreks.map((relatedTrek) => (
              <tr
                key={relatedTrek._id}
                className=" border-t font-semibold border-b border-slate-300"
              >
                <td className="p-4 transition-transform hover:scale-95 hover:text-blue-500">
                  <Link href={`/trekking/${relatedTrek.slug.current}`}>
                    {relatedTrek.title}
                  </Link>
                </td>
                <td className="p-4">${relatedTrek.trekPrice}</td>
                <td className="p-4">${relatedTrek.trekPrice1}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default RelatedTreks;
