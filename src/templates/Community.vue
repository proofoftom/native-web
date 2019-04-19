<template>
  <Layout :title="$page.community.title">
    <v-container>
      <img class="hero" :src="$page.community.image" width="100%" />
      <h2>{{ $page.community.title }}</h2>
      <div class="communityInfo">
        <div class="location" v-html="$page.community.location" /> |
        <div class="memberCount">{{ $page.community.memberCount }} Members</div>
      </div>
      <div class="communityPurpose" v-html="$page.community.communityPurpose" />
      <div class="subtitles">
        <div class="subtitle" v-html="$page.community.subtitle" />
      </div>
    </v-container>
  </Layout>
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
import Layout from '~/layouts/Default.vue'
export default {
  components: {
    Layout
  },
  metaInfo () {
    return {
      title: this.$page.community.title
    }
  }
}
</script>

<style lang="stylus" scoped>
.location
.memberCount
  display inline

.subtitle
  padding 5px
  border 1px solid darkslategray
  border-radius 5px
  display inline
</style>
