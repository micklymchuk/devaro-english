<script setup lang="ts">
import InteractivePaint from '@/components/ui/InteractivePaint.vue'

withDefaults(
  defineProps<{
    href?: string
    type?: 'button' | 'submit' | 'reset'
    variant?: 'primary' | 'secondary'
  }>(),
  {
    type: 'button',
    variant: 'primary',
  },
)

const baseClass =
  'printed-shadow inline-flex min-h-13 items-center justify-center border-2 px-6 text-sm font-black transition duration-150 active:shadow-none'

const variants = {
  primary: 'focus-on-color border-primary bg-primary text-white',
  secondary: 'border-text-main bg-panel text-primary',
}
</script>

<template>
  <InteractivePaint :as="href ? 'a' : 'button'" :href="href" :type="type" :tone="variant" :class="[baseClass, variants[variant]]">
    <slot />
  </InteractivePaint>
</template>
