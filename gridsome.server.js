const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async store => {
    const { data } = await axios.get(process.env.API_URL + '/communities')

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
