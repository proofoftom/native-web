<template>
  <Layout>
    <h1>Explore Communities</h1>
    <div class="communities">
      <div v-for="community in $page.communities.edges" :key="community.node.id" class="community">
        <img class="hero" :src="community.node.image" width="100%" />
        <h3>{{ community.node.name }}</h3>
        <div class="location" v-html="community.node.location" /> |
        <div class="memberCount">{{ community.node.memberCount }} Members</div>
        <div class="communityPurpose" v-html="community.node.communityPurpose" />
        <div class="subtitle" v-html="community.node.subtitle" />
        <div class="actions">
          <!-- Todo: Check for auth and swap out link for Join Community link -->
          <button @click="routerPush('login')">Join | $10.00</button>
          <button @click="routerPush(community.node.path)">Go</button>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Communities {
  communities: allCommunity {
    edges {
      node {
        name
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
export default {
  metaInfo: {
    title: 'Communities'
  },
  methods: {
    routerPush(path) {
      this.$router.push(path)
    },
  }
}
</script>

<style scoped>
.communities {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
  max-width: 760px;
}

.community {
  width: 30%;
  padding: 10px;
  border: 1px solid darkslategray;
  border-radius: 5px;
  box-sizing: border-box;
}

.community div {
  margin: 5px;
}

.location, .memberCount {
  display: inline;
}

.subtitle {
  padding: 5px;
  border: 1px solid darkslategray;
  border-radius: 5px;
  display: inline;
}

.community .actions {
  display: flex;
  justify-content: space-between;
}

.community button {
  margin-top: 5px;
  padding: 5px;
}

@media (max-width: 760px) {
  .communities {
    flex-direction: column;
  }

  .community {
    width: 100%;
    margin-bottom: 1rem;
  }
}
</style>
