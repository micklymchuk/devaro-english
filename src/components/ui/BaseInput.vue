<script setup lang="ts">
withDefaults(
  defineProps<{
    label: string
    modelValue?: string
    tone?: 'light' | 'dark'
  }>(),
  {
    tone: 'light',
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <label :class="['grid gap-2 text-sm font-extrabold', tone === 'dark' ? 'text-white/72' : 'text-muted']">
    <span>{{ label }}</span>
    <input
      :value="modelValue"
      type="text"
      :class="[
        'min-h-13 w-full rounded-lg px-4 text-text-main outline-none transition focus:ring-2',
        tone === 'dark'
          ? 'border border-white/12 bg-panel/90 focus:border-highlight focus:ring-highlight/25'
          : 'border border-text-main/15 bg-surface-soft focus:border-primary focus:ring-primary/20',
      ]"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </label>
</template>
