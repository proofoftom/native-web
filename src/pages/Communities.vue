<template>
  <Layout>
    <v-container grid-list-lg class="communities">
      <h1>Explore Communities</h1>
      <v-layout row wrap>
        <CommunityCard
          v-for="community in $page.communities.edges"
          :key="community.node.id"
          :community="community.node"
        />
      </v-layout>
    </v-container>
  </Layout>
</template>

<page-query>
query Communities {
  communities: allCommunity {
    edges {
      node {
        title
        image
        location
        memberCount
        communityPurpose
        subtitle
        path
      }
    }
  }
}
</page-query>

<script>
import CommunityCard from "~/components/CommunityCard";

export default {
  metaInfo: {
    title: 'Communities'
  },
  components: {
    CommunityCard,
  },
}
</script>

<style lang="stylus" scoped>

</style>
