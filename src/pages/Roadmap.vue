<template>
  <div>
    <layout class="roadmap">
      <h1>Roadmap</h1>
      <v-timeline dense align-top>
        <StatusGroup v-for="(status, index) in statuses"
          :key="index"
          :title="status.title"
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
  data() {
    return {
      statuses: {
        complete: {
          title: "Complete",
          features: null
        },
        current: {
          title: "Current",
          features: null
        },
        nearTerm: {
          title: "Near Term",
          features: null
        },
        future: {
          title: "Future",
          features: null
        },
      }
    }
  },
  mounted() {
    this.statuses.complete.features = this.$page.features.edges.filter(function(item) {
      return item.node.priority == "Complete";
    });
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