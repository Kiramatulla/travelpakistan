export const vehicles = {
    name: "vehicle",
    title: "Vehicles",
    type: "document",
    fields: [
      {
        name: "vehicleName",
        title: "Vehicle Name",
        type: "string",
      },
      {
        name: "vehicleImage",
        title: "Vehicle Image",
        type: "image",
        options: { hotspot: true },
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: { source: "vehicleName", maxLength: 96 },
      },
      
      {
        name: 'pricePerDay',
        title: 'Price Per Day',
        type: 'number',
        description: 'Rental price per day in PKR',
        validation: (Rule) => Rule.min(0),
      },
      {
        name: 'seats',
        title: 'Seating Capacity',
        type: 'number',
        validation: (Rule) => Rule.min(1),
      },
      {
        name: 'model',
        title: 'Model',
        type: 'string',
      },
      {
        name: 'airCondition',
        title: 'Air Condition',
        type: 'boolean',
        description: 'Does this vehicle have AC?',
      },
      {
        name: 'driverIncluded',
        title: 'Driver Included',
        type: 'boolean',
        description: 'Is a driver included in the rental?',
      },
    ],
  };
  