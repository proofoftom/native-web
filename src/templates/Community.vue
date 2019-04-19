<template>
  <Layout :title="$page.community.title">
    <img class="hero" :src="$page.community.image" width="100%" />
    <h2>{{ $page.community.title }}</h2>
    <div class="community-info">
      <div class="location" v-html="$page.community.location" /> |
      <div class="member-count">{{ $page.community.memberCount }} Members</div>
    </div>
    <div class="community-purpose" v-html="$page.community.communityPurpose" />
    <div class="subtitles">
      <div class="subtitle" v-html="$page.community.subtitle" />
    </div>
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
.member-count
  display inline

.subtitle
  padding 5px
  border 1px solid darkslategray
  border-radius 5px
  display inline

</style>