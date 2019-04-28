<template>
  <layout :title="$page.community.title">
    <img class="hero" :src="$page.community.image" width="100%" />
    <h2>{{ $page.community.title }}</h2>
    <div class="community-info">
      <div class="location">
        {{ $page.community.location }}
      </div>
      |
      <div class="member-count">{{ $page.community.memberCount }} Members</div>
    </div>
    <div class="community-purpose">
      {{ $page.community.communityPurpose }}
    </div>
    <div class="subtitles">
      <div class="subtitle">
        {{ $page.community.subtitle }}
      </div>
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
.location
.member-count
  display inline

.subtitle
  padding 5px
  border 1px solid darkslategray
  border-radius 5px
  display inline
</style>
