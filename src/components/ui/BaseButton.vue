<script setup lang="ts">
withDefaults(
  defineProps<{
    href?: string
    type?: 'button' | 'submit' | 'reset'
    variant?: 'primary' | 'secondary'
  }>(),
  {
    type: 'button',
    variant: 'primary',
  },
)

const baseClass =
  'inline-flex min-h-13 items-center justify-center rounded-xl border px-6 text-sm font-black transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-honey'

const variants = {
  primary: 'border-forest bg-forest text-white shadow-[0_18px_48px_rgba(17,97,73,0.22)] hover:bg-[#178157]',
  secondary: 'border-ink/10 bg-white text-ink shadow-[0_16px_38px_rgba(33,48,45,0.08)] hover:border-forest/30',
}
</script>

<template>
  <a v-if="href" :href="href" :class="[baseClass, variants[variant]]">
    <slot />
  </a>
  <button v-else :type="type" :class="[baseClass, variants[variant]]">
    <slot />
  </button>
</template>
