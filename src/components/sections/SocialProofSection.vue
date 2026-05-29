<script setup lang="ts">
import type { SiteCopy } from '@/types/site'

defineProps<{
  content: SiteCopy['social']
}>()
</script>

<template>
  <section class="mx-auto mt-5 grid max-w-[1840px] items-center gap-10 rounded-[32px] border border-white/80 bg-[#f6f7f4] px-[clamp(28px,4vw,62px)] py-[clamp(64px,8vw,110px)] shadow-[0_24px_90px_rgba(0,0,0,0.12)] lg:grid-cols-[minmax(0,0.9fr)_minmax(280px,0.7fr)]">
    <div>
      <p class="mb-5 w-fit rotate-[-2deg] rounded-lg bg-[#e85385] px-4 py-2 text-sm font-black text-white">{{ content.eyebrow }}</p>
      <h2 class="mb-0 max-w-[760px] text-[clamp(2.2rem,4.8vw,4.4rem)] font-black leading-[0.98] tracking-tight">{{ content.title }}</h2>
      <p class="mt-7 max-w-[660px] text-lg leading-relaxed text-muted">{{ content.text }}</p>
    </div>
    <div class="rounded-[28px] border border-ink/10 bg-white p-8 shadow-[0_18px_55px_rgba(33,48,45,0.08)]">
      <span class="mb-10 block text-6xl leading-none text-[#e85385]">“</span>
      <blockquote class="m-0 text-[clamp(1.5rem,3vw,2.45rem)] font-black leading-tight">
        {{ content.testimonial }}
      </blockquote>
    </div>
  </section>
</template>
