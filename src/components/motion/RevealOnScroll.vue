<script setup lang="ts">
import { computed, ref } from 'vue'
import { useInView } from '@/composables/useInView'

const props = withDefaults(
  defineProps<{
    as?: string
    delay?: number
    direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  }>(),
  {
    as: 'div',
    delay: 0,
    direction: 'up',
  },
)

const target = ref<Element | null>(null)
const { isInView } = useInView(target)

const offsetClass = computed(() => {
  if (props.direction === 'none') return ''
  if (props.direction === 'down') return '-translate-y-6'
  if (props.direction === 'left') return 'translate-x-8'
  if (props.direction === 'right') return '-translate-x-8'
  return 'translate-y-8'
})
</script>

<template>
  <component
    :is="as"
    ref="target"
    :style="{ transitionDelay: `${delay}ms` }"
    :class="[
      'motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out',
      isInView ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${offsetClass}`,
    ]"
  >
    <slot :is-in-view="isInView" />
  </component>
</template>
