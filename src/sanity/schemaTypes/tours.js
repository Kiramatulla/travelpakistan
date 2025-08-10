import { validation } from "sanity";

export const tours = {
  name: "tour",
  title: "Tour",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Tour Name",
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
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "Metadescription",
      title: "Meta Description",
      type: "text",
      description:
        "Short description for SEO (recommended: 140 to 160 characters)",
      validation: (Rule) =>
        Rule.max(160).warning(
          "Meta description should be under 160 characters"
        ),
    },
    {
      name: "featured",
      title: "Featured Tour",
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
      options: { hotspot: true },
      of: [{ type: "image" }],
    },
    {
      name: "travelMode",
      title: "Travel Mode",
      type: "string",
      options: {
        list: [
          { title: "By Road", value: "by-road" },
          { title: "By Air", value: "by-air" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "tourType",
      title: "Tour Type",
      type: "string",
      options: {
        list: [
          {
            title: "Tour and Sightseeing Only",
            value: "Tour and Sightseeing Only",
          },
          { title: "Tour and Trekking", value: "Tour and Trekking" },
          { title: "Seasonal Tour", value: "Seasonal Tour" },
          { title: "Festival Tour", value: "Festival Tour" },
        ],
      },
      validation: (Rule) => Rule.required().error("Tour type is required"),
    },
    {
      name: "tourOverviews",
      title: "Tour Overview",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "author",
      title: "Author Bio",
      type: "reference",
      to: [{ type: "author" }],
    },
    {
      name: "itinerary",
      title: "Itinerary",
      type: "array",
      of: [{ type: "block" }],
    },

    {
      name: "numberOfDays",
      title: "Number of Days",
      type: "number",
      validation: (Rule) => Rule.min(0),
    },
    {
      name: "International2Persons",
      title: "Standard for 2 persons International",
      type: "number",
      validation: (Rule) => Rule.min(0),
    },
    {
      name: "International3Persons",
      title: "Standard for 3 persons International",
      type: "number",
      validation: (Rule) => Rule.min(0),
    },
    {
      name: "International4Persons",
      title: "Standard for 4 persons International",
      type: "number",
      validation: (Rule) => Rule.min(0),
    },
    {
      name: "International5Persons",
      title: "Standard for 5 persons International",
      type: "number",
      validation: (Rule) => Rule.min(0),
    },
    {
      name: "International2PersonsLuxury",
      title: "Luxury for 2 persons International",
      type: "number",
      validation: (Rule) => Rule.min(0),
    },
    {
      name: "International3PersonsLuxury",
      title: "Luxury for 3 persons International",
      type: "number",
      validation: (Rule) => Rule.min(0),
    },
    {
      name: "International4PersonsLuxury",
      title: "Luxury for 4 persons International",
      type: "number",
      validation: (Rule) => Rule.min(0),
    },
    {
      name: "International5PersonsLuxury",
      title: "Luxury for 5 persons International",
      type: "number",
      validation: (Rule) => Rule.min(0),
    },
    {
      name: "Domestic2Persons",
      title: "Standard for 2 persons Domestic",
      type: "number",
      validation: (Rule) => Rule.min(0),
    },
    {
      name: "Domestic3Persons",
      title: "Standard for 3 persons Domestic",
      type: "number",
      validation: (Rule) => Rule.min(0),
    },
    {
      name: "Domestic4Persons",
      title: "Standard for 4 persons Domestic",
      type: "number",
      validation: (Rule) => Rule.min(0),
    },
    {
      name: "Domestic5Persons",
      title: "Standard for 5 persons Domestic",
      type: "number",
      validation: (Rule) => Rule.min(0),
    },
    {
      name: "Domestic2PersonsLuxury",
      title: "Luxury for 2 persons Domestic",
      type: "number",
      validation: (Rule) => Rule.min(0),
    },
    {
      name: "Domestic3PersonsLuxury",
      title: "Luxury for 3 persons Domestic",
      type: "number",
      validation: (Rule) => Rule.min(0),
    },
    {
      name: "Domestic4PersonsLuxury",
      title: "Luxury for 4 persons Domestic",
      type: "number",
      validation: (Rule) => Rule.min(0),
    },
    {
      name: "Domestic5PersonsLuxury",
      title: "Luxury for 5 persons Domestic",
      type: "number",
      validation: (Rule) => Rule.min(0),
    },
    {
      name: "aboutCost",
      title: "Cost Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "regionHistory",
      title: "Region History",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "question",
              title: "Question",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "answer",
              title: "Answer",
              type: "array",
              of: [{ type: "block" }],
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: "distance",
      title: "Important Distances",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "areaName",
              title: "Area Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "areaDistance",
              title: "Area Distance",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "driveTime",
              title: "Drive Time",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: "activitiesList",
      title: "Trekking / Hiking / Sightseeing",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "activityType",
              title: "Activity Type",
              type: "string",
              options: {
                list: [
                  { title: "Sightseeing", value: "sightseeing" },
                  { title: "Trekking", value: "trekking" },
                  { title: "Hiking", value: "hiking" },
                ],
                layout: "dropdown",
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: "name",
              title: "Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: "highlights",
      title: "Tour Highlights",
      type: "array",
      of: [{ type: "string" }],
      description: "Key features or attractions included in this tour.",
    },
  ],
};
