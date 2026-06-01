import { computed, onBeforeUnmount, onMounted, ref, type Ref } from 'vue'

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)

export function useResponsiveParallax(target: Ref<HTMLElement | null>) {
  const pointerX = ref(0)
  const pointerY = ref(0)
  const scrollProgress = ref(0.5)
  const isMobile = ref(false)
  let frame = 0
  let mobileMedia: MediaQueryList | null = null

  const updateScroll = () => {
    frame = 0
    if (!target.value) return

    const rect = target.value.getBoundingClientRect()
    const viewportHeight = window.innerHeight || 1
    scrollProgress.value = clamp((viewportHeight - rect.top) / (viewportHeight + rect.height), 0, 1)
  }

  const requestScrollUpdate = () => {
    if (!frame) frame = requestAnimationFrame(updateScroll)
  }

  const updatePointer = (event: PointerEvent) => {
    if (isMobile.value) return
    pointerX.value = (event.clientX / window.innerWidth - 0.5) * 2
    pointerY.value = (event.clientY / window.innerHeight - 0.5) * 2
  }

  const updateMobileMode = () => {
    isMobile.value = mobileMedia?.matches ?? false
    if (!isMobile.value) scrollProgress.value = 0.5
    requestScrollUpdate()
  }

  onMounted(() => {
    mobileMedia = window.matchMedia('(max-width: 767px), (pointer: coarse)')
    updateMobileMode()
    updateScroll()
    window.addEventListener('pointermove', updatePointer, { passive: true })
    window.addEventListener('scroll', requestScrollUpdate, { passive: true })
    window.addEventListener('resize', requestScrollUpdate)
    mobileMedia.addEventListener('change', updateMobileMode)
  })

  onBeforeUnmount(() => {
    cancelAnimationFrame(frame)
    window.removeEventListener('pointermove', updatePointer)
    window.removeEventListener('scroll', requestScrollUpdate)
    window.removeEventListener('resize', requestScrollUpdate)
    mobileMedia?.removeEventListener('change', updateMobileMode)
    mobileMedia = null
  })

  return {
    isMobile: computed(() => isMobile.value),
    pointerX: computed(() => pointerX.value),
    pointerY: computed(() => pointerY.value),
    scrollProgress: computed(() => scrollProgress.value),
  }
}
