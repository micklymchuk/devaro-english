<script setup lang="ts">
import RevealOnScroll from '@/components/motion/RevealOnScroll.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import type { SiteCopy } from '@/types/site'

defineProps<{
  content: SiteCopy['lessonFlow']
}>()
</script>

<template>
  <section class="section-shell section-pad overflow-hidden bg-surface">
    <div class="grid-fragment absolute bottom-8 left-[-80px] hidden h-[180px] w-[220px] rotate-[7deg] bg-primary opacity-10 lg:block" aria-hidden="true"></div>
    <div class="site-container relative z-10 grid gap-9 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:items-start lg:gap-12 xl:gap-16">
      <div class="max-w-[680px] lg:max-w-[500px]">
        <p class="collage-badge mb-5 rotate-[-2deg]">{{ content.eyebrow }}</p>
        <h2 class="collage-heading mb-0 text-balance">
          {{ content.title }}
        </h2>
        <RevealOnScroll :delay="160" class="mt-7 grid gap-4 border-l-4 border-primary bg-panel p-5 shadow-[5px_5px_0_rgba(214,94,132,0.42)]">
          <p class="m-0 text-[18px] font-black leading-tight text-text-main sm:text-[20px]">
            {{ content.ctaText }}
          </p>
          <BaseButton :href="content.ctaHref" class="w-full sm:w-fit">
            {{ content.ctaLabel }}
          </BaseButton>
        </RevealOnScroll>
      </div>

      <div>
        <ol class="grid gap-4 [counter-reset:steps] lg:grid-cols-2 xl:grid-cols-4 xl:gap-0">
          <RevealOnScroll
            v-for="(step, index) in content.steps"
            :key="step.label"
            :delay="index * 80"
            as="li"
            class="relative grid gap-4 border border-text-main/12 bg-panel p-5 [counter-increment:steps] lg:min-h-[220px] xl:min-h-[240px] xl:border-r-0 xl:last:border-r xl:after:absolute xl:after:left-[4.75rem] xl:after:top-[2.55rem] xl:after:hidden xl:after:h-px xl:after:w-[calc(100%-4.75rem)] xl:after:border-t xl:after:border-dashed xl:after:border-text-main/35 xl:after:content-[''] xl:[&:not(:last-child)::after]:block"
          >
            <span class="grid size-11 place-items-center bg-primary text-sm font-black text-white before:content-[counter(steps)]"></span>
            <div class="relative z-10">
              <h3 class="text-[20px] font-black leading-tight text-text-main sm:text-[22px]">
                {{ step.label }}
              </h3>
              <p class="mt-3 max-w-[46rem] text-[14px] leading-relaxed text-muted sm:text-[15px]">
                {{ step.text }}
              </p>
            </div>
          </RevealOnScroll>
        </ol>
      </div>
    </div>
  </section>
</template>
