<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  compact?: boolean
  align?: 'split' | 'stack'
}>()
</script>

<template>
  <div
    :class="[
      'mb-7 grid gap-4 sm:mb-9 sm:gap-6 lg:mb-11 lg:gap-8',
      align === 'stack' ? 'max-w-[860px]' : 'lg:grid-cols-[0.52fr_1.48fr]',
      compact ? 'items-start' : 'items-end',
    ]"
  >
    <p class="collage-badge mb-0 rotate-[-2deg] self-start">{{ eyebrow }}</p>
    <h2 class="collage-heading mb-0 max-w-[980px] text-balance">{{ title }}</h2>
  </div>
</template>
