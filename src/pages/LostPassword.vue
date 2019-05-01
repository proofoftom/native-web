<template>
  <layout>
    <h1>Lost Password</h1>
    <lost-password-form />
  </layout>
</template>

<script>
import LostPasswordForm from '~/components/forms/LoginForms/LostPasswordForm'

export default {
  metaInfo: {
    title: 'Lost Password'
  },
  components: {
    LostPasswordForm
  }
}
</script>
