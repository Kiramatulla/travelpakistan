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
    <div className="max-w-3xl mx-auto px-2 md:flex md:flex-col ">
      <div className="flex flex-col md:flex-row">
        {/* Sightseeing */}
        {grouped.sightseeing.length > 0 && (
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h3 className="text-base font-semibold mb-2">Sightseeing</h3>
            <ul className="text-sm flex gap-2 items-center">
              <IoMdCheckmarkCircleOutline
                size={16}
                className="text-green-600"
              />
              {grouped.sightseeing.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Trekking */}
        {grouped.trekking.length > 0 && (
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h3 className="text-base font-semibold mb-2">Trekking</h3>
            <ul className="text-sm flex gap-2 items-center">
              <IoMdCheckmarkCircleOutline
                size={16}
                className="text-green-600"
              />
              {grouped.trekking.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Hiking */}
        {grouped.hiking.length > 0 && (
          <div className="md:w-1/3">
            <h3 className="text-base font-semibold mb-2">Hiking</h3>
            <ul className="text-sm flex gap-2 items-center">
              <IoMdCheckmarkCircleOutline
                size={16}
                className="text-green-600"
              />
              {grouped.hiking.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivityList;
