<template>
  <article class="relative flex gap-5 md:gap-7" data-aos="fade-up">
    <div class="flex w-14 shrink-0 flex-col items-center md:w-16">
      <div
        class="flex min-h-[6rem] w-9 items-center justify-center border border-accent/30 bg-panel px-1 py-3 font-mono text-[0.62rem] font-semibold tracking-wide text-accent md:w-10 md:text-[0.68rem]"
      >
        <span class="timeline-date whitespace-nowrap">{{ item.period }}</span>
      </div>
      <div class="w-px flex-1 bg-gradient-to-b from-accent/40 to-transparent" aria-hidden="true" />
    </div>

    <div class="min-w-0 flex-1 pb-10">
      <h3 class="text-sm font-bold uppercase tracking-wide text-dark md:text-base">
        {{ item.role }}
      </h3>
      <p class="mt-1 flex flex-wrap items-center gap-2 text-sm font-medium text-secondary">
        {{ item.company }}
        <span
          v-if="item.isCurrent"
          class="inline-flex items-center gap-1.5 border border-accent/40 bg-accent/10 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-accent"
        >
          <span class="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          {{ currentLabel }}
        </span>
      </p>
      <p class="mt-3 text-sm leading-relaxed text-secondary">
        {{ item.description }}
      </p>

      <ul v-if="item.highlights.length" class="mt-3 space-y-1.5">
        <li
          v-for="(highlight, index) in item.highlights"
          :key="`${item.company}-highlight-${index}`"
          class="flex gap-2 text-sm leading-relaxed text-secondary"
        >
          <i class="fas fa-angle-right mt-1 shrink-0 text-xs text-accent" aria-hidden="true" />
          <span>{{ highlight }}</span>
        </li>
      </ul>

      <ul class="mt-4 flex flex-wrap gap-2">
        <li
          v-for="(tech, index) in item.technologies"
          :key="`${item.company}-tech-${index}`"
          class="border border-white/10 bg-panel px-2.5 py-1 font-mono text-[0.68rem] text-secondary"
        >
          {{ tech }}
        </li>
      </ul>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { ExperienceItem } from '~/types/portfolio'

defineProps<{
  item: ExperienceItem
  currentLabel: string
}>()
</script>

<style scoped>
.timeline-date {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  letter-spacing: 0.04em;
}
</style>
