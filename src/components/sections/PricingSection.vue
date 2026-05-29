<script setup lang="ts">
import BaseCard from '@/components/ui/BaseCard.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import type { SiteCopy } from '@/types/site'

defineProps<{
  content: SiteCopy['pricing']
}>()
</script>

<template>
  <section id="prices" class="mx-auto mt-5 max-w-[1840px] rounded-[32px] border border-white/80 bg-[#f6f7f4] px-[clamp(28px,4vw,62px)] py-[clamp(64px,8vw,110px)] shadow-[0_24px_90px_rgba(0,0,0,0.12)]">
    <SectionHeading :eyebrow="content.eyebrow" :title="content.title" compact />
    <div class="grid gap-6 md:grid-cols-3">
      <BaseCard
        v-for="(price, index) in content.items"
        :key="price.name"
        class="relative p-8"
        :class="index === 1 && 'border-forest bg-forest text-white shadow-[0_30px_100px_rgba(17,97,73,0.22)]'"
      >
        <span :class="['font-black uppercase', index === 1 ? 'text-white' : 'text-clay']">{{ price.name }}</span>
        <h3 class="mb-3 mt-5 text-3xl font-black">{{ price.count }}</h3>
        <p :class="['leading-relaxed', index === 1 ? 'text-white/70' : 'text-muted']">{{ price.text }}</p>
        <strong :class="['mt-9 block text-4xl', index === 1 ? 'text-white' : 'text-forest']">{{ price.price }}</strong>
      </BaseCard>
    </div>
  </section>
</template>
