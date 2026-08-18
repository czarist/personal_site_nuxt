<template>
  <section id="sobre" class="relative overflow-hidden border-b border-white/5 bg-bg">
    <div class="grid-fade pointer-events-none absolute inset-0 top-0 h-[36rem]" aria-hidden="true" />
    <div
      class="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-accent/20 blur-[120px]"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute -right-24 top-40 h-80 w-80 rounded-full bg-accent2/20 blur-[120px]"
      aria-hidden="true"
    />

    <div class="relative mx-auto max-w-6xl px-4 py-16 pr-6 md:py-24">
      <div class="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-14">
        <div class="text-center md:text-left" data-aos="fade-right">
          <span
            class="inline-flex items-center gap-2 border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[0.7rem] font-medium uppercase tracking-[0.2em] text-accent"
          >
            <span class="relative flex h-1.5 w-1.5">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span class="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            {{ badge }}
          </span>

          <h1
            class="mt-5 text-4xl font-extrabold uppercase leading-[1.05] tracking-[0.01em] text-dark md:text-6xl"
          >
            {{ name }}
          </h1>
          <p class="mt-3 text-base font-semibold uppercase tracking-[0.14em] text-gradient md:text-lg">
            {{ title }}
          </p>

          <p class="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-secondary md:mx-0 md:text-base">
            {{ about }}
          </p>

          <div class="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              v-for="cta in ctas"
              :key="cta.href"
              :href="cta.href"
              :target="cta.external ? '_blank' : undefined"
              :rel="cta.external ? 'noopener noreferrer' : undefined"
              class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold transition focus-ring"
              :class="
                cta.primary
                  ? 'bg-gradient-to-r from-accent to-accent2 text-bg hover:brightness-110'
                  : 'border border-white/15 text-dark hover:border-accent/50 hover:text-accent'
              "
            >
              <i :class="cta.icon" aria-hidden="true" />
              {{ cta.label }}
            </a>
          </div>

          <dl ref="statsRoot" class="mx-auto mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-white/5 pt-6 md:mx-0">
            <div v-for="(stat, index) in stats" :key="stat.label" class="text-center md:text-left">
              <dt class="sr-only">{{ stat.label }}</dt>
              <dd class="text-2xl font-extrabold tabular-nums text-dark md:text-3xl">
                {{ displayValues[index] }}{{ stat.suffix }}
              </dd>
              <dd class="mt-1 text-[0.7rem] font-medium uppercase tracking-wider text-secondary">
                {{ stat.label }}
              </dd>
            </div>
          </dl>
        </div>

        <div class="order-first mx-auto shrink-0 md:order-none md:mx-0" data-aos="fade-left">
          <div class="relative h-44 w-44 md:h-56 md:w-56">
            <div
              class="absolute inset-0 animate-[spin_10s_linear_infinite] rounded-full bg-gradient-to-tr from-accent via-accent2 to-accent opacity-70 blur-sm"
              aria-hidden="true"
            />
            <div class="absolute inset-[3px] rounded-full bg-bg" aria-hidden="true" />
            <img
              :src="photoSrc"
              :alt="photoAlt"
              width="224"
              height="224"
              class="absolute inset-[6px] aspect-square rounded-full object-cover"
            >
          </div>
        </div>
      </div>

      <div
        class="mt-14 grid gap-3 border-t border-white/5 pt-8 sm:grid-cols-2 lg:grid-cols-3"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <a
          v-for="contact in contacts"
          :key="contact.href"
          :href="contact.href"
          :target="contact.href.startsWith('http') ? '_blank' : undefined"
          :rel="contact.href.startsWith('http') ? 'noopener noreferrer' : undefined"
          class="group flex items-center gap-3 text-sm text-secondary transition hover:text-accent focus-ring"
        >
          <span
            class="inline-flex h-9 w-9 shrink-0 items-center justify-center border border-white/10 text-dark transition group-hover:border-accent/40 group-hover:text-accent"
          >
            <i :class="contact.icon" aria-hidden="true" />
          </span>
          <span>
            <span class="block text-[0.7rem] font-semibold uppercase tracking-wider text-secondary/70">
              {{ contact.label }}
            </span>
            <span class="text-dark/90 group-hover:text-accent">{{ contact.value }}</span>
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ContactItem } from '~/types/portfolio'

const props = defineProps<{
  name: string
  title: string
  badge: string
  about: string
  photoSrc: string
  photoAlt: string
  contacts: ContactItem[]
  ctas: Array<{
    label: string
    href: string
    icon: string
    primary?: boolean
    external?: boolean
  }>
  stats: Array<{ label: string; value: number; suffix?: string }>
}>()

const statsRoot = ref<HTMLElement | null>(null)
const displayValues = ref(props.stats.map(() => 0))

function animateStats() {
  const duration = 1400
  const targets = props.stats.map((stat) => stat.value)
  const start = performance.now()

  function tick(now: number) {
    const progress = Math.min((now - start) / duration, 1)
    const eased = 1 - (1 - progress) ** 3
    displayValues.value = targets.map((target) => Math.round(target * eased))
    if (progress < 1) {
      requestAnimationFrame(tick)
    }
  }

  requestAnimationFrame(tick)
}

onMounted(() => {
  if (!statsRoot.value) return

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting) {
        animateStats()
        observer.disconnect()
      }
    },
    { threshold: 0.3 },
  )
  observer.observe(statsRoot.value)
})
</script>
