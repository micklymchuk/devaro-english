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
      'rounded-[24px] border border-text-main/8 bg-panel',
      padded && 'p-6',
      overflowHidden && 'overflow-hidden p-0',
    ]"
  >
    <slot />
  </component>
</template>
