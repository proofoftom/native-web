<template>
  <Layout>
    <h1>Register</h1>
    <RegisterForm />
  </Layout>
</template>

<script>
import RegisterForm from "~/components/forms/RegisterForm";

export default {
  metaInfo: {
    title: "Register"
  },
  components: {
    RegisterForm
  }
};
</script>
