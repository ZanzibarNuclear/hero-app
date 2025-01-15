<template>
  <div class="bg-nuclear-50 dark:bg-heroic-raisin dark:text-heroic-lightgray rounded-lg">
    <UForm :state="state" :schema="schema" @submit="onSubmit">
      <div class="space-y-6">
        <UFormGroup
          name="email"
          :ui="formGroupStyle"
          label="Email address"
          required
          help="Check your spelling before you send."
          description="We will send a link to this address."
        >
          <UInput v-model="state.email" placeholder="handle" icon="i-ph-envelope" />
        </UFormGroup>
        <UButton
          type="submit"
          label="Send Magic Link"
          :ui="buttonStyle"
          icon="i-ph-arrow-circle-right-duotone"
          class="bg-nuclear-700 dark:bg-nuclear-400 text-white hover:bg-nuclear-500 dark:hover:bg-nuclear-300"
        />
      </div>
    </UForm>
  </div>
</template>

<script lang="ts" setup>
import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'

const schema = object({
  email: string().email().required('Required'),
})
type Schema = InferType<typeof schema>

const state = reactive({
  email: undefined,
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  console.log(event.data)
  console.log('You say your email address is ' + event.data.email + '. We shall see...')
}

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

<style></style>
