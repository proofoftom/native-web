<template>
  <v-flex xs12 sm6 md4>
    <v-hover>
      <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
        <!-- <v-responsive width="100%" height="200px"> -->
        <v-img :src="community.image" height="200px">
          <v-layout
            align-end
            fill-height
            white--text
            pa-2
            class="bottom-gradient"
          >
            <v-flex>
              <div class="title font-weight-light">{{ community.title }}</div>
              <div class="community-memeber-info">
                <span>{{ community.location }}</span>
                |
                <span> {{ community.memberCount }} Members </span>
              </div>
            </v-flex>
          </v-layout>
        </v-img>
        <!-- </v-responsive> -->
        <v-card-text>
          <div>{{ community.communityPurpose }}</div>
        </v-card-text>
        <v-container class="pt-0 px-3">
          <div class="subtitle">{{ community.subtitle }}</div>
        </v-container>
        <v-container class="actions pt-0 px-2">
          <v-layout>
            <!-- Todo: Check for auth and swap out link for Join Community link -->
            <v-btn class="green-button" @click="routerPush('login')"
              >Join</v-btn
            >
            <v-btn class="green-button" @click="routerPush(community.path)"
              >View</v-btn
            >
          </v-layout>
        </v-container>
      </v-card>
    </v-hover>
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

.actions .layout
  justify-content center

.community-memeber-info > *
  display inline

.bottom-gradient
  background-image linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.666))
  margin-top 0 !important
</style>
