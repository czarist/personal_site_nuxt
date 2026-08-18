<template>
  <section id="certificados" class="relative overflow-hidden border-t border-white/5 bg-bg py-16 md:py-24" data-aos="fade-up">
    <div class="mx-auto max-w-6xl px-4 pr-6">
      <header class="mb-10 text-center md:mb-14 md:text-left">
        <p class="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-accent">{{ eyebrow }}</p>
        <h2 class="mt-3 text-2xl font-extrabold uppercase tracking-[0.04em] text-dark md:text-3xl">
          {{ heading }}
        </h2>
      </header>

      <div class="grid gap-4 sm:grid-cols-2">
        <a
          v-for="(item, index) in items"
          :key="`${item.title}-${index}`"
          :href="item.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative overflow-hidden border border-white/10 bg-panel p-5 transition hover:border-accent/40 focus-ring"
          data-aos="fade-up"
          :data-aos-delay="index * 50"
        >
          <i
            class="fas fa-certificate absolute -right-3 -top-3 text-5xl text-white/5 transition group-hover:text-accent/10"
            aria-hidden="true"
          />
          <h3 class="relative text-sm font-bold uppercase tracking-wide text-dark group-hover:text-accent md:text-base">
            {{ item.title }}
          </h3>
          <p class="relative mt-2 text-sm text-secondary">{{ item.institution }}</p>
          <p class="relative mt-3 text-xs font-medium text-accent">
            {{ linkLabel }}
            <i class="fas fa-arrow-up-right-from-square ml-1" aria-hidden="true" />
          </p>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { CertificateItem } from '~/types/portfolio'

defineProps<{
  items: CertificateItem[]
  eyebrow: string
  heading: string
  linkLabel: string
}>()
</script>
