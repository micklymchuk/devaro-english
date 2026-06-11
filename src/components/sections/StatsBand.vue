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
    class="relative mx-auto mt-5 grid max-w-[1840px] bg-primary text-white md:grid-cols-3"
    aria-label="School highlights"
  >
    <template #default="{ isInView }">
      <div class="torn-paper-top pointer-events-none absolute inset-x-0 -top-7 h-8 bg-primary" aria-hidden="true"></div>
      <div
        v-for="(stat, index) in stats"
        :key="stat.label"
        class="border-b border-white/25 px-[clamp(24px,4vw,62px)] py-7 transition duration-500 ease-out sm:py-10 md:border-b-0 md:border-r last:md:border-r-0"
        :style="{ transitionDelay: `${index * 100}ms` }"
      >
        <strong class="block text-[clamp(1.9rem,10vw,3rem)] font-black leading-none text-white sm:text-[clamp(2.2rem,4vw,3.9rem)]">
          <CountUpNumber :value="stat.value" :active="isInView" />
        </strong>
        <span class="mt-2 block font-extrabold text-white/80">{{ stat.label }}</span>
      </div>
    </template>
  </RevealOnScroll>
</template>
