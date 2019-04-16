const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async store => {
    // Todo: Use .env file to define host
    const { data } = await axios.get('http://localhost:3000/communities')

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
