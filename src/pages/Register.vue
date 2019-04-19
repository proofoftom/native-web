<template>
  <Layout>
    <h1>Sign Up</h1>
    <RegisterForm />
  </Layout>
</template>

<script>
import RegisterForm from "~/components/forms/RegisterForm";

export default {
  metaInfo: {
    title: "Sign Up"
  },
  components: {
    RegisterForm
  }
};
</script>
