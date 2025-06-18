import { TiTick } from "react-icons/ti";

const UserGuide = () => {
  const guidePoints = [
    "We offer four pricing options based on the hotel category and included services: Standard, Mid-Range, Luxury, and Premium.",
    "The prices shown in the cost section represent the Standard and Luxury categories. For Mid-Range and Premium pricing, please contact our support team.",
    "The per-person price depends on the number of rooms and selected services. Fewer rooms typically result in a lower overall cost, and vice versa.",
    "Related tours showcase similar travel experiences you might find interesting. Click on any of them to explore more details.",
    "The side section (visible on laptops) provides helpful insights about the region you are planning to visit. On mobile view you will find it at the bottom.",
    "Please note that all our tours are private and fully customizable. You are welcome to share your travel plans with us— Its our pleasure to shape the tour around your interests and comfort.",
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
