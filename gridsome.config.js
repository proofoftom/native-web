// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// Enable global preprocessor for sass and stylus variables, mixins, etc.
const path = require('path')
function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/sass/_globals.sass'),
        // you can also use a glob if you'd prefer
        // path.resolve(__dirname, './src/assets/sass/*.sass'),
        path.resolve(__dirname, './src/assets/stylus/_globals.styl'),
      ],
    })
}

module.exports = {
  siteName: 'Native',
  siteDescription: 'Incentivize and Scale Digital Communities.',
  siteUrl: 'https://beta.nativeproject.one',
  titleTemplate: 'Native - %s',
  plugins: [],
  // Load variables for all vue-files
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('sass').oneOf(type)))
  }
}
