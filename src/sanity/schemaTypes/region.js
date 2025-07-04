export const region ={
  name: 'region',
  type: 'document',
  title: 'Region',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Region Name',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title', maxLength: 96 },
    },
    {
      name: 'description',
      type: 'text',
      title: 'Region Description',
    },
    {
      name: 'subregions',
      type: 'array',
      title: 'Subregions',
      of: [{ type: 'reference', to: [{ type: 'subregion' }] }],
    },
  ],
}
