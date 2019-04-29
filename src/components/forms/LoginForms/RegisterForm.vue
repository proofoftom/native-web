<template>
  <v-layout>
    <flex-logo />
    <v-flex xs12 sm5>
      <v-form>
        <v-text-field label="Username" v-model="username" />
        <v-text-field label="Email" v-model="email" />
        <v-text-field label="Password" v-model="password" />
        <v-text-field label="Confirm Password" v-model="passwordConfirm" />
        <v-btn class="green-button" @click="createUser()">Submit</v-btn>
        <g-link to="/login" class="caption"
          >Sign in with another account</g-link
        >
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from "axios";
import FlexLogo from "./FlexLogo";

export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      passwordConfirm: ""
    };
  },
  methods: {
    createUser() {
      const self = this;
      axios
        .post("https://api.nativeproject.one/user/register", this.$data)
        .then(function(response) {
          localStorage.token = response.data.token;
          self.$router.push("/communities");
        })
        .catch(function(error) {
          localStorage.error = error.message;
        });
    }
  },
  components: {
    FlexLogo
  }
};
</script>
