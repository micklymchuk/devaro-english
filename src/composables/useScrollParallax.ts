import { computed, onBeforeUnmount, onMounted, ref, type CSSProperties, type Ref } from 'vue'

interface ParallaxLayer {
  x?: number
  y?: number
  rotate?: number
}

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)

export function useScrollParallax(target: Ref<HTMLElement | null>) {
  const progress = ref(0)
  const reducedMotion = ref(false)
  let frame = 0
  let media: MediaQueryList | null = null
  let handleMotionPreferenceChange: ((event: MediaQueryListEvent) => void) | null = null

  const update = () => {
    frame = 0

    if (!target.value || reducedMotion.value) {
      progress.value = 0
      return
    }

    const rect = target.value.getBoundingClientRect()
    const viewportHeight = window.innerHeight || 1
    const scrollableDistance = viewportHeight + rect.height

    progress.value = clamp((viewportHeight - rect.top) / scrollableDistance, 0, 1)
  }

  const requestUpdate = () => {
    if (!frame) frame = requestAnimationFrame(update)
  }

  onMounted(() => {
    media = window.matchMedia('(prefers-reduced-motion: reduce)')
    reducedMotion.value = media.matches

    update()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    handleMotionPreferenceChange = (event) => {
      reducedMotion.value = event.matches
      requestUpdate()
    }
    media.addEventListener('change', handleMotionPreferenceChange)
  })

  onBeforeUnmount(() => {
    cancelAnimationFrame(frame)
    window.removeEventListener('scroll', requestUpdate)
    window.removeEventListener('resize', requestUpdate)
    if (media && handleMotionPreferenceChange) {
      media.removeEventListener('change', handleMotionPreferenceChange)
    }
    media = null
    handleMotionPreferenceChange = null
  })

  const layerStyle = ({ x = 0, y = 0, rotate = 0 }: ParallaxLayer): CSSProperties => {
    if (reducedMotion.value) return {}

    const offset = progress.value - 0.5

    return {
      transform: `translate3d(${offset * x}px, ${offset * y}px, 0) rotate(${rotate + offset * rotate * 0.35}deg)`,
    }
  }

  return {
    progress: computed(() => progress.value),
    layerStyle,
  }
}
