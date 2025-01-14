<template>
  <div class="">
    <h2>Site Guide</h2>
    <div class="flex flex-row gap-x-10">
      <div class="space-y-6 font-body">
        <div>
          You have found the ultimate experience for learning about the wonders of nuclear energy.
          Each minute you spend here will make you smarter, more aware of reality, filled with
          encouragement. Welcome.
        </div>
        <div>
          <UIcon name="i-ph-star-duotone" class="star" /> The main
          event at World of Nuclear is
          our
          adventure game where you get to run a nuclear power plant. [Step in], and lose yourself
          while you uncover lost secrets. Advance by learning.
        </div>
        <div>
          <UIcon name="i-ph-star-duotone" class="text-uranium-orange dark:text-uranium-ore-bright" /> Try Flux, our area
          for social
          interaction.
          Post your thoughts, whether they are deep and well formed or just off the top of your
          head. Have fun reacting to others. See if you can get a chain reaction going.
        </div>
        <div>
          <UIcon name="i-ph-star-duotone" class="text-uranium-glow-dark dark:text-uranium-glow-bright" /> If you just
          came here to learn, check
          out
          the micro lessons. Each lesson explains a single concept and is short enough to get
          through in about 10 minutes. Gain credit with each lesson you complete, and unlock more
          advanced material.
        </div>
      </div>
      <div>
        <NuxtImg src="/images/blue-reactor.jpg" width="800" />
      </div>
    </div>
    <div class="mt-6 space-y-6">
      <h3>Social Networks</h3>
      <div>
        You can find us on other platforms. That's how we spread the word about the World of
        Nuclear. Follow us anywhere, and tell your friends.
      </div>
      <ul>
        <li>Zanzibar, Nuclear Hero (@ZanzibarNuclear) on X (Twitter)</li>
        <li>NuclearAlchemist (@WeAreZenZen) on X (Twitter)</li>
        <li>Zanzi's Nuclear Stack (on Substack)</li>
        <li>Observations and Opinions (on Substack)</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.star {
  @apply mr-2 text-uranium-ore-darker dark:text-uranium-ore-bright;
}
</style>
