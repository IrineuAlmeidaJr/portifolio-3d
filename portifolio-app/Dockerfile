# Dockerfile para Portfolio 3D - Next.js com Three.js
FROM node:18-alpine AS base

# Instalar dependências necessárias para o sistema
RUN apk add --no-cache libc6-compat

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos de dependências
COPY package.json package-lock.json* ./

# Stage de dependências
FROM base AS deps
RUN npm ci --only=production && npm cache clean --force

# Stage de build
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build da aplicação
RUN npm run build

# Stage de produção
FROM node:18-alpine AS runner
WORKDIR /app

# Criar usuário não-root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copiar arquivos necessários
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Definir usuário
USER nextjs

# Expor porta
EXPOSE 3000

# Variáveis de ambiente
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Comando para iniciar a aplicação
CMD ["node", "server.js"] 