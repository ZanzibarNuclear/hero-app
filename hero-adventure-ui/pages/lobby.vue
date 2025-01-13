<template>
  <div class="">
    <h2>Lobby</h2>
    <div class="flex flex-row gap-x-10">
      <div class="space-y-6 font-body">
        <div>You have found the ultimate experience for learning about the wonders of nuclear energy. Each minute you
          spend here will make you smarter, more aware of reality, filled with encouragement. Welcome.</div>
        <div>You are in the lobby. If you ever get lost or are not sure what to do next, return here to see your
          options.</div>
      </div>
      <div>
        <NuxtImg src="/images/blue-reactor.jpg" width="800" />
      </div>
    </div>
    <h3>Things to Try</h3>
    <ul>
      <li>
        <NuxtLink to="https://flux.worldofnuclear.com">Flux</NuxtLink> - a social experience within WoN
      </li>
      <li>
        <NuxtLink to="https://blog.worldofnuclear.com">News and Perspective</NuxtLink> - information and ideas related
        to nuclear energy
      </li>
    </ul>
    <h3>Under Construction</h3>
    <div>We are remodeling, leveling up our style. You can see our latest attempt to beautify the World of Nuclear.
    </div>

    <ul>
      <li>
        <NuxtLink :to="{ name: 'style-test-fonts' }">Font styles</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="{ name: 'style-test-forms' }">Form styles</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="{ name: 'style-test-nav' }">Navigation menu styles</NuxtLink>
      </li>
    </ul>
  </div>

</template>

<script setup lang="ts">
</script>
<style scoped>
a {
  @apply text-heroic-navy hover:text-heroic-cherenkov;
}
</style>