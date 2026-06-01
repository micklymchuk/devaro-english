<script setup lang="ts">
import { reactive } from 'vue'
import RevealOnScroll from '@/components/motion/RevealOnScroll.vue'
import DecorativeStickerField, { type StickerPlacement } from '@/components/motion/DecorativeStickerField.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import ContactChannelLink from '@/components/ui/ContactChannelLink.vue'
import type { SiteCopy } from '@/types/site'

defineProps<{
  content: SiteCopy['contact']
}>()

const form = reactive<Record<string, string>>({})

const stickers: StickerPlacement[] = [
  { src: '/stickers/globe.png', bottom: '2%', left: '3%', width: 'clamp(76px, 8vw, 130px)', rotate: -8, hideBelow: 'md' },
]
</script>

<template>
  <section
    id="contact"
    class="collage-section grid items-start gap-10 overflow-hidden lg:grid-cols-[minmax(0,0.85fr)_minmax(320px,0.65fr)]"
  >
    <DecorativeStickerField :stickers="stickers" />
    <RevealOnScroll class="relative z-10">
      <p class="collage-badge mb-5 rotate-[-2deg]">{{ content.eyebrow }}</p>
      <h2 class="collage-heading mb-0 max-w-[780px]">{{ content.title }}</h2>
      <p class="mt-7 max-w-[650px] text-lg leading-relaxed text-muted">{{ content.text }}</p>
      <div class="mt-6 flex flex-wrap items-center gap-2.5">
        <ContactChannelLink v-for="channel in content.channels" :key="channel" :label="channel" />
      </div>
    </RevealOnScroll>

    <RevealOnScroll :delay="140" direction="left" class="relative z-10">
    <BaseCard as="div" class="p-7">
      <form class="grid gap-4" aria-label="Contact request form">
        <BaseInput v-for="field in content.fields" :key="field" v-model="form[field]" :label="field" />
        <BaseButton type="button">{{ content.submitLabel }}</BaseButton>
      </form>
    </BaseCard>
    </RevealOnScroll>
  </section>
</template>
