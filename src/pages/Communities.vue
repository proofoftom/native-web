<template>
  <layout>
    <h1>Explore Communities</h1>
    <v-layout row wrap>
      <community-card
        v-for="community in $page.communities.edges"
        :key="community.node.id"
        :community="community.node"
      />
    </v-layout>
  </layout>
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
import CommunityCard from "~/components/cards/CommunityCard";

export default {
  metaInfo: {
    title: "Communities"
  },
  components: {
    CommunityCard
  }
};
</script>
