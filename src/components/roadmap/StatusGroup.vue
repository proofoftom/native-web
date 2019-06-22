<template>
  <v-timeline-item small color="#549387">
    <div class="mt-3">
      <span class="subheading grey--text text--darken-2">{{ this.$props.title }}</span>
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
      features: {
        type: Array
      }
    },
    components: {
      RoadmapCard,
    },
  }
</script>