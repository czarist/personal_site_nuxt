<template>
  <div class="min-h-screen bg-bg flex flex-col items-center justify-center px-4 text-center">
    <div class="max-w-md w-full">
      <div class="mb-8">
        <span class="text-8xl font-bold text-accent/20 select-none">
          {{ error.statusCode }}
        </span>
      </div>

      <h1 class="text-2xl font-bold text-dark mb-3">
        {{ error.statusCode === 404 ? 'Página não encontrada' : 'Algo deu errado' }}
      </h1>

      <p class="text-secondary mb-8 leading-relaxed">
        {{
          error.statusCode === 404
            ? 'A página que você tentou acessar não existe ou foi removida.'
            : 'Ocorreu um erro inesperado. Tente novamente em instantes.'
        }}
      </p>

      <button
        type="button"
        class="px-6 py-3 rounded-photo bg-gradient-to-r from-accent to-accent2 text-bg font-semibold hover:brightness-110 transition focus-ring"
        @click="handleError"
      >
        <i class="fas fa-house mr-2" aria-hidden="true" />Voltar ao início
      </button>
    </div>

    <footer class="absolute bottom-6 text-sm text-secondary/60">Lucas Cezar Trentin</footer>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  error: {
    statusCode: number
    statusMessage: string
    message: string
  }
}>()

function handleError() {
  clearError({ redirect: '/' })
}
</script>
