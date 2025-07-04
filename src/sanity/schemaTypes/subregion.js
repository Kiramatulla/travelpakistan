export const subregion = {
  name: 'subregion',
  type: 'document',
  title: 'Subregion',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Subregion Name',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title', maxLength: 96 },
    },
    {
      name: 'region',
      type: 'reference',
      title: 'Parent Region',
      to: [{ type: 'region' }],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Subregion Description',
    },
  ],
}
