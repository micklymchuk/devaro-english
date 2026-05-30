<script setup lang="ts">
import { computed } from 'vue'
import { Instagram, Telegram } from '@iconoir/vue'
import InteractivePaint from '@/components/ui/InteractivePaint.vue'

const props = defineProps<{
  label: 'Instagram' | 'Telegram'
  href?: string
}>()

const icon = computed(() => (props.label === 'Instagram' ? Instagram : Telegram))
</script>

<template>
  <InteractivePaint
    as="a"
    :href="href ?? '#contact'"
    :aria-label="label"
    class="grid size-12 place-items-center rounded-[18px] bg-primary text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
  >
    <component :is="icon" :width="24" :height="24" stroke-width="2.4" aria-hidden="true" />
  </InteractivePaint>
</template>
