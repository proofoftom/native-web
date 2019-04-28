<template>
  <v-layout>
    <v-flex xs12 sm6>
      <v-form>
        <v-text-field label="Email" v-model="email" />
        <v-btn class="mt-4" @click="sendResetLink()">Send Reset Link</v-btn>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      email: ""
    };
  },
  methods: {
    sendResetLink() {
      // Do some user auth stuff here...
    }
  }
};
</script>
