export const blogs = {
    name: "blogs",
    title: "blogs",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Blog Title",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: { source: "title", maxLength: 200 },
        validation: (Rule) => Rule.required(),
      },
      {
        name: "featuredImage",
        title: "Featured Image",
        type: "image",
        options: { hotspot: true },
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
        name: "blogOverview",
        title: "Blog Overview",
        type: "text",
        description: "A short summary of the blog post (used for previews and SEO).",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "blogContent",
        title: "Blog Content",
        type: "array",
        of: [{ type: "block" }],
        validation: (Rule) => Rule.required(),
      },
      {
        name: "readTime",
        title: "Estimated Read Time",
        type: "string",
        description: "Example: '5 min read'",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "publishedAt",
        title: "Published Date",
        type: "date",
        options: { dateFormat: "YYYY-MM-DD" },
        validation: (Rule) => Rule.required(),
      },
    ],
  };
  