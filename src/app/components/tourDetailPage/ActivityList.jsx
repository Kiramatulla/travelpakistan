import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const ActivityList = ({ tours }) => {
  if (!tours?.activitiesList || tours.activitiesList.length === 0) return null;

  // Group activities by type
  const grouped = {
    sightseeing: [],
    trekking: [],
    hiking: [],
  };

  tours.activitiesList.forEach((item) => {
    if (grouped[item.activityType]) {
      grouped[item.activityType].push(item.name);
    }
  });

  return (
    <div className="mx-2 lg:mx-0 lg:px-8">
      <h2 className="bg-blue-900/80 text-white text-lg text-center rounded-2xl font-bold py-3 px-2 mb-3">
        Main tourist spots in {tours.title}
      </h2>
      <p className="text-sm mb-3 md:px-3 text-gray-600 text-center">
        By travelling with us you will get a chance to explore the hidden gem in{" "}
        {tours.title}. Here are list of place to help you plan your itinerary.
      </p>
      <div className="md:max-w-3xl md:mx-auto px-6 md:px-2 md:flex md:justify-center ">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-24">
          {/* Sightseeing */}
          {grouped.sightseeing.length > 0 && (
            <div className="">
              <h3 className="text-base font-semibold mb-2">Sightseeing</h3>
              <ul className="text-sm space-y-2">
                {grouped.sightseeing.map((item, index) => (
                  <li key={index} className="flex gap-3 items-center">
                    <IoMdCheckmarkCircleOutline
                      size={16}
                      className="text-green-600"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Trekking */}
          {grouped.trekking.length > 0 && (
            <div className="">
              <h3 className="text-base font-semibold mb-2">Trekking</h3>
              <ul className="text-sm space-y-2">
                {grouped.trekking.map((item, index) => (
                  <li key={index} className="flex gap-3 items-center">
                    <IoMdCheckmarkCircleOutline
                      size={16}
                      className="text-green-600"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Hiking */}
          {grouped.hiking.length > 0 && (
            <div className="">
              <h3 className="text-base font-semibold mb-2">Hiking</h3>
              <ul className="text-sm space-y-2">
                {grouped.hiking.map((item, index) => (
                  <li key={index} className="flex gap-3 items-center">
                    <IoMdCheckmarkCircleOutline
                      size={16}
                      className="text-green-600"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivityList;
