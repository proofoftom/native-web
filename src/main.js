// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import 'babel-polyfill'
import '~/plugins/vuetify'
import '~/assets/stylus/_globals.styl'
import DefaultLayout from '~/layouts/Default.vue'

export default function(Vue, { head, isClient, router }) {
  // Get Material Icons
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
  })

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Simple route guard
  if (isClient) {
    router.beforeEach((to, from, next) => {
      // Check auth conditions
      const pathsWhitelist = [
        '/',
        '/login',
        '/register',
        '/lost-password',
        '/help'
      ]
      if (
        // Not in whitelist paths
        !pathsWhitelist.includes(to.path) &&
        // No (or bad) token
        (!localStorage.token || localStorage.token.length !== 161)
      ) {
        next('/login')
      } else {
        // Continue along your way
        next()
      }
    })
  }
}
