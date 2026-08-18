FROM node:22-alpine AS base
WORKDIR /app
ENV NUXT_TELEMETRY_DISABLED=1

FROM base AS deps
COPY package.json package-lock.json* ./
RUN npm ci

FROM base AS build
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS dev
ENV NODE_ENV=development
COPY package.json package-lock.json* ./
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "3000"]

FROM base AS prod
ENV NODE_ENV=production
RUN addgroup -S nuxt && adduser -S nuxt -G nuxt
COPY --from=build --chown=nuxt:nuxt /app/.output ./.output
COPY --from=build --chown=nuxt:nuxt /app/public ./public
USER nuxt
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
