<template>
  <div class="">
    <div>
      <NuxtPicture @click="advanceSlide()" :src="onDisplay" placeholder="/images/blue-reactor.jpg" />
    </div>
    <div class="text-right mt-2">
      <UButton variant="ghost" alt="Go to next" :to="{ name: 'lobby' }">
        <UIcon name="i-ph-door-duotone" />
        <UIcon name="i-ph-arrow-right" />
      </UButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'entrance'
})
useSeoMeta({
  title: 'Flux Gallery - World of Nuclear',
  ogTitle: 'Flux Gallery - World of Nuclear',
  description: 'Imagine the beauty of nuclear flux powering the universe',
  ogDescription: 'Imagine the beauty of nuclear flux powering the universe',
  ogImage: 'https://worldofnuclear/images/blue-reactor.jpg'
})
const artwork = [
  'flux-hex-sphere.webp',
  'flux-radar.webp',
  'flux-blossom.webp',
  'flux-ocean.webp',
  'flux-under-water.webp',
  'flux-galaxy.webp',
]
const showing = ref(0)
const onDisplay = computed(() => {
  return '/images/art/' + artwork[showing.value]
})

const advanceSlide = () => {
  showing.value = (showing.value + 1) % artwork.length
}

</script>

<style></style>