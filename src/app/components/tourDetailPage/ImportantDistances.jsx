const ImportantDistances = ({ tours }) => {
  if (!tours?.distance || tours.distance.length === 0) return null;

  return (
    <section className="mx-2 md:mx-6 lg:mx-8 py-6 ">
      <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
        <h2 className="text-lg  md:text-left font-bold md:text-lg border-b border-gray-200">
          Important Distances
        </h2>
      </div>

      <p className="text-sm text-gray-600 mb-4 text-center">
        Please note that the distances written below are based on data from
        Google and Google maps, whereas the drive time is from personal
        experience.
      </p>

      <div className="overflow-x-auto shadow-xl rounded-2xl">
        <table className="min-w-full bg-white border-2 overflow-hidden text-left">
          <thead className="bg-blue-900/90 text-white text-sm">
            <tr>
              <th className="px-4 py-3 border-b border-gray-200">Area Name</th>
              <th className="px-4 py-3 border-b border-gray-200">Distance</th>
              <th className="px-4 py-3 border-b border-gray-200">Drive Time</th>
            </tr>
          </thead>
          <tbody className="text-gray-800 text-sm divide-y divide-gray-100">
            {tours.distance.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 transition">
                <td className="px-4 py-3 max-w-80">{item.areaName}</td>
                <td className="px-4 py-3">{item.areaDistance}</td>
                <td className="px-4 py-3">{item.driveTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ImportantDistances;
