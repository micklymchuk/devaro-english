<script setup lang="ts">
withDefaults(
  defineProps<{
    as?: 'article' | 'div'
    padded?: boolean
    overflowHidden?: boolean
  }>(),
  {
    as: 'article',
    padded: true,
    overflowHidden: false,
  },
)
</script>

<template>
  <component
    :is="as"
    :class="[
      'rounded-[24px] border border-ink/8 bg-white shadow-[0_18px_55px_rgba(33,48,45,0.08)]',
      padded && 'p-6',
      overflowHidden && 'overflow-hidden p-0',
    ]"
  >
    <slot />
  </component>
</template>
