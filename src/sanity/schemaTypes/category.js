export const category = {
    name: "category",
    title: "Category",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Category Title",
        type: "string",
        validation: Rule => Rule.required(),
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "title",
          maxLength: 200,
        },
        validation: Rule => Rule.required(),
      },
    ],
  };
  