<template>
  <div class="relative">
    <!-- Main Menu Item -->
    <UButton @click="togglePopup" :label="label" :icon="icon"
      class="flex items-center space-x-2 hover:bg-gray-700 px-4 py-2 rounded-lg">
    </UButton>

    <!-- Pop-up Menu -->
    <div v-if="isPopupOpen && options.length > 0" @click.away="closePopup"
      class="absolute left-0 mt-2 bg-white text-black rounded-lg shadow-lg w-48 z-10">
      <ul>
        <li v-for="option in options" :key="option.label" class="hover:bg-gray-200 px-4 py-2 cursor-pointer">
          <router-link :to="option.route">{{ option.label }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    label: String,
    options: Array,
  },
  data() {
    return {
      isPopupOpen: false,
    };
  },
  methods: {
    togglePopup() {
      this.isPopupOpen = !this.isPopupOpen;
    },
    closePopup() {
      this.isPopupOpen = false;
    },
  },
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>
