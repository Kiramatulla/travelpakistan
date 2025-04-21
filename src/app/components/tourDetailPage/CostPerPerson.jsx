const CostPerPerson = ({ tours }) => {
    return (
      <section className="mx-2 lg:mx-0 lg:pl-8 lg:pr-8">
        <h2 className="font-bold text-gray-800 text-2xl mb-5">Total Cost of {tours.title} </h2>
          <h2 className=" font-semibold text-gray-800 mb-2 underline underline-offset-4">
        Price Per Person – International Tourists
      </h2>
  
        <div className="my-6  bg-slate-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <table className="w-full text-sm font-sans">
            <caption className="sr-only">
              Pricing details for international tourists based on group size.
            </caption>
            <thead>
              <tr className="bg-cyan-600 text-white">
                <th className="p-4 text-left">Package Name</th>
                <th className="p-4 text-left">Cost 2 Persons</th>
                <th className="p-4 text-left">Cost 3 Persons</th>
                <th className="p-4 text-left">Cost 4 Persons</th>
                <th className="hidden lg:block p-4 text-left">Cost 5 Persons</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t text-sm lg:text-xs font-semibold">
                <td className="p-4">Standard Package</td>
                <td className="p-4">$ {tours.International2Persons}</td>
                <td className="p-4">$ {tours.International3Persons}</td>
                <td className="p-4">$ {tours.International4Persons}</td>
                <td className="p-4 hidden lg:block">
                  $ {tours.International5Persons}
                </td>
              </tr>
              <tr className="border-t text-sm lg:text-xs font-semibold">
                <td className="p-4">Premium Package</td>
                <td className="p-4">$ {tours.International2PersonsLuxury}</td>
                <td className="p-4">$ {tours.International3PersonsLuxury}</td>
                <td className="p-4">$ {tours.International4PersonsLuxury}</td>
                <td className="p-4 hidden lg:block">
                  $ {tours.International5PersonsLuxury}
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
              <tr className="bg-cyan-600 text-white">
                <th className="p-4 text-left">Package Name</th>
                <th className="p-4 text-left">Cost 2 Persons</th>
                <th className="p-4 text-left">Cost 3 Persons</th>
                <th className="p-4 text-left">Cost 4 Persons</th>
                <th className="p-4 text-left hidden lg:block">Cost 5 Persons</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t text-sm lg:text-xs font-semibold">
                <td className="p-4">Standard Package</td>
                <td className="p-4">PKR {tours.Domestic2Persons}</td>
                <td className="p-4">PKR {tours.Domestic3Persons}</td>
                <td className="p-4">PKR {tours.Domestic4Persons}</td>
                <td className="p-4 hidden lg:block">
                  PKR {tours.Domestic5Persons}
                </td>
              </tr>
              <tr className="border-t text-sm lg:text-xs font-semibold">
                <td className="p-4">Premium Package</td>
                <td className="p-4">PKR {tours.Domestic2PersonsLuxury}</td>
                <td className="p-4">PKR {tours.Domestic3PersonsLuxury}</td>
                <td className="p-4">PKR {tours.Domestic4PersonsLuxury}</td>
                <td className="p-4 hidden lg:block">
                  PKR {tours.Domestic5PersonsLuxury}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
  };
  
  export default CostPerPerson;
  
  
  