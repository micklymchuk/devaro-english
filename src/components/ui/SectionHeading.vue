<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  compact?: boolean
}>()
</script>

<template>
  <div
    :class="[
      'mb-11 grid gap-8 lg:grid-cols-[0.62fr_1.38fr]',
      compact ? 'items-start' : 'items-end',
    ]"
  >
    <p class="mb-0 w-fit rotate-[-2deg] rounded-lg bg-[#e85385] px-4 py-2 text-sm font-black text-white shadow-[0_12px_28px_rgba(232,83,133,0.2)]">{{ eyebrow }}</p>
    <h2 class="mb-0 max-w-[980px] text-[clamp(2.2rem,4.8vw,4.4rem)] font-black leading-[0.98] tracking-tight">{{ title }}</h2>
  </div>
</template>
