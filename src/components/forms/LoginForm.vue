<template>
  <v-layout>
    <v-flex xs12 sm6>
      <v-form>
        <g-link to="/register" class="subheading">Create a New Account</g-link>
        <v-text-field label="Username" v-model="username"></v-text-field>
        <v-text-field label="Password" v-model="password"></v-text-field>
        <g-link to="/lost-password" class="caption">Lost Password?</g-link>
        <v-spacer></v-spacer>
        <v-btn class="mt-4" @click="loginUser()">Login</v-btn>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from "axios";

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
        .post("http://localhost:3000/user/login", {
          username: this.username,
          password: this.password
        })
        .then(function() {
          self.$router.push("/communities");
        })
        .catch(function() {});
    }
  }
};
</script>
