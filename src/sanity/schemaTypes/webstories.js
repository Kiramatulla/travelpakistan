export const webstories = {
  name: "webstories",
  title: "Web Stories",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Story Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slides",
      title: "Slides",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "heading", title: "Heading", type: "string" },
            { name: "text", title: "Text", type: "text", rows: 3 },
            {
              name: "poster",
              title: "Slide Poster (thumbnail)",
              type: "image",
              options: { hotspot: true },
              fields: [{ name: "alt", title: "Alt Text", type: "string" }],
            },
            {
              name: "videoFile",
              title: "Video File",
              type: "file",
              options: { accept: "video/mp4, video/webm, video/ogg" },
            },
          ],
        },
      ],
    },
  ],
};
