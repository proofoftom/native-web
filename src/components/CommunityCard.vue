<template>
  <v-flex xs12 sm6 md4>
    <v-card class="community-card">
      <img :src="community.image" width="100%" />
      <v-container>
        <h3>{{ community.title }}</h3>
        <div class="community-info">
          <div class="location" v-html="community.location" /> |
          <div class="member-count">{{ community.memberCount }} Members</div>
        </div>
        <div class="community-purpose" v-html="community.communityPurpose" />
        <div class="subtitles">
          <div class="subtitle" v-html="community.subtitle" />
        </div>
        <div class="actions">
          <!-- Todo: Check for auth and swap out link for Join Community link -->
          <v-btn @click="routerPush('login')">Join | $10.00</v-btn>
          <v-btn @click="routerPush(community.path)">Go</v-btn>
        </div>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: 'Community',
  props: {
    community: {}
  },
  methods: {
    routerPush(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style lang="stylus" scoped>

.subtitle 
  padding 5px
  border 1px solid darkslategray
  display inline

.actions 
  display flex
  justify-content space-between
  align-content stretch
  align-items flex-end
  flex 2

</style>
