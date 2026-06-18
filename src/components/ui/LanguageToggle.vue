<script setup lang="ts">
import type { Locale } from '@/types/site'

defineProps<{
  locale: Locale
}>()

const emit = defineEmits<{
  change: [locale: Locale]
}>()

const buttonClass = (isActive: boolean) => [
  'ui-font-family min-h-11 min-w-12 border-0 px-3 text-sm font-black leading-none transition duration-200',
  isActive
    ? 'focus-on-color bg-primary text-white'
    : 'bg-transparent text-primary underline-offset-4 hover:underline',
]
</script>

<template>
  <div class="flex items-center gap-1 border border-primary/20 bg-panel/90 p-1" aria-label="Language switcher">
    <button type="button" :class="buttonClass(locale === 'uk')" :aria-pressed="locale === 'uk'" aria-label="Українська" @click="emit('change', 'uk')">UA</button>
    <button type="button" :class="buttonClass(locale === 'en')" :aria-pressed="locale === 'en'" aria-label="English" @click="emit('change', 'en')">EN</button>
  </div>
</template>
