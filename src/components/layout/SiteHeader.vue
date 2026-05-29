<script setup lang="ts">
import LanguageToggle from '@/components/ui/LanguageToggle.vue'
import type { Locale, NavItem } from '@/types/site'

defineProps<{
  locale: Locale
  navItems: NavItem[]
}>()

const emit = defineEmits<{
  changeLocale: [locale: Locale]
}>()
</script>

<template>
  <header
    class="sticky top-3 z-20 mx-auto grid max-w-[1840px] grid-cols-[1fr_auto] items-center gap-6 rounded-t-[28px] border-x border-t border-white/80 bg-[#f6f7f4]/95 px-[clamp(22px,4vw,62px)] py-6 backdrop-blur-xl lg:grid-cols-[auto_1fr_auto]"
  >
    <a class="flex items-center gap-2.5 font-extrabold" href="#top" aria-label="Devaro English home">
      <span class="text-[clamp(1.5rem,3vw,2.7rem)] font-black tracking-tight text-ink">Devaro <span class="text-forest">English</span></span>
    </a>

    <nav class="hidden justify-center gap-[clamp(14px,3vw,34px)] text-sm font-extrabold text-muted lg:flex" aria-label="Main navigation">
      <a v-for="item in navItems" :key="item.href" :href="item.href" class="transition hover:text-ink">{{ item.label }}</a>
    </nav>

    <div class="flex items-center gap-3">
      <LanguageToggle :locale="locale" @change="emit('changeLocale', $event)" />
      <div class="hidden items-center gap-2 lg:flex">
        <a class="grid size-12 place-items-center rounded-lg bg-forest text-sm font-black text-white shadow-[0_12px_26px_rgba(17,97,73,0.24)]" href="#contact">IG</a>
        <a class="grid size-12 place-items-center rounded-lg bg-forest text-sm font-black text-white shadow-[0_12px_26px_rgba(17,97,73,0.24)]" href="#contact">TG</a>
      </div>
    </div>
  </header>
</template>
