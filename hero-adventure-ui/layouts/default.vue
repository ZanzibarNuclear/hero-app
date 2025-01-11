<template>
  <div class="antialiased bg-white dark:bg-black dark:text-white flex flex-col items-center justify-center min-h-screen
    place-content-center sm:text-base text-black text-sm">
    <CommonHeader class="mt-0" />
    <main class="flex flex-grow items-center justify-center w-5/6">
      <slot />
    </main>
    <CommonFooter />
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped></style>