<script setup lang="ts">
import { ref } from 'vue'
import { Menu, Xmark } from '@iconoir/vue'
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

const isMenuOpen = ref(false)

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header
    class="sticky top-2 z-30 mx-auto max-w-[1840px] border-b-2 border-highlight bg-panel py-3 shadow-[0_4px_0_rgba(214,94,132,0.34)] sm:top-3 sm:py-4"
  >
    <div class="site-container grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 lg:grid-cols-[auto_1fr_auto] lg:gap-8">
      <a class="flex min-h-11 items-center gap-2.5 font-extrabold" href="#top" aria-label="Devaro English home" @click="closeMenu">
        <span class="text-[22px] font-black leading-none tracking-normal text-text-main sm:text-[28px]">
          Devaro <span class="text-primary">English</span>
        </span>
      </a>

      <nav class="hidden justify-center gap-6 text-[15px] font-extrabold text-text-main xl:gap-8 lg:flex" aria-label="Main navigation">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="flex min-h-11 items-center underline-offset-6 decoration-primary decoration-2 transition hover:text-primary hover:underline"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="flex items-center gap-3">
        <LanguageToggle :locale="locale" @change="emit('changeLocale', $event)" />
        <div class="hidden items-center gap-2 lg:flex">
          <SocialIconButton label="Instagram" />
          <SocialIconButton label="Telegram" />
        </div>
        <button
          type="button"
          class="grid size-11 place-items-center border-2 border-text-main bg-panel text-text-main lg:hidden"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-menu"
          aria-label="Toggle navigation"
          @click="isMenuOpen = !isMenuOpen"
        >
          <Xmark v-if="isMenuOpen" :width="23" :height="23" stroke-width="2.4" aria-hidden="true" />
          <Menu v-else :width="23" :height="23" stroke-width="2.4" aria-hidden="true" />
        </button>
      </div>
    </div>

    <div
      v-if="isMenuOpen"
      id="mobile-menu"
      class="site-container mt-3 border-t border-text-main/15 pt-3 lg:hidden"
    >
      <nav class="grid gap-1 text-[15px] font-extrabold" aria-label="Mobile navigation">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="flex min-h-11 items-center border-b border-text-main/10 py-2 underline-offset-6 decoration-primary decoration-2 hover:text-primary hover:underline"
          @click="closeMenu"
        >
          {{ item.label }}
        </a>
      </nav>
      <div class="mt-3 flex items-center gap-2">
        <SocialIconButton label="Instagram" />
        <SocialIconButton label="Telegram" />
      </div>
    </div>
  </header>
</template>
