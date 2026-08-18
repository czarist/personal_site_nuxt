<template>
  <section id="formacao" class="border-t border-white/5 bg-bg py-16 md:py-24" data-aos="fade-up">
    <div class="mx-auto max-w-6xl px-4 pr-6">
      <header class="mb-10 md:mb-14">
        <p class="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-accent">{{ eyebrow }}</p>
        <h2 class="mt-3 text-2xl font-extrabold uppercase tracking-[0.04em] text-dark md:text-3xl">
          {{ heading }}
        </h2>
      </header>

      <ol class="relative max-w-2xl space-y-7 border-l border-white/10 pl-7">
        <li
          v-for="(item, index) in items"
          :key="`${item.degree}-${index}`"
          class="relative"
          data-aos="fade-up"
          :data-aos-delay="index * 50"
        >
          <span
            class="absolute -left-[2.05rem] top-1 h-3 w-3 rounded-full border-2 border-bg bg-accent shadow-[0_0_0_3px_rgba(34,211,238,0.15)]"
            aria-hidden="true"
          />
          <h3 class="text-sm font-bold uppercase tracking-wide text-dark md:text-base">
            {{ item.degree }}
          </h3>
          <p class="mt-1 text-sm text-secondary">{{ item.institution }}</p>
          <p class="mt-1.5 font-mono text-xs font-medium uppercase tracking-wider text-secondary/70">
            {{ item.start }} — {{ item.interrupted ? interruptedLabel : item.end }}
          </p>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { EducationItem } from '~/types/portfolio'

defineProps<{
  items: EducationItem[]
  eyebrow: string
  heading: string
  interruptedLabel: string
}>()
</script>
