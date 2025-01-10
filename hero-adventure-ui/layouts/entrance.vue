<template>
  <div class="antialiased bg-black dark:bg-black dark:text-white flex flex-col items-center justify-center min-h-screen
    place-content-center sm:text-base text-black text-sm">
    <main class="flex-grow flex items-center justify-center">
      <slot />
    </main>
    <CommonSimpleFooter />
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped></style>