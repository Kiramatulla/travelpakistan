export default {
    name: 'sitePolicies',
    title: 'Site Policies',
    type: 'document',
    fields: [
      {
        name: 'privacyPolicy',
        title: 'Privacy Policy',
        type: 'array',
        of: [{ type: 'block' }]
      },
      {
        name: 'refundPolicy',
        title: 'Refund Policy',
        type: 'array',
        of: [{ type: 'block' }]
      },
      {
        name: 'aboutUs',
        title: 'About Us',
        type: 'array',
        of: [{ type: 'block' }]
      },
      {
        name: 'lastUpdated',
        title: 'Last Updated',
        type: 'datetime'
      }
    ]
  }
  