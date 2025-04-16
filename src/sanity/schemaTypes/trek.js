export const treks = {
    name: "treks",
    title: "Treks",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Trek Name",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "title",
          maxLength: 200,
        },
        validation: (Rule) => Rule.required(),
      },
      {
        name: "Metadescription",
        title: "Meta Description",
        type: "text",
        description: "Short description for SEO (recommended: 140–160 characters)",
        validation: Rule => Rule.max(160).warning("Meta description should be under 160 characters"),
      },
      {
        name: "featured",
        title: "Featured Treks",
        type: "boolean",
      },
      {
        name: "category",
        title: "Category",
        type: "reference",
        to: [{ type: "category" }],
        validation: (Rule) => Rule.required(),
      },
      {
        name: "images",
        title: "Images",
        type: "array",
        of: [{ type: "image" }],
      },
  
      {
        name: "trekOverview",
        title: "Trek Overview",
        type: "text",
      },
      {
        name: "schedule",
        type: "array",
        title: "Trek Schedule",
        of: [
          {
            type: "object",
            fields: [
              {
                name: "startDate",
                type: "date",
                title: "Start Date",
              },
              {
                name: "endDate",
                type: "date",
                title: "End Date",
              },
              {
                name: "price",
                type: "number",
                title: "Price (USD)",
                validation: (Rule) => Rule.min(0), // Ensures price is non-negative
              },
            ],
          },
        ],
      },
      {
        name: "trekPrice",
        title: "Trek Price USD",
        type: "number",
        validation: (Rule) => Rule.min(0),
      },
      {
        name: "trekPrice1",
        title: "Trek Price EURO",
        type: "number",
        validation: (Rule) => Rule.min(0),
      },
      {
        name: "itinerary",
        title: "Itinerary",
        type: "array",
        of: [{ type: "block" }],
      },
  
      {
        name: "inclusionExclusion",
        title: "Inclusion & Exclusion",
        type: "array",
        of: [{ type: "block" }],
      },
      {
        name: "trekkingDetailedOverview",
        title: "Trekking Detailed Overview",
        type: "array",
        of: [{ type: "block" }],
      },
    ],
  };
  
  
    