<script setup lang="ts">
import type { StatItem } from '@/types/site'

defineProps<{
  stats: StatItem[]
}>()
</script>

<template>
  <section class="mx-auto mt-5 grid max-w-[1840px] overflow-hidden rounded-[32px] border border-white/80 bg-[#f6f7f4] shadow-[0_24px_90px_rgba(0,0,0,0.12)] md:grid-cols-3" aria-label="School highlights">
    <div
      v-for="stat in stats"
      :key="stat.label"
      class="border-b border-ink/10 px-[clamp(28px,4vw,62px)] py-10 md:border-b-0 md:border-r last:md:border-r-0"
    >
      <strong class="block text-[clamp(2.2rem,4vw,3.9rem)] font-black leading-none text-ink">{{ stat.value }}</strong>
      <span class="mt-2 block font-extrabold text-muted">{{ stat.label }}</span>
    </div>
  </section>
</template>
