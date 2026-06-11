<script setup lang="ts">
import RevealOnScroll from '@/components/motion/RevealOnScroll.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import type { SiteCopy } from '@/types/site'

defineProps<{
  content: SiteCopy['pricing']
}>()
</script>

<template>
  <section id="prices" class="collage-section">
    <SectionHeading :eyebrow="content.eyebrow" :title="content.title" compact />
    <div class="grid gap-6 md:grid-cols-3">
      <RevealOnScroll
        v-for="(price, index) in content.items"
        :key="price.name"
        :delay="index * 110"
        as="div"
      >
      <BaseCard
        class="relative p-5 sm:p-6 md:p-8"
        :class="index === 1 && 'paper-card-featured bg-primary text-white'"
      >
        <span :class="['font-black uppercase', index === 1 ? 'text-white' : 'text-tertiary']">{{ price.name }}</span>
        <h3 class="mb-3 mt-4 text-2xl font-black md:mt-5 md:text-3xl">{{ price.count }}</h3>
        <p :class="['leading-relaxed', index === 1 ? 'text-white/70' : 'text-muted']">{{ price.text }}</p>
        <strong :class="['mt-6 block text-3xl md:mt-9 md:text-4xl', index === 1 ? 'text-white' : 'text-primary']">{{ price.price }}</strong>
      </BaseCard>
      </RevealOnScroll>
    </div>
  </section>
</template>
