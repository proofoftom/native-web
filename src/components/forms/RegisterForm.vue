<template>
  <v-layout>
    <v-flex xs12 sm6>
      <v-form>
        <g-link to="/login" class="subheading">
          Sign in with another account
        </g-link>
        <v-text-field label="Username" v-model="username" />
        <v-text-field label="Email" v-model="email" />
        <v-text-field label="Password" v-model="password" />
        <v-text-field label="Confirm Password" v-model="passwordConfirm" />
        <v-spacer />
        <v-btn class="mt-4" @click="createUser()">Submit</v-btn>
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
      email: "",
      password: "",
      passwordConfirm: ""
    };
  },
  methods: {
    createUser() {
      const self = this;
      axios
        .post('http://localhost:3000/user/register', {
          username: this.username,
          password: this.password
        })
        .then(function() {
          self.$router.push("/login");
        })
        .catch(function() {});
    }
  }
};
</script>
