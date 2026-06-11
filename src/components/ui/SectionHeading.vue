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
      'mb-7 grid gap-4 sm:mb-9 sm:gap-6 lg:mb-11 lg:grid-cols-[0.62fr_1.38fr] lg:gap-8',
      compact ? 'items-start' : 'items-end',
    ]"
  >
    <p class="collage-badge mb-0 rotate-[-2deg]">{{ eyebrow }}</p>
    <h2 class="collage-heading mb-0 max-w-[980px]">{{ title }}</h2>
  </div>
</template>
