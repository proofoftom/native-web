<template>
  <v-toolbar-items class="main-nav subheading">
    <g-link to="/">
      <img
        alt="Native Logo"
        :src="require('~/assets/images/ntv__logo--horizontal.png')"
        width="175px"
      />
    </g-link>
    <g-link to="/communities" class="flex hidden-xs-only">
      <v-btn flat>Communities</v-btn>
    </g-link>
    <g-link to="/roadmap" class="flex hidden-xs-only">
      <v-btn flat>Roadmap</v-btn>
    </g-link>
    <!-- <g-link to="/help" class="flex hidden-xs-only">
      <v-btn flat>Help</v-btn>
    </g-link> -->
    <v-menu class="hidden-sm-and-up">
      <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
      <v-list>
        <v-list-tile>
          <g-link to="/communities">
            <v-btn small flat>
              <v-list-tile-title>Communities</v-list-tile-title>
            </v-btn>
          </g-link>
        </v-list-tile>
        <v-list-tile>
          <g-link to="/help">
            <v-btn small flat>
              <v-list-tile-title>Help</v-list-tile-title>
            </v-btn>
          </g-link>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar-items>
</template>

<style lang='stylus' scoped>
.main-nav
  align-items center
  a
    font-family 'Lucida Console', Monaco, monospace
    font-weight bold
    margin 0 20px
</style>
