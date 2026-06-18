<script setup lang="ts">
import RevealOnScroll from '@/components/motion/RevealOnScroll.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import type { SiteCopy } from '@/types/site'

defineProps<{
  content: SiteCopy['social']
}>()
</script>

<template>
  <section class="collage-section overflow-hidden">
    <div class="site-container grid items-start gap-7 sm:gap-10 lg:grid-cols-[minmax(0,0.76fr)_minmax(0,1.24fr)]">
      <RevealOnScroll>
        <p class="collage-badge mb-5 rotate-[-2deg]">{{ content.eyebrow }}</p>
        <h2 class="collage-heading mb-0 max-w-[760px] text-balance">{{ content.title }}</h2>
        <p class="mt-4 max-w-[660px] text-base leading-relaxed text-muted sm:mt-7 sm:text-lg">{{ content.text }}</p>
        <BaseButton :href="content.ctaHref" variant="secondary" class="mt-6">
          {{ content.ctaLabel }}
        </BaseButton>
      </RevealOnScroll>

      <div class="grid gap-4 md:grid-cols-3 lg:gap-5">
        <RevealOnScroll
          v-for="(item, index) in content.items"
          :key="item.title"
          :delay="index * 100"
          class="paper-card grid min-h-[190px] gap-4 p-5 sm:p-6"
        >
          <span class="block h-1 w-12 bg-highlight" aria-hidden="true"></span>
          <h3 class="text-[20px] font-black leading-tight text-text-main">{{ item.title }}</h3>
          <p class="m-0 text-[15px] leading-relaxed text-muted">{{ item.text }}</p>
        </RevealOnScroll>
      </div>
    </div>
  </section>
</template>
