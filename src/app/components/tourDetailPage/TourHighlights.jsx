import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const TourHighlights = ({ tours }) => {
  return (
    <div className="mx-2 lg:mx-8 mt-6 bg-white rounded-xl shadow-sm p-4 border border-gray-100">
      <h2 className="text-lg font-bold mb-4 text-gray-800">
        {tours.title} - Highlights
      </h2>
      <ul className="space-y-1">
        {tours?.highlights?.map((item, index) => (
          <li
            key={index}
            className="flex items-start text-sm gap-3 group hover:bg-gray-50 rounded-lg transition"
          >
            <IoMdCheckmarkCircleOutline
              className="text-green-600 mt-1 shrink-0"
              size={20}
            />
            <span className="text-gray-700 leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TourHighlights;
