<script setup lang="ts">
import RevealOnScroll from '@/components/motion/RevealOnScroll.vue'
import type { SiteCopy } from '@/types/site'

defineProps<{
  content: SiteCopy['social']
}>()
</script>

<template>
  <section class="collage-section grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(280px,0.7fr)]">
    <RevealOnScroll>
      <p class="collage-badge mb-5 rotate-[-2deg]">{{ content.eyebrow }}</p>
      <h2 class="collage-heading mb-0 max-w-[760px]">{{ content.title }}</h2>
      <p class="mt-7 max-w-[660px] text-lg leading-relaxed text-muted">{{ content.text }}</p>
    </RevealOnScroll>
    <RevealOnScroll :delay="140" class="paper-card p-8">
      <span class="mb-10 block text-6xl leading-none text-secondary">“</span>
      <blockquote class="m-0 text-[clamp(1.5rem,3vw,2.45rem)] font-black leading-tight">
        {{ content.testimonial }}
      </blockquote>
    </RevealOnScroll>
  </section>
</template>
