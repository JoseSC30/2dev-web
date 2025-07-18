# Etapa 1: Construcción
FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2: Ejecución
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3010

COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/package.json .
COPY --from=builder /app/node_modules node_modules

EXPOSE 3010

CMD ["npx", "next", "start", "-p", "3010"]
