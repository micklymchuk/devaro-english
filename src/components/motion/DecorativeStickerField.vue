<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

export interface StickerPlacement {
  src: string
  alt?: string
  top?: string
  bottom?: string
  left?: string
  right?: string
  width?: string
  rotate?: number
  depth?: number
  hideBelow?: 'sm' | 'md' | 'lg'
}

const props = defineProps<{
  stickers: StickerPlacement[]
}>()

const breakpoint = ref(typeof window === 'undefined' ? 0 : window.innerWidth)
const pointerX = ref(0)
const pointerY = ref(0)
const isReducedMotion = ref(false)
const isCoarsePointer = ref(false)
let reducedMotionMedia: MediaQueryList | null = null
let coarsePointerMedia: MediaQueryList | null = null

const updateBreakpoint = () => {
  breakpoint.value = window.innerWidth
}

const updateMotionPreference = () => {
  isReducedMotion.value = Boolean(reducedMotionMedia?.matches)
  isCoarsePointer.value = Boolean(coarsePointerMedia?.matches)
}

const handlePointerMove = (event: PointerEvent) => {
  if (isReducedMotion.value || isCoarsePointer.value) return

  pointerX.value = event.clientX / window.innerWidth - 0.5
  pointerY.value = event.clientY / window.innerHeight - 0.5
}

onMounted(() => {
  updateBreakpoint()
  reducedMotionMedia = window.matchMedia('(prefers-reduced-motion: reduce)')
  coarsePointerMedia = window.matchMedia('(pointer: coarse)')
  updateMotionPreference()

  window.addEventListener('resize', updateBreakpoint)
  window.addEventListener('pointermove', handlePointerMove, { passive: true })
  reducedMotionMedia.addEventListener('change', updateMotionPreference)
  coarsePointerMedia.addEventListener('change', updateMotionPreference)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateBreakpoint)
  window.removeEventListener('pointermove', handlePointerMove)
  reducedMotionMedia?.removeEventListener('change', updateMotionPreference)
  coarsePointerMedia?.removeEventListener('change', updateMotionPreference)
})

const minimumWidth = { sm: 640, md: 768, lg: 1024 }
const visibleStickers = computed(() =>
  props.stickers.filter((sticker) => !sticker.hideBelow || breakpoint.value >= minimumWidth[sticker.hideBelow]),
)

const assetUrl = (src: string) => `${import.meta.env.BASE_URL}${src.replace(/^\//, '')}`

const stickerStyle = (sticker: StickerPlacement, index: number) => {
  const depth = sticker.depth ?? 18 + index * 5
  const x = Math.round(pointerX.value * depth)
  const y = Math.round(pointerY.value * depth * 0.7)

  return {
    top: sticker.top,
    bottom: sticker.bottom,
    left: sticker.left,
    right: sticker.right,
    width: sticker.width ?? 'clamp(76px, 9vw, 150px)',
    transform: `translate3d(${x}px, ${y}px, 0) rotate(${sticker.rotate ?? 0}deg)`,
  }
}
</script>

<template>
  <div class="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
    <img
      v-for="(sticker, index) in visibleStickers"
      :key="sticker.src"
      :src="assetUrl(sticker.src)"
      :alt="sticker.alt ?? ''"
      loading="lazy"
      decoding="async"
      class="pointer-events-none absolute object-contain transition-transform duration-300 ease-out will-change-transform"
      :style="stickerStyle(sticker, index)"
    />
  </div>
</template>
