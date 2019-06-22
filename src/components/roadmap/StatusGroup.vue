<template>
  <v-timeline-item small color="#549387">
    <div class="subheading grey--text text--darken-2">{{ this.$props.title }}</div>
    <div class="mt-1 grey--text body-2">
      {{ this.$props.description }}
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