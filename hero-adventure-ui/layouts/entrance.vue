<template>
  <div class="antialiased bg-white dark:bg-black dark:text-white flex flex-col items-center justify-center min-h-screen
    place-content-center sm:text-base text-black text-sm">
    <main class="flex-grow flex items-center justify-center">
      <slot />
    </main>
    <footer class="my-4">
      <div class="text-right text-gray-700">
        <NuxtLink external to="https://nuclearambitions.com">&copy; 2025 Nuclear Ambitions LLC</NuxtLink>
      </div>
    </footer>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'entrance',
})
</script>

<style lang="scss" scoped></style>