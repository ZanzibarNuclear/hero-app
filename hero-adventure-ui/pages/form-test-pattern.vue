<template>
  <UDivider class="my-8 font-body-serif" label="Plain form elements" />
  <form class="w-full bg-nuclear-100 p-6 rounded-lg shadow-md font-body-serif">
    <!-- Form Container -->

    <!-- Input Field -->
    <div class="mb-4">
      <label for="textInput" class="block text-sm font-medium text-gray-700 mb-1">Text Input</label>
      <div class="w-full text-xs text-nuclear-800">How would you like to be remembered?</div>
      <input id="textInput" type="text" placeholder="Enter text"
        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nuclear-500" />
      <div class="w-full pl-2 text-xs text-gray-500">This is a little hint to help you enter something sensible.</div>
    </div>

    <!-- Dropdown Select -->
    <div class="mb-4">
      <label for="dropdown" class="block text-sm font-medium text-gray-700 mb-1">Select Option</label>
      <select id="dropdown"
        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="">Option 1</option>
        <option value="">Option 2</option>
        <option value="">Option 3</option>
      </select>
    </div>

    <!-- Row of Buttons -->
    <div class="flex justify-between">
      <button type="button"
        class="px-4 py-2 bg-nuclear-700 text-white rounded-md hover:bg-nuclear-500 focus:outline-none">
        Button 1
      </button>
      <button type="button" class="px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-500 focus:outline-none">
        Button 2
      </button>
      <button type="button" class="px-4 py-2 bg-red-700 text-white rounded-md hover:bg-red-500 focus:outline-none">
        Button 3
      </button>
    </div>
  </form>
  <UDivider class="my-8" label="Nuxt UI elements" />
  <UForm class="font-body-serif">
    <div class="space-y-6">
      <UFormGroup :ui="formGroupStyle" label="Handle" required help="You have to follow the rules."
        description="This will be your unique identifier." hint="Be creative" error="Sorry, that is taken.">
        <UInput placeholder="handle" icon="i-heroicons-identification" v-model="handleWanted" />
      </UFormGroup>
      <UFormGroup :ui="formGroupStyle" label="Style of game play" help="You have to follow the rules."
        description="This will be your unique identifier." hint="Up to you">
        <USelect :options="fakeOptions" placeholder="pick a style" icon="i-heroicons-cursor-arrow-ripple" />
      </UFormGroup>
    </div>
  </UForm>

</template>

<script setup>
definePageMeta({
  layout: 'plain'
})

const handleWanted = ref('Blargypants')
const isTaken = computed(() => {
  return handleWanted.value == 'Blargypants'
})

const fakeOptions = ['easy', 'challenging', 'make me sweat']
const formGroupStyle = {
  wrapper: '',
  inner: '',
  label: {
    wrapper: 'flex content-center items-center justify-between',
    base: 'block font-medium text-gray-700 dark:text-gray-200 my-1',
    required: "after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400"
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
  error: 'text-xs mt-2 text-red-500 dark:text-red-400',
  default: {
    size: 'sm'
  }
}
</script>

<style lang="scss" scoped></style>
