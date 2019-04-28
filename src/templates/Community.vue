<template>
  <layout :title="$page.community.title">
    <v-responsive width="100%" max-height="500px">
      <img :src="$page.community.image" width="100%" />
    </v-responsive>
    <h2>{{ $page.community.title }}</h2>
    <div>
      <div>
        {{ $page.community.location }}
      </div>
      |
      <div>{{ $page.community.memberCount }} Members</div>
    </div>
    <div>
      {{ $page.community.communityPurpose }}
    </div>
    <div>
      {{ $page.community.subtitle }}
    </div>
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
  }
};
</script>

<style lang="stylus" scoped>
</style>
