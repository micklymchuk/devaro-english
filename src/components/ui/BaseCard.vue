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
      'paper-card',
      padded && 'p-5 sm:p-6',
      overflowHidden && 'overflow-hidden p-0',
    ]"
  >
    <slot />
  </component>
</template>
