<template>
  <div class="grid grid-cols-1 w-full">
    <DarkToggle />

    <UDivider class="my-8" label="Nuxt UI elements" />
    <ExampleForm />

    <UDivider class="my-8 font-body-serif" label="Plain form elements" />
    <form class="w-full bg-nuclear-100 p-6 rounded-lg shadow-md font-body-serif">
      <!-- Form Container -->

      <!-- Input Field -->
      <div class="mb-4">
        <label for="textInput" class="block text-sm font-medium text-gray-700 mb-1">Handle</label>
        <div class="text-xs text-nuclear-800">How would you like to be remembered?</div>
        <input id="textInput" type="text" placeholder="Choose a handle, an alias"
          class="w-full px-2 my-1 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nuclear-500" />
        <div class="pl-2 text-xs text-gray-500">This is a little hint to help you enter something sensible.</div>
      </div>

      <!-- Dropdown Select -->
      <div class="mb-4">
        <label for="dropdown" class="block text-sm font-medium text-gray-700 mb-1">Select Option</label>
        <select id="dropdown"
          class="w-full px-2 my-1 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">-choose-</option>
          <option value="">Option 1</option>
          <option value="">Option 2</option>
          <option value="">Option 3</option>
        </select>
      </div>

      <!-- Row of Buttons -->
      <div class="flex justify-between h-10 mt-8">
        <button type="button" class="px-4 bg-nuclear-700 text-white rounded-md hover:bg-nuclear-500 focus:outline-none">
          Button 1
        </button>
        <button type="button" class="px-4 bg-green-700 text-white rounded-md hover:bg-green-500 focus:outline-none">
          Button 2
        </button>
        <button type="button"
          class="px-4 bg-red-700 text-white rounded-3xl hover:bg-red-500 focus:outline-dashed focus:outline-gray-600">
          Button 3
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})

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
    required: "after:content-['*'] after:ms-0.5 after:text-orange-500 dark:after:text-orange-400"
  },
  size: {
    '2xs': 'text-xs',
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-sm',
    lg: 'text-sm',
    xl: 'text-base'
  },
  container: 'mt-1 relative',
  description: 'text-xs text-nuclear-800 dark:text-nuclear-400',
  hint: 'text-xs text-gray-500 dark:text-gray-400',
  help: 'mt-2 pl-2 text-xs text-gray-500 dark:text-gray-400',
  error: 'text-xs mt-2 text-orange-500 dark:text-orange-400',
  default: {
    size: 'sm'
  }
}
const buttonStyle = {
  rounded: 'rounded-full'
}

</script>

<style lang="scss" scoped></style>
