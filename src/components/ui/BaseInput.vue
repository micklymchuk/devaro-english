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
        'min-h-13 w-full border px-4 text-text-main transition',
        tone === 'dark'
          ? 'border-white/40 bg-panel/90'
          : 'border-text-muted bg-surface-soft',
      ]"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </label>
</template>
