<template>
  <!-- Horizontal Navbar -->
  <nav
    class="flex justify-between items-center px-6 py-3 bg-heroic-lightgray dark:bg-heroic-raisin text-heroic-lightgray">
    <div class="flex space-x-6">
      <NavMenuItem v-for="item in menuItems" :key="item.label" :icon="item.icon" :label="item.label"
        :route="item.route" />
    </div>
  </nav>
</template>

<script setup>
const menuItems = [
  {
    label: 'Lobby',
    icon: 'i-ph-building-office',
    route: '/lobby',
  },
  {
    label: 'Flux',
    icon: 'i-ph-lightning',
    route: 'https://flux.worldofnuclear.com',
  },
  {
    label: 'Essays',
    icon: 'i-ph-student',
    route: 'https://blog.worldofnuclear.com',
  },
  {
    label: 'Adventure',
    icon: 'i-ph-hiking',
    route: '/guide',
  },
]
</script>
