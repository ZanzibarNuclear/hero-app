<template>
  <header class="flex items-center justify-between bg-heroic-lightgray dark:bg-heroic-raisin shadow w-full">
    <div class="flex-shrink-0">
      <div class="flex">
        <NuxtImg src="/images/logo/pirate-sq.jpg" alt="World of Nuclear logo" width="50" height="50" />
        <h1
          class="text-3xl px-4 font-bold font-heading text-center flex-grow text-heroic-navy dark:text-heroic-cherenkov">
          World of
          Nuclear</h1>
      </div>
    </div>
    <div class="flex space-x-4">
      <DarkToggle />
      <AccountMenuWidget />
    </div>
  </header>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>