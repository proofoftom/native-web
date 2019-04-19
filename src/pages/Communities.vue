<template>
  <Layout>
    <h1>Explore Communities</h1>
    <v-layout row wrap class="communities">
      <CommunityCard
        v-for="community in $page.communities.edges"
        :key="community.node.id"
        :community="community.node"
      />
    </v-layout>
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
import CommunityCard from "~/components/communities/CommunityCard";

export default {
  metaInfo: {
    title: 'Communities'
  },
  components: {
    CommunityCard,
  },
}
</script>