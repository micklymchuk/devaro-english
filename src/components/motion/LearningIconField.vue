<script setup lang="ts">
import { ref, type Component } from 'vue'
import DecorativeLearningIcon from '@/components/motion/DecorativeLearningIcon.vue'
import { useResponsiveParallax } from '@/composables/useResponsiveParallax'

export interface LearningIconPlacement {
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
}

defineProps<{
  icons: LearningIconPlacement[]
}>()

const field = ref<HTMLElement | null>(null)
const { isMobile, pointerX, pointerY, scrollProgress } = useResponsiveParallax(field)
</script>

<template>
  <div ref="field" class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    <DecorativeLearningIcon
      v-for="(item, index) in icons"
      :key="index"
      v-bind="item"
      :pointer-x="pointerX"
      :pointer-y="pointerY"
      :scroll-progress="scrollProgress"
      :is-mobile="isMobile"
    />
  </div>
</template>
