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
        <h1 class="display-2 font-weight-bold mb-3">
          Resources
        </h1>
      </v-flex>
      <v-layout mb-4 mt-0 wrap>
        <v-flex>
          <h2>Beginner</h2>
          <v-layout column>
            <v-btn flat><g-link>Lorem ipsum dolor sit.</g-link></v-btn>
            <v-btn flat><g-link>Lorem ipsum dolor sit amet consectetur.</g-link></v-btn>
            <v-btn flat><g-link>Lorem ipsum dolor sit amet.</g-link></v-btn>
            <v-btn flat><g-link>Lorem, ipsum dolor.</g-link></v-btn>
          </v-layout>
        </v-flex>
        <v-flex>
          <h2>Intermediate</h2>
          <v-layout column>
            <v-btn flat><g-link>Lorem, ipsum dolor.</g-link></v-btn>
            <v-btn flat><g-link>Lorem ipsum dolor sit.</g-link></v-btn>
            <v-btn flat><g-link>Lorem ipsum dolor sit amet consectetur.</g-link></v-btn>
            <v-btn flat><g-link>Lorem ipsum dolor sit amet.</g-link></v-btn>
          </v-layout>
        </v-flex>
        <v-flex>
          <h2>Advanced</h2>
          <v-layout column>
            <v-btn flat><g-link>Lorem ipsum dolor sit amet.</g-link></v-btn>
            <v-btn flat><g-link>Lorem, ipsum dolor.</g-link></v-btn>
            <v-btn flat><g-link>Lorem ipsum dolor sit.</g-link></v-btn>
            <v-btn flat><g-link>Lorem ipsum dolor sit amet consectetur.</g-link></v-btn>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-layout>
  </layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Tokenized Digital Communities"
  }
}
</script>
