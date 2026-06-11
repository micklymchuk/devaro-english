<script setup lang="ts">
import DecorativeStickerField, { type StickerPlacement } from '@/components/motion/DecorativeStickerField.vue'
import RevealOnScroll from '@/components/motion/RevealOnScroll.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import type { SiteCopy } from '@/types/site'

defineProps<{
  content: SiteCopy['programs']
}>()

const stickers: StickerPlacement[] = [
  { src: '/stickers/open-book.png', top: '2%', right: '3%', width: 'clamp(86px, 9vw, 145px)', rotate: 7, hideBelow: 'md' },
]

</script>

<template>
  <section id="programs" class="collage-section overflow-hidden">
    <div class="grid-fragment absolute right-[-3%] top-[3%] hidden h-36 w-52 rotate-[-7deg] bg-text-main opacity-25 md:block" aria-hidden="true"></div>
    <DecorativeStickerField :stickers="stickers" />
    <SectionHeading class="relative z-10" :eyebrow="content.eyebrow" :title="content.title" />
    <div class="relative z-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
      <RevealOnScroll
        v-for="(program, index) in content.items"
        :key="program.title"
        :delay="index * 90"
        as="div"
      >
      <BaseCard class="motion-translate min-h-[210px] transition duration-200 hover:-translate-y-1 md:min-h-72">
        <span class="mb-5 grid size-11 place-items-center bg-primary text-xs font-black text-white md:mb-8 md:size-12">
          {{ program.title.slice(0, 2) }}
        </span>
        <h3 class="mb-3 text-xl font-black md:text-2xl">{{ program.title }}</h3>
        <p class="text-[0.98rem] leading-relaxed text-muted md:text-base">{{ program.text }}</p>
      </BaseCard>
      </RevealOnScroll>
    </div>
  </section>
</template>
