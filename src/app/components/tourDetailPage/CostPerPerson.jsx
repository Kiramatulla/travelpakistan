import { TiInfoLargeOutline } from "react-icons/ti";
import AboutCost from "./AboutCost";

const CostPerPerson = ({ tours }) => {
  return (
    <section className="mx-2 lg:mx-0 lg:pl-8 lg:pr-8">
      <h2 className="font-bold text-center md:text-left text-lg underline underline-offset-8 text-gray-800 mb-2">
        Total Cost of {tours.title}
      </h2>
      <div className="flex items-start gap-3 bg-gradient-to-r from-green-100 to-white p-4 rounded-xl shadow-sm border border-green-200 mt-3 mb-5">
        <TiInfoLargeOutline
          size={35}
          className="text-green-600 shrink-0 hidden md:block "
        />
        <p className="text-gray-700 text-sm leading-relaxed text-center md:text-left">
          Please note that the prices listed below may vary depending on the
          services selected. Client preferences—such as choice of hotels,
          adjusting tour days, or adding options—can affect the final cost.
        </p>
      </div>
      <h3 className="text-center md:text-left font-semibold text-gray-800 mb-2 underline underline-offset-4">
        Price Per Person – International Tourists
      </h3>

      <div className="my-6 bg-gradient-to-br from-blue-200 to-white rounded-xl shadow-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <table className="w-full text-sm font-sans ">
          <caption className="sr-only">
            Pricing details for international tourists based on group size.
          </caption>
          <thead>
            <tr className="bg-blue-900/80 text-white lg:text-center text-xs">
              <th className="p-4 ">Package Name</th>
              <th className="p-4 ">Per Person-2</th>
              <th className="p-4 ">Per Person-3</th>
              <th className="p-4 ">Per Person-4</th>
              <th className="hidden lg:block p-4 ">Per Person-5</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-400">
            <tr className="border-t text-xs lg:text-center font-semibold">
              <td className="p-4">Standard Package</td>
              <td className="p-4">
                ${" "}
                {tours?.International2Persons
                  ? tours.International2Persons.toLocaleString()
                  : ""}
              </td>
              <td className="p-4">
                ${" "}
                {tours?.International3Persons
                  ? tours.International3Persons.toLocaleString()
                  : ""}
              </td>
              <td className="p-4">
                ${" "}
                {tours?.International4Persons
                  ? tours.International4Persons.toLocaleString()
                  : ""}
              </td>
              <td className="p-4 hidden lg:block">
                ${" "}
                {tours?.International5Persons
                  ? tours.International5Persons.toLocaleString()
                  : ""}
              </td>
            </tr>
            <tr className="border-t text-xs lg:text-center font-semibold">
              <td className="p-4">Premium Package</td>
              <td className="p-4">
                ${" "}
                {tours?.International2PersonsLuxury
                  ? tours.International2PersonsLuxury.toLocaleString()
                  : ""}
              </td>
              <td className="p-4">
                ${" "}
                {tours?.International3PersonsLuxury
                  ? tours.International3PersonsLuxury.toLocaleString()
                  : ""}
              </td>
              <td className="p-4">
                ${" "}
                {tours?.International4PersonsLuxury
                  ? tours.International4PersonsLuxury.toLocaleString()
                  : ""}
              </td>
              <td className="p-4 hidden lg:block">
                ${" "}
                {tours?.International5PersonsLuxury
                  ? tours.International5PersonsLuxury.toLocaleString()
                  : ""}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-center md:text-left font-semibold text-gray-800 mt-8 mb-2 underline underline-offset-4">
        Price Per Person – Domestic Tourists
      </h3>

      <div className="my-6 bg-gradient-to-br from-blue-200 to-white rounded-xl shadow-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <table className="w-full text-sm font-sans">
          <caption className="sr-only">
            Pricing details for domestic tourists based on group size.
          </caption>
          <thead>
            <tr className="bg-blue-900/80 text-white lg:text-center text-xs">
              <th className="p-4 ">Package Name</th>
              <th className="p-4 ">Per Person-2</th>
              <th className="p-4 ">Per Person-3</th>
              <th className="p-4 ">Per Person-4</th>
              <th className="p-4 hidden lg:block">Per Person-5</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-400">
            <tr className="border-t text-xs lg:text-center font-semibold">
              <td className="p-4">Standard Package</td>
              <td className="p-4 ">
                PKR{" "}
                {tours?.Domestic2Persons
                  ? tours.Domestic2Persons.toLocaleString()
                  : ""}
              </td>
              <td className="p-4 ">
                PKR{" "}
                {tours?.Domestic3Persons
                  ? tours.Domestic3Persons.toLocaleString()
                  : ""}
              </td>
              <td className="p-4">
                PKR{" "}
                {tours?.Domestic4Persons
                  ? tours.Domestic4Persons.toLocaleString()
                  : ""}
              </td>
              <td className="p-4 hidden lg:block">
                PKR{" "}
                {tours?.Domestic5Persons
                  ? tours.Domestic5Persons.toLocaleString()
                  : ""}
              </td>
            </tr>
            <tr className="border-t text-xs lg:text-center font-semibold">
              <td className="p-4">Premium Package</td>
              <td className="p-4 ">
                PKR{" "}
                {tours?.Domestic2PersonsLuxury
                  ? tours.Domestic2PersonsLuxury.toLocaleString()
                  : ""}
              </td>
              <td className="p-4">
                PKR{" "}
                {tours?.Domestic3PersonsLuxury
                  ? tours.Domestic3PersonsLuxury.toLocaleString()
                  : ""}
              </td>
              <td className="p-4">
                PKR{" "}
                {tours?.Domestic4PersonsLuxury
                  ? tours.Domestic4PersonsLuxury.toLocaleString()
                  : ""}
              </td>
              <td className="p-4 hidden lg:block">
                PKR{" "}
                {tours?.Domestic5PersonsLuxury
                  ? tours.Domestic5PersonsLuxury.toLocaleString()
                  : ""}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {tours?.aboutCost?.length > 0 && <AboutCost tours={tours} />}
    </section>
  );
};

export default CostPerPerson;
