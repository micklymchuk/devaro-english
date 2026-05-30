<script setup lang="ts">
import { reactive } from 'vue'
import RevealOnScroll from '@/components/motion/RevealOnScroll.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import ContactChannelLink from '@/components/ui/ContactChannelLink.vue'
import type { SiteCopy } from '@/types/site'

defineProps<{
  content: SiteCopy['contact']
}>()

const form = reactive<Record<string, string>>({})
</script>

<template>
  <section
    id="contact"
    class="mx-auto mt-5 grid max-w-[1840px] items-start gap-10 rounded-[32px] border border-white/80 bg-surface px-[clamp(28px,4vw,62px)] py-[clamp(64px,8vw,110px)] lg:grid-cols-[minmax(0,0.85fr)_minmax(320px,0.65fr)]"
  >
    <RevealOnScroll>
      <p class="mb-5 w-fit rotate-[-2deg] rounded-lg bg-secondary px-4 py-2 text-sm font-black text-white">{{ content.eyebrow }}</p>
      <h2 class="mb-0 max-w-[780px] text-[clamp(2.2rem,4.8vw,4.4rem)] font-black leading-[0.98] tracking-tight">{{ content.title }}</h2>
      <p class="mt-7 max-w-[650px] text-lg leading-relaxed text-muted">{{ content.text }}</p>
      <div class="mt-6 flex flex-wrap items-center gap-2.5">
        <ContactChannelLink v-for="channel in content.channels" :key="channel" :label="channel" />
      </div>
    </RevealOnScroll>

    <RevealOnScroll :delay="140" direction="left">
    <BaseCard as="div" class="p-7">
      <form class="grid gap-4" aria-label="Contact request form">
        <BaseInput v-for="field in content.fields" :key="field" v-model="form[field]" :label="field" />
        <BaseButton type="button">{{ content.submitLabel }}</BaseButton>
      </form>
    </BaseCard>
    </RevealOnScroll>
  </section>
</template>
