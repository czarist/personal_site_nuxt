<template>
  <section class="border-t border-white/5 bg-bg py-16 md:py-20" data-aos="fade-up">
    <div class="mx-auto max-w-6xl px-4 pr-6">
      <header class="mb-8 md:mb-10">
        <h2 class="flex items-center gap-2 text-xl font-bold uppercase tracking-[0.08em] text-dark md:text-2xl">
          <i class="fas fa-language text-base text-accent" aria-hidden="true" />
          {{ heading }}
        </h2>
      </header>

      <ul class="grid gap-4 sm:grid-cols-3">
        <li
          v-for="item in items"
          :key="item.language"
          class="border border-white/10 bg-panel px-5 py-4"
          data-aos="fade-up"
        >
          <div class="flex items-baseline justify-between gap-2">
            <p class="text-sm font-bold uppercase tracking-wide text-dark">{{ item.language }}</p>
            <p class="font-mono text-xs text-accent">{{ item.level }}</p>
          </div>
          <div class="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
            <div
              class="h-full rounded-full bg-gradient-to-r from-accent to-accent2"
              :style="{ width: `${item.proficiency}%` }"
            />
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { LanguageItem } from '~/types/portfolio'

defineProps<{
  items: LanguageItem[]
  heading: string
}>()
</script>
