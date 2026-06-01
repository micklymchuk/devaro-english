<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <a
    href="#contact"
    class="printed-shadow inline-flex min-h-11 items-center border-2 border-text-main bg-panel px-4 py-2.5 text-sm font-black text-text-main transition hover:text-primary"
  >
    {{ label }}
  </a>
</template>
