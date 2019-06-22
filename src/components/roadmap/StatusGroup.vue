<template>
  <v-timeline-item small color="#549387">
    <div class="mt-3">
      <span class="subheading grey--text text--darken-2">{{ this.$props.title }}</span>
    </div>
    <div class="mt-1 grey--text">
      <span class="body-2">{{ this.$props.description }}</span>
    </div>
    <roadmap-card
      v-for="(feature, index) in this.$props.features"
      :key="index"
      :feature="feature"
    />
  </v-timeline-item>
</template>

<script>
import RoadmapCard from "~/components/cards/RoadmapCard";
  export default {
    props: {
      title: {
        type: String
      },
      description: {
        type: String
      },
      features: {
        type: Array
      }
    },
    components: {
      RoadmapCard,
    },
  }
</script>