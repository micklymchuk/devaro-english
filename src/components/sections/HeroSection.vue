<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import type { SiteCopy } from '@/types/site'

defineProps<{
  content: SiteCopy['hero']
  image: string
}>()
</script>

<template>
  <section
    id="top"
    class="relative mx-auto grid max-w-[1840px] gap-8 overflow-hidden rounded-b-[32px] border-x border-b border-white/80 bg-[#f6f7f4] px-[clamp(22px,4vw,62px)] pb-[clamp(34px,5vw,62px)] pt-[clamp(32px,4vw,54px)] shadow-[0_30px_120px_rgba(0,0,0,0.18)] lg:min-h-[760px] lg:grid-cols-[minmax(0,0.82fr)_minmax(520px,1.18fr)]"
  >
    <div class="absolute inset-0 opacity-[0.28] [background-image:linear-gradient(120deg,transparent_0%,transparent_52%,rgba(17,97,73,0.08)_52%,rgba(17,97,73,0.08)_54%,transparent_54%),linear-gradient(0deg,rgba(33,48,45,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(33,48,45,0.05)_1px,transparent_1px)] [background-size:100%_100%,46px_46px,46px_46px]"></div>

    <div class="relative z-10 max-w-[700px] self-center">
      <p class="mb-6 inline-flex rotate-[-2deg] rounded-lg bg-forest px-5 py-2 text-base font-black text-white shadow-[0_16px_36px_rgba(17,97,73,0.24)]">
        {{ content.eyebrow }}
      </p>
      <h1 class="mb-6 max-w-[760px] text-[clamp(3rem,12vw,4.6rem)] font-black leading-[0.96] tracking-tight lg:text-[clamp(4.4rem,5.9vw,6.8rem)]">
        {{ content.title }}
      </h1>
      <p class="max-w-[590px] text-[clamp(1.05rem,1.6vw,1.35rem)] leading-relaxed text-muted">
        {{ content.text }}
      </p>
      <div class="my-9 flex flex-wrap items-center gap-3">
        <BaseButton href="#contact">{{ content.primaryCta }}</BaseButton>
        <BaseButton href="#contact" variant="secondary">{{ content.secondaryCta }}</BaseButton>
      </div>
      <div class="mt-10 flex w-fit items-center gap-4 rounded-[22px] bg-white p-4 shadow-[0_20px_60px_rgba(33,48,45,0.12)]">
        <span class="grid size-14 place-items-center rounded-[18px] bg-forest text-white">▶</span>
        <div>
          <strong class="block font-black">{{ content.videoTitle }}</strong>
          <span class="text-muted">{{ content.videoDuration }}</span>
        </div>
      </div>
    </div>

    <div class="relative z-10 min-h-[520px] self-end lg:min-h-[660px]" aria-label="Online English lesson preview">
      <div class="absolute bottom-2 left-[18%] top-4 w-[50%] rounded-[32px] bg-white shadow-[0_20px_70px_rgba(33,48,45,0.08)]"></div>
      <img
        :src="image"
        :alt="content.imageAlt"
        class="absolute bottom-0 left-[38%] z-10 h-[min(620px,78vw)] max-w-none -translate-x-1/2 object-contain mix-blend-multiply drop-shadow-[0_30px_45px_rgba(33,48,45,0.2)] lg:h-[680px]"
      />

      <div class="absolute left-[6%] top-[11%] z-20 rotate-[6deg] rounded-lg bg-forest px-5 py-3 text-lg font-black text-white shadow-[0_16px_36px_rgba(17,97,73,0.25)]">
        {{ content.lessonLabel }}
      </div>
      <div class="absolute right-[4%] top-[18%] z-20 max-w-[320px] rounded-[24px] bg-white/95 p-5 shadow-[0_22px_70px_rgba(33,48,45,0.14)] backdrop-blur">
        <div class="mb-4 flex -space-x-3">
          <span class="size-12 rounded-full border-2 border-white bg-[url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80')] bg-cover"></span>
          <span class="size-12 rounded-full border-2 border-white bg-[url('https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80')] bg-cover"></span>
          <span class="size-12 rounded-full border-2 border-white bg-[url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80')] bg-cover"></span>
        </div>
        <p class="m-0 text-lg leading-snug text-ink">
          <strong class="text-forest">{{ content.proofEmphasis }}</strong> {{ content.proofText }}
        </p>
      </div>
      <div class="absolute right-[4%] top-[43%] z-20 rotate-[8deg] rounded-lg bg-[#e85385] px-5 py-3 text-lg font-black leading-none text-white shadow-[0_16px_36px_rgba(232,83,133,0.25)]">
        {{ content.scheduleBadge }}
      </div>
      <div class="absolute bottom-[7%] right-[2%] z-20 max-w-[390px] rounded-[28px] bg-forest p-6 text-white shadow-[0_24px_80px_rgba(17,97,73,0.26)]">
        <p class="mb-5 text-[clamp(1.25rem,2vw,1.8rem)] font-black leading-tight">
          {{ content.testTitle }}
        </p>
        <BaseButton href="#contact" variant="secondary">{{ content.testCta }}</BaseButton>
      </div>
      <div class="absolute bottom-[19%] left-[1%] z-20 rotate-[-10deg] rounded-lg bg-[#e85385] px-4 py-2 text-xl font-black text-white shadow-[0_16px_36px_rgba(232,83,133,0.2)]">
        {{ content.greetingBadge }}
      </div>
    </div>
  </section>
</template>
