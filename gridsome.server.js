const axios = require('axios')
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

  api.loadSource(async store => {
    const { data } = await axios.get(process.env.GRIDSOME_API_URL + '/communities')

    const contentType = store.addContentType({
      typeName: 'Community',
      route: '/communities/:slug'
    })

    for (const community of data) {
      contentType.addNode({
        id: community.id,
        title: community.name,
        date: community.createdAt,
        fields: {
          ...community
        }
      })
    }
  })
}
