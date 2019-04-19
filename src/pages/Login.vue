<template>
  <Layout>
    <h1>Sign In</h1>
    <LoginForm />
  </Layout>
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
