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
  <label :class="['grid gap-2 text-sm font-extrabold', tone === 'dark' ? 'text-white/80' : 'text-text-main']">
    <span>{{ label }}</span>
    <input
      :value="modelValue"
      type="text"
      :class="[
        'min-h-13 w-full border px-4 text-text-main transition placeholder:text-muted focus:bg-panel',
        tone === 'dark'
          ? 'border-white/40 bg-panel/90'
          : 'border-text-main/25 bg-surface-soft',
      ]"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </label>
</template>
