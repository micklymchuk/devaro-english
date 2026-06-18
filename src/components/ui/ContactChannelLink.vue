<script setup lang="ts">
import { computed } from 'vue'
import { Instagram, Mail, Phone, Telegram } from '@iconoir/vue'

const props = defineProps<{
  label: string
}>()

const icon = computed(() => {
  const normalized = props.label.toLowerCase()
  if (normalized.includes('telegram')) return Telegram
  if (normalized.includes('instagram')) return Instagram
  if (normalized.includes('phone') || normalized.includes('телефон')) return Phone
  return Mail
})
</script>

<template>
  <a
    href="#contact"
    class="printed-shadow inline-flex min-h-11 items-center gap-2 border-2 border-text-main bg-panel px-4 py-2.5 text-sm font-black text-text-main transition hover:text-primary"
  >
    <component :is="icon" :width="18" :height="18" stroke-width="2.2" aria-hidden="true" />
    {{ label }}
  </a>
</template>
