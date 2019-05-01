// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
require('dotenv-flow').config()

module.exports = {
  siteName: 'Native',
  siteDescription: 'Incentivize and Scale Digital Communities.',
  siteUrl: 'https://beta.nativeproject.one',
  titleTemplate: 'Native - %s',

  chainWebpack: config => {
    config
      .plugin('env')
      .use(require.resolve('webpack/lib/EnvironmentPlugin'), ['API_URL'])
  },
  plugins: []
}
