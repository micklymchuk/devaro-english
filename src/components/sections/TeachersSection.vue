<script setup lang="ts">
import RevealOnScroll from '@/components/motion/RevealOnScroll.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import type { SiteCopy } from '@/types/site'

defineProps<{
  content: SiteCopy['teachers']
}>()
</script>

<template>
  <section id="teachers" class="mx-auto mt-5 max-w-[1840px] rounded-[32px] border border-white/80 bg-surface px-[clamp(28px,4vw,62px)] py-[clamp(64px,8vw,110px)]">
    <SectionHeading :eyebrow="content.eyebrow" :title="content.title" compact />
    <div class="grid gap-6 md:grid-cols-3">
      <RevealOnScroll
        v-for="(teacher, index) in content.items"
        :key="teacher.name"
        :delay="index * 120"
        as="div"
      >
      <BaseCard overflow-hidden class="group bg-panel transition duration-200 hover:-translate-y-1">
        <div class="relative">
          <img
            :src="teacher.image"
            :alt="`${teacher.name}, Devaro English teacher`"
            class="aspect-[4/3] w-full object-cover saturate-[0.9] transition duration-300 group-hover:scale-[1.02]"
          />
          <div class="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-primary/45 to-transparent"></div>
        </div>
        <div class="p-7">
          <h3 class="mb-2 text-2xl font-black">{{ teacher.name }}</h3>
          <strong class="mb-4 block text-sm font-black uppercase text-tertiary">{{ teacher.role }}</strong>
          <p class="leading-relaxed text-muted">{{ teacher.text }}</p>
        </div>
      </BaseCard>
      </RevealOnScroll>
    </div>
  </section>
</template>
