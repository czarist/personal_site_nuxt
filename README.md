# Portfólio — Cezar Trentin

Site portfólio SPA em **Nuxt 4** + **Tailwind CSS**, baseado no currículo de Cezar Trentin (Engenheiro de Software).

## Stack

- Nuxt 4 (`ssr: false`)
- Tailwind CSS
- TypeScript
- AOS (animações de scroll em desktop)
- Nodemailer (formulário de contato opcional)

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Docker

```bash
# Dev
docker compose --profile dev up --build

# Prod
docker compose --profile prod up --build
```

## Variáveis de ambiente

Copie `.env.example` para `.env` e ajuste. SMTP é opcional: sem `NUXT_SMTP_HOST` o formulário responde com sucesso em modo degradado.

## Foto de perfil

Substitua `public/images/profile.svg` por uma foto real (`profile.jpg` ou `profile.png`) e atualize o `photo-src` em `pages/index.vue`.

## Estrutura

Ver `.grok/SPEC.md` para a especificação visual e de conteúdo completa.
