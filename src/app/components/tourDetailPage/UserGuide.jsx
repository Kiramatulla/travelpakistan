import { TiTick } from "react-icons/ti";

const UserGuide = () => {
  const guidePoints = [
    "We offer 4 options based on the category of hotel and services: Premium, Mid Range, Standard, and Basic.",
    "The price mentioned in the 'Price Per Person' section is for Standard Services. For other options, please contact our agents.",
    "The price per person decreases as the number of participants increases.",
    "The side section(when viewed on laptop) provides additional information about the regions histroy, culture and top tourist hotspots in the region.",
  ];

  return (
    <div className="hidden md:block bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4 mb-8 font-sans">
      <h3 className="text-xl font-semibold text-center underline decoration-2 underline-offset-4 text-gray-700">
        User Guide
      </h3>
      <ul className="space-y-3">
        {guidePoints.map((point, index) => (
          <li key={index} className="flex items-start text-sm space-x-3">
            <TiTick className="text-green-500 mt-1 flex-shrink-0" size={20} />
            <span className="text-gray-700 leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserGuide;
