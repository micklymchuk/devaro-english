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
    class="sticky top-2 z-30 mx-auto max-w-[1840px] bg-panel/95 py-3 shadow-[0_4px_0_#d65e84] backdrop-blur-xl sm:top-3 sm:py-4 sm:shadow-[0_5px_0_#d65e84]"
  >
    <div class="site-container grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 lg:grid-cols-[auto_1fr_auto] lg:gap-8">
      <a class="flex min-h-11 items-center gap-2.5 font-extrabold" href="#top" aria-label="Fluyo School home">
        <span class="text-[25px] font-black leading-none tracking-normal text-text-main sm:text-[32px]">Fluyo <span class="text-primary">School</span></span>
      </a>

      <nav class="hidden justify-center gap-7 text-base font-extrabold text-muted xl:gap-9 lg:flex" aria-label="Main navigation">
        <a v-for="item in navItems" :key="item.href" :href="item.href" class="flex min-h-11 items-center underline-offset-6 decoration-primary decoration-2 transition hover:underline">{{ item.label }}</a>
      </nav>

      <div class="flex items-center gap-3">
        <LanguageToggle :locale="locale" @change="emit('changeLocale', $event)" />
        <div class="hidden items-center gap-2 lg:flex">
          <SocialIconButton label="Instagram" />
          <SocialIconButton label="Telegram" />
        </div>
      </div>
    </div>
  </header>
</template>
