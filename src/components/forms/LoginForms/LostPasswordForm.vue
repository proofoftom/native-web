<template>
  <v-layout>
    <flex-logo />
    <v-flex xs12 sm5>
      <v-form>
        <v-text-field label="Email" v-model="email" />
        <v-btn class="green-button" @click="sendResetLink()"
          >Send Reset Link</v-btn
        >
        <g-link to="/login" class="caption">
          <v-btn flat class="caption">Back</v-btn>
        </g-link>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
import FlexLogo from "./FlexLogo"

export default {
  data() {
    return {
      email: ""
    }
  },
  methods: {
    sendResetLink() {
      // Do some user auth stuff here...
    }
  },
  components: {
    FlexLogo
  }
}
</script>
