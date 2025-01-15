<template>
  <div class="grid grid-cols-1 w-full">
    <UDivider class="my-8" label="Nuxt UI elements" />
    <ExampleForm />
  </div>
</template>

<script setup>
// definePageMeta({
//   layout: 'default'
// })

const handleWanted = ref('Blargypants')
const isTaken = computed(() => {
  return handleWanted.value == 'Blargypants'
})
const isLoading = ref(false)
const toggleLoading = () => {
  isLoading.value = !isLoading.value
}

const fakeOptions = ['easy', 'challenging', 'make me sweat']
const formGroupStyle = {
  wrapper: '',
  inner: '',
  label: {
    wrapper: 'flex content-center items-center justify-between',
    base: 'block font-medium text-gray-700 dark:text-gray-200 my-1',
    required: "after:content-['*'] after:ms-0.5 after:text-orange-500 dark:after:text-orange-400",
  },
  size: {
    '2xs': 'text-xs',
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-sm',
    lg: 'text-sm',
    xl: 'text-base',
  },
  container: 'mt-1 relative',
  description: 'text-xs text-nuclear-800 dark:text-nuclear-400',
  hint: 'text-xs text-gray-500 dark:text-gray-400',
  help: 'mt-2 pl-2 text-xs text-gray-500 dark:text-gray-400',
  error: 'text-xs mt-2 text-orange-500 dark:text-orange-400',
  default: {
    size: 'sm',
  },
}
const buttonStyle = {
  rounded: 'rounded-full',
}
</script>

<style lang="scss" scoped></style>
