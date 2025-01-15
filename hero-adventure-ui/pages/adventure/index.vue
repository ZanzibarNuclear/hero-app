<template>
  <div class="grid justify-end">
    <UButton
      :to="{ name: 'lobby' }"
      icon="i-ph-building-office-duotone"
      variant="ghost"
      label="Return to lobby"
    />
  </div>
  <h1>Forgotten</h1>
  <div class="prose">
    <div>
      The obscure mountain trail you started down hours ago has brought you to an ivy-covered
      chain-link fence. Upon closer inspection, you see a small opening. Your curiosity kicks in,
      and you find yourself on the other side.
    </div>
    <div>
      As you continue down the path, the ground rises and then falls. Between the trees, a structure
      gradually reveals itself.
    </div>
    <div>
      The building is industrial, and yet, it assimilates into its natural surroundings. A driveway
      leaves the building to the right. Beyond the building, a river flows with a bit of a current,
      due to the slope of the land. The path you are on leads to the door in what you might call the
      back side of the building.
    </div>
    <div>You approach the door and notice that it is closed with a rusty padlock.</div>
    <div>What do you want to do?</div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'plain',
})
</script>

<style scoped>
.prose {
  @apply space-y-6 text-heroic-lightgray;
}
</style>
