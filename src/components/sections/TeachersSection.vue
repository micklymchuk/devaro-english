<script setup lang="ts">
import RevealOnScroll from '@/components/motion/RevealOnScroll.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import type { SiteCopy } from '@/types/site'

defineProps<{
  content: SiteCopy['teachers']
}>()
</script>

<template>
  <section id="teachers" class="collage-section overflow-hidden">
    <div class="site-container">
      <div class="grid gap-7 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1.45fr)] lg:items-end">
        <SectionHeading :eyebrow="content.eyebrow" :title="content.title" compact align="stack" />
        <div class="mb-7 flex justify-start lg:mb-11 lg:justify-end">
          <BaseButton :href="content.ctaHref" variant="secondary">
            {{ content.ctaLabel }}
          </BaseButton>
        </div>
      </div>

      <div class="grid gap-5 md:grid-cols-3 lg:gap-6">
      <RevealOnScroll
        v-for="(teacher, index) in content.items"
        :key="teacher.name"
        :delay="index * 120"
        as="div"
        class="h-full"
      >
        <BaseCard overflow-hidden class="motion-translate flex h-full flex-col transition duration-200 hover:-translate-y-1 hover:shadow-[5px_5px_0_rgba(214,94,132,0.58)]">
          <div class="relative bg-surface-muted">
            <img
              :src="teacher.image"
              :alt="`${teacher.name}, Devaro English teacher`"
              class="motion-still aspect-[4/3] w-full object-cover"
            />
          </div>
          <div class="flex flex-1 flex-col p-5 sm:p-6 lg:p-7">
            <h3 class="mb-2 text-[22px] font-black leading-tight md:text-[24px]">{{ teacher.name }}</h3>
            <strong class="mb-4 block text-sm font-black leading-snug text-primary">{{ teacher.role }}</strong>
            <p class="leading-relaxed text-muted">{{ teacher.text }}</p>
          </div>
        </BaseCard>
      </RevealOnScroll>
      </div>
    </div>
  </section>
</template>
