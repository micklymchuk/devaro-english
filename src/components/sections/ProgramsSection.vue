<script setup lang="ts">
import BaseCard from '@/components/ui/BaseCard.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import type { SiteCopy } from '@/types/site'

defineProps<{
  content: SiteCopy['programs']
}>()
</script>

<template>
  <section id="programs" class="mx-auto mt-5 max-w-[1840px] rounded-[32px] border border-white/80 bg-[#f6f7f4] px-[clamp(28px,4vw,62px)] py-[clamp(64px,8vw,110px)] shadow-[0_24px_90px_rgba(0,0,0,0.12)]">
    <SectionHeading :eyebrow="content.eyebrow" :title="content.title" />
    <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
      <BaseCard v-for="program in content.items" :key="program.title" class="min-h-72 bg-white transition duration-200 hover:-translate-y-1 hover:border-forest/20 hover:shadow-[0_28px_90px_rgba(33,48,45,0.13)]">
        <span class="mb-8 grid size-12 place-items-center rounded-[18px] bg-forest text-xs font-black text-white">
          {{ program.title.slice(0, 2) }}
        </span>
        <h3 class="mb-3 text-2xl font-black">{{ program.title }}</h3>
        <p class="leading-relaxed text-muted">{{ program.text }}</p>
      </BaseCard>
    </div>
  </section>
</template>
