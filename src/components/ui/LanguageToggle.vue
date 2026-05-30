<script setup lang="ts">
import type { Locale } from '@/types/site'

defineProps<{
  locale: Locale
}>()

const emit = defineEmits<{
  change: [locale: Locale]
}>()

const buttonClass = (isActive: boolean) => [
  'min-h-10 min-w-12 rounded-[15px] border-0 px-3 text-sm font-black transition duration-200',
  isActive
    ? 'bg-primary text-white'
    : 'bg-transparent text-primary hover:bg-primary/8',
]
</script>

<template>
  <div class="flex items-center gap-1 rounded-[20px] border border-primary/12 bg-panel/90 p-1" aria-label="Language switcher">
    <button type="button" :class="buttonClass(locale === 'uk')" @click="emit('change', 'uk')">UA</button>
    <button type="button" :class="buttonClass(locale === 'en')" @click="emit('change', 'en')">EN</button>
  </div>
</template>
