<template>
  <v-layout>
    <flex-logo />
    <v-flex xs12 sm5>
      <v-form>
        <v-text-field label="Username" v-model="username"></v-text-field>
        <v-text-field label="Password" v-model="password"></v-text-field>
        <v-btn class="green-button" @click="loginUser()">Login</v-btn>
        <g-link to="/lost-password">
          <v-btn flat class="caption">Lost Password?</v-btn>
        </g-link>
        <div>or</div>
        <g-link to="/register" class="subheading">
          <v-btn class="green-button">Create a New Account</v-btn>
        </g-link>
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
        .post(process.env.API_URL + "/user/login", this.$data)
        .then(function(response) {
          localStorage.token = response.data.token;
          self.$router.push("/profile");
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
