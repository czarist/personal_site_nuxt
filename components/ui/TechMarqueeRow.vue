<template>
  <div class="relative overflow-hidden py-2">
    <div class="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-bg to-transparent md:w-24" aria-hidden="true" />
    <div class="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-bg to-transparent md:w-24" aria-hidden="true" />

    <div
      class="marquee-row flex w-max animate-marquee gap-3"
      :style="{ animationDuration: `${duration}s`, animationDirection: reverse ? 'reverse' : 'normal' }"
    >
      <TechCard v-for="(item, index) in loopedItems" :key="`${item.name}-${index}`" :item="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TechItem } from '~/types/portfolio'

const props = withDefaults(
  defineProps<{
    items: TechItem[]
    reverse?: boolean
    secondsPerItem?: number
  }>(),
  {
    reverse: false,
    secondsPerItem: 3.2,
  },
)

const MIN_STRIP_ITEMS = 9

const filledItems = computed(() => {
  const base: TechItem[] = []
  while (base.length < MIN_STRIP_ITEMS) {
    base.push(...props.items)
  }
  return base
})

const loopedItems = computed(() => [...filledItems.value, ...filledItems.value])
const duration = computed(() => filledItems.value.length * props.secondsPerItem)
</script>
