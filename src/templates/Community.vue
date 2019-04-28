<template>
  <layout :title="$page.community.title">
    <v-img
      :src="$page.community.image"
      width="100%"
      :height="imageHeight"
      class="elevation-12"
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
    <v-layout mt-2 wrap>
      <v-flex xs12 sm4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nobis quae odio neque, officia facilis atque a repellat veniam eius. Voluptas accusamus porro cumque blanditiis atque exercitationem officiis labore error.
      </v-flex>
      <v-flex xs12 sm4>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, animi eaque! Aut eligendi, reiciendis velit itaque temporibus error veritatis libero harum, quam similique nostrum inventore quia deleniti ullam consectetur exercitationem.
      </v-flex>
      <v-flex xs12 sm4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias beatae accusamus voluptatem recusandae obcaecati eaque nihil nesciunt expedita nulla, molestiae iste debitis dolores quis, eveniet excepturi assumenda cumque quidem reiciendis.
      </v-flex>
    </v-layout>
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
  }
};
</script>

<style lang="stylus" scoped>
.bottom-gradient
  background-image linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.666))
  margin-top 0 !important
</style>
