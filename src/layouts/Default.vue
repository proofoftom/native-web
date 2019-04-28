<template>
  <v-app class="app">
    <v-container grid-list-lg>
      <v-toolbar height="100" app>
        <v-toolbar-items class="main-nav subheading">
          <g-link to="/">
            <img
              alt="Native Logo"
              src="../assets/images/ntv__logo--horizontal.png"
              width="175px"
            />
          </g-link>
          <g-link to="/communities" class="flex">Communities</g-link>
          <a href="https://chat.nativeproject.one" target="_blank">Chat</a>
          <a href="https://forum.nativeproject.one" target="_blank">Forum</a>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-btn icon large>
          <g-link to="/login">
            <v-icon large>account_circle</v-icon>
          </g-link>
        </v-btn>
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

<style lang="stylus">
@import '../assets/stylus/_globals';

.main-nav
  align-items center
  a
    font-family "Lucida Console", Monaco, monospace
    font-weight bold
    margin 0 20px

// Animations
.fade-enter-active
  transition opacity .5s

.fade-enter
  opacity 0
</style>
