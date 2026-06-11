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
  { src: '/stickers/megaphone.png', top: '4%', right: '7%', width: 'clamp(92px, 12vw, 190px)', rotate: 9, depth: 28, hideBelow: 'lg' },
  { src: '/stickers/headphones.png', bottom: '3%', left: '42%', width: 'clamp(88px, 10vw, 158px)', rotate: -8, depth: 20, hideBelow: 'md' },
  { src: '/stickers/hand-marker.png', top: '14%', left: '35%', width: 'clamp(84px, 10vw, 170px)', rotate: 5, depth: 34, hideBelow: 'lg' },
]
</script>

<template>
  <section
    ref="hero"
    id="top"
    class="relative mx-auto grid max-w-[1840px] gap-8 overflow-hidden bg-surface px-[clamp(22px,4vw,62px)] pb-[clamp(72px,7vw,100px)] pt-[clamp(32px,4vw,54px)] lg:min-h-[760px] lg:grid-cols-[minmax(0,0.95fr)_minmax(520px,1.05fr)] xl:grid-cols-[minmax(0,0.9fr)_minmax(620px,1.1fr)]"
  >
    <div class="dot-field absolute inset-0 opacity-45" aria-hidden="true"></div>
    <div class="grid-fragment absolute bottom-[6%] right-[-7%] hidden h-[500px] w-[570px] rotate-[-6deg] bg-text-main opacity-35 lg:block" aria-hidden="true"></div>
    <div class="grid-fragment absolute bottom-[8%] left-[-5%] hidden h-36 w-56 rotate-[8deg] bg-text-main opacity-20 lg:block" aria-hidden="true"></div>
    <DecorativeStickerField :stickers="stickers" />

    <div class="relative z-10 max-w-[760px] self-center">
      <p class="animate-hero-rise mb-5 max-w-[285px] rotate-[-1deg] text-sm font-black leading-[1.65] text-white sm:mb-6 sm:inline-flex sm:max-w-none sm:rotate-[-2deg] sm:bg-primary sm:px-3 sm:py-1.5 sm:text-base sm:leading-tight">
        <span class="box-decoration-clone bg-primary px-2.5 py-1 sm:bg-transparent sm:p-0">
        {{ content.eyebrow }}
        </span>
      </p>
      <h1 class="animate-hero-rise mb-6 max-w-[780px] text-[clamp(2.45rem,10.5vw,3.7rem)] leading-[0.96] [animation-delay:120ms] lg:text-[clamp(4.1rem,5vw,5.65rem)] lg:leading-[0.94] xl:text-[clamp(4.35rem,4.7vw,6rem)]">
        {{ content.title }}
      </h1>
      <p class="animate-hero-rise max-w-[590px] text-[clamp(1.05rem,1.6vw,1.35rem)] leading-relaxed text-muted [animation-delay:220ms]">
        {{ content.text }}
      </p>
      <div class="animate-hero-rise my-7 flex flex-wrap items-center gap-3 sm:my-9 [animation-delay:320ms]">
        <BaseButton href="#contact">{{ content.primaryCta }}</BaseButton>
        <BaseButton href="#contact" variant="secondary">{{ content.secondaryCta }}</BaseButton>
      </div>
      <div class="paper-card animate-hero-rise mt-7 flex w-fit items-center gap-3 bg-panel p-3 sm:mt-10 sm:gap-4 sm:p-4 [animation-delay:420ms]">
        <span class="animate-pulse-soft grid size-12 place-items-center bg-primary text-white sm:size-14">▶</span>
        <div>
          <strong class="block font-black">{{ content.videoTitle }}</strong>
          <span class="text-muted">{{ content.videoDuration }}</span>
        </div>
      </div>
    </div>

    <div class="relative z-10 -mt-2 md:hidden" aria-label="Online English lesson preview">
      <div class="relative mx-auto flex min-h-[390px] max-w-[390px] items-center justify-center">
        <div class="hero-paper-sheet absolute inset-x-[10%] inset-y-8 bg-panel"></div>
        <img
          :src="image"
          :alt="content.imageAlt"
          class="animate-hero-rise relative z-10 h-[360px] max-w-none object-contain drop-shadow-[5px_7px_0_rgba(23,46,40,0.15)] [animation-delay:260ms]"
        />
      </div>

      <div class="paper-card relative z-20 mt-4 bg-panel p-4">
        <div class="mb-3 flex -space-x-3">
          <span class="size-10 rounded-full border-2 border-white bg-[url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80')] bg-cover"></span>
          <span class="size-10 rounded-full border-2 border-white bg-[url('https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80')] bg-cover"></span>
          <span class="size-10 rounded-full border-2 border-white bg-[url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80')] bg-cover"></span>
        </div>
        <p class="m-0 text-base leading-snug text-text-main">
          <strong class="text-primary">{{ content.proofEmphasis }}</strong> {{ content.proofText }}
        </p>
      </div>

      <div class="printed-shadow mt-5 bg-primary p-5 text-white">
        <p class="mb-5 text-[clamp(1.2rem,7vw,1.8rem)] font-black leading-tight">
          {{ content.testTitle }}
        </p>
        <BaseButton href="#contact" variant="secondary">{{ content.testCta }}</BaseButton>
      </div>
    </div>

    <div class="relative z-10 hidden min-h-[560px] self-end md:block lg:min-h-[620px] xl:min-h-[650px]" aria-label="Online English lesson preview">
      <div class="hero-paper-sheet absolute bottom-[150px] left-[18%] top-8 w-[58%] bg-panel md:bottom-2 md:left-[5%] md:top-4 md:w-[58%] lg:left-[3%] lg:w-[57%]"></div>
      <img
        :src="image"
        :alt="content.imageAlt"
        class="animate-hero-rise absolute bottom-[150px] left-1/2 z-10 h-[360px] max-w-none -translate-x-1/2 object-contain drop-shadow-[6px_8px_0_rgba(23,46,40,0.16)] [animation-delay:260ms] sm:h-[430px] md:bottom-0 md:left-[28%] md:h-[min(570px,72vw)] lg:left-[30%] lg:h-[610px] xl:h-[650px]"
      />

      <div
        class="paper-card absolute left-[18%] right-2 top-[310px] z-20 max-w-[330px] bg-panel/95 p-4 backdrop-blur will-change-transform sm:left-[30%] md:left-[52%] md:right-auto md:top-[24%] md:max-w-[340px] md:p-5 lg:left-[49%] xl:left-[47%]"
        :style="layerStyle({ x: 28, y: 64, rotate: -1 })"
      >
        <div class="mb-4 flex -space-x-3">
          <span class="size-10 rounded-full border-2 border-white bg-[url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80')] bg-cover md:size-12"></span>
          <span class="size-10 rounded-full border-2 border-white bg-[url('https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80')] bg-cover md:size-12"></span>
          <span class="size-10 rounded-full border-2 border-white bg-[url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80')] bg-cover md:size-12"></span>
        </div>
        <p class="m-0 text-base leading-snug text-text-main md:text-lg">
          <strong class="text-primary">{{ content.proofEmphasis }}</strong> {{ content.proofText }}
        </p>
      </div>
      <div class="printed-shadow animate-hero-rise absolute bottom-0 left-[6%] right-[6%] z-20 bg-primary p-5 text-white transition duration-200 [animation-delay:520ms] md:left-[40%] md:right-auto md:bottom-[2%] md:max-w-[420px] md:p-6 lg:left-[43%] xl:left-[45%]">
        <p class="mb-5 text-[clamp(1.2rem,6vw,1.65rem)] font-black leading-tight md:text-[clamp(1.25rem,2vw,1.8rem)]">
          {{ content.testTitle }}
        </p>
        <BaseButton href="#contact" variant="secondary">{{ content.testCta }}</BaseButton>
      </div>
    </div>
  </section>
</template>
