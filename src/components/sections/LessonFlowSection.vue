<script setup lang="ts">
import RevealOnScroll from '@/components/motion/RevealOnScroll.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import type { SiteCopy } from '@/types/site'

defineProps<{
  content: SiteCopy['lessonFlow']
}>()
</script>

<template>
  <section id="lesson-flow" class="relative mx-auto mt-5 max-w-[1840px] overflow-hidden bg-panel px-[clamp(24px,4vw,62px)] py-[clamp(50px,8vw,78px)] lg:py-[clamp(74px,8vw,112px)]">
    <div class="grid gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-center lg:gap-14 xl:gap-20">
      <RevealOnScroll class="relative max-w-[700px] lg:max-w-[590px]" direction="left">
        <p class="collage-badge mb-5 rotate-[-2deg]">{{ content.eyebrow }}</p>
        <h2 class="collage-heading">
          {{ content.title }}
        </h2>
        <p class="mt-7 max-w-[35rem] text-[1.03rem] font-bold leading-[1.85] text-muted sm:text-[1.08rem]">
          {{ content.text }}
        </p>

        <div class="mt-8 flex flex-col items-start gap-4 lg:flex-row lg:items-center">
          <p class="m-0 max-w-[18rem] text-[1.05rem] font-black leading-tight text-text-main">
            {{ content.ctaText }}
          </p>
          <BaseButton :href="content.ctaHref" variant="primary">
            {{ content.ctaLabel }}
          </BaseButton>
        </div>

        <div
          aria-hidden="true"
          class="grid-fragment absolute -bottom-12 left-[-12%] hidden h-24 w-64 opacity-[0.08] md:block lg:left-[-8%]"
        ></div>
      </RevealOnScroll>

      <ol class="relative grid gap-0">
        <RevealOnScroll
          v-for="(step, index) in content.steps"
          :key="step.label"
          :delay="index * 80"
          as="li"
          direction="right"
          class="relative grid grid-cols-[48px_minmax(0,1fr)] items-start gap-5 border-b border-text-main/10 py-6 last:border-b-0 sm:grid-cols-[56px_minmax(0,1fr)] sm:gap-6 sm:py-7 lg:py-8"
        >
          <span
            v-if="index < content.steps.length - 1"
            aria-hidden="true"
            class="pointer-events-none absolute bottom-[-1.5rem] left-6 top-12 w-px bg-text-main/10 sm:bottom-[-1.75rem] sm:left-7"
          ></span>
          <div class="relative flex justify-center">
            <span
              class="relative z-10 grid size-11 place-items-center rounded-full bg-text-main text-sm font-black text-white sm:size-12"
            >
              {{ index + 1 }}
            </span>
          </div>

          <div class="min-w-0 pt-1">
            <h3 class="text-[1.28rem] font-black leading-tight text-text-main sm:text-[1.5rem] lg:text-[1.68rem]">
              {{ step.label }}
            </h3>
            <p class="mt-2 max-w-[46rem] text-[0.98rem] font-semibold leading-relaxed text-muted sm:text-[1.05rem]">
              {{ step.text }}
            </p>
          </div>
        </RevealOnScroll>
      </ol>
    </div>
  </section>
</template>
