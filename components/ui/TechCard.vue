<template>
  <div
    class="group flex shrink-0 items-center gap-3 border border-white/10 bg-panel px-5 py-3.5 transition duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-white/[0.04] hover:shadow-[0_0_24px_-6px_rgba(34,211,238,0.35)]"
  >
    <i :class="item.icon" class="text-xl text-white/80 transition group-hover:text-accent" aria-hidden="true" />
    <span class="whitespace-nowrap text-sm font-medium text-secondary transition group-hover:text-dark">
      {{ item.name }}
    </span>
  </div>
</template>

<script setup lang="ts">
import type { TechItem } from '~/types/portfolio'

defineProps<{
  item: TechItem
}>()
</script>
