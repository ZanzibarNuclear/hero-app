<template>
  <UCard class="shadow-cherenkov bg-nuclear-50">
    <div class="space-x-2 space-y-4 text-center">
      <UButton
        icon="i-ph-google-logo-duotone"
        size="lg"
        variant="outline"
        label="Google"
        class="hover:bg-nuclear-100"
        @click="signIn('google')"
      />
      <UButton
        icon="i-ph-x-logo-duotone"
        size="lg"
        variant="outline"
        label="X / Twitter"
        class="hover:bg-nuclear-100"
        @click="signIn('twitter')"
      />
      <UButton
        icon="i-ph-discord-logo-duotone"
        size="lg"
        variant="outline"
        label="Discord"
        class="hover:bg-nuclear-100"
        @click="signIn('github')"
      />
      <UButton
        icon="i-ph-apple-logo-duotone"
        size="lg"
        variant="outline"
        label="Apple"
        class="hover:bg-nuclear-100"
        @click="signIn('github')"
      />
      <UButton
        icon="i-ph-instagram-logo-duotone"
        size="lg"
        variant="outline"
        label="Instagram"
        class="hover:bg-nuclear-100"
        @click="signIn('github')"
      />
      <UButton
        icon="i-ph-linkedin-logo-duotone"
        size="lg"
        variant="outline"
        label="LinkedIn"
        class="hover:bg-nuclear-100"
        @click="signIn('github')"
      />
    </div>
    <template #footer>
      <div class="text-sm">
        You may be asked to authorize
        <span class="font-bold italic">Zanzibar's World of Nuclear Energy</span>. Say "yes" to join.
      </div>
    </template>
  </UCard>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const emit = defineEmits(['finish'])
// const supabase = useSupabaseClient()

async function signIn(provider: String) {
  // const { data, error } = await supabase.auth.signInWithOAuth({
  //   provider,
  //   options: {
  //     redirectTo: `${config.baseUrl}/auth/confirm`,
  //   },
  // })
  emit('finish')
}
</script>

<style lang="scss" scoped></style>
