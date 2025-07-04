export const spot = {
  name: "spot",
  type: "document",
  title: "Tourist Spot",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Spot Name",
    },
    {
      name: "type",
      type: "string",
      title: "Type of Place",
      options: {
        list: [
          { title: "Sightseeing", value: "sightseeing" },
          { title: "Short Trek", value: "short-trek" },
          { title: "Long Trek", value: "long-trek" },
          { title: "Activity", value: "activity" },
          { title: "Hotel", value: "hotel" },
          { title: "Restaurant", value: "restaurant" },
        ],
      },
    },
    {
      name: "subregion",
      type: "reference",
      title: "Located In Subregion",
      to: [{ type: "subregion" }],
    },

    {
      name: "description",
      type: "array",
      title: "Bullet Points",
      of: [{ type: "string" }],
    },

    {
      name: "images",
      type: "array",
      title: "Images",
      of: [{ type: "image" }],
    },
    {
      name: "overview",
      title: "Short Description of the region",
      type: "array",
      of: [{ type: "block" }],
    }
  ],
};

