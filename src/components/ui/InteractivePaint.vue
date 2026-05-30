<script setup lang="ts">
import { computed } from 'vue'
import { Motion, useReducedMotion } from 'motion-v'

const props = withDefaults(
  defineProps<{
    as?: 'a' | 'button'
    href?: string
    type?: 'button' | 'submit' | 'reset'
    tone?: 'primary' | 'secondary'
  }>(),
  {
    as: 'button',
    type: 'button',
    tone: 'primary',
  },
)

const prefersReducedMotion = useReducedMotion()

const surfaceVariants = computed(() => ({
  idle: { scale: 1 },
  hover: prefersReducedMotion.value ? { scale: 1 } : { scale: 1.015 },
  press: prefersReducedMotion.value ? { scale: 1 } : { scale: 0.98 },
}))

const paintVariants = {
  idle: { x: '-125%', skewX: -16 },
  hover: {
    x: '-10%',
    skewX: -12,
    transition: { type: 'spring', stiffness: 190, damping: 22, mass: 0.7 },
  },
  press: {
    x: '-2%',
    skewX: -9,
    transition: { type: 'spring', stiffness: 360, damping: 24, mass: 0.62 },
  },
} as const

const paintClass = computed(() => (props.tone === 'primary' ? 'bg-primary-hover' : 'bg-primary/9'))
</script>

<template>
  <Motion
    :as="as"
    :href="as === 'a' ? href : undefined"
    :type="as === 'button' ? type : undefined"
    initial="idle"
    animate="idle"
    while-hover="hover"
    while-focus="hover"
    while-press="press"
    :variants="surfaceVariants"
    class="relative isolate overflow-hidden"
  >
    <Motion
      v-if="!prefersReducedMotion"
      as="span"
      aria-hidden="true"
      :variants="paintVariants"
      :class="['pointer-events-none absolute -inset-y-[70%] left-0 z-0 w-[145%]', paintClass]"
    />
    <span class="relative z-10 inline-flex items-center justify-center">
      <slot />
    </span>
  </Motion>
</template>
