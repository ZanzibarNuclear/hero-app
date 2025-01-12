<template>
  <div class="">
    <div>
      <NuxtPicture @click="advanceSlide()" :src="onDisplay" placeholder="/images/blue-reactor.jpg" fit="inside" />
    </div>
    <div class="text-right mt-2">
      <UButton variant="ghost" alt="Go to next" :to="{ name: 'style-test-fonts' }">
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
const artwork = [
  'flux-hex-sphere.webp',
  'ocean-flux.webp',
  'flux-radar.webp',
  'flux-blossom.webp',
  'flux-galaxy.webp',
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