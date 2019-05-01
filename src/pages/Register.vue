<template>
  <layout>
    <h1>Register</h1>
    <register-form />
  </layout>
</template>

<script>
import RegisterForm from "~/components/forms/LoginForms/RegisterForm"

export default {
  metaInfo: {
    title: "Register"
  },
  components: {
    RegisterForm
  }
}
</script>
