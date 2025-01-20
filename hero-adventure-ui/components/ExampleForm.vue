<template>
  <div
    class="w-full bg-nuclear-50 dark:bg-nuclear-950 dark:text-heroic-lightgray p-6 rounded-lg shadow-cherenkov font-body-serif"
  >
    <UForm :state="state" :schema="schema" :validate="validate" class="space-y-6">
      <UFormGroup
        name="handleWanted"
        :ui="formGroupStyle"
        label="Handle"
        required
        help="You have to follow the rules."
        description="This will be your unique identifier."
        hint="Be creative"
      >
        <UInput
          v-model="state.handleWanted"
          placeholder="handle"
          icon="i-heroicons-identification"
        />
      </UFormGroup>
      <UFormGroup
        name="styleOfPlay"
        :ui="formGroupStyle"
        label="Style of game play"
        help="You have to follow the rules."
        description="This will be your unique identifier."
        hint="Up to you"
      >
        <USelect
          v-model="state.styleOfPlay"
          :options="fakeOptions"
          placeholder="pick a style"
          icon="i-heroicons-cursor-arrow-ripple"
        />
      </UFormGroup>
      <UCheckbox
        v-model="state.agreeToTerms"
        name="notifications"
        label="I agree to the terms of use"
      />
      <div class="flex flex-wrap gap-2 justify-between h-12">
        <UButton
          label="Change it"
          :ui="buttonStyle"
          icon="i-heroicons-pencil-square"
          class="bg-nuclear-700 dark:bg-nuclear-400 text-white hover:bg-nuclear-500 dark:hover:bg-nuclear-300"
        />
        <UButton
          label="Watch it"
          :ui="buttonStyle"
          icon="i-heroicons-eye"
          class="bg-green-600 dark:bg-green-400 text-white hover:bg-green-500 dark:hover:bg-green-300"
        />
        <UButton
          label="Load it"
          :ui="buttonStyle"
          icon="i-heroicons-eye"
          class="bg-green-600 dark:bg-green-400 text-white hover:bg-green-500 dark:hover:bg-green-300"
          :loading="isLoading"
          @click="toggleLoading"
        />
        <UButton
          label="Remove it"
          :ui="buttonStyle"
          icon="i-heroicons-trash"
          class="bg-orange-600 dark:bg-orange-400 text-white hover:bg-orange-500 dark:hover:bg-orange-300"
        />
      </div>
    </UForm>
  </div>
</template>

<script lang="ts" setup>
import { boolean, object, string, type InferType } from 'yup'
import type { FormSubmitEvent, FormError } from '#ui/types'

const schema = object({
  handleWanted: string()
    .min(3, 'Must be at least 3 characters')
    .max(30, 'No more than 30 characters, please')
    .required('Required'),
  styleOfPlay: string(),
  agreeToTerms: boolean().required(),
})

type Schema = InferType<typeof schema>

const state = reactive({
  handleWanted: undefined,
  styleOfPlay: undefined,
  agreeToTerms: false,
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (state.handleWanted == 'Blargypants') {
    errors.push({ path: 'handleWanted', message: 'Sorry, that name is unavailable. Try again.' })
  }
  return errors
}

async function onSubmit(event: FormSubmitEvent<Schema>) {
  console.log(event.data)
}

const handleWanted = ref('Blargypants')
const isTaken = computed(() => {
  return handleWanted.value == 'Blargypants'
})
const fakeOptions = ['easy', 'challenging', 'make me sweat']
const isLoading = ref(false)
const toggleLoading = () => {
  isLoading.value = !isLoading.value
}

const formGroupStyle = {
  wrapper: '',
  inner: '',
  label: {
    wrapper: 'flex content-center items-center justify-between',
    base: 'block font-medium text-gray-700 dark:text-gray-200 my-1',
    required: "after:content-['*'] after:ms-0.5",
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
  error: 'text-xs mt-2',
  default: {
    size: 'sm',
  },
}
const buttonStyle = {
  rounded: 'rounded-full',
}
</script>

<style></style>
