<template>
  <div class="communityCard">
    <img :src="community.image" height="175px" />
    <h3>{{ community.title }}</h3>
    <div class="communityInfo">
      <div class="location" v-html="community.location" /> |
      <div class="memberCount">{{ community.memberCount }} Members</div>
    </div>
    <div class="communityPurpose" v-html="community.communityPurpose" />
    <div class="subtitles">
      <div class="subtitle" v-html="community.subtitle" />
    </div>
    <div class="actions">
      <!-- Todo: Check for auth and swap out link for Join Community link -->
      <v-btn @click="routerPush('login')">Join | $10.00</v-btn>
      <v-btn @click="routerPush(community.path)">Go</v-btn>
    </div>
  </div>
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

.communityCard
  display flex
  flex-direction column
  flex 1
  min-width 295px
  margin 10px
  border 1px solid darkslategray
  border-radius 3px
  box-sizing border-box
  div
    margin 5px

.location
.memberCount 
  display inline


.subtitle 
  padding 5px
  border 1px solid darkslategray
  border-radius 5px
  display inline


.actions 
  display flex
  justify-content space-between
  align-content stretch
  align-items flex-end
  flex 2
</style>
