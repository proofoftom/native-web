<template>
  <Layout :title="$page.community.title">
    <div class="content">
      <img class="avatar" :src="$page.community.icon"/>
      <h2>{{ $page.community.name }}</h2>
      <div class="location" v-html="$page.community.location" /> |
      <div class="memberCount">{{ $page.community.memberCount }} Members</div>
      <div class="communityPurpose" v-html="$page.community.communityPurpose" />
      <div class="subtitle" v-html="$page.community.subtitle" />
    </div>
  </Layout>
</template>

<page-query>
query community ($path: String!) {
  community: community (path: $path) {
    title
    icon
    name
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
      title: this.$page.community.name
    }
  }
}
</script>

<style scoped>
.location, .memberCount {
  display: inline;
}

.subtitle {
  padding: 5px;
  border: 1px solid darkslategray;
  border-radius: 5px;
  display: inline;
}
</style>
