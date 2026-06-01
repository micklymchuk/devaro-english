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
    <p class="collage-badge mb-0 rotate-[-2deg]">{{ eyebrow }}</p>
    <h2 class="collage-heading mb-0 max-w-[980px]">{{ title }}</h2>
  </div>
</template>
