<script setup lang="ts">
import RevealOnScroll from '@/components/motion/RevealOnScroll.vue'
import type { SiteCopy } from '@/types/site'

defineProps<{
  content: SiteCopy['social']
}>()
</script>

<template>
  <section class="mx-auto mt-5 grid max-w-[1840px] items-center gap-10 rounded-[32px] border border-white/80 bg-surface px-[clamp(28px,4vw,62px)] py-[clamp(64px,8vw,110px)] lg:grid-cols-[minmax(0,0.9fr)_minmax(280px,0.7fr)]">
    <RevealOnScroll>
      <p class="mb-5 w-fit rotate-[-2deg] rounded-lg bg-secondary px-4 py-2 text-sm font-black text-white">{{ content.eyebrow }}</p>
      <h2 class="mb-0 max-w-[760px] text-[clamp(2.2rem,4.8vw,4.4rem)] font-black leading-[0.98] tracking-tight">{{ content.title }}</h2>
      <p class="mt-7 max-w-[660px] text-lg leading-relaxed text-muted">{{ content.text }}</p>
    </RevealOnScroll>
    <RevealOnScroll :delay="140" class="rounded-[28px] border border-text-main/10 bg-panel p-8">
      <span class="mb-10 block text-6xl leading-none text-secondary">“</span>
      <blockquote class="m-0 text-[clamp(1.5rem,3vw,2.45rem)] font-black leading-tight">
        {{ content.testimonial }}
      </blockquote>
    </RevealOnScroll>
  </section>
</template>
