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
    class="sticky top-2 z-30 mx-auto grid max-w-[1840px] grid-cols-[1fr_auto] items-center gap-3 bg-panel/95 px-[clamp(14px,4vw,62px)] py-3 shadow-[0_4px_0_#d65e84] backdrop-blur-xl sm:top-3 sm:gap-6 sm:py-5 sm:shadow-[0_5px_0_#d65e84] lg:grid-cols-[auto_1fr_auto]"
  >
    <a class="flex items-center gap-2.5 font-extrabold" href="#top" aria-label="Devaro English home">
      <span class="text-[clamp(1.3rem,7vw,2rem)] font-black tracking-tight text-text-main sm:text-[clamp(1.5rem,3vw,2.7rem)]">Devaro <span class="text-primary">English</span></span>
    </a>

    <nav class="hidden justify-center gap-[clamp(14px,3vw,34px)] text-sm font-extrabold text-muted lg:flex" aria-label="Main navigation">
      <a v-for="item in navItems" :key="item.href" :href="item.href" class="underline-offset-6 decoration-primary decoration-2 transition hover:underline">{{ item.label }}</a>
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
