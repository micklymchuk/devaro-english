<script setup lang="ts">
import { ref } from 'vue'
import DecorativeStickerField, { type StickerPlacement } from '@/components/motion/DecorativeStickerField.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { useScrollParallax } from '@/composables/useScrollParallax'
import type { SiteCopy } from '@/types/site'

defineProps<{
  content: SiteCopy['hero']
  image: string
}>()

const hero = ref<HTMLElement | null>(null)
const { layerStyle } = useScrollParallax(hero)

const stickers: StickerPlacement[] = [
  { src: '/stickers/megaphone.png', top: '4%', right: '7%', width: 'clamp(92px, 12vw, 190px)', rotate: 9, hideBelow: 'lg' },
  { src: '/stickers/headphones.png', bottom: '3%', left: '42%', width: 'clamp(88px, 10vw, 158px)', rotate: -8, hideBelow: 'md' },
  { src: '/stickers/hand-marker.png', top: '48%', right: '1%', width: 'clamp(84px, 10vw, 170px)', rotate: 5, hideBelow: 'lg' },
]
</script>

<template>
  <section
    ref="hero"
    id="top"
    class="relative mx-auto grid max-w-[1840px] gap-8 overflow-hidden bg-surface px-[clamp(22px,4vw,62px)] pb-[clamp(72px,7vw,100px)] pt-[clamp(32px,4vw,54px)] lg:min-h-[760px] lg:grid-cols-[minmax(0,0.82fr)_minmax(520px,1.18fr)]"
  >
    <div class="grid-fragment absolute right-[2%] top-[10%] hidden h-40 w-40 opacity-40 md:block" aria-hidden="true"></div>
    <div class="grid-fragment absolute bottom-[9%] left-[2%] hidden h-28 w-44 opacity-25 lg:block" aria-hidden="true"></div>
    <div class="torn-paper-bottom pointer-events-none absolute inset-x-0 bottom-0 z-20 h-14 bg-page" aria-hidden="true"></div>
    <DecorativeStickerField :stickers="stickers" />

    <div class="relative z-10 max-w-[700px] self-center">
      <p class="animate-hero-rise mb-6 inline-flex rotate-[-2deg] bg-primary px-3 py-1.5 text-base font-black text-white">
        {{ content.eyebrow }}
      </p>
      <h1 class="animate-hero-rise mb-6 max-w-[760px] text-[clamp(3.75rem,7vw,7rem)] leading-[0.88] [animation-delay:120ms]">
        {{ content.title }}
      </h1>
      <p class="animate-hero-rise max-w-[590px] text-[clamp(1.05rem,1.6vw,1.35rem)] leading-relaxed text-muted [animation-delay:220ms]">
        {{ content.text }}
      </p>
      <div class="animate-hero-rise my-9 flex flex-wrap items-center gap-3 [animation-delay:320ms]">
        <BaseButton href="#contact">{{ content.primaryCta }}</BaseButton>
        <BaseButton href="#contact" variant="secondary">{{ content.secondaryCta }}</BaseButton>
      </div>
      <div class="paper-card animate-hero-rise mt-10 flex w-fit items-center gap-4 bg-panel p-4 [animation-delay:420ms]">
        <span class="animate-pulse-soft grid size-14 place-items-center bg-primary text-white">▶</span>
        <div>
          <strong class="block font-black">{{ content.videoTitle }}</strong>
          <span class="text-muted">{{ content.videoDuration }}</span>
        </div>
      </div>
    </div>

    <div class="relative z-10 min-h-[520px] self-end lg:min-h-[660px]" aria-label="Online English lesson preview">
      <div class="absolute bottom-2 left-[18%] top-4 w-[50%] bg-panel"></div>
      <img
        :src="image"
        :alt="content.imageAlt"
        class="animate-hero-rise absolute bottom-0 left-[38%] z-10 h-[min(620px,78vw)] max-w-none -translate-x-1/2 object-contain mix-blend-multiply [animation-delay:260ms] lg:h-[680px]"
      />

      <div
        class="absolute left-[6%] top-[11%] z-20 bg-primary px-3 py-2 text-lg font-black text-white will-change-transform"
        :style="layerStyle({ x: -18, y: 42, rotate: 6 })"
      >
        {{ content.lessonLabel }}
      </div>
      <div
        class="paper-card absolute right-[4%] top-[18%] z-20 max-w-[320px] bg-panel/95 p-5 backdrop-blur will-change-transform"
        :style="layerStyle({ x: 28, y: 64, rotate: -1 })"
      >
        <div class="mb-4 flex -space-x-3">
          <span class="size-12 rounded-full border-2 border-white bg-[url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80')] bg-cover"></span>
          <span class="size-12 rounded-full border-2 border-white bg-[url('https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80')] bg-cover"></span>
          <span class="size-12 rounded-full border-2 border-white bg-[url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80')] bg-cover"></span>
        </div>
        <p class="m-0 text-lg leading-snug text-text-main">
          <strong class="text-primary">{{ content.proofEmphasis }}</strong> {{ content.proofText }}
        </p>
      </div>
      <div
        class="absolute right-[4%] top-[43%] z-20 bg-secondary px-3 py-2 text-lg font-black leading-none text-text-main will-change-transform"
        :style="layerStyle({ x: 34, y: -56, rotate: 8 })"
      >
        {{ content.scheduleBadge }}
      </div>
      <div class="printed-shadow motion-translate animate-hero-rise absolute bottom-[7%] right-[2%] z-20 max-w-[390px] bg-primary p-6 text-white transition duration-200 hover:-translate-y-1 [animation-delay:520ms]">
        <p class="mb-5 text-[clamp(1.25rem,2vw,1.8rem)] font-black leading-tight">
          {{ content.testTitle }}
        </p>
        <BaseButton href="#contact" variant="secondary">{{ content.testCta }}</BaseButton>
      </div>
      <div
        class="absolute bottom-[19%] left-[1%] z-20 bg-secondary px-3 py-1.5 text-xl font-black text-text-main will-change-transform"
        :style="layerStyle({ x: -44, y: -70, rotate: -10 })"
      >
        {{ content.greetingBadge }}
      </div>
    </div>
  </section>
</template>
