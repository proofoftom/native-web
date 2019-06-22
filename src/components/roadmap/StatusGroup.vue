<template>
  <v-timeline-item small color="#549387">
    <span class="subheading grey--text text--darken-2">{{ this.$props.title }}</span>
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

<style lang="scss">
.v-timeline-item__dot {
  top: 0 !important;
}
</style>