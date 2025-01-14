<template>
  <div class="relative">
    <!-- Main Menu Item -->
    <UButton :to="route" :label="label" :icon="icon" variant="outline"
      class="flex items-center space-x-2 hover:bg-gray-700 px-4 py-2 rounded-lg">
    </UButton>
  </div>
</template>

<script setup>
const props = defineProps({
  icon: {
    type: String,
  },
  label: {
    type: String,
  },
  route: {
    type: String,
  },
})

// const isPopupOpen = ref(false)
// const togglePopup = () => {
//   isPopupOpen.value = !isPopupOpen.value
// }
// const closePopup = () => {
//   isPopupOpen.value = false
// }
</script>

<style scoped>
/* Add custom styles if needed */
</style>
