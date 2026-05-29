<script setup lang="ts">
import type { Locale } from '@/types/site'

defineProps<{
  locale: Locale
}>()

const emit = defineEmits<{
  change: [locale: Locale]
}>()

const buttonClass = (isActive: boolean) => [
  'min-h-8 min-w-10 rounded-full border-0 px-3 text-sm font-black transition',
  isActive ? 'bg-ink text-honey' : 'bg-transparent text-muted hover:text-ink',
]
</script>

<template>
  <div class="flex items-center gap-1 rounded-full border border-ink/15 bg-panel p-1" aria-label="Language switcher">
    <button type="button" :class="buttonClass(locale === 'uk')" @click="emit('change', 'uk')">UA</button>
    <button type="button" :class="buttonClass(locale === 'en')" @click="emit('change', 'en')">EN</button>
  </div>
</template>
