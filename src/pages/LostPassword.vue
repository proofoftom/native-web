<template>
  <Layout>
    <h1>Lost Password</h1>
    <LostPasswordForm />
  </Layout>
</template>

<script>
import LostPasswordForm from "~/components/forms/LostPasswordForm";

export default {
  metaInfo: {
    title: "Lost Password"
  },
  components: {
    LostPasswordForm
  }
};
</script>
