import Link from "next/link";

const DepartureDates = ({ treks }) => {
  return (
    <div className="px-6 lg:pl-8 lg:pr-8">
      <div >
        {treks.schedule?.length > 0 ? (
          // ✅ If Fixed Departure Treks Exist (Show Table with Dates & Prices)
          <div>
            <h3 className=" font-bold text-lg font-sans rounded underline">
              Departure Dates, Cost and Price -- K2 Base Camp Trek
            </h3>
            <p className=" text-xs pt-4  pl-4 font-sans">
              <span className="font-bold">Note:</span> Below in the related
              Tours the prices mentioned at Standard and Premium blocks are
              calculated keeping 2 persons in mind. To get the price for more
              than two Pax please visit their relative pages by simply clicking
              on them
            </p>

            <table className="w-full text-sm font-sans my-6 bg-slate-300 rounded-xl shadow-lg overflow-hidden  transition-shadow duration-300 border border-gray-200">
              <thead>
                <tr className="bg-cyan-600 text-white lg:text-center uppercase">
                  <th className="p-4">Start Date</th>
                  <th className="p-4">End Date</th>
                  <th className="p-4">Price Per Person</th>
                  <th className="p-4 text-center">Book Now</th>
                </tr>
              </thead>
              <tbody>
                {treks.schedule.map((schedule, index) => (
                  <tr
                    key={index}
                    className="border-t border-gray-300 text-sm font-medium even:bg-gray-100 hover:bg-gray-200 transition-colors lg:text-center"
                  >
                    <td className="p-4 ">{schedule.startDate}</td>
                    <td className="p-4 ">{schedule.endDate}</td>
                    <td className="p-4 text-green-600 font-bold text-center">
                      $ {schedule.price}
                    </td>
                    <td className="p-4 ">
                      <Link
                        href={`/contact`}
                        className="bg-green-600 text-white rounded-full px-2 py-2 lg:px-4 lg:py-2 font-semibold text-xs hover:bg-green-700 transition duration-300 shadow-md"
                      >
                        BookNow
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          // ✅ If NOT a Fixed Departure Trek (Show Single Price)
          <div>
            <h3 className=" font-bold text-lg font-sans rounded underline">
              Departure Dates, Cost and Price -- K2 Base Camp Trek
            </h3>
            <p className=" text-xs pt-4  pl-4 font-sans">
              <span className="font-bold">Note:</span> Below in the related
              Tours the prices mentioned at Standard and Premium blocks are
              calculated keeping 2 persons in mind. To get the price for more
              than two Pax please visit their relative pages by simply clicking
              on them
            </p>
            <div className="my-6 bg-slate-200 lg:ml-8 lg:mr-8 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <table className="w-full text-sm font-sans">
                <thead>
                  <tr className="bg-cyan-600 text-white">
                    <th className="p-4 text-left">Tour Name</th>
                    <th className="p-4 text-left">Cost USD</th>
                    <th className="p-4 text-left">Cost EURO</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-t text-xs font-semibold">
                    <td className="p-4 ">{treks.title}</td>
                    <td className="p-4">$ {treks.trekPrice}</td>
                    <td className="p-4">$ {treks.trekPrice1}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DepartureDates;
