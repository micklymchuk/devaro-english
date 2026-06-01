<script setup lang="ts">
import { computed, type Component } from 'vue'
import { Motion, useReducedMotion } from 'motion-v'

const props = withDefaults(
  defineProps<{
    icon: Component
    top: string
    left?: string
    right?: string
    size?: number
    depth?: number
    scrollDepth?: number
    rotate?: number
    color?: 'primary' | 'secondary' | 'highlight'
    hideOnMobile?: boolean
    pointerX: number
    pointerY: number
    scrollProgress: number
    isMobile: boolean
  }>(),
  {
    size: 40,
    depth: 14,
    scrollDepth: 28,
    rotate: 0,
    color: 'primary',
    hideOnMobile: false,
  },
)

const prefersReducedMotion = useReducedMotion()

const positionStyle = computed(() => ({
  top: props.top,
  left: props.left,
  right: props.right,
}))

const animate = computed(() => {
  if (prefersReducedMotion.value) return { x: 0, y: 0, rotate: props.rotate }

  if (props.isMobile) {
    const offset = props.scrollProgress - 0.5
    return { x: 0, y: offset * props.scrollDepth, rotate: props.rotate + offset * 8 }
  }

  return {
    x: props.pointerX * props.depth,
    y: props.pointerY * props.depth * 0.72,
    rotate: props.rotate + props.pointerX * 4,
  }
})

const colorClass = computed(() => {
  if (props.color === 'secondary') return 'text-secondary'
  if (props.color === 'highlight') return 'text-highlight'
  return 'text-primary'
})
</script>

<template>
  <Motion
    v-if="!hideOnMobile || !isMobile"
    as="span"
    aria-hidden="true"
    :animate="animate"
    :style="positionStyle"
    :transition="{ type: 'spring', stiffness: 90, damping: 20, mass: 0.85 }"
    :class="['pointer-events-none absolute grid place-items-center opacity-65 will-change-transform', colorClass]"
  >
    <component :is="icon" :width="size" :height="size" stroke-width="1.6" />
  </Motion>
</template>
