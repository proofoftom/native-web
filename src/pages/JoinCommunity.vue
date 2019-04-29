<template>
  <layout>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <v-img
          :src="require('~/assets/images/ntv__logo--horizontal.png')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>

      <v-flex mb-4 mt-0>
        <h1 class="display-2 font-weight-bold mb-3">
          Coming Soon
        </h1>
        <p class="subheading font-weight-regular">
          In the meantime... join our online
          <a href="https://chat.nativeproject.one" target="_blank">
            Chat Community!
          </a>
        </p>
      </v-flex>
    </v-layout>
  </layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Tokenized Digital Communities"
  }
};
</script>
