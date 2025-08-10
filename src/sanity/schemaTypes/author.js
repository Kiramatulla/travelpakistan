
export const author = {
  name: "author",
  title: "Author",
  type: "document",
  fields: [
{
      name: "authorName",
      title: "Author Name",
      type: "string",
    },

    {
      name: "lastUpdated",
      title: "Last Updated",
      type: "date",
      options: {
        dateFormat: "DD MMMM YYYY",
      },
    },

    {
      name: "authorDescription",
      title: "Author Description",
      type: "text",
      description: "Short description about the author",
    },
  ]
}