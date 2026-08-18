<template>
  <footer class="border-t border-white/5 bg-bg" data-aos="fade-up">
    <div class="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 pr-6 md:flex-row md:items-center md:justify-between">
      <div class="text-sm text-secondary">
        © {{ currentYear }}
        <span class="font-medium text-dark">Lucas Cezar Trentin</span>
        — {{ tagline }}
      </div>

      <div class="flex flex-wrap gap-3 text-lg text-secondary">
        <a
          :href="linkedinUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="flex h-10 w-10 items-center justify-center border border-white/10 transition hover:border-accent/50 hover:text-accent focus-ring"
          title="LinkedIn"
          aria-label="LinkedIn"
        >
          <i class="fab fa-linkedin" aria-hidden="true" />
        </a>
        <a
          :href="githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="flex h-10 w-10 items-center justify-center border border-white/10 transition hover:border-accent/50 hover:text-accent focus-ring"
          title="GitHub"
          aria-label="GitHub"
        >
          <i class="fab fa-github" aria-hidden="true" />
        </a>
        <a
          href="https://cezartrentin.dev"
          target="_blank"
          rel="noopener noreferrer"
          class="flex h-10 w-10 items-center justify-center border border-white/10 transition hover:border-accent/50 hover:text-accent focus-ring"
          title="Website"
          aria-label="Website"
        >
          <i class="fas fa-globe" aria-hidden="true" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{
  linkedinUrl: string
  githubUrl: string
  tagline: string
}>()

const currentYear = new Date().getFullYear()
</script>
