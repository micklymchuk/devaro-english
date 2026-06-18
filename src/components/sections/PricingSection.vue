<script setup lang="ts">
import RevealOnScroll from '@/components/motion/RevealOnScroll.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import type { SiteCopy } from '@/types/site'

defineProps<{
  content: SiteCopy['pricing']
}>()
</script>

<template>
  <section id="prices" class="collage-section bg-surface-warm">
    <div class="site-container">
      <SectionHeading :eyebrow="content.eyebrow" :title="content.title" compact />
      <p class="-mt-5 mb-8 max-w-[760px] text-[15px] font-semibold leading-relaxed text-muted sm:text-base lg:-mt-7">
        {{ content.note }}
      </p>
      <div class="grid gap-5 md:grid-cols-3 lg:gap-6">
      <RevealOnScroll
        v-for="(price, index) in content.items"
        :key="price.name"
        :delay="index * 110"
        as="div"
        class="h-full"
      >
        <BaseCard
          class="relative flex h-full flex-col p-5 sm:p-6 md:p-7"
          :class="index === 1 && 'paper-card-featured bg-primary text-white'"
        >
          <span
            v-if="index === 1"
            class="absolute -top-3 left-5 rotate-[-2deg] bg-highlight px-2 py-1 text-[13px] font-black leading-none text-text-main"
          >
            {{ content.recommendedLabel }}
          </span>
          <span :class="['font-black', index === 1 ? 'text-white' : 'text-primary']">{{ price.name }}</span>
          <h3 class="mb-3 mt-4 text-[24px] font-black leading-tight md:mt-5 md:text-[28px]">{{ price.count }}</h3>
          <p :class="['leading-relaxed', index === 1 ? 'text-white/82' : 'text-muted']">{{ price.text }}</p>
          <strong :class="['mt-6 block text-[32px] font-black leading-none md:mt-8 md:text-[38px]', index === 1 ? 'text-white' : 'text-primary']">{{ price.price }}</strong>
          <BaseButton href="#contact" :variant="index === 1 ? 'secondary' : 'primary'" class="mt-7 w-full">
            {{ content.ctaLabel }}
          </BaseButton>
        </BaseCard>
      </RevealOnScroll>
      </div>
    </div>
  </section>
</template>
