<template>
  <div class="antialiased bg-white dark:bg-heroic-black dark:text-white flex flex-col items-center justify-center min-h-screen
    place-content-center sm:text-base text-heroic-black text-sm w-5/6 mx-auto my-10 min-w-80">
    <CommonHeader class="mt-0" />
    <main class="flex flex-grow items-center justify-center">
      <slot />
    </main>
    <CommonFooter />
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped></style>