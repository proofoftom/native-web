<template>
  <layout>
    <h1>Sign In</h1>
    <login-form />
  </layout>
</template>

<script>
import LoginForm from "~/components/forms/LoginForm";

export default {
  metaInfo: {
    title: "Sign In"
  },
  components: {
    LoginForm
  }
};
</script>
