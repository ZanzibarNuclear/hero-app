<template>
  <div
    class="bg-heroic-uranium dark:bg-heroic-graphite text-heroic-graphite dark:text-heroic-lightgray"
  >
    <div
      class="antialiased flex flex-col items-center justify-center min-h-screen place-content-center sm:text-base w-5/6 min-w-80 mx-auto"
    >
      <CommonHeader class="mt-0" />
      <main class="flex flex-grow items-center justify-center">
        <slot />
      </main>
      <CommonFooter />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
