<template>
  <div
    class="flex flex-col min-h-screen bg-heroic-uranium text-heroic-graphite dark:bg-heroic-graphite dark:text-heroic-lightgray"
  >
    <!-- Header -->
    <header class="h-18 flex items-center justify-center">
      <CommonHeader hide-nav="true" />
    </header>

    <!-- Main Content -->
    <main class="flex-grow w-5/6 mx-auto">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="h-16 flex items-center justify-center">
      <CommonSimpleFooter />
    </footer>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
