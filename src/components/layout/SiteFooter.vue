<script setup lang="ts">
import ContactChannelLink from '@/components/ui/ContactChannelLink.vue'
import SocialIconButton from '@/components/ui/SocialIconButton.vue'
import type { NavItem, SiteCopy } from '@/types/site'

defineProps<{
  content: SiteCopy['footer']
  navItems: NavItem[]
  channels: string[]
}>()
</script>

<template>
  <footer class="mx-auto mt-5 max-w-[1840px] bg-[#123b31] py-8 text-white sm:py-10">
    <div class="site-container grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)_minmax(0,1fr)]">
      <div>
        <a href="#top" class="inline-flex min-h-11 items-center text-[24px] font-black leading-none">
          Devaro <span class="ml-1 text-highlight">English</span>
        </a>
        <p class="mt-4 max-w-[360px] text-sm font-semibold leading-relaxed text-white/75">
          {{ content.text }}
        </p>
      </div>

      <nav aria-label="Footer navigation">
        <p class="mb-4 text-sm font-black leading-none text-white">
          {{ content.navTitle }}
        </p>
        <div class="grid gap-2">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="min-h-9 text-sm font-bold text-white/78 underline-offset-4 hover:text-white hover:underline"
          >
            {{ item.label }}
          </a>
        </div>
      </nav>

      <div>
        <p class="mb-4 text-sm font-black leading-none text-white">
          {{ content.contactTitle }}
        </p>
        <div class="flex flex-wrap gap-2">
          <ContactChannelLink v-for="channel in channels" :key="channel" :label="channel" />
        </div>
        <div class="mt-5 flex gap-2">
          <SocialIconButton label="Instagram" />
          <SocialIconButton label="Telegram" />
        </div>
      </div>
    </div>
    <div class="site-container mt-8 border-t border-white/18 pt-5 text-sm font-semibold text-white/65">
      {{ content.copyright }}
    </div>
  </footer>
</template>
