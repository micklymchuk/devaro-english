<script setup lang="ts">
import DecorativeStickerField, { type StickerPlacement } from '@/components/motion/DecorativeStickerField.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import type { SiteCopy } from '@/types/site'

defineProps<{
  content: SiteCopy['hero']
  image: string
}>()

const stickers: StickerPlacement[] = [
  { src: '/stickers/megaphone.png', top: '2%', right: '1%', width: 'clamp(98px, 12vw, 168px)', rotate: 8, depth: 18, hideBelow: 'lg' },
]
</script>

<template>
  <section
    id="top"
    class="relative mx-auto max-w-[1840px] overflow-hidden bg-surface pb-14 pt-12 md:pb-16 md:pt-14 lg:min-h-[620px] lg:pb-16 lg:pt-14"
  >
    <div class="site-container site-grid relative z-10 items-center gap-y-12 lg:gap-y-0">
      <div class="col-span-4 self-center md:col-span-8 lg:col-span-6">
        <p class="animate-hero-rise mb-5 inline-flex max-w-full rotate-[-1deg] bg-primary px-2.5 py-1.5 text-sm font-black leading-tight text-white sm:px-3">
          {{ content.eyebrow }}
        </p>
        <h1 class="animate-hero-rise mb-6 max-w-[740px] text-[42px] leading-[0.98] [animation-delay:120ms] md:text-[56px] lg:text-[60px] xl:text-[64px]">
          {{ content.title }}
        </h1>
        <p class="animate-hero-rise max-w-[590px] text-[16px] leading-[1.58] text-muted [animation-delay:220ms] md:text-[17px] xl:text-[18px]">
          {{ content.text }}
        </p>
        <div class="animate-hero-rise my-8 flex flex-col items-stretch gap-3 [animation-delay:320ms] sm:flex-row sm:items-center">
          <BaseButton href="#contact">{{ content.primaryCta }}</BaseButton>
          <BaseButton href="#contact" variant="secondary">{{ content.secondaryCta }}</BaseButton>
        </div>
        <div class="animate-hero-rise grid max-w-[640px] gap-3 border-l-4 border-primary bg-surface-muted p-4 [animation-delay:420ms] sm:grid-cols-[auto_1fr] sm:items-center sm:gap-x-5">
          <div class="text-sm font-black leading-tight text-primary">
            {{ content.videoTitle }} · {{ content.videoDuration }}
          </div>
          <p class="m-0 text-[15px] leading-snug text-text-main sm:text-base">
            <strong class="text-primary">{{ content.proofEmphasis }}</strong> {{ content.proofText }}
          </p>
        </div>
      </div>

      <div class="relative col-span-4 min-h-[390px] md:col-span-8 md:min-h-[500px] lg:col-span-6 lg:min-h-[560px]" aria-label="Online English lesson preview">
        <div class="grid-fragment absolute right-[-14%] top-[8%] hidden h-[360px] w-[410px] rotate-[-6deg] bg-text-main opacity-25 lg:block" aria-hidden="true"></div>
        <DecorativeStickerField :stickers="stickers" />
        <div class="hero-paper-sheet absolute bottom-5 left-[12%] top-7 w-[62%] bg-panel md:left-[20%] md:w-[50%] lg:left-[7%] lg:w-[58%]"></div>
        <img
          :src="image"
          :alt="content.imageAlt"
          class="animate-hero-rise absolute bottom-0 left-1/2 z-10 h-[390px] max-w-none -translate-x-1/2 object-contain drop-shadow-[6px_8px_0_rgba(23,46,40,0.16)] [animation-delay:260ms] md:h-[500px] lg:left-[47%] lg:h-[570px] xl:h-[620px]"
        />
        <div class="printed-shadow animate-hero-rise absolute bottom-4 left-0 z-20 max-w-[330px] bg-primary p-4 text-white [animation-delay:520ms] md:left-[54%] md:max-w-[360px] lg:bottom-8 lg:left-[50%] xl:left-[52%]">
          <p class="m-0 text-[20px] font-black leading-tight md:text-[22px]">
            {{ content.testTitle }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
