<template>
  <button
    v-if="mobileMenuOpen"
    type="button"
    class="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm md:hidden"
    aria-label="Fechar menu"
    @click="closeMenu"
  />

  <header class="glass sticky top-0 z-40 border-b border-white/5">
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 pr-6">
      <a href="/" class="group flex items-center gap-2.5 focus-ring" aria-label="Início" @click.prevent="scrollHome">
        <span
          class="inline-flex h-9 w-9 items-center justify-center bg-gradient-to-br from-accent to-accent2 text-xs font-extrabold text-bg"
        >
          LT
        </span>
      </a>

      <nav class="hidden items-center gap-1 text-sm font-medium md:flex" aria-label="Menu principal" role="navigation">
        <a
          v-for="link in navigation"
          :key="link.anchor"
          :href="link.anchor"
          class="rounded-full px-3.5 py-2 text-secondary transition hover:text-dark focus-ring"
          :class="[
            link.cta
              ? '!ml-2 bg-gradient-to-r from-accent to-accent2 !text-bg hover:brightness-110'
              : '',
            activeAnchor === link.anchor && !link.cta ? 'bg-white/5 text-dark' : '',
          ]"
          :aria-current="activeAnchor === link.anchor ? 'page' : undefined"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="ml-2 hidden items-center gap-0.5 rounded-full border border-white/10 p-0.5 md:flex">
        <button
          type="button"
          class="rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wider transition focus-ring"
          :class="locale === 'pt' ? 'bg-gradient-to-r from-accent to-accent2 text-bg' : 'text-secondary hover:text-dark'"
          :aria-pressed="locale === 'pt'"
          @click="setLocale('pt')"
        >
          PT
        </button>
        <button
          type="button"
          class="rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wider transition focus-ring"
          :class="locale === 'en' ? 'bg-gradient-to-r from-accent to-accent2 text-bg' : 'text-secondary hover:text-dark'"
          :aria-pressed="locale === 'en'"
          @click="setLocale('en')"
        >
          EN
        </button>
      </div>

      <button
        type="button"
        class="ml-2 border border-white/10 p-2 text-dark focus-ring md:hidden"
        aria-controls="mobile-menu"
        :aria-expanded="mobileMenuOpen"
        :aria-label="mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'"
        @click="toggleMenu"
      >
        <i :class="mobileMenuOpen ? 'fas fa-xmark' : 'fas fa-bars'" aria-hidden="true" />
      </button>
    </div>

    <div
      v-show="mobileMenuOpen"
      id="mobile-menu"
      class="glass border-t border-white/5 md:hidden"
    >
      <nav class="mx-auto grid max-w-6xl gap-1 px-4 py-3" aria-label="Menu móvel" role="navigation">
        <a
          v-for="link in navigation"
          :key="link.anchor"
          :href="link.anchor"
          class="rounded-photo py-2.5 text-sm font-medium text-secondary transition focus-ring"
          :class="
            link.cta
              ? 'bg-gradient-to-r from-accent to-accent2 text-center font-semibold text-bg hover:brightness-110'
              : 'hover:text-accent'
          "
          @click="closeMenu"
        >
          <i v-if="link.icon" :class="link.icon" class="mr-2" aria-hidden="true" />
          {{ link.label }}
        </a>

        <div class="mt-2 flex items-center gap-0.5 self-start rounded-full border border-white/10 p-0.5">
          <button
            type="button"
            class="rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition focus-ring"
            :class="locale === 'pt' ? 'bg-gradient-to-r from-accent to-accent2 text-bg' : 'text-secondary hover:text-dark'"
            :aria-pressed="locale === 'pt'"
            @click="setLocale('pt')"
          >
            PT
          </button>
          <button
            type="button"
            class="rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition focus-ring"
            :class="locale === 'en' ? 'bg-gradient-to-r from-accent to-accent2 text-bg' : 'text-secondary hover:text-dark'"
            :aria-pressed="locale === 'en'"
            @click="setLocale('en')"
          >
            EN
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import type { NavigationItem } from '~/types/portfolio'

defineProps<{
  navigation: NavigationItem[]
}>()

const { locale, setLocale } = useLocale()

const mobileMenuOpen = ref(false)
const activeAnchor = ref('')

function closeMenu() {
  mobileMenuOpen.value = false
}

function toggleMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

function scrollHome() {
  closeMenu()
  window.history.pushState({}, '', '/')
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function updateActiveAnchor() {
  const sections = document.querySelectorAll('section[id]')
  let current = ''

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect()
    if (rect.top <= 100) {
      current = `#${section.id}`
    }
  })

  activeAnchor.value = current
}

onMounted(() => {
  updateActiveAnchor()
  window.addEventListener('scroll', updateActiveAnchor, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveAnchor)
})
</script>
