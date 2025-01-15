<template>
  <UCard class="shadow-cherenkov bg-nuclear-50">
    <template #header>
      <h3>Request a Magic Link</h3>
    </template>
    <AuthMagicLinkForm />
    <template #footer>
      <div class="font-body text-sm">
        Give us your email address, and we will send you an email with a link. Click the link in the
        email to return here signed in.
      </div>
    </template>
  </UCard>
</template>

<script lang="ts" setup>
const magicForm = reactive({
  email: '',
  alias: '',
  token: '',
  needAccount: false,
  active: true,
})

const emailFeedback = reactive({
  done: false,
  show: false,
  heading: '',
  message: '',
})

const needAccountLabel = computed(() => {
  return magicForm.needAccount ? 'I need an account' : 'I have an account'
})

const enableResend = () => {
  magicForm.active = true
  emailFeedback.done = false
}

// TODO: add field validation

const login = async () => {
  magicForm.active = false
  // const response: any = await useAuthService().loginWithMagicLink(magicForm.email, magicForm.alias, magicForm.token)

  // if (response.status === 'success') {
  //   emailFeedback.heading = 'Magic Link Sent'
  //   emailFeedback.message = response.message
  // } else {
  //   emailFeedback.heading = 'Error Sending Magic Link'
  //   emailFeedback.message = response.message
  // }
  emailFeedback.show = true
  emailFeedback.done = true
}
</script>
