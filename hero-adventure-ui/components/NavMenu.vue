<template>
  <!-- Horizontal Navbar -->
  <nav class="flex justify-between items-center px-6 py-3 bg-heroic-raisin text-heroic-lightgray">
    <div class="flex space-x-6">
      <MenuItem v-for="item in menuItems" :key="item.label" :icon="item.icon" :label="item.label"
        :options="item.options" />
    </div>
  </nav>
</template>

<script>
import MenuItem from './MenuItem.vue';

export default {
  components: { MenuItem },
  data() {
    return {
      menuItems: [
        { label: 'Home', icon: 'pi pi-home', options: [], route: '/' },
        {
          label: 'Products',
          icon: 'pi pi-box',
          options: [
            { label: 'Product 1', route: '/product1' },
            { label: 'Product 2', route: '/product2' },
          ],
        },
        {
          label: 'About',
          icon: 'pi pi-info-circle',
          options: [],
          route: '/about',
        },
      ],
    };
  },
};
</script>
