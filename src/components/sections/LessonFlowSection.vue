<script setup lang="ts">
import RevealOnScroll from '@/components/motion/RevealOnScroll.vue'
import type { SiteCopy } from '@/types/site'

defineProps<{
  content: SiteCopy['lessonFlow']
}>()
</script>

<template>
  <section class="collage-section grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
    <div>
      <p class="collage-badge mb-5 rotate-[-2deg]">{{ content.eyebrow }}</p>
      <h2 class="collage-heading mb-0 max-w-[760px]">{{ content.title }}</h2>
    </div>
    <ol class="paper-card grid gap-0 overflow-hidden p-0 [counter-reset:steps]">
      <RevealOnScroll
        v-for="step in content.steps"
        :key="step"
        as="li"
        class="grid min-h-16 grid-cols-[42px_1fr] items-center gap-4 border-b border-text-main/10 px-4 py-4 text-[clamp(1.15rem,2.2vw,1.65rem)] font-black leading-tight last:border-b-0 sm:grid-cols-[48px_1fr] sm:gap-5 sm:px-5 sm:py-5 before:grid before:size-10 before:place-items-center before:bg-primary before:text-sm before:text-white before:content-[counter(steps)] sm:before:size-11 [counter-increment:steps]"
      >
        {{ step }}
      </RevealOnScroll>
    </ol>
  </section>
</template>
