<template>
  <div>
    <layout class="roadmap">
      <h1>Roadmap</h1>
      <v-timeline dense align-top class="pt-0">
        <StatusGroup v-for="(status, index) in statuses"
          :key="index"
          :title="status.title"
          :description="status.description"
          :features="status.features"
        />
      </v-timeline>
    </layout>
  </div>
</template>

<page-query>
query features {
  features: allFeature {
    edges {
      node {
        feature
        featureDescription
        priority
      }
    }
  }
}
</page-query>

<script>
import StatusGroup from "~/components/roadmap/StatusGroup";

export default {
  metaInfo: {
    title: 'Roadmap'
  },
  data() {
    return {
      statuses: {
        // complete: {
        //   title: "Complete",
        //   features: null
        // },
        current: {
          title: "Current",
          description: "Granular areas of focus with well defined scope and product specifications.",
          features: null
        },
        nearTerm: {
          title: "Near Term",
          description: "Wider areas of focus with some flexibility on the scope.",
          features: null
        },
        future: {
          title: "Future",
          description: "High level areas of focus with a broader and flexible scope.",
          features: null
        },
      }
    }
  },
  mounted() {
    // this.statuses.complete.features = this.$page.features.edges.filter(function(item) {
    //   return item.node.priority == "Complete";
    // });
    this.statuses.current.features = this.$page.features.edges.filter(function(item) {
      return item.node.priority == "Current";
    });
    this.statuses.nearTerm.features = this.$page.features.edges.filter(function(item) {
      return item.node.priority == "Near Term";
    });
    this.statuses.future.features = this.$page.features.edges.filter(function(item) {
      return item.node.priority == "Future";
    });
  },
  components: {
    StatusGroup,
  },
}
</script>

<style lang="scss" scoped>
.roadmap {
  max-width: 720px;
  margin: auto;
}
</style>