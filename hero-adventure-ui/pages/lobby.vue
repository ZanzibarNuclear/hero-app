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
    <h3>Members Only</h3>
    <div>Everything you see here is available at no cost to you. However, some of the activities require membership.
    </div>
    <div>You can join using your account with a well-known service, or by generating a magic link.</div>
    <div class="space-x-4">
      <UButton label="Google" />
      <UButton label="X (Twitter)" />
      <UButton label="Instagram" />
      <UButton label="TikTok" />
      <UButton label="Discord" />
      <UButton label="Magic Link" />
    </div>
    <h3>Donations</h3>
    <div>You might like this experience so much that you want to contribute to keep it running and improving. We
      appreciate all of the support we can get. Please consider sharing some love.</div>
    <h3>Terms of Use</h3>
    <div>
      When you join the World of Nuclear, we ask that you agree to follow the rules.</div>
    <div>You can read our full terms of use [here]. In short,</div>
    <ul>
      <li>Be a good citizen. Play nice with others. Vigorous debate about ideas is okay. Direct attacks on others is not
        acceptable.</li>
      <li>Watch your language. If you really want to curse and cuss, try to find milder alternatives, dang nabbit.</li>
      <li>Content that violates these rules may be hidden or removed by World of Nuclear moderators.</li>
      <li>Work with us to resolve issues.</li>
      <li>Keep your expectations in check. We make no guarantees about the suitability for the World of Nuclear to your
        particular situation or requirements.</li>
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