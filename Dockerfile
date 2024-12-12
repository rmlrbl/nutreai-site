FROM node:18.19.0-alpine AS builder

WORKDIR /app

# Adiciona dependências necessárias
RUN apk add --no-cache libc6-compat

# Copia arquivos de package
COPY package*.json ./

# Instala dependências
RUN npm ci

# Copia resto dos arquivos
COPY . .

# Define variável de ambiente
ENV NEXT_PUBLIC_API_URL=https://service-789.nutre.ai
ENV PORT=3002

# Build
RUN npm run build

# Imagem de produção
FROM node:18.19.0-alpine

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_PUBLIC_API_URL=https://service-789.nutre.ai
ENV PORT=3002

# Copia arquivos necessários
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3002

CMD ["npm", "start"]