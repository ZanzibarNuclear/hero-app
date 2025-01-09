<template>
  <div>
    <NuxtImg @click="advanceSlide()" :src="onDisplay" />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'entrance'
})
const artwork = [
  'flux-blossom.webp',
  'flux-hex-sphere.webp',
  'flux-radar.webp',
]
const showing = ref(0)
const onDisplay = computed(() => {
  return '/images/' + artwork[showing.value]
})

const advanceSlide = () => {
  const next = (showing.value + 1) % artwork.length
  console.log('clicked', next)
  showing.value = next
}

</script>

<style></style>