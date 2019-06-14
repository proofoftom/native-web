require('dotenv-flow').config()
const nodeExternals = require('webpack-node-externals')

module.exports = function(api) {
  // Whitelist Vuetify in webpack in order to build
  api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      config.externals([
        nodeExternals({
          whitelist: [/^vuetify/]
        })
      ])
    }
  })
}
