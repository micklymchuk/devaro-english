<script setup lang="ts">
import RevealOnScroll from '@/components/motion/RevealOnScroll.vue'
import type { SiteCopy } from '@/types/site'

defineProps<{
  content: SiteCopy['lessonFlow']
}>()
</script>

<template>
  <section class="mx-auto mt-5 grid max-w-[1840px] gap-12 rounded-[32px] border border-white/80 bg-surface px-[clamp(28px,4vw,62px)] py-[clamp(64px,8vw,110px)] lg:grid-cols-[0.9fr_1.1fr]">
    <div>
      <p class="mb-5 w-fit rotate-[-2deg] rounded-lg bg-secondary px-4 py-2 text-sm font-black text-white">{{ content.eyebrow }}</p>
      <h2 class="mb-0 max-w-[760px] text-[clamp(2.2rem,4.8vw,4.4rem)] font-black leading-[0.98] tracking-tight">{{ content.title }}</h2>
    </div>
    <ol class="grid gap-0 overflow-hidden rounded-[28px] border border-text-main/10 bg-panel p-0 [counter-reset:steps]">
      <RevealOnScroll
        v-for="step in content.steps"
        :key="step"
        as="li"
        class="grid min-h-20 grid-cols-[58px_1fr] items-center gap-4 border-b border-text-main/10 px-5 text-xl font-black last:border-b-0 before:grid before:size-11 before:place-items-center before:rounded-[16px] before:bg-primary before:text-sm before:text-white before:content-[counter(steps)] [counter-increment:steps]"
      >
        {{ step }}
      </RevealOnScroll>
    </ol>
  </section>
</template>
