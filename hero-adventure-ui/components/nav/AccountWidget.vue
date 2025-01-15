<template>
  <div>
    <UDropdown
      v-if="isLoggedIn"
      :items="items"
      icon="i-ph-caret-double-down"
      @click="showLoginOptions = true"
    >
    </UDropdown>
    <UButton v-else variant="ghost" label="Sign In" @click="openSignInPanel">
      <template #trailing>
        <UIcon name="i-ph-sign-in" />
      </template>
    </UButton>
  </div>

  <UModal v-model="showSignInPanel">
    <div class="">
      <AuthSignInPanel />
    </div>
  </UModal>

  <UModal v-model="showActionPanel">
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

const showSignInPanel = ref(false)
const openSignInPanel = () => (showSignInPanel.value = true)
const closeSignInPanel = () => (showSignInPanel.value = false)

const showActionPanel = ref(false)
const openActionPanel = () => (showActionPanel.value = true)
const closeActionPanel = () => (showActionPanel.value = false)

const isLoggedIn = computed(() => {
  return loggedIn.value
})
const toggleLoggedIn = () => {
  loggedIn.value = !loggedIn.value
  showLoginOptions.value = false
  showAccountActions.value = false
}

const items = [
  [
    {
      label: 'Profile',
      icon: 'i-ph-identification-card',
      to: '/user/account',
    },
    {
      label: 'Feedback',
      icon: 'i-ph-ear',
      click: () => onOpenFeedbackForm(),
    },
    {
      label: 'Sign Out',
      icon: 'i-ph-sign-out',
      click: toggleLoggedIn,
    },
  ],
]
</script>

<style lang="scss" scoped></style>
