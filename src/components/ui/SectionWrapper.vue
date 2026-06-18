<script setup lang="ts">
withDefaults(
  defineProps<{
    id?: string
    contentClass?: string
  }>(),
  {
    contentClass: '',
  },
)

const sectionClass =
  'relative mx-auto mt-5 max-w-[1840px] overflow-hidden bg-panel px-[clamp(24px,4vw,62px)] py-[clamp(44px,7vw,64px)] lg:py-[clamp(52px,5vw,76px)]'
</script>

<template>
  <section :id="id" :class="sectionClass">
    <slot name="decor" />
    <div :class="['relative z-10', contentClass]">
      <slot />
    </div>
  </section>
</template>
