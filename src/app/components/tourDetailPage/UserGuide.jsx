import UserGuideClient from "./UserGuideClient";

export default function UserGuide() {
  const guidePoints = [
    "We offer four pricing options: Standard, Mid-Range, Luxury, and Premium.",
    "The displayed prices cover Standard and Luxury. For others, please contact our team.",
    "Pricing per person varies based on room count. Fewer rooms reduce the overall cost.",
    "The related tours offer similar experiences. Click on any of them to explore more.",
    "On desktop, find more info about the region on the side; on mobile, it's at the bottom.",
    "We offer private and fully customizable tours. You are welcome to share your plans.",
  ];

  return <UserGuideClient guidePoints={guidePoints} />;
}
