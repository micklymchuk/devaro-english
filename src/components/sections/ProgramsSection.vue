<script setup lang="ts">
import { Globe } from '@iconoir/vue'
import LearningIconField, { type LearningIconPlacement } from '@/components/motion/LearningIconField.vue'
import RevealOnScroll from '@/components/motion/RevealOnScroll.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import type { SiteCopy } from '@/types/site'

defineProps<{
  content: SiteCopy['programs']
}>()

const learningIcons: LearningIconPlacement[] = [
  { icon: Globe, top: '4%', right: '5%', size: 44, depth: 6, scrollDepth: 12, rotate: 8, color: 'primary' },
]

</script>

<template>
  <section id="programs" class="relative mx-auto mt-5 max-w-[1840px] overflow-hidden rounded-[32px] border border-white/80 bg-surface px-[clamp(28px,4vw,62px)] py-[clamp(64px,8vw,110px)]">
    <LearningIconField :icons="learningIcons" />
    <SectionHeading class="relative z-10" :eyebrow="content.eyebrow" :title="content.title" />
    <div class="relative z-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
      <RevealOnScroll
        v-for="(program, index) in content.items"
        :key="program.title"
        :delay="index * 90"
        as="div"
      >
      <BaseCard class="min-h-72 bg-panel transition duration-200 hover:-translate-y-1 hover:border-primary/20">
        <span class="mb-8 grid size-12 place-items-center rounded-[18px] bg-primary text-xs font-black text-white">
          {{ program.title.slice(0, 2) }}
        </span>
        <h3 class="mb-3 text-2xl font-black">{{ program.title }}</h3>
        <p class="leading-relaxed text-muted">{{ program.text }}</p>
      </BaseCard>
      </RevealOnScroll>
    </div>
  </section>
</template>
