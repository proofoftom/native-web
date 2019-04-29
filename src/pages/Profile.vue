<template>
  <layout>
    <h1>Profile</h1>
    <v-layout column>
      <v-flex> Username: {{ user.username }} </v-flex>
      <v-flex> Id: {{ user.id }} </v-flex>
      <v-flex> Created At: {{ user.createdAt }} </v-flex>
    </v-layout>
  </layout>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: {
        username: "",
        id: 0,
        createdAt: ""
      }
    };
  },
  mounted() {
    const self = this;
    axios
      .get("https://api.nativeproject.one/user", {
        headers: {
          Authorization: "Bearer " + localStorage.token
        }
      })
      .then(function(response) {
        self.user = response.data.user;
      })
      .catch(function(error) {
        // Todo: Redirect to login and notify of error
        localStorage.error = error;
      });
  }
};
</script>
