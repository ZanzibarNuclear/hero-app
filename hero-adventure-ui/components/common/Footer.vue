<template>
  <footer class="my-4 w-3/4 min-w-80">
    <div>
      <div class="flex flex-row justify-around text-heroic-cherenkov mb-4">
        <div>
          <UButton to="/" icon="i-heroicons-home-modern" label="Start" variant="ghost" />
        </div>
        <div>
          <UButton to="/guide" icon="i-heroicons-map" label="Guide" variant="ghost" />
        </div>
        <UButton to="/credits" icon="i-heroicons-trophy" label="Credits" variant="ghost" />
      </div>
    </div>
    <div class="text-center">
      <NuxtLink external to="https://nuclearambitions.com"
        >&copy; 2025 Nuclear Ambitions LLC</NuxtLink
      >
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped></style>
