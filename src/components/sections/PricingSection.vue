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
  <section id="prices" class="mx-auto mt-5 max-w-[1840px] rounded-[32px] border border-white/80 bg-surface px-[clamp(28px,4vw,62px)] py-[clamp(64px,8vw,110px)]">
    <SectionHeading :eyebrow="content.eyebrow" :title="content.title" compact />
    <div class="grid gap-6 md:grid-cols-3">
      <RevealOnScroll
        v-for="(price, index) in content.items"
        :key="price.name"
        :delay="index * 110"
        as="div"
      >
      <BaseCard
        class="relative p-8"
        :class="index === 1 && 'border-primary bg-primary text-white'"
      >
        <span :class="['font-black uppercase', index === 1 ? 'text-white' : 'text-tertiary']">{{ price.name }}</span>
        <h3 class="mb-3 mt-5 text-3xl font-black">{{ price.count }}</h3>
        <p :class="['leading-relaxed', index === 1 ? 'text-white/70' : 'text-muted']">{{ price.text }}</p>
        <strong :class="['mt-9 block text-4xl', index === 1 ? 'text-white' : 'text-primary']">{{ price.price }}</strong>
      </BaseCard>
      </RevealOnScroll>
    </div>
  </section>
</template>
