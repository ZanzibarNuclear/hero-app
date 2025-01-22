<template>
  <div
    class="flex flex-col min-h-screen bg-heroic-uranium text-heroic-graphite dark:bg-heroic-graphite dark:text-heroic-lightgray"
  >
    <CommonHeader :hide-nav="true" />
    <main class="flex-grow w-5/6 mx-auto">
      <slot />
    </main>
    <CommonSimpleFooter />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
