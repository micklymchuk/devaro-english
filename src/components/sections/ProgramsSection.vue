<script setup lang="ts">
import DecorativeStickerField, { type StickerPlacement } from '@/components/motion/DecorativeStickerField.vue'
import RevealOnScroll from '@/components/motion/RevealOnScroll.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import SectionWrapper from '@/components/ui/SectionWrapper.vue'
import type { SiteCopy } from '@/types/site'

defineProps<{
  content: SiteCopy['programs']
}>()

const stickers: StickerPlacement[] = [
  { src: '/stickers/open-book.png', top: '2%', right: '3%', width: 'clamp(86px, 9vw, 145px)', rotate: 7, hideBelow: 'md' },
]

</script>

<template>
  <SectionWrapper id="programs">
    <template #decor>
      <DecorativeStickerField :stickers="stickers" />
    </template>

    <SectionHeading :eyebrow="content.eyebrow" :title="content.title" />
    <div class="grid gap-5 md:grid-cols-2 lg:gap-6 xl:grid-cols-6">
      <RevealOnScroll
        v-for="(program, index) in content.items"
        :key="program.title"
        :delay="index * 90"
        as="article"
        tabindex="0"
        :class="[
          'motion-translate group flex min-h-[220px] flex-col bg-surface p-6 text-left ring-1 ring-text-main/10 transition duration-300 ease-out hover:-translate-y-1 hover:bg-surface-soft hover:shadow-[6px_6px_0_rgba(214,94,132,0.68)] focus-visible:-translate-y-1 focus-visible:bg-surface-soft focus-visible:shadow-[6px_6px_0_rgba(214,94,132,0.68)] sm:p-7 md:min-h-[236px] lg:p-8 xl:min-h-[250px]',
          index < 3 ? 'xl:col-span-2' : 'xl:col-span-3',
        ]"
      >
        <span class="mb-6 grid size-12 place-items-center bg-primary text-sm font-black text-white transition duration-300 group-hover:bg-primary-hover group-focus-visible:bg-primary-hover md:mb-7">
          {{ program.title.slice(0, 2) }}
        </span>
        <h3 class="text-[1.25rem] font-black leading-[1.18] text-text-main md:text-[1.42rem]">
          {{ program.title }}
        </h3>
        <p class="mt-4 text-[1rem] leading-relaxed text-muted md:text-[1.04rem]">
          {{ program.text }}
        </p>
      </RevealOnScroll>
    </div>
  </SectionWrapper>
</template>
