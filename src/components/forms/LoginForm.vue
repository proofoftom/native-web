<template>
  <v-layout>
    <flex-logo />
    <v-flex xs12 sm5>
      <v-form>
        <g-link to="/register" class="subheading">Create a New Account</g-link>
        <v-text-field label="Username" v-model="username"></v-text-field>
        <v-text-field label="Password" v-model="password"></v-text-field>
        <v-btn class="green-button" @click="loginUser()">Login</v-btn>
        <g-link to="/lost-password" class="caption">Lost Password?</g-link>
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
      password: ""
    };
  },
  methods: {
    loginUser() {
      const self = this;
      axios
        .post(process.env.API_URL + "/user/login", {
          username: this.username,
          password: this.password
        })
        .then(function() {
          self.$router.push("/communities");
        })
        .catch(function() {});
    }
  },
  components: {
    FlexLogo
  }
};
</script>
