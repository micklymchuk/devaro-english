<script setup lang="ts">
import type { Component } from 'vue'
import { Compass, GraduationCap, MessageText } from '@iconoir/vue'
import CountUpNumber from '@/components/motion/CountUpNumber.vue'
import RevealOnScroll from '@/components/motion/RevealOnScroll.vue'
import type { StatItem } from '@/types/site'

defineProps<{
  stats: StatItem[]
}>()

const statIcons: Component[] = [GraduationCap, MessageText, Compass]

const statIcon = (index: number) => statIcons[index] ?? GraduationCap
</script>

<template>
  <RevealOnScroll
    as="section"
    class="relative mx-auto mt-5 max-w-[1840px] bg-[#123b31] text-white"
    aria-label="School highlights"
  >
    <template #default="{ isInView }">
      <div class="torn-paper-top pointer-events-none absolute inset-x-0 -top-7 h-8 bg-[#123b31]" aria-hidden="true"></div>
      <div class="site-container py-6 sm:py-7 lg:py-8">
        <div class="grid gap-0 divide-y divide-white/20 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          <div
            v-for="(stat, index) in stats"
            :key="stat.label"
            class="grid min-h-[104px] grid-cols-[44px_1fr] items-center gap-4 px-2 py-5 transition duration-500 ease-out sm:grid-cols-[52px_1fr] sm:px-6 md:px-7 lg:min-h-[124px] lg:px-9 lg:first:pl-0 lg:last:pr-0"
            :style="{ transitionDelay: `${index * 100}ms` }"
          >
            <component :is="statIcon(index)" :width="36" :height="36" stroke-width="1.9" class="text-highlight sm:size-11" aria-hidden="true" />
            <div>
              <strong class="block text-[40px] font-black leading-none text-white sm:text-[48px] lg:text-[48px] xl:text-[58px]">
                <CountUpNumber :value="stat.value" :active="isInView" />
              </strong>
              <span class="mt-2 block max-w-[15rem] text-sm font-extrabold leading-snug text-white/82 sm:text-base">
                {{ stat.label }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </template>
  </RevealOnScroll>
</template>
