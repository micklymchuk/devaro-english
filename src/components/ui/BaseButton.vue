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
  'inline-flex min-h-13 items-center justify-center rounded-xl border px-6 text-sm font-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight'

const variants = {
  primary: 'border-primary bg-primary text-white',
  secondary: 'border-text-main/10 bg-panel text-text-main hover:border-primary/30',
}
</script>

<template>
  <InteractivePaint :as="href ? 'a' : 'button'" :href="href" :type="type" :tone="variant" :class="[baseClass, variants[variant]]">
    <slot />
  </InteractivePaint>
</template>
