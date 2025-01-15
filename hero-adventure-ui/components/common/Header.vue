<template>
  <header>
    <div
      class="flex items-center justify-between bg-heroic-uranium dark:bg-heroic-raisin shadow-lg dark:shadow-cherenkov my-4">
      <div class="flex-shrink-0">
        <NuxtImg src="/images/logo/logo-cherenkov-clear-bg.png" alt="World of Nuclear logo" />
      </div>
      <div class="flex space-x-4 mr-2">
        <DarkToggle />
        <NavAccountWidget />
      </div>
    </div>
    <div>
      <NavMenu />
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped></style>
