<script setup lang="ts">
import LanguageToggle from '@/components/ui/LanguageToggle.vue'
import SocialIconButton from '@/components/ui/SocialIconButton.vue'
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
    class="sticky top-3 z-20 mx-auto grid max-w-[1840px] grid-cols-[1fr_auto] items-center gap-6 rounded-t-[28px] border-x border-t border-white/80 bg-surface/95 px-[clamp(22px,4vw,62px)] py-6 backdrop-blur-xl lg:grid-cols-[auto_1fr_auto]"
  >
    <a class="flex items-center gap-2.5 font-extrabold" href="#top" aria-label="Devaro English home">
      <span class="text-[clamp(1.5rem,3vw,2.7rem)] font-black tracking-tight text-text-main">Devaro <span class="text-primary">English</span></span>
    </a>

    <nav class="hidden justify-center gap-[clamp(14px,3vw,34px)] text-sm font-extrabold text-muted lg:flex" aria-label="Main navigation">
      <a v-for="item in navItems" :key="item.href" :href="item.href" class="transition hover:text-text-main">{{ item.label }}</a>
    </nav>

    <div class="flex items-center gap-3">
      <LanguageToggle :locale="locale" @change="emit('changeLocale', $event)" />
      <div class="hidden items-center gap-2 lg:flex">
        <SocialIconButton label="Instagram" />
        <SocialIconButton label="Telegram" />
      </div>
    </div>
  </header>
</template>
