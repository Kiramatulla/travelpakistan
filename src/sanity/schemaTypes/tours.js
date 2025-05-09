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
        name:"metaTitle",
        title:"Meta Title",
        type:"string",
        validation:(Rule)=>Rule.required()
      },
      {
        name: "Metadescription",
        title: "Meta Description",
        type: "text",
        description: "Short description for SEO (recommended: 140 to 160 characters)",
        validation: Rule => Rule.max(160).warning("Meta description should be under 160 characters"),
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
        name:'images',
        title:'Images',
        type:'array',
        options: { hotspot: true },
        of:[{type:'image'}]
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
        name: "tourOverviews",
        title: "Tour Overview",
        type: "array",
        of: [{ type: "block" }],
      },
      {
        name: "itinerary",
        title: "Itinerary",
        type: "array",
        of: [{ type: "block" }],
      },
      
      {
        name: "tourPriceBestHotels",
        title: "Tour Price Best Hotels",
        type: "number",
        validation: (Rule) => Rule.min(0),
      },
      {
        name: "tourPriceStandardHotels",
        title: "Tour Price Standard Hotels",
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
        name: "inclusionExclusion",
        title: "Inclusion & Exclusion",
        type: "array",
        of: [{ type: "block" }],
      },
      {
        name: "regionHistory",
        title: "Region History",
        type: "text",
      },
    ],
  };
  