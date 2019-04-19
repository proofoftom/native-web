<template>
  <v-flex xs12 sm6 md4>
    <v-card class="community-card">
      <v-responsive width="100%" height="200px">
        <img :src="community.image" width="100%" />
      </v-responsive>
      <v-card-text>
        <div class="title">{{ community.title }}</div>
        <div class="community-memeber-info">
          <div class="location pt-1">{{ community.location }}</div>
          <v-divider />
          <div class="member-count pt-2">
            {{ community.memberCount }} Members
          </div>
        </div>
      </v-card-text>
      <v-card-text class="pt-0">
        <div class="community-purpose">{{ community.communityPurpose }}</div>
      </v-card-text>
      <v-container class="subtitles pt-0 px-3">
        <div class="subtitle">{{ community.subtitle }}</div>
      </v-container>
      <v-container class="actions pt-0 px-2">
        <v-layout>
          <!-- Todo: Check for auth and swap out link for Join Community link -->
          <v-btn @click="routerPush('login')">Join | $10.00</v-btn>
          <v-btn @click="routerPush(community.path)">Go</v-btn>
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: "CommunityCard",
  props: {
    community: {
      type: Object,
      required: true
    }
  },
  methods: {
    routerPush(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style lang="stylus" scoped>
.subtitle
  padding 5px
  border 1px solid darkslategray
  display inline

.actions .layout {
  justify-content center
</style>
