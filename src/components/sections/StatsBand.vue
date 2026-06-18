<script setup lang="ts">
import CountUpNumber from '@/components/motion/CountUpNumber.vue'
import RevealOnScroll from '@/components/motion/RevealOnScroll.vue'
import type { StatItem } from '@/types/site'

defineProps<{
  stats: StatItem[]
}>()
</script>

<template>
  <RevealOnScroll
    as="section"
    class="relative mx-auto mt-5 max-w-[1840px] bg-primary text-white"
    aria-label="School highlights"
  >
    <template #default="{ isInView }">
      <div class="torn-paper-top pointer-events-none absolute inset-x-0 -top-7 h-8 bg-primary" aria-hidden="true"></div>
      <div class="site-container py-5 sm:py-6 lg:py-7">
        <div class="grid divide-y divide-white/20 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          <div
            v-for="(stat, index) in stats"
            :key="stat.label"
            class="flex min-h-[104px] flex-col justify-center px-5 py-4 transition duration-500 ease-out sm:px-6 lg:min-h-[124px] lg:px-8 lg:first:pl-0 lg:last:pr-0"
            :style="{ transitionDelay: `${index * 100}ms` }"
          >
            <strong class="secondary-font-family block text-[clamp(2.35rem,13vw,3.25rem)] font-bold leading-none text-white lg:text-[clamp(2.65rem,4vw,4.15rem)]">
              <CountUpNumber :value="stat.value" :active="isInView" />
            </strong>
            <span class="mt-3 block max-w-[15rem] text-base font-extrabold leading-snug text-white/85 md:text-lg">
              {{ stat.label }}
            </span>
          </div>
        </div>
      </div>
    </template>
  </RevealOnScroll>
</template>
