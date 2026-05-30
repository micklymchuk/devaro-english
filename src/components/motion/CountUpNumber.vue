<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    value: string
    active: boolean
    duration?: number
  }>(),
  {
    duration: 900,
  },
)

const current = ref(0)
let frame = 0

const parsed = computed(() => {
  const match = props.value.match(/(\d+)/)
  const digits = match?.[1] ?? ''
  const start = match?.index ?? 0
  const target = digits ? Number(digits) : 0

  return {
    target,
    prefix: props.value.slice(0, start),
    suffix: digits ? props.value.slice(start + digits.length) : props.value,
  }
})

function animate() {
  cancelAnimationFrame(frame)

  if (!parsed.value.target || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    current.value = parsed.value.target
    return
  }

  const startedAt = performance.now()

  const tick = (now: number) => {
    const progress = Math.min((now - startedAt) / props.duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)

    current.value = Math.round(parsed.value.target * eased)

    if (progress < 1) {
      frame = requestAnimationFrame(tick)
    }
  }

  frame = requestAnimationFrame(tick)
}

watch(
  () => props.active,
  (active) => {
    if (active) animate()
  },
  { immediate: true },
)

onBeforeUnmount(() => cancelAnimationFrame(frame))
</script>

<template>
  <span>{{ parsed.prefix }}{{ current }}{{ parsed.suffix }}</span>
</template>
