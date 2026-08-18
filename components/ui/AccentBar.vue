<template>
  <div class="fixed inset-x-0 top-0 z-[60] h-[3px] bg-white/5" aria-hidden="true">
    <div
      class="h-full bg-gradient-to-r from-accent to-accent2 transition-[width] duration-150 ease-out"
      :style="{ width: `${progress}%` }"
    />
  </div>
</template>

<script setup lang="ts">
const progress = ref(0)

function updateProgress() {
  const scrollTop = window.scrollY
  const height = document.documentElement.scrollHeight - window.innerHeight
  progress.value = height > 0 ? Math.min(100, (scrollTop / height) * 100) : 0
}

onMounted(() => {
  updateProgress()
  window.addEventListener('scroll', updateProgress, { passive: true })
  window.addEventListener('resize', updateProgress)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateProgress)
  window.removeEventListener('resize', updateProgress)
})
</script>
