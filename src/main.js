// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import 'babel-polyfill'
import '~/plugins/vuetify'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Get Meterial Icons
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
  })

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Simple route guard
  // if (isClient) {
  //   router.beforeEach((to, from, next) => {
  //     if (to.path == '/join' && user.auth != true) {
  //       next('/login')
  //     } else {
  //       next()
  //     }
  //   })
  // }
}
