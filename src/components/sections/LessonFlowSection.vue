<script setup lang="ts">
import RevealOnScroll from '@/components/motion/RevealOnScroll.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import type { SiteCopy } from '@/types/site'

defineProps<{
  content: SiteCopy['lessonFlow']
}>()
</script>

<template>
  <section class="relative mx-auto mt-5 max-w-[1840px] bg-panel py-[clamp(46px,7vw,68px)] lg:py-[clamp(68px,7vw,96px)]">
    <div class="site-container grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start lg:gap-12 xl:gap-16">
      <div class="max-w-[680px] lg:max-w-[560px]">
        <p class="collage-badge mb-5 rotate-[-2deg]">{{ content.eyebrow }}</p>
        <h2 class="mb-0 text-[clamp(2.1rem,7vw,2.85rem)] leading-[0.98] sm:text-[clamp(2.45rem,5.8vw,3.15rem)] lg:text-[clamp(3.05rem,3.65vw,4.25rem)]">
          {{ content.title }}
        </h2>
      </div>

      <div>
        <ol class="paper-card grid gap-0 overflow-hidden p-0 [counter-reset:steps]">
          <RevealOnScroll
            v-for="(step, index) in content.steps"
            :key="step.label"
            :delay="index * 80"
            as="li"
            class="grid grid-cols-[42px_1fr] items-start gap-4 border-b border-text-main/10 px-4 py-4 last:border-b-0 sm:grid-cols-[48px_1fr] sm:gap-5 sm:px-5 sm:py-5 before:grid before:size-10 before:place-items-center before:bg-primary before:text-sm before:font-black before:text-white before:content-[counter(steps)] sm:before:size-11 [counter-increment:steps]"
          >
            <div>
              <h3 class="text-[1.28rem] font-black leading-tight text-text-main sm:text-[1.45rem] lg:text-[1.55rem]">
                {{ step.label }}
              </h3>
              <p class="mt-2 max-w-[46rem] text-[0.98rem] leading-relaxed text-muted sm:text-[1.03rem]">
                {{ step.text }}
              </p>
            </div>
          </RevealOnScroll>
        </ol>

        <RevealOnScroll
          class="mt-5 grid gap-4 bg-primary p-5 text-white shadow-[6px_6px_0_rgba(23,46,40,0.18)] sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:p-6"
        >
          <p class="m-0 text-[1.2rem] font-black leading-tight sm:text-[1.35rem]">
            {{ content.ctaText }}
          </p>
          <BaseButton :href="content.ctaHref" variant="secondary" class="w-full sm:w-auto">
            {{ content.ctaLabel }}
          </BaseButton>
        </RevealOnScroll>
      </div>
    </div>
  </section>
</template>
