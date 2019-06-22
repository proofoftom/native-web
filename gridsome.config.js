// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Native',
  siteDescription: 'Incentivize and Scale Digital Communities.',
  siteUrl: 'https://beta.nativeproject.one',
  titleTemplate: 'Native - %s',
  plugins: [
    {
      use: '@gridsome/source-drupal',
      options: {
        baseUrl: process.env.GRIDSOME_API_URL
      }
    },
    {
      use: '@gridsome/source-airtable',
      options: {
        apiKey: process.env.AIRTABLE_API_KEY, // required
        baseId: process.env.AIRTABLE_BASE_ID, // required
        tableName: process.env.AIRTABLE_TABLE_NAME, // required
        typeName: process.env.AIRTABLE_TYPE_NAME, // required
      }
    }
  ]
}
