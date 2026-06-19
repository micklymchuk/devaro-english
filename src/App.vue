<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import { IconoirProvider } from '@iconoir/vue'
import SiteHeader from '@/components/layout/SiteHeader.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import LessonFlowSection from '@/components/sections/LessonFlowSection.vue'
import PricingSection from '@/components/sections/PricingSection.vue'
import ProgramsSection from '@/components/sections/ProgramsSection.vue'
import SocialProofSection from '@/components/sections/SocialProofSection.vue'
import StatsBand from '@/components/sections/StatsBand.vue'
import TeachersSection from '@/components/sections/TeachersSection.vue'
import { heroImage, siteContent } from '@/data/siteContent'
import type { Locale } from '@/types/site'

const locale = ref<Locale>('uk')
const content = computed(() => siteContent[locale.value])

watchEffect(() => {
  if (typeof document !== 'undefined') document.documentElement.lang = locale.value
})

const changeLocale = (nextLocale: Locale) => {
  if (Object.hasOwn(siteContent, nextLocale)) locale.value = nextLocale
}

const iconProps = {}
</script>

<template>
  <IconoirProvider :icon-props="iconProps">
    <main class="min-h-screen overflow-hidden bg-page p-3 text-text-main sm:p-5">
      <SiteHeader
        :locale="locale"
        :nav-items="content.nav"
        @change-locale="changeLocale"
      />
      <HeroSection :content="content.hero" :image="heroImage" />
      <StatsBand :stats="content.stats" />
      <ProgramsSection :content="content.programs" />
      <LessonFlowSection :content="content.lessonFlow" />
      <TeachersSection :content="content.teachers" />
      <PricingSection :content="content.pricing" />
      <SocialProofSection :content="content.social" />
      <ContactSection :content="content.contact" />
    </main>
  </IconoirProvider>
</template>
