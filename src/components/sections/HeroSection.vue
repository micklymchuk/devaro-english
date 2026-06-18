<script setup lang="ts">
import { Play } from '@iconoir/vue'
import DecorativeStickerField, { type StickerPlacement } from '@/components/motion/DecorativeStickerField.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import type { SiteCopy } from '@/types/site'

defineProps<{
  content: SiteCopy['hero']
  image: string
}>()

const stickers: StickerPlacement[] = [
  { src: '/stickers/hand-marker.png', top: '3%', right: '8%', width: 'clamp(82px, 9vw, 132px)', rotate: -9, depth: 16, hideBelow: 'lg' },
]
</script>

<template>
  <section
    id="top"
    class="section-shell paper-noise overflow-hidden bg-surface pb-14 pt-10 md:pb-16 md:pt-12 lg:min-h-[670px] lg:pb-12 lg:pt-12"
  >
    <div class="site-container site-grid relative z-10 items-center gap-y-9 lg:gap-y-0">
      <div class="col-span-4 self-center md:col-span-8 lg:col-span-6 xl:col-span-5">
        <p class="collage-badge animate-hero-rise mb-5 inline-flex max-w-full rotate-[-2deg]">
          {{ content.eyebrow }}
        </p>
        <h1 class="animate-hero-rise mb-6 max-w-[760px] text-[40px] leading-[1.04] text-balance [animation-delay:120ms] sm:text-[50px] sm:leading-[1] lg:text-[68px] lg:leading-[0.98] xl:text-[76px] xl:leading-[0.96]">
          {{ content.title }}
        </h1>
        <p class="animate-hero-rise max-w-[610px] text-[16px] leading-[1.58] text-muted [animation-delay:220ms] md:text-[17px] xl:text-[18px]">
          {{ content.text }}
        </p>
        <div class="animate-hero-rise my-7 flex flex-col items-stretch gap-3 [animation-delay:320ms] sm:flex-row sm:items-center">
          <BaseButton href="#contact">{{ content.primaryCta }}</BaseButton>
          <BaseButton href="#contact" variant="secondary">{{ content.secondaryCta }}</BaseButton>
        </div>
        <div class="animate-hero-rise grid max-w-[640px] gap-3 [animation-delay:420ms] sm:grid-cols-[0.9fr_1.1fr]">
          <div class="border-l-4 border-primary bg-surface-muted p-4">
            <div class="flex items-center gap-3 text-sm font-black leading-tight text-primary">
              <span class="grid size-9 place-items-center bg-primary text-white" aria-hidden="true">
                <Play :width="18" :height="18" stroke-width="2.6" />
              </span>
              <span>{{ content.videoTitle }} · {{ content.videoDuration }}</span>
            </div>
          </div>
          <p class="m-0 bg-panel p-4 text-[15px] font-semibold leading-snug text-text-main shadow-[4px_4px_0_rgba(214,94,132,0.5)] sm:text-base">
            <strong class="text-primary">{{ content.proofEmphasis }}</strong> {{ content.proofText }}
          </p>
        </div>
        <ul class="mt-5 flex max-w-[650px] flex-wrap gap-2.5 text-sm font-extrabold text-text-main">
          <li v-for="item in content.trustItems" :key="item" class="border border-text-main/20 bg-panel px-3 py-2">
            {{ item }}
          </li>
        </ul>
      </div>

      <div class="relative col-span-4 min-h-[430px] md:col-span-8 md:min-h-[520px] lg:col-span-6 lg:col-start-7 lg:min-h-[600px] xl:col-span-7 xl:col-start-6" aria-label="Online English lesson preview">
        <div class="grid-fragment absolute right-[-10%] top-[12%] hidden h-[360px] w-[410px] rotate-[-6deg] bg-text-main opacity-20 lg:block" aria-hidden="true"></div>
        <DecorativeStickerField :stickers="stickers" />
        <div class="hero-paper-sheet paper-grid absolute bottom-5 left-[16%] top-7 w-[64%] bg-panel md:left-[22%] md:w-[48%] lg:left-[10%] lg:w-[58%]"></div>
        <div class="absolute bottom-14 right-[2%] hidden w-[230px] rotate-[2deg] bg-primary p-5 text-white shadow-[6px_6px_0_rgba(23,46,40,0.18)] md:block lg:right-[5%] xl:right-[8%]">
          <p class="m-0 text-[21px] font-black leading-tight">{{ content.testTitle }}</p>
        </div>
        <img
          :src="image"
          :alt="content.imageAlt"
          class="animate-hero-rise absolute bottom-0 left-1/2 z-10 h-[420px] max-w-none -translate-x-1/2 object-contain drop-shadow-[6px_8px_0_rgba(23,46,40,0.16)] [animation-delay:260ms] md:h-[520px] lg:left-[45%] lg:h-[600px] xl:h-[640px]"
        />
        <div class="absolute left-3 top-6 z-20 rotate-[-3deg] bg-panel px-4 py-3 shadow-[4px_4px_0_rgba(214,94,132,0.58)] md:left-[10%] lg:left-0 lg:top-16">
          <p class="m-0 text-sm font-black text-primary">{{ content.lessonLabel }}</p>
          <p class="m-0 text-3xl font-black leading-none text-text-main">{{ content.lessonValue }}</p>
          <p class="m-0 text-sm font-bold text-muted">{{ content.lessonNote }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
