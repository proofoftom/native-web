<template>
  <v-menu>
    <template v-slot:activator="{ on }">
      <v-btn icon large v-on="on">
        <v-icon large>account_circle</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-tile v-if="token">
        <g-link to="/profile">
          <v-btn small flat>
            <v-list-tile-title>
              My Account
            </v-list-tile-title>
          </v-btn>
        </g-link>
      </v-list-tile>
      <v-list-tile v-if="token">
        <v-btn @click="logout()" small flat>
          <v-list-tile-title>
            Logout
          </v-list-tile-title>
        </v-btn>
      </v-list-tile>
      <v-list-tile v-else>
        <g-link to="/login">
          <v-btn small flat>
            <v-list-tile-title>
              Login
            </v-list-tile-title>
          </v-btn>
        </g-link>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      token: ''
    }
  },
  mounted() {
    this.token = localStorage.getItem('token')
  },
  methods: {
    routerPush(path) {
      this.$router.push(path)
    },
    logout() {
      localStorage.removeItem('token')
      this.routerPush('/')
    }
  }
}
</script>
