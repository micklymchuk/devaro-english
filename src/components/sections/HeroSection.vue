<script setup lang="ts">
import { ref } from 'vue'
import { Book, ChatBubbleTranslate, EditPencil, Globe, GraduationCap, Headset } from '@iconoir/vue'
import LearningIconField, { type LearningIconPlacement } from '@/components/motion/LearningIconField.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { useScrollParallax } from '@/composables/useScrollParallax'
import type { SiteCopy } from '@/types/site'

defineProps<{
  content: SiteCopy['hero']
  image: string
}>()

const hero = ref<HTMLElement | null>(null)
const { layerStyle } = useScrollParallax(hero)

const learningIcons: LearningIconPlacement[] = [
  { icon: Book, top: '29%', left: '52%', size: 38, depth: 8, scrollDepth: 18, rotate: -12, color: 'primary', hideOnMobile: true },
  { icon: EditPencil, top: '21%', right: '3%', size: 36, depth: 17, scrollDepth: -32, rotate: 16, color: 'secondary' },
  { icon: ChatBubbleTranslate, top: '61%', left: '51%', size: 44, depth: 14, scrollDepth: 30, rotate: -8, color: 'secondary', hideOnMobile: true },
  { icon: Headset, top: '20%', right: '25%', size: 46, depth: 20, scrollDepth: -26, rotate: 10, color: 'primary', hideOnMobile: true },
  { icon: Globe, top: '88%', left: '43%', size: 34, depth: 9, scrollDepth: 20, rotate: -4, color: 'secondary' },
  { icon: GraduationCap, top: '6%', left: '57%', size: 44, depth: 10, scrollDepth: -20, rotate: 8, color: 'secondary', hideOnMobile: true },
]
</script>

<template>
  <section
    ref="hero"
    id="top"
    class="relative mx-auto grid max-w-[1840px] gap-8 overflow-hidden rounded-b-[32px] border-x border-b border-white/80 bg-surface px-[clamp(22px,4vw,62px)] pb-[clamp(34px,5vw,62px)] pt-[clamp(32px,4vw,54px)] lg:min-h-[760px] lg:grid-cols-[minmax(0,0.82fr)_minmax(520px,1.18fr)]"
  >
    <div class="absolute inset-0 opacity-[0.28] [background-image:linear-gradient(120deg,transparent_0%,transparent_52%,rgba(17,97,73,0.08)_52%,rgba(17,97,73,0.08)_54%,transparent_54%),linear-gradient(0deg,rgba(33,48,45,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(33,48,45,0.05)_1px,transparent_1px)] [background-size:100%_100%,46px_46px,46px_46px]"></div>
    <LearningIconField :icons="learningIcons" />

    <div class="relative z-10 max-w-[700px] self-center">
      <p class="animate-hero-rise mb-6 inline-flex rotate-[-2deg] rounded-lg bg-primary px-5 py-2 text-base font-black text-white">
        {{ content.eyebrow }}
      </p>
      <h1 class="animate-hero-rise mb-6 max-w-[760px] text-[clamp(3rem,12vw,4.6rem)] font-black leading-[0.96] tracking-tight [animation-delay:120ms] lg:text-[clamp(4.4rem,5.9vw,6.8rem)]">
        {{ content.title }}
      </h1>
      <p class="animate-hero-rise max-w-[590px] text-[clamp(1.05rem,1.6vw,1.35rem)] leading-relaxed text-muted [animation-delay:220ms]">
        {{ content.text }}
      </p>
      <div class="animate-hero-rise my-9 flex flex-wrap items-center gap-3 [animation-delay:320ms]">
        <BaseButton href="#contact">{{ content.primaryCta }}</BaseButton>
        <BaseButton href="#contact" variant="secondary">{{ content.secondaryCta }}</BaseButton>
      </div>
      <div class="animate-hero-rise mt-10 flex w-fit items-center gap-4 rounded-[22px] bg-panel p-4 [animation-delay:420ms]">
        <span class="animate-pulse-soft grid size-14 place-items-center rounded-[18px] bg-primary text-white">▶</span>
        <div>
          <strong class="block font-black">{{ content.videoTitle }}</strong>
          <span class="text-muted">{{ content.videoDuration }}</span>
        </div>
      </div>
    </div>

    <div class="relative z-10 min-h-[520px] self-end lg:min-h-[660px]" aria-label="Online English lesson preview">
      <div class="absolute bottom-2 left-[18%] top-4 w-[50%] rounded-[32px] bg-panel"></div>
      <img
        :src="image"
        :alt="content.imageAlt"
        class="animate-hero-rise absolute bottom-0 left-[38%] z-10 h-[min(620px,78vw)] max-w-none -translate-x-1/2 object-contain mix-blend-multiply [animation-delay:260ms] lg:h-[680px]"
      />

      <div
        class="absolute left-[6%] top-[11%] z-20 rounded-lg bg-primary px-5 py-3 text-lg font-black text-white will-change-transform"
        :style="layerStyle({ x: -18, y: 42, rotate: 6 })"
      >
        {{ content.lessonLabel }}
      </div>
      <div
        class="absolute right-[4%] top-[18%] z-20 max-w-[320px] rounded-[24px] bg-panel/95 p-5 backdrop-blur will-change-transform"
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
        class="absolute right-[4%] top-[43%] z-20 rounded-lg bg-secondary px-5 py-3 text-lg font-black leading-none text-white will-change-transform"
        :style="layerStyle({ x: 34, y: -56, rotate: 8 })"
      >
        {{ content.scheduleBadge }}
      </div>
      <div class="animate-hero-rise absolute bottom-[7%] right-[2%] z-20 max-w-[390px] rounded-[28px] bg-primary p-6 text-white transition duration-200 hover:-translate-y-1 [animation-delay:520ms]">
        <p class="mb-5 text-[clamp(1.25rem,2vw,1.8rem)] font-black leading-tight">
          {{ content.testTitle }}
        </p>
        <BaseButton href="#contact" variant="secondary">{{ content.testCta }}</BaseButton>
      </div>
      <div
        class="absolute bottom-[19%] left-[1%] z-20 rounded-lg bg-secondary px-4 py-2 text-xl font-black text-white will-change-transform"
        :style="layerStyle({ x: -44, y: -70, rotate: -10 })"
      >
        {{ content.greetingBadge }}
      </div>
    </div>
  </section>
</template>
