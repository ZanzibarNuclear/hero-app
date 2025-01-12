<template>
  <header class="flex items-center justify-between px-4 bg-heroic-lightgray dark:bg-heroic-raisin shadow w-full">
    <div class="flex-shrink-0">
      <NuxtImg src="/images/blue-reactor.jpg" alt="World of Nuclear logo" width="50" height="50" />
    </div>
    <h1 class="text-3xl font-bold font-heading text-center flex-grow text-heroic-cherenkov dark:text-heroic-cherenkov">
      World of
      Nuclear</h1>
    <div class="flex space-x-4">
      <DarkToggle />
      <AccountMenuItem />
    </div>
  </header>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>