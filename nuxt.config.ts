import { defineNuxtConfig } from 'nuxt/config'

const siteName = process.env.NUXT_PUBLIC_SITE_NAME ?? 'Lucas Trentin — Engenheiro de Software'
const siteDescription =
  process.env.NUXT_PUBLIC_SITE_DESCRIPTION ??
  'Engenheiro de Software Full Stack com experiência sólida em PHP (Laravel), Java (Spring Boot) e Python (FastAPI/Flask), além de front-end moderno com Vue.js e React. Docker, CI/CD, bancos relacionais e integração com APIs de IA.'
const siteUrl = process.env.NUXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
const linkedinUrl =
  process.env.NUXT_PUBLIC_LINKEDIN_URL ?? 'https://linkedin.com/in/cezar-trentin'
const githubUrl = process.env.NUXT_PUBLIC_GITHUB_URL ?? 'https://github.com/czarist'

export default defineNuxtConfig({
  ssr: false,
  devtools: {
    enabled: true,
  },
  routeRules: {
    '/**': {
      headers: {
        'X-Frame-Options': 'SAMEORIGIN',
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
      },
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint'],
  components: {
    dirs: [
      {
        path: '~/components',
        pathPrefix: false,
      },
    ],
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: siteName,
      htmlAttrs: {
        lang: 'pt-BR',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0A0A0B' },
        { name: 'description', content: siteDescription },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: siteUrl },
        { property: 'og:title', content: siteName },
        { property: 'og:description', content: siteDescription },
        { property: 'og:image', content: `${siteUrl}/og-image.svg` },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:locale', content: 'pt_BR' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: siteName },
        { name: 'twitter:description', content: siteDescription },
        { name: 'twitter:image', content: `${siteUrl}/og-image.svg` },
        { name: 'robots', content: 'index, follow' },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Lucas Trentin',
            jobTitle: 'Engenheiro de Software',
            url: siteUrl,
            image: `${siteUrl}/images/profile.png`,
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Novo Hamburgo',
              addressRegion: 'RS',
              addressCountry: 'BR',
            },
            sameAs: [linkedinUrl, githubUrl, siteUrl],
            knowsLanguage: ['pt', 'en', 'es'],
            alumniOf: [
              {
                '@type': 'CollegeOrUniversity',
                name: 'Faculdade Metropolitana do Estado de São Paulo (FAMEESP)',
              },
              {
                '@type': 'CollegeOrUniversity',
                name: 'Universidade Norte do Paraná (UNOPAR)',
              },
              {
                '@type': 'CollegeOrUniversity',
                name: 'Centro Universitário Internacional de Curitiba (UNINTER)',
              },
            ],
          }),
        },
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/devicon.min.css',
        },
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg',
        },
        {
          rel: 'apple-touch-icon',
          href: '/favicon.svg',
        },
      ],
      bodyAttrs: {
        class: 'bg-bg text-dark',
      },
    },
  },
  runtimeConfig: {
    public: {
      siteName,
      siteDescription,
      siteUrl,
      linkedinUrl,
      githubUrl,
    },
  },
})
