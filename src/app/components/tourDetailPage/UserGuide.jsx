import { TiTick } from "react-icons/ti";

const UserGuide = () => {
  const guidePoints = [
    "We offer four pricing options: Standard, Mid-Range, Luxury, and Premium.",
    "The displayed prices cover Standard and Luxury. For others, please contact our team.",
    "Pricing per person varies based on room count. Fewer rooms reduce the overall cost.",
    "The related tours offer similar experiences. Click on any of them to explore more.",
    "On desktop, find more info about the region on the side; on mobile, its at the bottom.",
    "we offer private and fully customizable tours. You are welcomed to share your plans.",
  ];

  return (
    <div className="hidden md:block bg-gradient-to-br from-slate-200 to-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4 mb-8 font-sans">
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
