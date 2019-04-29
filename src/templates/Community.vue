<template>
  <layout :title="$page.community.title">
    <v-img
      :src="$page.community.image"
      width="100%"
      :height="imageHeight"
      class="elevation-8"
    >
      <v-layout align-end fill-height white--text pa-2 class="bottom-gradient">
        <v-flex>
          <div class="title font-weight-light">{{ $page.community.title }}</div>
          <div class="community-memeber-info">
            <span>{{ $page.community.location }}</span>
            |
            <span> {{ $page.community.memberCount }} Members </span>
          </div>
        </v-flex>
      </v-layout>
    </v-img>
    <v-tabs
      v-model="active"
      slider-color="#2f4f4f"
      class="elevation-8"
      grow
    >
      <v-tab>About</v-tab>
      <v-tab>Tasks</v-tab>
      <v-tab>Votes</v-tab>
      <v-tab>Projects</v-tab>
      <v-tab-item>
        <About />
      </v-tab-item>
      <v-tab-item>
        <Tasks />
      </v-tab-item>
      <v-tab-item>
        <Votes />
      </v-tab-item>
      <v-tab-item>
        <Projects />
      </v-tab-item>
    </v-tabs>
  </layout>
</template>

<page-query>
query community ($path: String!) {
  community: community (path: $path) {
    title
    image
    location
    memberCount
    communityPurpose
    subtitle
  }
}
</page-query>

<script>
import {
  About,
  Projects,
  Tasks,
  Votes
} from "~/components/cards/CommunityDetails";

export default {
  metaInfo() {
    return {
      title: this.$page.community.title
    };
  },
  computed: {
    imageHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "220px";
        case "sm":
          return "350px";
        default:
          return "500px";
      }
    }
  },
  components: {
    About,
    Projects,
    Tasks,
    Votes
  }
};
</script>

<style lang="stylus" scoped>
.bottom-gradient
  background-image linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.666))
  margin-top 0 !important
</style>
