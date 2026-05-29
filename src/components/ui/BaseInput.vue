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
        'min-h-13 w-full rounded-lg px-4 text-ink outline-none transition focus:ring-2',
        tone === 'dark'
          ? 'border border-white/12 bg-white/90 focus:border-honey focus:ring-honey/25'
          : 'border border-ink/15 bg-[#fbfaf7] focus:border-forest focus:ring-forest/20',
      ]"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </label>
</template>
