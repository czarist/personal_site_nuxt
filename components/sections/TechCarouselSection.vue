<template>
  <section id="skills" class="border-t border-white/5 bg-bg py-16 md:py-24" data-aos="fade-up">
    <div class="mx-auto max-w-6xl px-4 pr-6">
      <header class="mb-10 text-center md:mb-14">
        <p class="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-accent">{{ eyebrow }}</p>
        <h2 class="mt-3 text-2xl font-extrabold uppercase tracking-[0.04em] text-dark md:text-3xl">
          {{ heading }}
        </h2>
        <p class="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-secondary md:text-[0.95rem]">
          {{ subtitle }}
        </p>
      </header>
    </div>

    <div class="flex flex-col gap-8 md:gap-10">
      <div
        v-for="(category, index) in categories"
        :key="category.title"
        class="flex flex-col gap-3"
        data-aos="fade-up"
        :data-aos-delay="index * 60"
      >
        <div class="mx-auto flex w-full max-w-6xl items-center gap-2 px-4 pr-6">
          <i :class="category.icon" class="text-sm text-accent" aria-hidden="true" />
          <h3 class="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            {{ category.title }}
          </h3>
          <div class="h-px flex-1 bg-white/5" aria-hidden="true" />
        </div>

        <TechMarqueeRow :items="category.items" :reverse="index % 2 === 1" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { TechCategory } from '~/types/portfolio'

defineProps<{
  categories: TechCategory[]
  eyebrow: string
  heading: string
  subtitle: string
}>()
</script>
