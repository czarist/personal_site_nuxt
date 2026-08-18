<script setup lang="ts">
import type { ContactItem } from '~/types/portfolio'
import { certificates } from '~/i18n/certificates'
import { techCategoriesBase } from '~/i18n/techCategories'

const { public: publicConfig } = useRuntimeConfig()
const { content } = useSiteContent()
const { detectLocale } = useLocale()

onMounted(() => {
  detectLocale()
})

const siteUrl = new URL('/', publicConfig.siteUrl).toString()
const ogImageUrl = new URL('/og-image.svg', siteUrl).toString()

useSeoMeta({
  title: publicConfig.siteName,
  description: publicConfig.siteDescription,
  ogTitle: publicConfig.siteName,
  ogDescription: publicConfig.siteDescription,
  ogType: 'website',
  ogUrl: siteUrl,
  ogImage: ogImageUrl,
  ogSiteName: publicConfig.siteName,
  twitterCard: 'summary_large_image',
  twitterTitle: publicConfig.siteName,
  twitterDescription: publicConfig.siteDescription,
  twitterImage: ogImageUrl,
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: siteUrl,
    },
  ],
})

const heroCtas = [
  {
    label: 'LinkedIn',
    href: publicConfig.linkedinUrl,
    icon: 'fab fa-linkedin',
    primary: true,
    external: true,
  },
  {
    label: 'GitHub',
    href: publicConfig.githubUrl,
    icon: 'fab fa-github',
    external: true,
  },
]

const contacts = computed<ContactItem[]>(() => [
  {
    label: content.value.contactLabels.location,
    value: content.value.locationValue,
    href: 'https://maps.google.com/?q=Novo+Hamburgo+Diehl+RS',
    icon: 'fas fa-map-marker-alt',
  },
  {
    label: content.value.contactLabels.linkedin,
    value: 'in/cezar-trentin',
    href: publicConfig.linkedinUrl,
    icon: 'fab fa-linkedin',
  },
  {
    label: content.value.contactLabels.github,
    value: 'github.com/czarist',
    href: publicConfig.githubUrl,
    icon: 'fab fa-github',
  },
  {
    label: content.value.contactLabels.website,
    value: 'cezartrentin.dev',
    href: 'https://cezartrentin.dev',
    icon: 'fas fa-globe',
  },
])

const techCategories = computed(() =>
  techCategoriesBase.map((category, index) => ({
    title: content.value.techCategoryTitles[index] ?? '',
    icon: category.icon,
    items: category.items,
  })),
)

const yearsExperience = new Date().getFullYear() - 2018
const totalTechnologies = techCategoriesBase.reduce((total, category) => total + category.items.length, 0)

const heroStats = computed(() => [
  { label: content.value.heroStatsLabels.years, value: yearsExperience, suffix: '+' },
  { label: content.value.heroStatsLabels.companies, value: content.value.experiences.length, suffix: '' },
  { label: content.value.heroStatsLabels.technologies, value: totalTechnologies, suffix: '+' },
])
</script>

<template>
  <div>
    <SiteHeader :navigation="content.navigation" />

    <main>
      <HeroSection
        name="Lucas Trentin"
        :title="content.hero.title"
        :badge="content.hero.badge"
        :about="content.hero.about"
        photo-src="/images/profile.png"
        :photo-alt="content.hero.photoAlt"
        :contacts="contacts"
        :ctas="heroCtas"
        :stats="heroStats"
      />

      <ExperienceSection
        :items="content.experiences"
        :eyebrow="content.experienceSection.eyebrow"
        :heading="content.experienceSection.heading"
        :subtitle="content.experienceSection.subtitle"
        :current-label="content.currentPositionLabel"
      />

      <div class="border-t border-white/5">
        <LanguagesSection :items="content.languages" :heading="content.languagesHeading" />
        <TechCarouselSection
          :categories="techCategories"
          :eyebrow="content.techSection.eyebrow"
          :heading="content.techSection.heading"
          :subtitle="content.techSection.subtitle"
        />
      </div>

      <EducationSection
        :items="content.education"
        :eyebrow="content.educationSection.eyebrow"
        :heading="content.educationSection.heading"
        :interrupted-label="content.interruptedLabel"
      />
      <CertificatesSection
        :items="certificates"
        :eyebrow="content.certificatesSection.eyebrow"
        :heading="content.certificatesSection.heading"
        :link-label="content.certificatesSection.linkLabel"
      />
    </main>

    <SiteFooter
      :linkedin-url="publicConfig.linkedinUrl"
      :github-url="publicConfig.githubUrl"
      :tagline="content.footerTagline"
    />
  </div>
</template>
