<template>
  <div>
    <UButton v-if="isLoggedIn" icon="i-heroicons-user" @click="showAccountActions = true" />
    <UButton
      v-else
      icon="i-heroicons-arrow-right-end-on-rectangle"
      @click="showLoginOptions = true"
    />
  </div>

  <UModal v-model="showLoginOptions">
    <div class="justify-center items-center">
      <div class="text-bold font-heading-serif">Sign in</div>
      <div>
        <UButton
          @click="toggleLoggedIn"
          variant="ghost"
          icon="i-ph-google-logo-bold"
          label="Google"
        />
      </div>
      <div>
        <UButton
          @click="toggleLoggedIn"
          variant="ghost"
          icon="i-ph-x-logo-bold"
          label="X (Twitter)"
        />
      </div>
    </div>
  </UModal>

  <UModal v-model="showAccountActions">
    <div>
      <div>Account</div>
      <div>
        <UButton
          @click="toggleLoggedIn"
          variant="ghost"
          label="Profile"
          icon="i-heroicons-pencil"
        />
      </div>
      <div>
        <UButton
          @click="toggleLoggedIn"
          variant="ghost"
          icon="i-heroicons-arrow-right-end-on-rectangle"
          label="Sign Out"
        />
      </div>
    </div>
  </UModal>
</template>

<script setup>
const loggedIn = ref(false)
const showLoginOptions = ref(false)
const showAccountActions = ref(false)
const isLoggedIn = computed(() => {
  return loggedIn.value
})
const toggleLoggedIn = () => {
  loggedIn.value = !loggedIn.value
  showLoginOptions.value = false
  showAccountActions.value = false
}
</script>

<style lang="scss" scoped></style>
