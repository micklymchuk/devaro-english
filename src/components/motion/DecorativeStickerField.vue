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
  hideBelow?: 'sm' | 'md' | 'lg'
}

const props = defineProps<{
  stickers: StickerPlacement[]
}>()

const breakpoint = ref(typeof window === 'undefined' ? 0 : window.innerWidth)

const updateBreakpoint = () => {
  breakpoint.value = window.innerWidth
}

onMounted(() => {
  updateBreakpoint()
  window.addEventListener('resize', updateBreakpoint)
})

onBeforeUnmount(() => window.removeEventListener('resize', updateBreakpoint))

const minimumWidth = { sm: 640, md: 768, lg: 1024 }
const visibleStickers = computed(() =>
  props.stickers.filter((sticker) => !sticker.hideBelow || breakpoint.value >= minimumWidth[sticker.hideBelow]),
)

const assetUrl = (src: string) => `${import.meta.env.BASE_URL}${src.replace(/^\//, '')}`
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
      class="animate-float-soft pointer-events-none absolute object-contain"
      :style="{
        top: sticker.top,
        bottom: sticker.bottom,
        left: sticker.left,
        right: sticker.right,
        width: sticker.width ?? 'clamp(76px, 9vw, 150px)',
        '--float-rotate': `${sticker.rotate ?? 0}deg`,
        animationDelay: `${props.stickers.indexOf(sticker) * -0.9}s`,
      }"
    />
  </div>
</template>
