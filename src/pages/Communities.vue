<template>
  <Layout>
    <h1>Explore Communities</h1>
    <div class="communities">
      <CommunityCard
        v-for="community in $page.communities.edges"
        :key="community.node.id"
        :community="community.node"
      />
    </div>
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

.communities
  display flex
  align-items stretch
  flex-direction row
  flex-wrap wrap

@media (max-width 760px)
  .communities
    flex-direction column

</style>
