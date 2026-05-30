<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <a
    href="#contact"
    class="rounded-xl border border-text-main/10 bg-panel px-4 py-2.5 text-sm font-black text-text-main transition hover:border-primary/35"
  >
    {{ label }}
  </a>
</template>
