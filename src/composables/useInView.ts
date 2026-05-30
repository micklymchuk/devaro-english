import { onBeforeUnmount, onMounted, ref, type Ref } from 'vue'

interface InViewOptions {
  rootMargin?: string
  threshold?: number
  once?: boolean
}

export function useInView(target: Ref<Element | null>, options: InViewOptions = {}) {
  const isInView = ref(false)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!target.value) return

    if (!('IntersectionObserver' in window)) {
      isInView.value = true
      return
    }

    observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return

        isInView.value = entry.isIntersecting

        if (entry.isIntersecting && options.once !== false) {
          observer?.disconnect()
        }
      },
      {
        rootMargin: options.rootMargin ?? '0px 0px -12% 0px',
        threshold: options.threshold ?? 0.18,
      },
    )

    observer.observe(target.value)
  })

  onBeforeUnmount(() => observer?.disconnect())

  return { isInView }
}
