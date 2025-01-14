<template>
  <div>
    <h3>Logos</h3>
    <div class="space-y-4">
      <NuxtImg src="/images/logo/logo-cherenkov-clear-bg.png" />

      <div class="grid grid-cols-2 gap-4 p-5">
        <NuxtImg src="/images/logo/logo_sq_brd_cherenkov_clear.png" />
        <NuxtImg src="/images/logo/logo_sq_cherenkov_clear_bg.png" />

        <NuxtImg src="/images/logo/logo_sq_brd_cherenkov_clear.png" width="60" />
        <NuxtImg src="/images/logo/logo_sq_cherenkov_clear_bg.png" width="60" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
})
</script>

<style scoped></style>
