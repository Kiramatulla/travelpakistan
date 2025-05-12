const CostPerPerson = ({ tours }) => {
  return (
    <section className="mx-6 lg:mx-0 lg:pl-8 lg:pr-8">
      <h2 className="font-bold font-serif text-gray-800 text-xl mb-1">
        Total Cost of {tours.title}{" "}
      </h2>
      <p className="text-xs mb-4 mx-2">
        Please note that the price listed below may vary depending on the
        services selected, as client preferences are our top priority. The
        choice of hotels, adding or subtracting tour days and other options may result in slight differences from
        the displayed price.
      </p>
      <h2 className=" font-semibold text-gray-800 mb-2 underline underline-offset-4">
        Price Per Person – International Tourists
      </h2>

      <div className="my-6  bg-slate-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <table className="w-full text-sm font-sans">
          <caption className="sr-only">
            Pricing details for international tourists based on group size.
          </caption>
          <thead>
            <tr className="bg-cyan-600 font-serif text-white">
              <th className="p-4 text-left">Package Name</th>
              <th className="p-4 text-left">Cost 2 Persons</th>
              <th className="p-4 text-left">Cost 3 Persons</th>
              <th className="p-4 text-left">Cost 4 Persons</th>
              <th className="hidden lg:block p-4 text-left">Cost 5 Persons</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t font-serif text-sm lg:text-xs font-semibold">
              <td className="p-4 ">Standard Package</td>
              <td className="p-4">$ {tours?.International2Persons ? tours.International2Persons.toLocaleString(): ""}</td>
              <td className="p-4">$ {tours?.International3Persons ? tours.International3Persons.toLocaleString(): ""}</td>
              <td className="p-4">$ {tours?.International4Persons ? tours.International4Persons.toLocaleString(): ""}</td>
              <td className="p-4 hidden lg:block">
                $ {tours?.International5Persons ?tours.International5Persons.toLocaleString():""}
              </td>
            </tr>
            <tr className="border-t font-serif text-sm lg:text-xs font-semibold">
              <td className="p-4">Premium Package</td>
              <td className="p-4">$ {tours?.International2PersonsLuxury?tours.International2PersonsLuxury.toLocaleString():""}</td>
              <td className="p-4">$ {tours?.International3PersonsLuxury?tours.International3PersonsLuxury.toLocaleString():""}</td>
              <td className="p-4">$ {tours?.International4PersonsLuxury?tours.International4PersonsLuxury.toLocaleString():""}</td>
              <td className="p-4 hidden lg:block">
                $ {tours?.International5PersonsLuxury?tours.International5PersonsLuxury.toLocaleString():""}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="font-semibold text-gray-800 mt-8 mb-2 underline underline-offset-4">
        Price Per Person – Domestic Tourists
      </h2>

      <div className="my-6 bg-slate-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <table className="w-full text-sm font-sans">
          <caption className="sr-only">
            Pricing details for domestic tourists based on group size.
          </caption>
          <thead>
            <tr className="bg-cyan-600 font-serif text-white">
              <th className="p-4 text-left">Package Name</th>
              <th className="p-4 text-left">Cost 2 Persons</th>
              <th className="p-4 text-left">Cost 3 Persons</th>
              <th className="p-4 text-left">Cost 4 Persons</th>
              <th className="p-4 text-left hidden lg:block">Cost 5 Persons</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t font-serif text-sm lg:text-xs font-semibold">
              <td className="p-4">Standard Package</td>
              <td className="p-4">PKR {tours?.Domestic2Persons?tours.Domestic2Persons.toLocaleString():""}</td>
              <td className="p-4">PKR {tours?.Domestic3Persons?tours.Domestic3Persons.toLocaleString():""}</td>
              <td className="p-4">PKR {tours?.Domestic4Persons?tours.Domestic4Persons.toLocaleString():""}</td>
              <td className="p-4 hidden lg:block">
                PKR {tours?.Domestic5Persons?tours.Domestic5Persons.toLocaleString():""}
              </td>
            </tr>
            <tr className="border-t font-serif text-sm lg:text-xs font-semibold">
              <td className="p-4">Premium Package</td>
              <td className="p-4">PKR {tours?.Domestic2PersonsLuxury?tours.Domestic2PersonsLuxury.toLocaleString():""}</td>
              <td className="p-4">PKR {tours?.Domestic3PersonsLuxury?tours.Domestic3PersonsLuxury.toLocaleString():""}</td>
              <td className="p-4">PKR {tours?.Domestic4PersonsLuxury?tours.Domestic4PersonsLuxury.toLocaleString():""}</td>
              <td className="p-4 hidden lg:block">
                PKR {tours?.Domestic2PersonsLuxury?tours.Domestic5PersonsLuxury.toLocaleString():""}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default CostPerPerson;
