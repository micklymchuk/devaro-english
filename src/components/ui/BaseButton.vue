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
  'printed-shadow inline-flex min-h-[54px] items-center justify-center border-2 px-5 text-center text-sm font-black leading-tight transition duration-150 active:translate-x-1 active:translate-y-1 active:shadow-none sm:min-h-[58px] sm:px-6'

const variants = {
  primary: 'focus-on-color border-primary bg-primary text-white',
  secondary: 'border-text-main bg-panel text-primary hover:text-primary-hover',
}
</script>

<template>
  <InteractivePaint :as="href ? 'a' : 'button'" :href="href" :type="type" :tone="variant" :class="[baseClass, variants[variant]]">
    <slot />
  </InteractivePaint>
</template>
