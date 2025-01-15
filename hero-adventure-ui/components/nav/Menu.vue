<template>
  <!-- Horizontal Navbar -->
  <nav
    class="flex justify-between items-center px-6 py-3 bg-heroic-uranium dark:bg-heroic-graphite text-heroic-lightgray"
  >
    <div class="flex space-x-6">
      <NavMenuItem
        v-for="item in menuItems"
        :key="item.label"
        :icon="item.icon"
        :label="item.label"
        :route="item.route"
      />
    </div>
  </nav>
</template>

<script setup>
const menuItems = [
  {
    label: 'Lobby',
    icon: 'i-ph-building-office-duotone',
    route: '/lobby',
  },
  {
    label: 'Flux',
    icon: 'i-ph-lightning-duotone',
    route: 'https://flux.worldofnuclear.com',
  },
  {
    label: 'Essays',
    icon: 'i-ph-student-duotone',
    route: 'https://blog.worldofnuclear.com',
  },
  {
    label: 'Adventure',
    icon: 'i-ph-person-simple-hike-duotone',
    route: '/adventure',
  },
]
</script>
