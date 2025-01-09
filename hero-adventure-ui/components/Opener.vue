<template>
  <div>
    <NuxtLink to="nu-art">
      <UCard :ui="cardStyle">
        <h1 class="dark:text-white font-semibold sm:text-5xl text-4xl text-heroic-cherenkov text-center">Blue is the
          new green.</h1>
      </UCard>
    </NuxtLink>

  </div>
</template>

<script setup lang="ts">
const cardStyle = {
  background: 'bg-heroic-raisin'
}
</script>

<style scoped></style>