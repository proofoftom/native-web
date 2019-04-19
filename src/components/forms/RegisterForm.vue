<template>
  <v-layout>
    <v-flex xs12 sm6>
      <v-form >
        <g-link to="/login" class="subheading">Sign in with another account</g-link>
        <v-text-field label="Username" v-model="username"></v-text-field>
        <v-text-field label="Email" v-model="email"></v-text-field>
        <v-text-field label="Password" v-model="password"></v-text-field>
        <v-text-field label="Confirm Password" v-model="passwordConfirm"></v-text-field>
        <v-spacer></v-spacer>
        <v-btn class="mt-4" @click="createUser()">Submit</v-btn>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        username: '',
        email: '',
        password: '',
        passwordConfirm: ''
      }
    },
    methods: {
      createUser() {
        // Do some user auth stuff here...
      }
    },
  }
</script>