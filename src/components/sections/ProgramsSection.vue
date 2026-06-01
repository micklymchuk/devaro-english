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
    <div class="grid-fragment absolute right-[1%] top-[5%] hidden h-28 w-36 opacity-30 md:block" aria-hidden="true"></div>
    <DecorativeStickerField :stickers="stickers" />
    <SectionHeading class="relative z-10" :eyebrow="content.eyebrow" :title="content.title" />
    <div class="relative z-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
      <RevealOnScroll
        v-for="(program, index) in content.items"
        :key="program.title"
        :delay="index * 90"
        as="div"
      >
      <BaseCard class="motion-translate min-h-72 transition duration-200 hover:-translate-y-1">
        <span class="mb-8 grid size-12 place-items-center bg-primary text-xs font-black text-white">
          {{ program.title.slice(0, 2) }}
        </span>
        <h3 class="mb-3 text-2xl font-black">{{ program.title }}</h3>
        <p class="leading-relaxed text-muted">{{ program.text }}</p>
      </BaseCard>
      </RevealOnScroll>
    </div>
  </section>
</template>
