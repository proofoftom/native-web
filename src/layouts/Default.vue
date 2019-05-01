<template>
  <v-app class="app">
    <v-container grid-list-lg>
      <v-toolbar height="100" app>
        <main-nav />
        <v-spacer></v-spacer>
        <user-menu />
      </v-toolbar>
      <transition name="fade" appear>
        <v-content>
          <slot />
        </v-content>
      </transition>
    </v-container>
  </v-app>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import MainNav from "~/components/menus/MainNav"
import UserMenu from "~/components/menus/UserMenu"

export default {
  components: {
    MainNav,
    UserMenu
  }
}
</script>

<style lang="stylus">
@import '../assets/stylus/_globals'

// Animations
.fade-enter-active
  transition opacity .5s

.fade-enter
  opacity 0
</style>
