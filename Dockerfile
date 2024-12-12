FROM node:18-alpine AS builder

WORKDIR /app

# Copia apenas os arquivos de package primeiro
COPY package*.json ./

# Limpa cache e instala dependências
RUN npm cache clean --force
RUN npm ci --verbose

# Copia o resto dos arquivos
COPY . .

ENV NEXT_PUBLIC_API_URL=https://service-789.nutre.ai

RUN npm run build

FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_PUBLIC_API_URL=https://service-789.nutre.ai

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3002
CMD ["npm", "start"]