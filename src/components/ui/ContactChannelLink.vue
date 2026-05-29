<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <a
    href="#contact"
    class="rounded-xl border border-ink/10 bg-white px-4 py-2.5 text-sm font-black text-ink shadow-[0_12px_32px_rgba(33,48,45,0.06)] transition hover:border-forest/35"
  >
    {{ label }}
  </a>
</template>
