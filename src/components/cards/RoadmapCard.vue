<template>
  <div class="roadmap-card my-3 pa-3 elevation-4">
    <div class="title">{{ feature.node.feature }}</div>
    <div v-if="feature.node.featureDescription" class="body-2 pt-3">{{ feature.node.featureDescription }}</div>
  </div>
</template>

<script>
  export default {
    props: {
      feature: {
        type: Object 
      },
    },
  }
</script>

<style lang="scss" scoped>
.roadmap-card {
  border-radius: 5px;
  box-shadow: 0px 2px 4px -1px #ddd, 0px 4px 5px 0px #ddd, 0px 1px 10px 0px #ddd !important;
  background-color: white;
}
</style>