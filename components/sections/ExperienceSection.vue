<template>
  <section id="experiencia" class="relative bg-bg py-16 md:py-24" data-aos="fade-up">
    <div class="mx-auto max-w-6xl px-4 pr-6">
      <header class="mb-10 md:mb-14">
        <p class="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-accent">{{ eyebrow }}</p>
        <h2 class="mt-3 text-2xl font-extrabold uppercase tracking-[0.04em] text-dark md:text-3xl">
          {{ heading }}
        </h2>
        <p class="mt-3 max-w-2xl text-sm leading-relaxed text-secondary md:text-[0.95rem]">
          {{ subtitle }}
        </p>
      </header>

      <div class="max-w-3xl">
        <TimelineItem
          v-for="(item, index) in items"
          :key="`${item.company}-${index}`"
          :item="item"
          :current-label="currentLabel"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ExperienceItem } from '~/types/portfolio'

defineProps<{
  items: ExperienceItem[]
  eyebrow: string
  heading: string
  subtitle: string
  currentLabel: string
}>()
</script>
