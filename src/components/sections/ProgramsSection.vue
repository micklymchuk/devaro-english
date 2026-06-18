<script setup lang="ts">
import type { Component } from 'vue'
import { Airplane, Book, Community, GraduationCap, PageSearch } from '@iconoir/vue'
import DecorativeStickerField, { type StickerPlacement } from '@/components/motion/DecorativeStickerField.vue'
import RevealOnScroll from '@/components/motion/RevealOnScroll.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import type { SiteCopy } from '@/types/site'

defineProps<{
  content: SiteCopy['programs']
}>()

const stickers: StickerPlacement[] = [
  { src: '/stickers/open-book.png', top: '2%', right: '3%', width: 'clamp(74px, 8vw, 126px)', rotate: 7, hideBelow: 'lg' },
]

const programIcons: Component[] = [Community, GraduationCap, Book, PageSearch, Airplane]

const programIcon = (index: number) => programIcons[index] ?? Book
</script>

<template>
  <section
    id="programs"
    class="section-shell section-pad overflow-hidden bg-panel"
  >
    <DecorativeStickerField :stickers="stickers" />
    <div class="site-container relative z-10">
      <SectionHeading :eyebrow="content.eyebrow" :title="content.title" />
      <div class="grid gap-4 md:grid-cols-2 lg:gap-6 xl:grid-cols-6">
        <RevealOnScroll
          v-for="(program, index) in content.items"
          :key="program.title"
          :delay="index * 90"
          as="article"
          :class="[
            'motion-translate group flex min-h-[236px] flex-col border border-text-main/12 bg-surface-warm p-5 text-left transition duration-300 ease-out hover:-translate-y-1 hover:bg-surface-soft hover:shadow-[5px_5px_0_rgba(214,94,132,0.58)] sm:p-6 md:min-h-[270px] lg:p-7 xl:min-h-[286px]',
            index < 3 ? 'xl:col-span-2' : 'xl:col-span-3',
          ]"
        >
          <span class="mb-6 grid size-13 place-items-center border-2 border-primary text-primary transition duration-300 group-hover:bg-primary group-hover:text-white md:mb-7">
            <component :is="programIcon(index)" :width="30" :height="30" stroke-width="1.9" aria-hidden="true" />
          </span>
          <h3 class="text-[20px] font-black leading-[1.18] text-text-main md:text-[23px]">
            {{ program.title }}
          </h3>
          <p class="mt-4 text-[15px] leading-relaxed text-muted md:text-[16px]">
            {{ program.text }}
          </p>
          <span class="mt-auto block h-1 w-14 bg-highlight pt-0" aria-hidden="true"></span>
        </RevealOnScroll>
      </div>
    </div>
  </section>
</template>
