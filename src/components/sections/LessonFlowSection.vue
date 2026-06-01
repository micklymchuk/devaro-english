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
        class="grid min-h-20 grid-cols-[58px_1fr] items-center gap-4 border-b border-text-main/10 px-5 text-xl font-black last:border-b-0 before:grid before:size-11 before:place-items-center before:bg-primary before:text-sm before:text-white before:content-[counter(steps)] [counter-increment:steps]"
      >
        {{ step }}
      </RevealOnScroll>
    </ol>
  </section>
</template>
