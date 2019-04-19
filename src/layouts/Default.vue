<template>
  <v-app class="app">
    <v-container grid-list-lg>
      <v-toolbar height="100" app>
        <nav class="main-nav subheading d-flex">
          <g-link to="/">
            <img
              alt="Native Logo"
              src="../assets/images/ntv__logo--horizontal.png"
              width="175px"
            />
          </g-link>
          <g-link to="/communities" class="flex">Communities</g-link>
          <g-link to="/help">Help</g-link>
        </nav>
        <v-spacer></v-spacer>
        <v-btn icon large>
          <g-link to="/login">
            <v-icon large>account_circle</v-icon>
          </g-link>
        </v-btn>
      </v-toolbar>
      <transition name="fade" appear>
        <main>
          <slot />
        </main>
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

.application--wrap
  align-items center
  margin 20px

.main-nav
  align-items center
  a
    font-family "Lucida Console", Monaco, monospace
    text-decoration none
    font-weight bold
    color darkslategray
    margin 0 20px

main
  max-width 1280px
  width 100%
  margin-top 125px

// Animations
.fade-enter-active
  transition opacity .5s

.fade-enter
  opacity 0
</style>
