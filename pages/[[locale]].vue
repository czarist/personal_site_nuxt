<script setup lang="ts">
import type { ContactItem } from '~/types/portfolio'
import { certificates } from '~/i18n/certificates'
import { techCategoriesBase } from '~/i18n/techCategories'

definePageMeta({
  validate: (route) => route.params.locale === undefined || route.params.locale === 'en',
})

const { public: publicConfig } = useRuntimeConfig()
const { content } = useSiteContent()
const { locale } = useLocale()

const personName = 'Lucas Trentin'

const ptUrl = new URL('/', publicConfig.siteUrl).toString()
const enUrl = new URL('/en', publicConfig.siteUrl).toString()
const localizedSiteUrl = computed(() => (locale.value === 'en' ? enUrl : ptUrl))
const ogImageUrl = computed(() =>
  new URL(locale.value === 'en' ? '/og-image-en.svg' : '/og-image.svg', publicConfig.siteUrl).toString(),
)
const pageTitle = computed(() => `${personName} — ${content.value.hero.title}`)

const alumniInstitutions = computed(() => {
  const names = content.value.education.filter((item) => !item.interrupted).map((item) => item.institution)
  return Array.from(new Set(names))
})

useSeoMeta({
  title: pageTitle,
  description: () => content.value.hero.about,
  ogTitle: pageTitle,
  ogDescription: () => content.value.hero.about,
  ogUrl: localizedSiteUrl,
  ogImage: ogImageUrl,
  ogSiteName: pageTitle,
  twitterTitle: pageTitle,
  twitterDescription: () => content.value.hero.about,
  twitterImage: ogImageUrl,
})

useHead({
  htmlAttrs: {
    lang: () => (locale.value === 'en' ? 'en' : 'pt-BR'),
  },
  link: [
    { rel: 'canonical', href: localizedSiteUrl },
    { rel: 'alternate', hreflang: 'pt-BR', href: ptUrl },
    { rel: 'alternate', hreflang: 'en', href: enUrl },
    { rel: 'alternate', hreflang: 'x-default', href: ptUrl },
  ],
  meta: [
    { property: 'og:locale', content: () => (locale.value === 'en' ? 'en_US' : 'pt_BR') },
    { property: 'og:locale:alternate', content: () => (locale.value === 'en' ? 'pt_BR' : 'en_US') },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: () =>
        JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: personName,
          jobTitle: content.value.hero.title,
          description: content.value.hero.about,
          url: localizedSiteUrl.value,
          image: new URL('/images/profile.png', publicConfig.siteUrl).toString(),
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Novo Hamburgo',
            addressRegion: 'RS',
            addressCountry: 'BR',
          },
          sameAs: [publicConfig.linkedinUrl, publicConfig.githubUrl, publicConfig.siteUrl],
          knowsLanguage: ['pt', 'en', 'es'],
          alumniOf: alumniInstitutions.value.map((name) => ({
            '@type': 'CollegeOrUniversity',
            name,
          })),
        }),
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
